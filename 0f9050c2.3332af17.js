(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(4),i=t(9),l=(t(0),t(320)),p={},r={unversionedId:"generated-config/typescript-type-graphql",id:"generated-config/typescript-type-graphql",isDocsHomePage:!1,title:"typescript-type-graphql",description:"Installation",source:"@site/docs/generated-config/typescript-type-graphql.md",permalink:"/docs/generated-config/typescript-type-graphql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-type-graphql.md"},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>decoratorName</code>",id:"decoratorname",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>constEnums</code>",id:"constenums",children:[]},{value:"<code>enumsAsTypes</code>",id:"enumsastypes",children:[]},{value:"<code>numericEnums</code>",id:"numericenums",children:[]},{value:"<code>futureProofEnums</code>",id:"futureproofenums",children:[]},{value:"<code>enumsAsConst</code>",id:"enumsasconst",children:[]},{value:"<code>onlyOperationTypes</code>",id:"onlyoperationtypes",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>maybeValue</code>",id:"maybevalue",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>declarationKind</code>",id:"declarationkind",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>fieldWrapperValue</code>",id:"fieldwrappervalue",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={rightToc:o};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("img",{alt:"typescript-type-graphql plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-type-graphql?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(l.b)("div",{className:"admonition admonition-shell"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(l.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-type-graphql\n")))),Object(l.b)("h2",{id:"api-reference"},"API Reference"),Object(l.b)("h3",{id:"decoratorname"},Object(l.b)("inlineCode",{parentName:"h3"},"decoratorName")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"Partial")),Object(l.b)("h3",{id:"avoidoptionals"},Object(l.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"This will cause the generator to avoid using TypeScript optionals (",Object(l.b)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",Object(l.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(l.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(l.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(l.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-definition-types"},"Override all definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),Object(l.b)("h5",{id:"override-only-specific-definition-types"},"Override only specific definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n")),Object(l.b)("h3",{id:"constenums"},Object(l.b)("inlineCode",{parentName:"h3"},"constEnums")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Will prefix every generated ",Object(l.b)("inlineCode",{parentName:"p"},"enum")," with ",Object(l.b)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums here: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html"}),"https://www.typescriptlang.org/docs/handbook/enums.html"),"."),Object(l.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),Object(l.b)("h3",{id:"enumsastypes"},Object(l.b)("inlineCode",{parentName:"h3"},"enumsAsTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Generates enum as TypeScript ",Object(l.b)("inlineCode",{parentName:"p"},"type")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to generate ",Object(l.b)("inlineCode",{parentName:"p"},".d.ts")," declaration file instead of ",Object(l.b)("inlineCode",{parentName:"p"},".ts")),Object(l.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),Object(l.b)("h3",{id:"numericenums"},Object(l.b)("inlineCode",{parentName:"h3"},"numericEnums")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Controls whether to preserve typescript enum values as numbers"),Object(l.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   numericEnums: true\n")),Object(l.b)("h3",{id:"futureproofenums"},Object(l.b)("inlineCode",{parentName:"h3"},"futureProofEnums")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set ",Object(l.b)("inlineCode",{parentName:"p"},"enumsAsTypes")," to true if you wish to use this option.\nThis is useful if you are using ",Object(l.b)("inlineCode",{parentName:"p"},"relay"),"."),Object(l.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n   futureProofEnums: true\n")),Object(l.b)("h3",{id:"enumsasconst"},Object(l.b)("inlineCode",{parentName:"h3"},"enumsAsConst")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Generates enum as TypeScript ",Object(l.b)("inlineCode",{parentName:"p"},"const assertions")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),Object(l.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),Object(l.b)("h3",{id:"onlyoperationtypes"},Object(l.b)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars).\nInteracts well with ",Object(l.b)("inlineCode",{parentName:"p"},"preResolveTypes: true")),Object(l.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(l.b)("p",null,"Override all definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\nplugins:\n- typescript\nconfig:\nonlyOperationTypes: true\n")),Object(l.b)("h3",{id:"immutabletypes"},Object(l.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Generates immutable types by adding ",Object(l.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(l.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(l.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),Object(l.b)("h3",{id:"maybevalue"},Object(l.b)("inlineCode",{parentName:"h3"},"maybeValue")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"T | null")),Object(l.b)("p",null,"Allow to override the type value of ",Object(l.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(l.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(l.b)("h5",{id:"allow-undefined"},"Allow undefined"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),Object(l.b)("h5",{id:"allow-null-in-resolvers"},"Allow ",Object(l.b)("inlineCode",{parentName:"h5"},"null")," in resolvers:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolves\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),Object(l.b)("h3",{id:"noexport"},Object(l.b)("inlineCode",{parentName:"h3"},"noExport")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set the to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(l.b)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",Object(l.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(l.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(l.b)("h5",{id:"disable-all-export-from-a-file"},"Disable all export from a file"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(l.b)("h3",{id:"addunderscoretoargstype"},Object(l.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Adds ",Object(l.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(l.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(l.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(l.b)("h5",{id:"with-custom-values"},"With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(l.b)("h3",{id:"enumvalues"},Object(l.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(l.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",Object(l.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(l.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(l.b)("h5",{id:"with-custom-values-1"},"With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(l.b)("h5",{id:"with-external-enum"},"With External Enum"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(l.b)("h5",{id:"import-all-enums-from-a-file"},"Import All Enums from a file"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(l.b)("h3",{id:"declarationkind"},Object(l.b)("inlineCode",{parentName:"h3"},"declarationKind")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),Object(l.b)("p",null,"Overrides the default output for various GraphQL elements."),Object(l.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-declarations"},"Override all declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(l.b)("h5",{id:"override-only-specific-declarations"},"Override only specific declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(l.b)("h3",{id:"enumprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"true")),Object(l.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(l.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(l.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(l.b)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(l.b)("h3",{id:"fieldwrappervalue"},Object(l.b)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"T")),Object(l.b)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(l.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(l.b)("h4",{id:"usage-examples-14"},"Usage Examples"),Object(l.b)("h5",{id:"allow-promise"},"Allow Promise"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(l.b)("h3",{id:"wrapfielddefinitions"},Object(l.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set the to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(l.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),Object(l.b)("h4",{id:"usage-examples-15"},"Usage Examples"),Object(l.b)("h5",{id:"enable-wrapping-fields"},"Enable wrapping fields"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(l.b)("h3",{id:"scalars"},Object(l.b)("inlineCode",{parentName:"h3"},"scalars")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(l.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(l.b)("h4",{id:"usage-examples-16"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(l.b)("h3",{id:"namingconvention"},Object(l.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(l.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(l.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(l.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(l.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(l.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(l.b)("h4",{id:"usage-examples-17"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-names"},"Override All Names"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(l.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(l.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(l.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(l.b)("h3",{id:"typesprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Prefixes all the generated types."),Object(l.b)("h4",{id:"usage-examples-18"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(l.b)("h3",{id:"typessuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Suffixes all the generated types."),Object(l.b)("h4",{id:"usage-examples-19"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(l.b)("h3",{id:"skiptypename"},Object(l.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(l.b)("h4",{id:"usage-examples-20"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(l.b)("h3",{id:"nonoptionaltypename"},Object(l.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Automatically adds ",Object(l.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(l.b)("h4",{id:"usage-examples-21"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(l.b)("h3",{id:"usetypeimports"},Object(l.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Will use ",Object(l.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(l.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},320:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return t?i.a.createElement(m,r(r({ref:n},c),{},{components:t})):i.a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,p[1]=r;for(var c=2;c<l;c++)p[c]=t[c];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);