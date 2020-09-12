(this["webpackJsonpresearch-hub-webapp"]=this["webpackJsonpresearch-hub-webapp"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){e.exports=a(80)},49:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(38),i=a.n(n),s=a(15),l=a(4),u=(a(49),a(39)),c=a.n(u);function m(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col-lg-3 centered"},o.a.createElement("img",{className:"App-logo",src:c.a,alt:"ReactJS"})),o.a.createElement("div",{className:"col-lg-9 jumbotron"},o.a.createElement("h1",null,"SurveyJS + ReactJS quickstart"),o.a.createElement("p",null,"We have been developing and supporting our library for several years. We helped hundreds of companies across many industries. We carefully reviewed every survey and form from our customerscustomers to add the necessary functionality that covers all the popular scenarios. We are confident, that you can build almost everything, that popular cloud services offer, using SurveyJS library. You can extend our SurveyJS Library and change its behavior.")))}var p=a(11),d=a(12),y=a(14),v=a(13),h=a(9),b=a(22),g=(a(50),a(28),a(29),a(30),a(31),a(51),a(2)),f=a.n(g),E=(a(32),a(34),a(35),a(36),a(1));b.StylesManager.applyTheme("default"),E.prettycheckbox(h),E.select2(h,f.a),E.inputmask(h),E.jquerybarrating(h,f.a),E.jqueryuidatepicker(h,f.a),E.nouislider(h),E.select2tagbox(h,f.a),E.sortablejs(h),E.ckeditor(h),E.autocomplete(h,f.a),E.bootstrapslider(h);var k=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).saveMySurvey=function(){console.log(JSON.stringify(e.surveyCreator.text))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.surveyCreator=new b.SurveyCreator(null,{showEmbededSurveyTab:!0}),this.surveyCreator.saveSurveyFunc=this.saveMySurvey,this.surveyCreator.tabs().push({name:"survey-templates",title:"My Custom Tab",template:"custom-tab-survey-templates",action:function(){e.surveyCreator.makeNewViewActive("survey-templates")},data:{}}),this.surveyCreator.render("surveyCreatorContainer")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("script",{type:"text/html",id:"custom-tab-survey-templates"},'<div id="test">TEST</div>'),o.a.createElement("div",{id:"surveyCreatorContainer"}))}}]),a}(r.Component);function w(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Survey Creator - create a new survey"),o.a.createElement(k,null))}var x=a(3),S=(a(58),{title:"Product Feedback Survey Example",showProgressBar:"top",pages:[{elements:[{type:"myquestion",name:"cq1",text:"Some Text"},{type:"tagbox",name:"position-tags",title:"Choose job positions (Select2 Tagbox)...",choices:["1|Designer","2|Front-end Developer","3|Back-end Developer","4|Database Administrator","5|System Engineer"]},{type:"dropdown",name:"position-s2",title:"Choose job position (Select2)...",renderAs:"select2",choices:["1|Designer","2|Front-end Developer","3|Back-end Developer","4|Database Administrator","5|System Engineer"]},{type:"radiogroup",name:"position",title:"Choose job position (iCheck)...",isRequired:!0,colCount:0,choices:["1|Designer","2|Front-end Developer","3|Back-end Developer","4|Database Administrator","5|System Engineer"]},{type:"radiogroup",name:"position-pc",title:"Choose job position (Pretty checkbox)...",isRequired:!0,renderAs:"prettycheckbox",colCount:0,choices:["1|Designer","2|Front-end Developer","3|Back-end Developer","4|Database Administrator","5|System Engineer"]},{type:"barrating",name:"barrating1",ratingTheme:"css-stars",title:"Please rate the movie you've just watched",choices:["1","2","3","4","5"]},{type:"imagepicker",name:"choosepicture",title:"What animal would you like to see first ?",choices:[{value:"lion",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"},{value:"giraffe",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"},{value:"panda",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"},{value:"camel",imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"}]},{type:"bootstrapslider",name:"bootstrapslider"},{type:"dropdown",renderAs:"select2",choicesByUrl:{url:"https://restcountries.eu/rest/v1/all"},name:"countries",title:"Please select the country you have arrived from:"},{type:"signaturepad",name:"sign",title:"Please enter your signature"},{type:"sortablelist",name:"lifepriopity",title:"Life Priorities ",isRequired:!0,colCount:0,choices:["family","work","pets","travels","games"]},{name:"date",type:"datepicker",inputType:"date",title:"Your favorite date:",dateFormat:"mm/dd/yy",isRequired:!0}]},{questions:[{type:"signaturepad",width:"500px",name:"Signature Pad - you can enter your signature here:"},{type:"matrix",name:"Quality",title:"Please indicate if you agree or disagree with the following statements",columns:[{value:1,text:"Strongly Disagree"},{value:2,text:"Disagree"},{value:3,text:"Neutral"},{value:4,text:"Agree"},{value:5,text:"Strongly Agree"}],rows:[{value:"affordable",text:"Product is affordable"},{value:"does what it claims",text:"Product does what it claims"},{value:"better then others",text:"Product is better than other products on the market"},{value:"easy to use",text:"Product is easy to use"}]},{type:"rating",name:"satisfaction",title:"How satisfied are you with the Product?",mininumRateDescription:"Not Satisfied",maximumRateDescription:"Completely satisfied"},{type:"rating",name:"recommend friends",visibleIf:"{satisfaction} > 3",title:"How likely are you to recommend the Product to a friend or co-worker?",mininumRateDescription:"Will not recommend",maximumRateDescription:"I will recommend"},{type:"comment",name:"suggestions",title:"What would make you more satisfied with the Product?"}]},{questions:[{type:"radiogroup",name:"price to competitors",title:"Compared to our competitors, do you feel the Product is",choices:["Less expensive","Priced about the same","More expensive","Not sure"]},{type:"radiogroup",name:"price",title:"Do you feel our current price is merited by our product?",choices:["correct|Yes, the price is about right","low|No, the price is too low for your product","high|No, the price is too high for your product"]},{type:"multipletext",name:"pricelimit",title:"What is the... ",items:[{name:"mostamount",title:"Most amount you would every pay for a product like ours"},{name:"leastamount",title:"The least amount you would feel comfortable paying"}]}]},{questions:[{type:"text",name:"email",title:'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'}]}]}),_=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getType",value:function(){return"myquestion"}},{key:"text",get:function(){return this.getPropertyValue("text","")},set:function(e){this.setPropertyValue("text",e)}}]),a}(x.Question),C=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){if(!this.question)return null;var e=this.question.cssClasses;return o.a.createElement("div",{className:e.root},o.a.createElement("span",null,"My Text Value: "),o.a.createElement("span",null,o.a.createElement("b",null,this.question.text)))}},{key:"question",get:function(){return this.props.question}}]),a}(x.SurveyElementBase);function j(e){console.log("value changed!")}function D(e){console.log("Complete! "+e)}function P(){var e=new x.Model(S);return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"SurveyJS Library - a sample survey below"),o.a.createElement(x.Survey,{model:e,onComplete:D,onValueChanged:j}))}x.Serializer.addClass("myquestion",[{name:"text"}],(function(){return new _("")}),"question"),x.ReactQuestionFactory.Instance.registerQuestion("myquestion",(function(e){return o.a.createElement(C,e)})),window.$=window.jQuery=f.a,x.StylesManager.applyTheme("default"),E.prettycheckbox(x),E.select2(x,f.a),E.inputmask(x),E.jquerybarrating(x,f.a),E.jqueryuidatepicker(x,f.a),E.nouislider(x),E.select2tagbox(x,f.a),E.sortablejs(x),E.ckeditor(x),E.autocomplete(x,f.a),E.bootstrapslider(x);var O=a(6),T=a(40);function R(){var e=new O.SurveyModel(S);return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h2",null,"Export survey to a PDF document"),o.a.createElement("p",null,"The SurveyJS PDF Export library allows you to render SurveyJS Library surveys to PDF in a browser which can be later emailed or printed."),o.a.createElement("p",null,"Click the button below to get a PDF document.")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return function(e){var t=new T.SurveyPDF(S);t.data=e.data,t.save()}(e)}},"Save PDF")))}E.prettycheckbox(O),E.select2(O,f.a),E.inputmask(O),E.jquerybarrating(O,f.a),E.jqueryuidatepicker(O,f.a),E.nouislider(O),E.select2tagbox(O,f.a),E.sortablejs(O),E.ckeditor(O),E.autocomplete(O,f.a),E.bootstrapslider(O);var M={completedHtml:"<p style='font-size:24px;'>Thank you for completing the survey! (please wait for analytics to load ...)<p>",pages:[{name:"page_info",elements:[{type:"radiogroup",name:"organization_type",title:"Which of the following best describes you or your organization?",hasOther:!0,choices:[{value:"ISV",text:"ISV (building commercial/shrink wrapped software)"},{value:"Consulting",text:"Software consulting firm (provide development services to other organizations)"},{value:"Custom",text:"Custom software development (as a freelancer/contractor)"},{value:"In-house",text:"In-house software development"},{value:"Hobbyist",text:"Hobbyist (develop apps for personal use)"}],colCount:2},{type:"radiogroup",name:"developer_count",visibleIf:"{organization_type} != 'Hobbyist'",title:"How many software developers are in your organization?",choices:["1","2","3-5","6-10","> 10"]},{type:"radiogroup",name:"VerticalMarket",visibleIf:"{organization_type} != 'Hobbyist'",title:"What vertical market does your product serve?",hasOther:!0,choices:["Automotive","Banking","Consumer","Education","Engineering","Energy","Fast-moving consumer goods","Financial","FinTech","Food and beverage","Government (federal, state, local)","Healthcare","Insurance","Legal","Manufacturing","Media","Online","Raw materials","Real estate","Religion","Retail","Jewelry","Technology","Telecommunications","Transportation (Travel)","Electronics","Not-for-profit"],colCount:4},{type:"radiogroup",name:"product_discovering",title:"How did you first discover the product? ",hasOther:!0,choices:["Search engine","GitHub","Friend or colleague","Redit","Medium","Twitter","Facebook"],otherText:"Other",colCount:3}]},{name:"page_libraries_usage",elements:[{type:"checkbox",name:"javascript_frameworks",title:"What JavaScript framework do you use?",hasOther:!0,choices:["React","Angular","jQuery","Vue","Meteor","Ember","Backbone","Knockout","Aurelia","Polymer","Mithril"],choicesOrder:"asc",otherText:"Other (Please name it)",colCount:3},{type:"checkbox",name:"backend_language",title:"What Web Backend programming language do you use?",hasOther:!0,choices:["Java","Python","Node.js","Go","Django","Asp.net","Ruby"],choicesOrder:"asc",otherText:"Other (Please name it)",colCount:3}]},{name:"page_product_usage",elements:[{type:"radiogroup",name:"useproduct",title:"Do you currently use our libraries? ",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"uselibraries",visibleIf:'{useproduct} = "Yes"',title:"What libraries do you use?",isRequired:!0,choices:["Survey Library (Runner)","Survey Creator (Designer)"]},{type:"checkbox",name:"product_new",title:"We are going to release new libraries shortly. Please check a product(s), if you are interesting to use them",choices:["Export to PDF (survey and its result)","Analytics (Create Analytics based on JSON results)"]},{type:"checkbox",name:"supported_devices",title:"What device types do you need to support?",isRequired:!0,choices:["Desktop",{value:"Tablete",text:"Tablet"},"Mobile"]},{type:"radiogroup",name:"native_mobile_support",visibleIf:'{supported_devices} contains "Mobile"',title:"How is important for you a native mobile support?",isRequired:!0,choices:[{value:"1",text:"I am happy with adaptive html rendering"},{value:"2",text:"Something important, but adaptive html rendering is fine"},{value:"3",text:"Very important"},{value:"4",text:"Can not use the library without it"}]},{type:"radiogroup",name:"native_framework",visibleIf:"{native_mobile_support} >= 3",title:"Please name the framework that you are using or going to use in your native mobile developlment",hasOther:!0,choices:["react native","nativescript","ionic","xamarin","native iOS and Android apps"],otherText:"Other (Please name it)",colCount:2}]},{name:"page_alternative",elements:[{type:"radiogroup",name:"product_alternative",title:"What would you use as an alternative if SurveyJS does not exist?",isRequired:!0,hasOther:!0,choices:["Use popular Survey cloud platforms","Develop ourselves"],otherText:"Other (please name)"},{type:"text",name:"survey_cloud_platform",visibleIf:'{product_alternative} = "Use popular Survey cloud platforms"',title:"What Survey cloud platform would be your choice?"},{type:"radiogroup",name:"product_recommend",title:"Have you recommended the product to anyone?",choices:["Yes","No"]}]},{name:"page_recommend",elements:[{type:"rating",name:"nps_score",title:"How likely are you to recommend SurveyJS to a friend or colleague?",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"Most unlikely",maxRateDescription:"Most likely"},{type:"comment",name:"favorite_functionality",title:"What's your favorite functionality / add-on?"},{type:"comment",name:"product_improvement",title:"How could our products be improved to better meet your needs?"}]}]},q=[{organization_type:"In-house",developer_count:"1",VerticalMarket:"Education",product_discovering:"GitHub",javascript_frameworks:["jQuery"],backend_language:["Ruby"],useproduct:"Yes",uselibraries:["Survey Library (Runner)"],product_new:["Export to PDF (survey and its result)"],supported_devices:["Desktop","Tablete","Mobile"],native_mobile_support:"2",product_alternative:"Develop ourselves",product_recommend:"Yes",nps_score:6,product_improvement:"The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",native_framework:"",survey_cloud_platform:"",favorite_functionality:""},{organization_type:"Consulting",developer_count:"3-5",VerticalMarket:"Government (federal, state, local)",product_discovering:"Search engine",javascript_frameworks:["Vue","jQuery","other"],backend_language:["Python","Node.js"],useproduct:"Yes",uselibraries:["Survey Library (Runner)"],product_new:["Analytics (Create Analytics based on JSON results)","Export to PDF (survey and its result)"],supported_devices:["Desktop"],product_alternative:"Develop ourselves",product_recommend:"Yes",nps_score:8,"javascript_frameworks-Comment":"AngularJS",native_mobile_support:"",native_framework:"",survey_cloud_platform:"",favorite_functionality:"",product_improvement:""}],I=a(41),N=(a(63),function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=new x.SurveyModel(M);this.visPanel=new I.VisualizationPanel(e.getAllQuestions(),q),this.visPanel.render(document.getElementById("summaryContainer"))}},{key:"render",value:function(){return o.a.createElement("div",{id:"summaryContainer"})}}]),a}(r.Component));function A(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Analytics Pack - visualize survey results"),o.a.createElement(N,null))}var F=a(42),J=(a(65),a(66),function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=new x.SurveyModel(M);this.visPanel=new F.Tabulator(e,q),this.visPanel.render(document.getElementById("summaryContainer"))}},{key:"render",value:function(){return o.a.createElement("div",{id:"summaryContainer"})}}]),a}(r.Component));function W(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Results Table - display survey results in the table form"),o.a.createElement("span",null,"Uses Tabulator. Supports modern browsers."),o.a.createElement(J,null))}var H=a(23),B=(a(16),a(67),a(21),a(68),a(69),a(70),a(71),a(72),a(73),function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){H.DataTables.initJQuery(f.a);var e=new x.SurveyModel(M);this.visPanel=new H.DataTables(e,q),this.visPanel.render(document.getElementById("summaryContainer"))}},{key:"render",value:function(){return o.a.createElement("div",{id:"summaryContainer"})}}]),a}(r.Component));function V(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Results Table - display survey results in the table form"),o.a.createElement("span",null,"Uses DataTables. Browsers compatibility: IE10+ "),o.a.createElement(B,null))}a(74);function L(){return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-default"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-header"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"SurveyJS + ReactJS")),o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",null,o.a.createElement(s.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/survey"},"Survey")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/creator"},"SurveyJS Creator")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/export"},"Export to PDF")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/analytics"},"Analytics")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/analyticstabulator"},"Results Table")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/analyticsdatatables"},"Results Table (IE Support)"))))),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/"},o.a.createElement(m,null)),o.a.createElement(l.a,{path:"/survey"},o.a.createElement(P,null)),o.a.createElement(l.a,{path:"/creator"},o.a.createElement(w,null)),o.a.createElement(l.a,{path:"/export"},o.a.createElement(R,null)),o.a.createElement(l.a,{path:"/analytics"},o.a.createElement(A,null)),o.a.createElement(l.a,{path:"/analyticsdatatables"},o.a.createElement(V,null)),o.a.createElement(l.a,{path:"/analyticstabulator"},o.a.createElement(W,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ec1b1e1c.chunk.js.map