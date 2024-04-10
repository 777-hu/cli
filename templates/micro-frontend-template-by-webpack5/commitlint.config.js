module.exports = {
	extends: ['cz', '@commitlint/config-conventional'],
	rules: {
		'type-enum': [
				2,           // 表示必须输入的
				'always', [
						'✨ 特性', 
						'🐛 修复', 
						'📝 文档', 
						'💄 格式', 
						'♻️ 重构', 
						'🌀 样式', 
						'⚡️ 性能', 
						'✅ 测试', 
						'🔧 工具',
						'⏪ 回滚',
						'⬆️ 升级',
						'⬇️ 降级'
				 ]
		],
		'type-empty': [2,'always','type-enum'],
		'type-case': [2,'never','lower-case'], 
		'subject-empty': [0, 'never'],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	}
};