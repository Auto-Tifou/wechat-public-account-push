/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx084715dba0dce42c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '626939e99691cd80c520f1e9e7a23e72',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oU0nf6RfJaydHOa-EYeXRVR1LIZ0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '85M61s3aUbhlGkwJrcuJTsZzpEcUdEn09zs3m4diXKk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '1998', date: '07-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '1998', date: '07-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '12-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-01-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'hEBvA5kGEOJlJOjGgp4_pnHUSBCA8Tz0pp8yvj5G40M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oU0nf6fHrV9k4ZJsX3KriDd_A_HQ',
    }
  ],

}

module.exports = USER_CONFIG
