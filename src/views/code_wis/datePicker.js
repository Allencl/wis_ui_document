let code = {};


code.HTML = `
<template>
	<VPage type='Form'>
		<VForm 
			ref="maintainForm"  
			:model="maintainForm" 
			:title="标题" 
			@submit="submit" 
		>
			<VFormItem  
				v-model="maintainForm.time" 
				label="时间选择" 
				name="time" 
				type="date"
			>
			</VFormItem>


		</VForm>
	</VPage>
</template>
<script>
	export default {
		data () {
			return {
				maintainForm:{time:""}
			}
		},
		methods: {
			submit:function () {
				this.$refs['maintainForm'].validate((valid) => {
					if (valid) {
						app.utils.showMessage("表单验证成功！",1);
					} else {
						app.utils.showMessage("表单验证失败！",2);
					}
				});
			}
		}
	};
</script>

`;

export default code;