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
				searchForm: {'name':''},
				listColumns: [{title:"姓名",key: 'name'}]
			};
		},
		methods: {

		}
	};
</script>
`;

export default code;