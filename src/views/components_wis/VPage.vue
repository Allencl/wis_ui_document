<template>
    <i-article>
        <article>
            <h1>VPage 页面组件</h1>

            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.HTML }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="VPage properties" h3></Anchor>
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
                            <td>pageUrl</td>
                            <td>
                                对应 VGrid的服务器请求地址，只能绑定一个VGrid。当一个页面有多个VGrid时，请求地址绑定在 VGrid的gridUrl上。详细参考VGrid属性gridUrl说明。
                            </td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>subRouter</td>
                            <td>当前 Vpage是否为一个独立的页面。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>页面类型，可选值为 list、form。</td>
                            <td>String</td>
                            <td>list</td>
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
    import Code from '../code_wis/VPage';
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