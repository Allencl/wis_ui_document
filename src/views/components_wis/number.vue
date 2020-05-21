<template>
    <i-article>
        <article>
            <h1>VFormItem 数字框</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VFormItem 数字框 props" h3></Anchor>
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
                            <td>type</td> 
                            <td>type 等于<code>number</code></td> 
                            <td>String</td> <td>text</td>
                        </tr> 
                        <tr>
                            <td>v-model</td>
                            <td>表单绑定的对象（v-model）。 </td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>name</td> 
                            <td>表单名称，与v-model绑定值一致。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr>                         
                        <tr>
                            <td>label</td> 
                            <td>lable 名称。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr>   
                        <tr>
                            <td>permissionCode</td> 
                            <td>权限控制，控制组件是否显示。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr> 


                        <tr><td>max</td> <td>最大值</td> <td>Number</td> <td>Infinity</td></tr> 
                        <tr><td>min</td> <td>最小值</td> <td>Number</td> <td>-Infinity</td></tr> 
                        <tr><td>value</td> <td>当前值，可以使用 v-model 双向绑定数据</td> <td>Number</td> <td>1</td></tr> 
                        <tr><td>step</td> <td>每次改变的步伐，可以是小数</td> <td>Number</td> <td>1</td></tr> 
                        <tr><td>size</td> <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>disabled</td> <td>设置禁用状态</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>formatter</td> <td>指定输入框展示值的格式</td> <td>Function</td> <td>-</td></tr> 
                        <tr><td>parser</td> <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td> <td>Function</td> <td>-</td></tr> 
                        <tr><td>readonly</td> <td>是否设置为只读</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>editable</td> <td>是否可编辑</td> <td>Boolean</td> <td>true</td></tr> 
                        <tr><td>precision</td> <td>数值精度</td> <td>Number</td> <td>-</td></tr> <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>active-change</td> <td>是否实时响应数据，设置为 false 时，只会在失焦时更改数据</td> <td>Boolean</td> <td>true</td></tr>
                    </tbody> 
                </table>

                <Anchor title="VFormItem 数字框 events" h3></Anchor>
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
                            <td>
                                @on-change
                                <i class="i-icon i-icon-collection_fill" style="color:#ed3f14;font-size:16px"></i>
                            </td> 
                            <td>
                                数据改变时触发。
                                <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">建议优先使用事件。</sup></span>    
                            </td> 
                            <td>event</td>
                        </tr> 
                        <tr><td>@on-focus</td> <td>聚焦时触发</td> <td>event</td></tr> 
                        <tr><td>@on-blur</td> <td>失焦时触发</td> <td>-</td></tr>
                    </tbody>
                </table>


            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/number';
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