<template>
    <i-article>
        <article>
            <h1>VFormItem 查询框</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VFormItem 查询框 props" h3></Anchor>
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
                            <td>type 等于<code>comboBox</code></td> 
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


                        <tr>
                            <td>multiple</td> 
                            <td>是否多选。</td> 
                            <td>Boolean</td>
                            <td>false</td>
                        </tr> 
                        <tr>
                            <td>pattern</td> 
                            <td>table 请求地址。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr>     
                        <tr>
                            <td>nameKey</td> 
                            <td>table 配置列的属性名称。</td> 
                            <td>Array</td>
                            <td>[]</td>
                        </tr>    
                        <tr>
                            <td>columnTitle</td> 
                            <td>table 配置列的 label值。</td> 
                            <td>Array</td>
                            <td>[]</td>
                        </tr>  
                        <tr>
                            <td>valueLabel</td> 
                            <td>搜索框初始化的默认值。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr>   
                        <tr>
                            <td>splitKey</td> 
                            <td>选中值间的分隔符。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr> 
                        <tr>
                            <td>dataKey</td> 
                            <td>选中返回的默认属性名称。</td> 
                            <td>String</td>
                            <td>id</td>
                        </tr>                         
                        <tr>
                            <td>paging</td> 
                            <td>是否分页。</td> 
                            <td>Boolean</td>
                            <td>false</td>
                        </tr> 
                        <tr>
                            <td>pageSize</td> 
                            <td>分页条数。</td> 
                            <td>Number</td>
                            <td>10</td>
                        </tr>                         
                        <tr>
                            <td>extraParam</td> 
                            <td>请求地址，自定义参数。建议直接配置在pattern里面。</td> 
                            <td>Object</td>
                            <td>{}</td>
                        </tr> 
                        <tr>
                            <td>extraParam</td> 
                            <td>请求地址，自定义参数。建议直接配置在pattern里面。</td> 
                            <td>Object</td>
                            <td>{}</td>
                        </tr> 
                        <tr>
                            <td>placeholder</td> 
                            <td>提示文字。</td> 
                            <td>String</td>
                            <td>-</td>
                        </tr>                         
                        <tr><td>clearable</td> <td>是否显示清空按钮</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>disabled</td> <td>设置输入框为禁用状态</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr>
                            <td>width</td> 
                            <td>下拉盒子宽度。</td> 
                            <td>Number</td>
                            <td>650</td>
                        </tr> 
                                                                                                             
                    </tbody>
                </table>

                <Anchor title="VFormItem 查询框 events" h3></Anchor>
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
                                @changeRow
                                <i class="i-icon i-icon-collection_fill" style="color:#ed3f14;font-size:16px"></i>
                            </td> 
                            <td>
                                单选时，数据改变时触发。
                                <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">建议优先使用事件。</sup></span>    
                            </td> 
                            <td>row,rowOld</td>
                        </tr> 
                        <tr>
                            <td>
                                @changeRowAll
                                <i class="i-icon i-icon-collection_fill" style="color:#ed3f14;font-size:16px"></i>
                            </td> 
                            <td>
                                多选时，数据改变时触发。
                                <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">建议优先使用事件。</sup></span>    
                            </td> 
                            <td>rows</td>
                        </tr> 
                        <tr><td>@on-blur</td> <td>输入框失去焦点时触发</td> <td>无</td></tr> 
                        <tr><td>@on-clear <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>开启 clearable 时可用，点击清空按钮时触发</td> <td>无</td></tr>
                    </tbody>
                </table>


            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/comboBox';
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