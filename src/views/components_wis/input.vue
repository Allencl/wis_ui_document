<template>
    <i-article>
        <article>
            <h1>VFormItem 输入框</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VFormItem 输入框 props" h3></Anchor>
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
                            <td>type 等于<code>text</code></td> 
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

                        <tr><td>size</td> <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>clearable</td> <td>是否显示清空按钮</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>disabled</td> <td>设置输入框为禁用状态</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>readonly</td> <td>设置输入框为只读</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>maxlength</td> <td>最大输入长度</td> <td>Number</td> <td>-</td></tr> 
                        <tr><td>show-word-limit <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否显示输入字数统计，可以配合 maxlength 使用</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>password <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否显示切换密码图标</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>icon</td> <td>输入框尾部图标，仅在 text 类型下有效</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>prefix</td> <td>输入框头部图标</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>suffix</td> <td>输入框尾部图标</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>search</td> <td>是否显示为搜索型输入框</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>enter-button</td> <td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td> <td>Boolean | String</td> <td>false</td></tr> 
                        <tr><td>rows</td> <td>文本域默认行数，仅在 textarea 类型下有效</td> <td>Number</td> <td>2</td></tr> 
                        <tr><td>autosize</td> <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td> <td>Boolean | Object</td> <td>false</td></tr> 
                        <tr><td>number</td> <td>将用户的输入转换为 Number 类型</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>autofocus</td> <td>自动获取焦点</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>autocomplete</td> <td>原生的自动完成功能</td> <td>String</td> <td>off</td></tr> 
                        <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>spellcheck</td> <td>原生的 spellcheck 属性</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>wrap</td> <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td> <td>String</td> <td>soft</td></tr>
                    </tbody>
                </table>

                <Anchor title="VFormItem 输入框 events" h3></Anchor>
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
                        <tr><td>@on-enter</td> <td>按下回车键时触发</td> <td>无</td></tr> 
                        <tr><td>@on-click</td> <td>设置 icon 属性后，点击图标时触发</td> <td>无</td></tr> 
                        <tr><td>@on-focus</td> <td>输入框聚焦时触发</td> <td>无</td></tr> 
                        <tr><td>@on-blur</td> <td>输入框失去焦点时触发</td> <td>无</td></tr> 
                        <tr><td>@on-keyup</td> <td>原生的 keyup 事件</td> <td>event</td></tr> 
                        <tr><td>@on-keydown</td> <td>原生的 keydown 事件</td> <td>event</td></tr> 
                        <tr><td>@on-keypress</td> <td>原生的 keypress 事件</td> <td>event</td></tr> 
                        <tr><td>@on-search</td> <td>开启 search 时可用，点击搜索或按下回车键时触发</td> <td>value</td></tr> 
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
    import Code from '../code_wis/input';
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