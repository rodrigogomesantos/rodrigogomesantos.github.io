module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint-config-airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 8,
  },
  rules: {
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'graphql/template-strings': [
    //   'error',
    //   {
    //     // Import default settings for your GraphQL client. Supported values:
    //     // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
    //     env: 'literal',

    //     // Import your schema JSON here
    //     // schemaJson: require('./schema.json'),

    //     // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
    //     // schemaJsonFilepath: path.resolve(__dirname, '../backend/src/graphql'),

    //     // OR provide the schema in the Schema Language format
    //     // schemaString: printSchema(schema),

    //     // tagName is gql by default
    //   },
    // ],
  },
  // plugins: ['graphql'],
};
