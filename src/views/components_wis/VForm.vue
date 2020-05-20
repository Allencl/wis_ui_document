<template>
    <i-article>
        <article>
            <h1>VForm 组件</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VForm props" h3></Anchor>
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
                            <td>页面类型。可选值Drawer、Modal、Page。</td> 
                            <td>String</td> 
                            <td>Drawer</td>
                        </tr> 
                        <tr>
                            <td>fullscreen</td> 
                            <td>是否全屏。type等于Modal时有效。</td> 
                            <td>Boolean</td> 
                            <td>false</td>
                        </tr> 
                        <tr>
                            <td>formName</td> 
                            <td>form表单默认ref值。</td> 
                            <td>String</td> 
                            <td>maintainForm</td>
                        </tr>                         
                        <tr>
                            <td>className</td> 
                            <td>VForm class名称。</td> 
                            <td>String</td> 
                            <td>-</td>
                        </tr>  
                        <tr>
                            <td>classModal</td> 
                            <td>type等于Modal时，Modal的class名称。</td> 
                            <td>String</td> 
                            <td>-</td>
                        </tr>  
                        <tr>
                            <td>submitTxt</td> 
                            <td>提交按钮文字。</td> 
                            <td>String</td> 
                            <td>提交</td>
                        </tr>                          
                        <tr>
                            <td>cancelTxt</td> 
                            <td>取消按钮文字。</td> 
                            <td>String</td> 
                            <td>取消</td>
                        </tr> 
                        <tr>
                            <td>cancelTxt</td> 
                            <td>取消按钮文字。</td> 
                            <td>String</td> 
                            <td>取消</td>
                        </tr> 
                        <tr>
                            <td>hideBtn</td> 
                            <td>是否全部隐藏按钮。</td> 
                            <td>Boolean</td> 
                            <td>false</td>
                        </tr> 
                        <tr>
                            <td>btnOk</td> 
                            <td>是否隐藏提交按钮。</td> 
                            <td>Boolean</td> 
                            <td>false</td>
                        </tr> 
                        <tr>
                            <td>btnCancel</td> 
                            <td>是否隐藏取消按钮。</td> 
                            <td>Boolean</td> 
                            <td>false</td>
                        </tr>      
                        <tr>
                            <td>autoBack</td> 
                            <td>点击取消后，是否回到之前的路由地址，若没有回到home页。</td> 
                            <td>Boolean</td> 
                            <td>true</td>
                        </tr>                         


                        <tr><td>model</td> <td>表单数据对象</td> <td>Object</td> <td>-</td></tr> 
                        <tr><td>rules</td> <td>表单验证规则，具体配置查看 <a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="ivu-icon ivu-icon-social-github"></i> async-validator</a></td> <td>Object</td> <td>-</td></tr> 
                        <tr><td>inline</td> <td>是否开启行内表单模式</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>label-position</td> <td>表单域标签的位置，可选值为 <code>left</code>、<code>right</code>、<code>top</code></td> <td>String</td> <td>right</td></tr> 
                        <tr><td>label-width</td> <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td> <td>Number</td> <td>-</td></tr> 
                        <tr><td>show-message</td> <td>是否显示校验错误信息</td> <td>Boolean</td> <td>true</td></tr> 
                        <tr><td>autocomplete</td> <td>原生的 autocomplete 属性，可选值为 off 或 on</td> <td>String</td> <td>off</td></tr> 
                        <tr><td>hide-required-mark <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否隐藏所有表单项的必选标记</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>label-colon <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否自动在 label 名称后添加冒号</td> <td>Boolean</td> <td>false</td></tr> 
                        <tr><td>disabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td> <td>是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）</td> <td>Boolean</td> <td>false</td></tr>
                    </tbody>
                </table>

                <Anchor title="VForm events" h3></Anchor>
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
                            <td>@submit</td>
                            <td>表单提交。</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>@cancel</td>
                            <td>点击取消触发。</td>
                            <td>-</td>
                        </tr> 
                        <tr>
                            <td>@on-validate</td>
                            <td>任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息。</td>
                            <td>prop, status, error</td>
                        </tr>                         
                    </tbody>
                </table>

                <Anchor title="VForm methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th> 
                            <th>说明</th> 
                            <th>参数</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr><td>validate</td> <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise</td> <td>callback</td></tr> 
                        <tr><td>validateField</td> <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td> <td>callback</td></tr> 
                        <tr><td>resetFields</td> <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td> <td>无</td></tr>
                    </tbody>
                </table>

            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../code_wis/VForm';
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