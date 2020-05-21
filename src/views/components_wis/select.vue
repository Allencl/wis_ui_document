<template>
    <i-article>
        <article>
            <h1>VFormItem 下拉框</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VFormItem 下拉框 props" h3></Anchor>
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
                            <td>type 等于<code>select</code></td> 
                            <td>String</td> <td>text</td>
                        </tr> 
                        <tr>
                            <td>typeCode</td> 
                            <td>数据字典的名称。</td> 
                            <td>String</td> 
                            <td>-</td>
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
                        <tr><td>multiple</td> <td>是否支持多选</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>disabled</td> <td>是否禁用</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>clearable</td> <td>是否可以清空选项，只在单选时有效</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>filterable</td> <td>是否支持搜索</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>filter-by-label <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.2.0</sup></span></td> <td>在搜索时，是否只按照 label 进行搜索</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>remote</td> <td>是否使用远程搜索</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>remote-method</td> <td>远程搜索的方法</td> <td>Function</td> <td>-</td></tr> 
                        <tr><td>loading</td> <td>当前是否正在远程搜索</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>loading-text</td> <td>远程搜索中的文字提示</td> <td>String</td> <td>加载中</td></tr> 
                        <tr><td>label</td> <td>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</td> <td>String | Number | Array</td> <td>空</td></tr> 
                        <tr><td>size</td> <td>选择框大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>placeholder</td> <td>选择框默认文字</td> <td>String</td> <td>请选择</td></tr> 
                        <tr><td>not-found-text</td> <td>当下拉列表为空时显示的内容</td> <td>String</td> <td>无匹配数据</td></tr> 
                        <tr><td>label-in-value</td> <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>placement</td> <td>弹窗的展开方向，可选值为 <code>top</code>、<code>bottom</code>、<code>top-start</code>、<code>bottom-start</code>、<code>top-end</code>、<code>bottom-end</code></td> <td>String</td> <td>bottom-start</td></tr> 
                        <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>开启 transfer 时，给浮层添加额外的 class 名称</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>prefix <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>在 Select 内显示图标</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>max-tag-count <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>多选时最多显示多少个 tag</td> <td>Number</td> <td>-</td></tr> 
                        <tr><td>max-tag-placeholder <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>隐藏 tag 时显示的内容，参数是剩余项数量</td> <td>Function</td> <td>-</td></tr> 
                        <tr><td>allow-create <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否允许用户创建新条目，需开启 filterable</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>capture <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否开启 capture 模式，也可通过全局配置</td> <td>Boolean</td> <td>true</td></tr>
                    </tbody>
                </table>

                <Anchor title="VFormItem 下拉框 events" h3></Anchor>
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
                        <tr><td>@on-query-change</td> <td>搜索词改变时触发</td> <td>query</td></tr> 
                        <tr><td>@on-clear</td> <td>点击清空按钮时触发</td> <td>无</td></tr> 
                        <tr><td>@on-open-change</td> <td>下拉框展开或收起时触发</td> <td>true / false</td></tr> 
                        <tr><td>@on-create <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>新建条目时触发</td> <td>query</td></tr> 
                        <tr><td>@on-select <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.1.0</sup></span></td> <td>选择项目时触发</td> <td>当前选中项</td></tr>
                    </tbody>
                </table>

            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/select';
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