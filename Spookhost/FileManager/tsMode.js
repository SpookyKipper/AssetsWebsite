/*Spooky Kipper Injection for Spookhost */
document.title = "Spookhost File Manager";
console.log('Spookhost File Manager Loaded');
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 3.2.0(f5602dc25acf6ce6f56dd4cc6211dc6aff131db0)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/typescript/workerManager",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=monaco.Promise,n=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=this._defaults.getWorkerMaxIdleTime(),t=Date.now()-this._lastUsedTime;0<e&&e<t&&this._stopWorker()}},e.prototype._getClient=function(){var t=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(function(e){return t._worker.withSyncedResources(monaco.editor.getModels().filter(function(e){return e.getModeId()===t._modeId}).map(function(e){return e.uri}))})),this._client=e}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var t,e,n,r,o,i=this,a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return e=this._getClient().then(function(e){t=e}).then(function(e){return i._worker.withSyncedResources(a)}).then(function(e){return t}),o=new u(function(e,t){n=e,r=t},function(){}),e.then(n,r),o},e}();t.WorkerManager=n});var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();define("vs/language/typescript/languageFeatures",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,s=monaco.Uri,u=monaco.Promise;function c(e){return e?e.map(function(e){return e.text}).join(""):""}(r=n||(n={}))[r.None=0]="None",r[r.Block=1]="Block",r[r.Smart=2]="Smart";var o=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),r=this._offsetToPosition(e,t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),i=function(n){function e(e,r,t){var o=n.call(this,t)||this;o._defaults=e,o._selector=r,o._disposables=[],o._listener=Object.create(null);var i=function(e){if(e.getModeId()===r){var t,n=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return o._doValidate(e.uri)},500)});o._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},o._doValidate(e.uri)}},a=function(e){monaco.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};return o._disposables.push(monaco.editor.onDidCreateModel(i)),o._disposables.push(monaco.editor.onWillDisposeModel(a)),o._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),i(e.model)})),o._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}}),o._disposables.push(o._defaults.onDidChange(function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}})),monaco.editor.getModels().forEach(i),o}return __extends(e,n),e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(i){var a=this;this._worker(i).then(function(e){if(!monaco.editor.getModel(i))return null;var t=[],n=a._defaults.getDiagnosticsOptions(),r=n.noSyntaxValidation,o=n.noSemanticValidation;return r||t.push(e.getSyntacticDiagnostics(i.toString())),o||t.push(e.getSemanticDiagnostics(i.toString())),u.join(t)}).then(function(e){if(!e||!monaco.editor.getModel(i))return null;var t=e.reduce(function(e,t){return t.concat(e)},[]).map(function(e){return a._convertDiagnostics(i,e)});monaco.editor.setModelMarkers(monaco.editor.getModel(i),a._selector,t)}).done(void 0,function(e){console.error(e)})},e.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),r=n.lineNumber,o=n.column,i=this._offsetToPosition(e,t.start+t.length),a=i.lineNumber,s=i.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:r,startColumn:o,endLineNumber:a,endColumn:s,message:function(e,t){if("string"==typeof e)return e;for(var n=e,r="",o=0;n;){if(o){r+=t;for(var i=0;i<o;i++)r+="  "}r+=n.messageText,o++,n=n.next}return r}(t.messageText,"\n")}},e}(t.Adapter=o);t.DiagnostcsAdapter=i;var a=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return __extends(a,e),Object.defineProperty(a.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),a.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var r=e.uri,o=this._positionToOffset(r,t);return b(n,this._worker(r).then(function(e){return e.getCompletionsAtPosition(r.toString(),o)}).then(function(e){if(e)return e.entries.map(function(e){return{uri:r,position:t,label:e.name,sortText:e.sortText,kind:a.convertKind(e.kind)}})}))},a.prototype.resolveCompletionItem=function(e,t){var n=this,r=e,o=r.uri,i=r.position;return b(t,this._worker(o).then(function(e){return e.getCompletionEntryDetails(o.toString(),n._positionToOffset(o,i),r.label)}).then(function(e){return e?{uri:o,position:i,label:e.name,kind:a.convertKind(e.kind),detail:c(e.displayParts),documentation:c(e.documentation)}:r}))},a.convertKind=function(e){switch(e){case h.primitiveType:case h.keyword:return monaco.languages.CompletionItemKind.Keyword;case h.variable:case h.localVariable:return monaco.languages.CompletionItemKind.Variable;case h.memberVariable:case h.memberGetAccessor:case h.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case h.function:case h.memberFunction:case h.constructSignature:case h.callSignature:case h.indexSignature:return monaco.languages.CompletionItemKind.Function;case h.enum:return monaco.languages.CompletionItemKind.Enum;case h.module:return monaco.languages.CompletionItemKind.Module;case h.class:return monaco.languages.CompletionItemKind.Class;case h.interface:return monaco.languages.CompletionItemKind.Interface;case h.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},a}(o);t.SuggestAdapter=a;var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.signatureHelpTriggerCharacters=["(",","],e}return __extends(e,t),e.prototype.provideSignatureHelp=function(e,t,n){var r=this,o=e.uri;return b(n,this._worker(o).then(function(e){return e.getSignatureHelpItems(o.toString(),r._positionToOffset(o,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach(function(i){var a={label:"",documentation:null,parameters:[]};a.label+=c(i.prefixDisplayParts),i.parameters.forEach(function(e,t,n){var r=c(e.displayParts),o={label:r,documentation:c(e.documentation)};a.label+=r,a.parameters.push(o),t<n.length-1&&(a.label+=c(i.separatorDisplayParts))}),a.label+=c(i.suffixDisplayParts),t.signatures.push(a)}),t}}))},e}(o);t.SignatureHelpAdapter=l;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideHover=function(e,t,n){var o=this,i=e.uri;return b(n,this._worker(i).then(function(e){return e.getQuickInfoAtPosition(i.toString(),o._positionToOffset(i,t))}).then(function(e){if(e){var t=c(e.documentation),n=e.tags?e.tags.map(function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t}).join("  \n\n"):"",r=c(e.displayParts);return{range:o._textSpanToRange(i,e.textSpan),contents:[{value:"```js\n"+r+"\n```\n"},{value:t+(n?"\n\n"+n:"")}]}}}))},t}(o);t.QuickInfoAdapter=p;var g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){var r=this,o=e.uri;return b(n,this._worker(o).then(function(e){return e.getOccurrencesAtPosition(o.toString(),r._positionToOffset(o,t))}).then(function(e){if(e)return e.map(function(e){return{range:r._textSpanToRange(o,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})}))},t}(o);t.OccurrencesAdapter=g;var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDefinition=function(e,t,n){var a=this,r=e.uri;return b(n,this._worker(r).then(function(e){return e.getDefinitionAtPosition(r.toString(),a._positionToOffset(r,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var o=r[n],i=s.parse(o.fileName);monaco.editor.getModel(i)&&t.push({uri:i,range:a._textSpanToRange(i,o.textSpan)})}return t}}))},t}(o);t.DefinitionAdapter=f;var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideReferences=function(e,t,n,r){var a=this,o=e.uri;return b(r,this._worker(o).then(function(e){return e.getReferencesAtPosition(o.toString(),a._positionToOffset(o,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var o=r[n],i=s.parse(o.fileName);monaco.editor.getModel(i)&&t.push({uri:i,range:a._textSpanToRange(i,o.textSpan)})}return t}}))},t}(o);t.ReferenceAdapter=m;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){var u=this,c=e.uri;return b(t,this._worker(c).then(function(e){return e.getNavigationBarItems(c.toString())}).then(function(e){if(e){var s=function(e,t,n){var r={name:t.text,detail:"",kind:_[t.kind]||monaco.languages.SymbolKind.Variable,range:u._textSpanToRange(c,t.spans[0]),selectionRange:u._textSpanToRange(c,t.spans[0]),containerName:n};if(t.childItems&&0<t.childItems.length)for(var o=0,i=t.childItems;o<i.length;o++){var a=i[o];s(e,a,r.name)}e.push(r)},t=[];return e.forEach(function(e){return s(t,e)}),t}}))},t}(o);t.OutlineAdapter=d;var h=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();t.Kind=h;var _=Object.create(null);_[h.module]=monaco.languages.SymbolKind.Module,_[h.class]=monaco.languages.SymbolKind.Class,_[h.enum]=monaco.languages.SymbolKind.Enum,_[h.interface]=monaco.languages.SymbolKind.Interface,_[h.memberFunction]=monaco.languages.SymbolKind.Method,_[h.memberVariable]=monaco.languages.SymbolKind.Property,_[h.memberGetAccessor]=monaco.languages.SymbolKind.Property,_[h.memberSetAccessor]=monaco.languages.SymbolKind.Property,_[h.variable]=monaco.languages.SymbolKind.Variable,_[h.const]=monaco.languages.SymbolKind.Variable,_[h.localVariable]=monaco.languages.SymbolKind.Variable,_[h.variable]=monaco.languages.SymbolKind.Variable,_[h.function]=monaco.languages.SymbolKind.Function,_[h.localFunction]=monaco.languages.SymbolKind.Function;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:n.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(o),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=this,i=e.uri;return b(r,this._worker(i).then(function(e){return e.getFormattingEditsForRange(i.toString(),o._positionToOffset(i,{lineNumber:t.startLineNumber,column:t.startColumn}),o._positionToOffset(i,{lineNumber:t.endLineNumber,column:t.endColumn}),v._convertOptions(n))}).then(function(e){if(e)return e.map(function(e){return o._convertTextChanges(i,e)})}))},t}(t.FormatHelper=v);t.FormatAdapter=y;var S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,o){var i=this,a=e.uri;return b(o,this._worker(a).then(function(e){return e.getFormattingEditsAfterKeystroke(a.toString(),i._positionToOffset(a,t),n,v._convertOptions(r))}).then(function(e){if(e)return e.map(function(e){return i._convertTextChanges(a,e)})}))},t}(v);function b(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}t.FormatOnTypeAdapter=S}),define("vs/language/typescript/tsMode",["require","exports","./workerManager","./languageFeatures"],function(e,t,o,i){"use strict";var n,r;function a(e,t){var r=new o.WorkerManager(t,e),n=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return r.getLanguageServiceWorker.apply(r,[e].concat(t))};return monaco.languages.registerCompletionItemProvider(t,new i.SuggestAdapter(n)),monaco.languages.registerSignatureHelpProvider(t,new i.SignatureHelpAdapter(n)),monaco.languages.registerHoverProvider(t,new i.QuickInfoAdapter(n)),monaco.languages.registerDocumentHighlightProvider(t,new i.OccurrencesAdapter(n)),monaco.languages.registerDefinitionProvider(t,new i.DefinitionAdapter(n)),monaco.languages.registerReferenceProvider(t,new i.ReferenceAdapter(n)),monaco.languages.registerDocumentSymbolProvider(t,new i.OutlineAdapter(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new i.FormatAdapter(n)),monaco.languages.registerOnTypeFormattingEditProvider(t,new i.FormatOnTypeAdapter(n)),new i.DiagnostcsAdapter(e,t,n),n}Object.defineProperty(t,"__esModule",{value:!0}),t.setupTypeScript=function(e){r=a(e,"typescript")},t.setupJavaScript=function(e){n=a(e,"javascript")},t.getJavaScriptWorker=function(){return new monaco.Promise(function(e,t){if(!n)return t("JavaScript not registered!");e(n)})},t.getTypeScriptWorker=function(){return new monaco.Promise(function(e,t){if(!r)return t("TypeScript not registered!");e(r)})}});
