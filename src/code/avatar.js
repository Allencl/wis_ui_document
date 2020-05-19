let code = {};

code.import = `
"usingComponents": {
    "i-avatar": "../../dist/avatar/index"
}
`;
code.usage = `
<i-avatar size="small">梁</i-avatar>
<i-avatar>梁</i-avatar>
<i-avatar size="large">梁</i-avatar>

<i-avatar size="small" shape="square">A</i-avatar>
<i-avatar shape="square">A</i-avatar>
<i-avatar size="large" shape="square">A</i-avatar>

<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"></i-avatar>
<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default"></i-avatar>
<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar>

<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" shape="square"></i-avatar>
<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square"></i-avatar>
<i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" shape="square"></i-avatar>
`;

export default code;