/* 配置文件 index.js */
// 公共变量
const com = {
    IP: JSON.stringify('172.16.70.44')
};
module.exports = {
    // 开发环境变量
    dev: {
    	env: {
            TYPE: JSON.stringify('dev'),
            TEST: JSON.stringify('ga'),
            ...com
    	}
    },
    stage:{
        env:{
            TYPE: JSON.stringify('stage'),
        }
    },
    // 生产环境变量
    build: {
    	env: {
            TYPE: JSON.stringify('prod'),
            ...com
    	}
    }
}