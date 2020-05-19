let code = {};

code.import = `
"usingComponents": {
    "i-rate": "../../dist/rate/index"
}
`;
code.usage = `
<i-cell-group>
    <i-cell title="基本用法">
        <i-rate 
            bind:change="onChange1" 
            value="{{starIndex1}}">
        </i-rate>
    </i-cell>
    <i-cell title="自定义星星个数">
        <i-rate 
            count="{{10}}"
            value="{{starIndex5}}">
        </i-rate>
    </i-cell>
    <i-cell title="自定义星星大小">
        <i-rate 
            bind:change="onChange2" 
            value="{{starIndex2}}" 
            size="32">
        </i-rate>
    </i-cell>
    <i-cell title="自定义文字说明">
        <i-rate 
            bind:change="onChange2" 
            value="{{starIndex2}}">
            {{starIndex2}}星
        </i-rate>
    </i-cell>
     <i-cell title="手势touch选择星">
        <i-rate 
            bind:change="onChange3" 
            value="{{starIndex3}}">
            {{starIndex3}}星
        </i-rate>
    </i-cell>
    <i-cell title="禁用点击和手势选择星">
        <i-rate 
            disabled="{{true}}"
            value="{{starIndex4}}">
            {{starIndex4}}星
        </i-rate>
    </i-cell>
</i-cell-group>
`;

code.js = `
Page({
    data : {
        starIndex1 : 0,
        starIndex2 : 0,
        starIndex3 : 0,
        starIndex4 : 4,
        starIndex5 : 5
    },
    onChange1(e){
        const index = e.detail.index;
        this.setData({
            'starIndex1' : index
        })
    },
    onChange2(e){
        const index = e.detail.index;
        this.setData({
            'starIndex2' : index
        })
    },
    onChange3(e){
        const index = e.detail.index;
        this.setData({
            'starIndex3' : index
        })
    },
    onChange5(e){
        const index = e.detail.index;
        this.setData({
            'onChange5' : index
        })
    }
});
`;

export default code;