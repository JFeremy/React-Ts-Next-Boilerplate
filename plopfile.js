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
          path: 'public/locales/components/{{camelCase name}}.component.ts',
          templateFile: 'plop-templates/Component/translation.ts.hbs',
        });
        actions.push({
          type: 'append',
          path: 'public/locales/components/index.ts',
          pattern: `/* PLOP-INJECT_IMPORT_LANG_COMPONENT */`,
          template: `{{#if hasTranslation}}import { {{camelCase name}} } from './{{camelCase name}}.component';{{/if}}`,
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

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Page/Page.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: 'plop-templates/Page/Page.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/Page/Page.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Page/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}.js',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });
};
