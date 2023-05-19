const Main = ({
  title = "NextJS boilerplate",
  description = "A simple project starter to work with TypeScript, React, NextJS and Styled Components",
}) => (
  <div>
    <img
      src="/images/logo-iceberg.svg"
      width="200"
      alt="Iceberg NextJS Boilerplate text and Iceberg Icon"
    />
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default Main;
