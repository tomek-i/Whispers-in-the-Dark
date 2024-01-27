module.exports = async function (plop) {
  plop.setDefaultInclude({ generators: true })
  plop.setGenerator("context", {
    description: "⚛ react context",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "context name",
      },
    ],
    actions: [
      {
        type: "append",
        path: "src/context/index.ts",
        templateFile: ".templates/react/context/templates/index.hbs",
      },
      {
        type: "add",
        path: "src/context/{{pascalCase name}}.tsx",
        templateFile: ".templates/react/context/templates/context.hbs",
      },
      {
        type: "append",
        path: "src/hooks/index.ts",
        templateFile: ".templates/react/hooks/templates/index.hbs",
      },
      {
        type: "add",
        path: "src/hooks/use{{pascalCase name}}/index.ts",
        templateFile: ".templates/react/hooks/templates/index.hbs",
      },
      {
        type: "add",
        path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.ts",
        templateFile: ".templates/react/hooks/templates/hook.hbs",
      },
      {
        type: "add",
        path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
        templateFile: ".templates/react/hooks/templates/test.hbs",
      },
    ],
  })
  plop.setGenerator("hook", {
    description: "⚛ react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "hook name",
      },
    ],
    actions: [
      {
        type: "append",
        path: "src/hooks/index.ts",
        templateFile: ".templates/react/hooks/templates/hooks.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/index.ts",
        templateFile: ".templates/react/hooks/templates/index.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: ".templates/react/hooks/templates/hook.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts",
        templateFile: ".templates/react/hooks/templates/test.hbs",
      },
    ],
  })
  plop.setGenerator("component", {
    description: "⚛ react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: ".templates/react/component/templates/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: ".templates/react/component/templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: ".templates/react/component/templates/test.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.variants.ts",
        templateFile: ".templates/react/component/templates/variants.hbs",
      },
    ],
  })
}
