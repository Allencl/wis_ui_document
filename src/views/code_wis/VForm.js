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
				v-model="maintainForm.name" 
				type="text" 
				label="姓名" 
				name="name" 
				required
			>
			</VFormItem>
		</VForm>
	</VPage>
</template>
<script>
	export default {

		data () {
			return {
				maintainForm:{}
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