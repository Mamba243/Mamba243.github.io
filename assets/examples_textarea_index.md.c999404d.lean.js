import{V as m,_,o as C,c as h,a as v,w as o,b as n,e as t,f as g}from"./app.4d0de795.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:i}=m;function k(a,s){const c=p("bn-textArea");return r(),i("div",null,[l(c,{rows:10,cols:80,modelValue:a.val,"onUpdate:modelValue":s[0]||(s[0]=f=>a.val=f)},null,8,["modelValue"])])}const{defineComponent:d,ref:u}=m,e=d({setup(){return{val:u("")}}});return{render:k,...e}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:i}=m;function k(a,s){const c=p("bn-textArea");return r(),i("div",null,[l(c,{rows:10,cols:80,modelValue:a.val,"onUpdate:modelValue":s[0]||(s[0]=f=>a.val=f),disabled:""},null,8,["modelValue"])])}const{defineComponent:d,ref:u}=m,e=d({setup(){return{val:u("\u8BBE\u5B9A\u4E86disabled\u5C5E\u6027\uFF0C\u5219\u6587\u672C\u57DF\u4E2D\u7684\u6587\u5B57\u4E0D\u53EF\u7F16\u8F91")}}});return{render:k,...e}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:i}=m;function k(a,s){const c=p("bn-textArea");return r(),i("div",null,[l(c,{rows:10,cols:80,modelValue:a.val,"onUpdate:modelValue":s[0]||(s[0]=f=>a.val=f),maxlength:10},null,8,["modelValue"])])}const{defineComponent:d,ref:u}=m,e=d({setup(){return{val:u("")}}});return{render:k,...e}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:l,openBlock:r,createElementBlock:i}=m;function k(a,s){const c=p("bn-textArea");return r(),i("div",null,[l(c,{rows:10,cols:80,modelValue:a.val,"onUpdate:modelValue":s[0]||(s[0]=f=>a.val=f),focusColor:"red"},null,8,["modelValue"])])}const{defineComponent:d,ref:u}=m,e=d({setup(){return{val:u("")}}});return{render:k,...e}}()}},I=JSON.parse('{"title":"Textarea \u6587\u672C\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":2,"title":"\u9650\u5236\u957F\u5EA6","slug":"\u9650\u5236\u957F\u5EA6"},{"level":2,"title":"\u81EA\u5B9A\u4E49 Focus \u989C\u8272","slug":"\u81EA\u5B9A\u4E49-focus-\u989C\u8272"},{"level":2,"title":"Attributes \u53C2\u6570","slug":"attributes-\u53C2\u6570"},{"level":2,"title":"Event \u4E8B\u4EF6","slug":"event-\u4E8B\u4EF6"}],"relativePath":"examples/textarea/index.md"}'),F=n("h1",{id:"textarea-\u6587\u672C\u57DF",tabindex:"-1"},[t("Textarea \u6587\u672C\u57DF "),n("a",{class:"header-anchor",href:"#textarea-\u6587\u672C\u57DF","aria-hidden":"true"},"#")],-1),x=n("p",null,"\u7528\u4E8E\u6BB5\u843D\u6587\u672C\u7684\u586B\u5199\u6216\u8F93\u5165",-1),A=n("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[t("\u57FA\u672C\u4F7F\u7528 "),n("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1),B=n("p",null,"Textarea \u6587\u672C\u57DF\u57FA\u672C\u4F7F\u7528\u3002",-1),b=n("div",null,[t("\u4F7F\u7528"),n("code",null,"bn-textArea"),t("\u5F15\u5165,"),n("code",null,"rows"),t("\u8BBE\u5B9A\u884C\u6570"),n("code",null,"cols"),t("\u8BBE\u5B9A\u5217\u6570")],-1),w=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("bn-textArea")]),t(),n("span",{class:"token attr-name"},":rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":cols"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("bn-textArea")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
    `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t("ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`      
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
          val
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),V=n("h2",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[t("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),y=n("p",null,[t("\u901A\u8FC7 "),n("em",null,"disabled"),t(" \u542F\u7528\u3002")],-1),D=n("div",null,[t("\u4F7F\u7528"),n("code",null,"disabled"),t("\u5C5E\u6027\u5B9E\u73B0\u7981\u7528")],-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("bn-textArea")]),t(),n("span",{class:"token attr-name"},":rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":cols"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("bn-textArea")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
    `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t("ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8BBE\u5B9A\u4E86disabled\u5C5E\u6027\uFF0C\u5219\u6587\u672C\u57DF\u4E2D\u7684\u6587\u5B57\u4E0D\u53EF\u7F16\u8F91"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`      
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
          val
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),N=n("h2",{id:"\u9650\u5236\u957F\u5EA6",tabindex:"-1"},[t("\u9650\u5236\u957F\u5EA6 "),n("a",{class:"header-anchor",href:"#\u9650\u5236\u957F\u5EA6","aria-hidden":"true"},"#")],-1),j=n("p",null,[t("\u901A\u8FC7 "),n("em",null,"maxlength"),t(" \u542F\u7528\u3002")],-1),T=n("div",null,[t("\u4F7F\u7528"),n("code",null,"maxlength"),t("\u5C5E\u6027\u9650\u5236\u8F93\u5165\u957F\u5EA6")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("bn-textArea")]),t(),n("span",{class:"token attr-name"},":rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":cols"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":maxlength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("bn-textArea")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
    `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t("ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`      
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
          val
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h2",{id:"\u81EA\u5B9A\u4E49-focus-\u989C\u8272",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49 Focus \u989C\u8272 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49-focus-\u989C\u8272","aria-hidden":"true"},"#")],-1),J=n("p",null,[t("\u901A\u8FC7 "),n("em",null,"focusColor"),t(" \u5C5E\u6027\u81EA\u5B9A\u4E49 input \u5728\u83B7\u53D6\u7126\u70B9\u540E\u7684\u989C\u8272\u3002")],-1),O=n("div",null,[t("\u4F7F\u7528"),n("code",null,"maxlength"),t("\u5C5E\u6027\u9650\u5236\u8F93\u5165\u957F\u5EA6")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("bn-textArea")]),t(),n("span",{class:"token attr-name"},":rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":cols"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("80"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"focusColor"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("red"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("bn-textArea")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
    `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t("ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" val "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`      
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
          val
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h2",{id:"attributes-\u53C2\u6570",tabindex:"-1"},[t("Attributes \u53C2\u6570 "),n("a",{class:"header-anchor",href:"#attributes-\u53C2\u6570","aria-hidden":"true"},"#")],-1),z=n("h2",{id:"event-\u4E8B\u4EF6",tabindex:"-1"},[t("Event \u4E8B\u4EF6 "),n("a",{class:"header-anchor",href:"#event-\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1);function G(p,l,r,i,k,d){const u=g("render-demo-0"),e=g("demo"),a=g("render-demo-1"),s=g("render-demo-2"),c=g("render-demo-3");return C(),h("div",null,[F,x,A,B,v(e,{sourceCode:`    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val"></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    <\/script>
`},{description:o(()=>[b]),highlight:o(()=>[w]),default:o(()=>[v(u)]),_:1}),V,y,v(e,{sourceCode:`    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" disabled></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("\u8BBE\u5B9A\u4E86disabled\u5C5E\u6027\uFF0C\u5219\u6587\u672C\u57DF\u4E2D\u7684\u6587\u5B57\u4E0D\u53EF\u7F16\u8F91");      
        return {
          val
        }
      },
    });
    <\/script>
`},{description:o(()=>[D]),highlight:o(()=>[q]),default:o(()=>[v(a)]),_:1}),N,j,v(e,{sourceCode:`    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" :maxlength="10"></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    <\/script>
`},{description:o(()=>[T]),highlight:o(()=>[U]),default:o(()=>[v(s)]),_:1}),$,J,v(e,{sourceCode:`    <template>
      <bn-textArea :rows="10" :cols="80" v-model="val" focusColor='red'></bn-textArea>
    </template>

    <script>
    import { defineComponent,ref } from 'vue';
    export default defineComponent({
      setup() {
      const val = ref("");      
        return {
          val
        }
      },
    });
    <\/script>
`},{description:o(()=>[O]),highlight:o(()=>[P]),default:o(()=>[v(c)]),_:1}),S,z])}const K=_(E,[["render",G]]);export{I as __pageData,K as default};
