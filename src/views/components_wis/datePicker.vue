<template>
    <i-article>
        <article>
            <h1>VFormItem 日期选择</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VFormItem 日期选择 props" h3></Anchor>
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
                            <td>type 等于<code>date</code></td> 
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
                        
                        <tr><td>type</td> <td>显示类型，可选值为 <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code></td> <td>String</td> <td>date</td></tr> 
                        <tr>
                            <td>value</td> 
                            <td>
                                                日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看<br>
                                                注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
                            </td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td>-</td>
                        </tr> 
                        <tr><td>format</td> <td>展示的日期格式</td> <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td> <td><ul><li><strong>date | daterange</strong>：<br>yyyy-MM-dd</li> <li><strong>datetime | datetimerange</strong>：<br>yyyy-MM-dd HH:mm:ss</li> <li><strong>year</strong>：yyyy</li> <li><strong>month</strong>：yyyy-MM</li></ul></td></tr> 
                        <tr><td>placement</td> <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td> <td>String</td> <td>bottom-start</td></tr> 
                        <tr><td>placeholder</td> <td>占位文本</td> <td>String</td> <td>空</td></tr> 
                        <tr><td>options</td> <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td> <td>Object</td> <td>-</td></tr> 
                        <tr><td>split-panels</td> <td>开启后，左右面板不联动，仅在 <code>daterange</code> 和 <code>datetimerange</code> 下可用。</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>multiple</td> <td>开启后，可以选择多个日期，仅在 <code>date</code> 下可用。</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>show-week-numbers</td> <td>开启后，可以显示星期数。</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>start-date</td> <td>设置默认显示的起始日期。</td> <td>Date</td> <td>-</td></tr> 
                        <tr><td>confirm</td> <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>open</td> <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td> <td>Boolean</td> <td>null</td></tr> 
                        <tr><td>size</td> <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>disabled</td> <td>是否禁用选择器</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>clearable</td> <td>是否显示清除按钮</td> <td>Boolean</td> <td>true</td></tr> 
                        <tr><td>readonly</td> <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>editable</td> <td>文本框是否可以输入，只在没有使用 slot 时有效</td> <td>Boolean</td> <td>true</td></tr> 
                        <tr><td>transfer</td> <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>element-id</td> <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td> <td>String</td> <td>-</td></tr> 
                        <tr><td>time-picker-options</td> <td>可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：<code>:time-picker-options="{steps: [1, 10, 10]}"</code></td> <td>Object</td> <td>{}</td></tr> 
                        <tr><td>separator <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td> <td>两个日期间的分隔符</td> <td>String</td> <td> - </td></tr> 
                        <tr><td>capture <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否开启 capture 模式，也可通过全局配置</td> <td>Boolean</td> <td>true</td></tr>
                    </tbody>

                </table>

                <Anchor title="VFormItem 日期选择 events" h3></Anchor>
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
                        <tr><td>@on-open-change</td> <td>弹出日历和关闭日历时触发</td> <td>true | false</td></tr> 
                        <tr><td>@on-ok</td> <td>在 confirm 模式下有效，点击确定按钮时触发</td> <td>-</td></tr> 
                        <tr><td>@on-clear</td> <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td> <td>-</td></tr> 
                        <tr><td>@on-clickoutside <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td> <td>点击外部关闭下拉菜单时触发</td> <td>event</td></tr>
                    </tbody>

                </table>

            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/datePicker';
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