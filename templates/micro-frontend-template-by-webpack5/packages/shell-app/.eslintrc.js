/*
 * @Description: 
 * @Author: yuqing.hao
 * @Date: 2020-03-10 10:03:01
 * @LastEditTime: 2020-11-18 15:12:11
 * @LastEditors: yanpin
 */
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "extends": [
    'plugin:react/recommended',
    'airbnb',
  ],
  "globals": {
    "Atomics": 'readonly',
    "SharedArrayBuffer": 'readonly',
  },
  "plugins": [
    'react',
    'import'
  ],
  "settings": {
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  "rules": {
    // 强制使用一致的换行风格
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['off', 'windows'],
    // 强制使用一致的缩进
    // https://eslint.org/docs/rules/indent
    "indent": ['error', 'tab', {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    // 强制使用一致的缩进
    "react/jsx-indent": [2, "tab"],
    // 强制使用一致的缩进
    "react/jsx-indent-props": [2, "tab"],
    // 禁用行尾空格
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,//允许在空行使用空白符
      ignoreComments: false,//禁止在注释块中使用空白符
    }],
    // 禁止函数圆括号之前有一个空格
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // 强制驼峰
    "camelcase": ['error', { properties: 'never', ignoreDestructuring: false }],
    // 禁止使用特定的语法（不强制）
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ["error", "WithStatement", "BinaryExpression[operator='in']"],
    // 优先结构
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    // 强制一行的最大长度 170 字符
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 170, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // 禁止混合使用不同的操作符
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false
    }],
    // 强制要求末尾逗号
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // 禁止三元嵌套
    'no-nested-ternary': 'error',
    // 要求文件末尾存在空行
    'eol-last': ['warn', 'always'],
    // 操作符前换行
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    // 禁止未使用过的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // 强制在函数中一起声明变量
    'one-var': ['error', 'never'],
    // 不允许下划线
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],
    // 强制在大括号中使用一致的空格
    // require padding inside curly braces
    'object-curly-spacing': ['error', 'never'],
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 不禁用 tab
    'no-tabs': 0,
    // 禁止在变量定义之前使用它们
   'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    // 禁止命名的 function 表达式
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',
    // 如果模块中只有一个导出，则最好使用默认导出而不是命名导出
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',
    // 确保导入指向可以解析的文件/模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['\Config$'] }],
    // 要求使用 === 和 !==
    // https://eslint.org/docs/rules/eqeqeq
    "eqeqeq": ['error', 'always', { null: 'ignore' }],
    // only .jsx files may have JSX
    // 限制可能包含JSX的文件扩展名，js/jsx
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: [".js",'.jsx'] }],
    // Enforce JSX indentation(common\CommonSelect)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 'tab'],
    // 防止在键中使用数组索引
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',
    // 强制任何JSX属性不扩散禁用{...props}
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
      exceptions: ["MyCustomComponent", "img"] ,
    }],
    // 禁用一元操作符++ and -- 
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',
    // 强制数组方法的回调函数中有 return 语句
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['warn', { allowImplicit: true }],
    // 要求 return 语句要么总是指定返回的值
    'consistent-return': 'warn',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
    // img元素必须具有alt
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['error', {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    }],
    // 不强制没有语义行为的DOM元素没有交互处理程序 
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': ['warn', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],
    // 不强制onClick随附onKeyUp / onKeyDown / onKeyPress
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'warn',
    // 强制在 JSX 属性中一致地使用双引号
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],
    // 禁止使用按位操作符
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',
    // 不禁用特定的全局变量
    'no-restricted-globals': ['warn', 'isFinite'],
    // 建议使用剩余参数代替 arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // 禁止对函数参数再赋值
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ]
    }],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'error',
    // 禁用 console
    'no-console': 'warn',
    // 强制类方法使用 this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],
    // 	禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],
    // 禁止 case 语句落空 
    'no-fallthrough': 'error',
    // 强制使用一致的用法来分解
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],
    // JSX防止重复属性
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // JSX在JSX中禁止未声明的变量
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',
    // disallow use of undefined when initializing variables禁止将变量初始化为 undefined
    'no-undef-init': 'error',
    // 禁止将 undefined 作为标识符
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',
    // 要求 switch 语句中有 default 分支
    'default-case': ['error', { commentPattern: '^no default$' }],
    // 确保<a>标签有效 href属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    // 对React片段强制执行简写形式或标准形式(不强制)
    // https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['warn', 'syntax'],
    // 强制执行组件方法顺序(不强制)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': ['warn', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
    }],
    // 要求箭头函数的参数使用圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],
    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['warn', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],
    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: [],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    // 不使用括号将其省略
    // https://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', { "requireReturnForObjectLiteral": true } ],
  },
};
