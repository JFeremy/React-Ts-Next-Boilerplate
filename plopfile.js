const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setGenerator('✏️  Component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name ? ',
        validate: requireField('name'),
      },
      {
        type: 'confirm',
        name: 'hasTranslation',
        message: 'Component required a dedicated translation ? ',
      },
      {
        type: 'confirm',
        name: 'hasBehavior',
        message: 'Component required a dedicated behavior ? ',
      },
      {
        type: 'confirm',
        name: 'isClient',
        message: 'Is a client Component ? ',
      },
    ],
    actions: (data) => {
      let actions = [
        {
          type: 'add',
          path: 'src/components/{{dashCase name}}/index.tsx',
          templateFile: 'plop-templates/Component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{dashCase name}}/__tests__/index.test.tsx',
          templateFile: 'plop-templates/Component/component.test.tsx.hbs',
        },
      ];

      if (data.hasBehavior) {
        actions.push({
          type: 'add',
          path: 'src/components/{{dashCase name}}/behavior.tsx',
          templateFile: 'plop-templates/Component/behavior.tsx.hbs',
        });
        actions.push({
          type: 'add',
          path: 'src/components/{{dashCase name}}/__tests__/behavior.test.tsx',
          templateFile: 'plop-templates/Component/behavior.test.tsx.hbs',
        });
      }

      if (data.hasTranslation) {
        actions.push({
          type: 'add',
          path: 'public/locales/components/{{dashCase name}}.component.ts',
          templateFile: 'plop-templates/Component/translation.ts.hbs',
        });
        actions.push({
          type: 'append',
          path: 'public/locales/components/index.ts',
          pattern: `/* PLOP-INJECT_IMPORT_LANG_COMPONENT */`,
          template: `{{#if hasTranslation}}import { {{camelCase name}} } from './{{dashCase name}}.component';{{/if}}`,
        });
        actions.push({
          type: 'append',
          path: 'public/locales/components/index.ts',
          pattern: `/* PLOP-INJECT_EXPORT_LANG_COMPONENT */`,
          template: `{{#if hasTranslation}}\t{{camelCase name}},{{/if}}`,
        });
      }

      return actions;
    },
  });

  plop.setGenerator('🎨  UI', {
    description: 'Create a reusable UI element',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'UI element name ? ',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/{{dashCase name}}/index.tsx',
        templateFile: 'plop-templates/UI/ui.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/ui/{{dashCase name}}/design.tsx',
        templateFile: 'plop-templates/UI/design.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('📃  Page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name ?',
        validate: requireField('name'),
      },
      {
        type: 'input',
        name: 'path',
        message: 'Page path after [lang] ?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/[lang]/{{path}}{{dashCase name}}/page.tsx',
        templateFile: 'plop-templates/Page/page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/[lang]/{{path}}{{dashCase name}}/__tests__/page.test.tsx',
        templateFile: 'plop-templates/Page/page.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'public/locales/pages/{{dashCase name}}.page.ts',
        templateFile: 'plop-templates/Page/translation-page.ts.hbs',
      },
      {
        type: 'append',
        path: 'public/locales/pages/index.ts',
        pattern: `/* PLOP-INJECT_IMPORT_LANG_PAGE */`,
        template: `import { {{camelCase name}} } from './{{dashCase name}}.page';`,
      },
      {
        type: 'append',
        path: 'public/locales/pages/index.ts',
        pattern: `/* PLOP-INJECT_EXPORT_LANG_PAGE */`,
        template: `\t{{camelCase name}},`,
      },
      {
        type: 'add',
        path: 'public/locales/metadatas/{{dashCase name}}.metadata.ts',
        templateFile: 'plop-templates/Page/translation-metadata.ts.hbs',
      },
      {
        type: 'append',
        path: 'public/locales/metadatas/index.ts',
        pattern: `/* PLOP-INJECT_IMPORT_LANG_METADATA */`,
        template: `import { {{camelCase name}} } from './{{dashCase name}}.metadata';`,
      },
      {
        type: 'append',
        path: 'public/locales/metadatas/index.ts',
        pattern: `/* PLOP-INJECT_EXPORT_LANG_METADATA */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });
};
