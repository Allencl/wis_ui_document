let code = {};


code.HTML = `
<template>
	<VPage :pageUrl="listUrl" :subRouter="true">
		<VSearch :model="searchForm">
					<VSearchColumn v-model="searchForm.module" label="concurrenceConfig.module" permissionCode="module" name="module" type="text" typeCode=""></VSearchColumn>
			<VSearchColumn v-model="searchForm.key" label="concurrenceConfig.key" permissionCode="key" name="key" type="text" typeCode=""></VSearchColumn>
			<VSearchColumn v-model="searchForm.name" label="concurrenceConfig.name" permissionCode="name" name="name" type="text" typeCode=""></VSearchColumn>
			<VSearchColumn v-model="searchForm.serviceName" label="concurrenceConfig.serviceName" permissionCode="serviceName" name="serviceName" type="text" typeCode=""></VSearchColumn>
			<VSearchColumn v-model="searchForm.strategy" label="concurrenceConfig.strategy" permissionCode="strategy" name="strategy" type="select" typeCode="CONCURRENCE_STRATEGY"></VSearchColumn>
		</VSearch>
		<VGrid :listColumns="listColumns" v-on:select="(x) => selections=x" ref="vgrid">
			<VButton :disabled="selections.length<=-1" iconText="md-add" label="common.form.add" permissionCode="ConcurrenceConfigEdit" v-on:click="toForm('ADD')"/>
			<VButton :disabled="selections.length!=1" iconText="ios-create-outline" label="common.form.update" permissionCode="ConcurrenceConfigEdit" v-on:click="toForm('UPDATE')"/>
			<VButton :disabled="selections.length<1" iconText="md-trash" label="common.form.delete" permissionCode="ConcurrenceConfigEdit"  v-on:click="handleDelete()"/>
			<VButton :disabled="selections.length!=1" iconText="eye" label="common.form.view" permissionCode="ConcurrenceConfigEdit"  v-on:click="toForm('VIEW')"/>
		</VGrid>
	</VPage>
</template>


<script>
	export default {
		data() {
			return {
				searchForm: {'id':'','module':'','key':'','name':'','serviceName':'','strategy':''},
				selections:[],
				listUrl:'concurrence/config/list.do',
				listColumns: [
					 {type: 'selection',width: 60}
					,{title:this.$t('concurrenceConfig.module'),key: 'module'}
					,{title:this.$t('concurrenceConfig.key'),key: 'key'}
					,{title:this.$t('concurrenceConfig.name'),key: 'name'}
					,{title:this.$t('concurrenceConfig.serviceName'),key: 'serviceName'}
					,{title:this.$t('concurrenceConfig.strategy'),key: 'strategy'}
				]
			};
		},
		methods: {
			toForm:function(type){
				this.$router.push({ name: 'concurrenceConfigForm', params: { id:this.selections.length>0?this.selections[0].id:'',type:type }});
			},
			handleDelete:function () {
				let me=this;
				app.utils.deleteData(this.selections,'concurrence/config/concurrenceConfig/delete.do',function(){
					me.$refs["vgrid"].refresh();
				});
			}
		}
	};
</script>

`;

export default code;