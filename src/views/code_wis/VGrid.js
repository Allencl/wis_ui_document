let code = {};


code.HTML = `
<template>
	<VPage :subRouter="true">
		<VSearch :model="searchForm">
			<VSearchColumn v-model="searchForm.name" label="姓名" name="name"></VSearchColumn>
		</VSearch>

		<VGrid 
			ref="vgrid"
			:gridUrl="'concurrence/config/list.do'"
			:listColumns="listColumns" 
			@select="(x) => selections=x" 
		>
			<VButton :disabled="selections.length<=-1" iconText="md-add" label="common.form.add" @click="clickHandle" />
			<VButton :disabled="selections.length!=1" iconText="ios-create-outline" label="common.form.update" @click="clickHandle" />
			<VButton :disabled="selections.length<1" iconText="md-trash" label="common.form.delete" @click="clickHandle" />
			<VButton :disabled="selections.length!=1" iconText="eye" label="common.form.view" @click="clickHandle" />
		</VGrid>
	</VPage>
</template>


<script>
	export default {
		data() {
			return {
				searchForm: {'name':''},
				selections:[],
				listColumns: [
					{type: 'selection',width: 60},
					{title:"姓名",key:'name'}
				]
			};
		},
		methods: {
			/**
			 * 按钮点击事件
			 */
			clickHandle(){
				console.log("按钮点击事件");
			}
		}
	};
</script>

`;

export default code;