let code = {};


code.HTML = `
<template>
	<VPage :pageUrl="'concurrence/config/list.do'" :subRouter="true">
		<VSearch 
			:model="searchForm"
		>
			<VSearchColumn 
				v-model="searchForm.name" 
				type="text" 
				label="姓名" 
				name="name" 
			>
			</VSearchColumn>

			<VSearchColumn 
				v-model="searchForm.createTime" 
				type="date" 
				label="时间" 
				name="createTime" 
			>
			</VSearchColumn>

            <VSearchColumn
				v-model='searchForm.num' 
				type="number" 
				label='数字'   
				name='num'  		
				
			>
			</VSearchColumn>

			<VSearchColumn 
				v-model='searchForm.enabled' 
				type="select" 
				label='数据字典' 
				name='enabled' 
				typeCode="YES_OR_NO"
			>
			</VSearchColumn>



		</VSearch>

		<VGrid 
			:listColumns="listColumns" 
		>
		</VGrid>
	</VPage>
</template>


<script>
	export default {
		data() {
			return {
				searchForm: {name:'',num:0,createTime:'',enabled:''},
				listColumns: [{title:"姓名",key: 'name'}]
			};
		},
		methods: {

		}
	};
</script>

`;

export default code;