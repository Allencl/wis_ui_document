<template>
    <i-article>
        <article>
            <h1>VSearch 查询头</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VSearch props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>model</td>
                            <td>查询头表单绑定的对象（v-model）。 </td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>customSearch</td>
                            <td>是否自定义查询。为true时可阻止底层查询事件。 </td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>showReset</td>
                            <td>是否显示重置按钮。 </td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>   
                        <tr>
                            <td>formName</td>
                            <td>查询头Form表单的 ref名称。 </td>
                            <td>String</td>
                            <td>searchForm</td>
                        </tr> 
                        <tr>
                            <td>gridRef</td>
                            <td>需要绑定的 Vgrid。当一个页面有多个表格时。gridRef的值等于Vgrid的gridRef，可实现查询头与Vgrid的双向绑定。</td>
                            <td>String</td>
                            <td>vgrid</td>
                        </tr> 
                        <tr>
                            <td>showCollapse</td>
                            <td>是否显示折叠按钮。 </td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr> 
                        <tr>
                            <td>rules</td>
                            <td>自定义Form表单验证规则。 </td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr> 
                        <tr>
                            <td>resetSearch</td>
                            <td>重置后是否发请求。 </td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>                         
                        <tr>
                            <td>labelWidth</td>
                            <td>label的宽度。 </td>
                            <td>Number</td>
                            <td>100</td>
                        </tr> 
                    </tbody>
                </table>

                <Anchor title="VSearch events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>@onReset</td>
                            <td>点击重置按钮的回调函数。</td>
                            <td>undefined</td>
                        </tr>
                        <tr>
                            <td>@onSearch</td>
                            <td>当customSearch为true时有效。点击查询按钮的回调函数。</td>
                            <td>undefined</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/VSearch';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        }
    }
</script>