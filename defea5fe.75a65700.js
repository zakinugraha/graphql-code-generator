(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{295:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(4),p=a(9),r=(a(0),a(320)),i={id:"typescript-type-graphql",title:"TypeScript TypeGraphQL"},b={unversionedId:"plugins/typescript-type-graphql",id:"plugins/typescript-type-graphql",isDocsHomePage:!1,title:"TypeScript TypeGraphQL",description:"This plugin is similar to the basic TypeScript plugin. However, this package generates types that can be used by TypeGraphQL to generate a GraphQL schema. This is especially useful if you are building a service that is a gateway to multiple downstream GraphQL services, or otherwise combining GraphQL schemas. In this case, this plugin can be used to re-expose types defined in downstream GraphQL services without redefining them as TypeGraphQL objects. This plugin should be compatible with other client-side plugins, such as typescript-operations.",source:"@site/docs/plugins/typescript-type-graphql.md",permalink:"/docs/plugins/typescript-type-graphql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-type-graphql.md",sidebar:"sidebar",previous:{title:"Named Operations Object",permalink:"/docs/plugins/named-operations-object"},next:{title:"Typescript Apollo Nextjs",permalink:"/docs/plugins/typescript-apollo-next"}},c=[],o={rightToc:c};function s(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin is similar to the basic TypeScript plugin. However, this package generates types that can be used by TypeGraphQL to generate a GraphQL schema. This is especially useful if you are building a service that is a gateway to multiple downstream GraphQL services, or otherwise combining GraphQL schemas. In this case, this plugin can be used to re-expose types defined in downstream GraphQL services without redefining them as TypeGraphQL objects. This plugin should be compatible with other client-side plugins, such as typescript-operations."),Object(r.b)("p",null,"Some differences with the the types generated by the basic TypeScript plugin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"classes are generated instead of interfaces"),Object(r.b)("li",{parentName:"ul"},"TypeGraphQL decorators like @ObjectType and @Field will be added")),Object(r.b)("p",null,Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript-type-graphql plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-type-graphql?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-type-graphql\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"decoratorName")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"Partial")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",Object(r.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(r.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(r.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),Object(r.b)("h5",{parentName:"p"},"Override only specific definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"constEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will prefix every generated ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," with ",Object(r.b)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums here: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html"}),"https://www.typescriptlang.org/docs/handbook/enums.html"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumsAsTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"type")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to generate ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," declaration file instead of ",Object(r.b)("inlineCode",{parentName:"p"},".ts")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"numericEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Controls whether to preserve typescript enum values as numbers"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   numericEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"futureProofEnums")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set ",Object(r.b)("inlineCode",{parentName:"p"},"enumsAsTypes")," to true if you wish to use this option.\nThis is useful if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"relay"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n   futureProofEnums: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumsAsConst")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates enum as TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"const assertions")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to emit types for operations only (basically only enums and scalars).\nInteracts well with ",Object(r.b)("inlineCode",{parentName:"p"},"preResolveTypes: true")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("p",{parentName:"p"},"Override all definition types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\nplugins:\n- typescript\nconfig:\nonlyOperationTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates immutable types by adding ",Object(r.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(r.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"maybeValue")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"T | null")),Object(r.b)("p",{parentName:"p"},"Allow to override the type value of ",Object(r.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Allow undefined"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),Object(r.b)("h5",{parentName:"p"},"Allow ",Object(r.b)("inlineCode",{parentName:"h5"},"null")," in resolvers:"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolves\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(r.b)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",Object(r.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable all export from a file"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",{parentName:"p"},"Adds ",Object(r.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(r.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"With Custom Values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(r.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",Object(r.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"With Custom Values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(r.b)("h5",{parentName:"p"},"With External Enum"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(r.b)("h5",{parentName:"p"},"Import All Enums from a file"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"declarationKind")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),Object(r.b)("p",{parentName:"p"},"Overrides the default output for various GraphQL elements."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override all declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(r.b)("h5",{parentName:"p"},"Override only specific declarations"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable enum prefixes"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"T")),Object(r.b)("p",{parentName:"p"},"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(r.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Allow Promise"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set the to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(r.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Enable wrapping fields"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')))}s.isMDXComponent=!0},320:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),p=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=p.a.createContext({}),s=function(e){var t=p.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=s(e.components);return p.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),l=s(a),d=n,O=l["".concat(i,".").concat(d)]||l[d]||m[d]||r;return a?p.a.createElement(O,b(b({ref:t},o),{},{components:a})):p.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<r;o++)i[o]=a[o];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);