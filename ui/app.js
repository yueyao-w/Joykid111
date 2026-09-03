const pageButtons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");
const mobileTabs = document.querySelectorAll(".mobile-tab");
const switchChild = document.querySelector("#switchChild");
const homeChildProfile = document.querySelector("#homeChildProfile");
const mineSwitchChild = document.querySelector("#mineSwitchChild");
const childPickerModal = document.querySelector("#childPickerModal");
const childPickerClose = document.querySelector("#childPickerClose");
const childOptions = document.querySelector("#childOptions");
const homeReportCamera = document.querySelector("#homeReportCamera");
const homeReportFiles = document.querySelector("#homeReportFiles");
const homeReportUploadStatus = document.querySelector("#homeReportUploadStatus");
const folderReportCamera = document.querySelector("#folderReportCamera");
const folderReportFiles = document.querySelector("#folderReportFiles");
const folderReportUploadStatus = document.querySelector("#folderReportUploadStatus");
const folderImportButton = document.querySelector("#folderImportButton");

const children = [
  {
    name: "卓卓",
    meta: "7 岁 3 个月｜男孩",
    avatar: "./assets/joykid-boy-avatar.png",
    profileMeta: "7 岁 3 个月｜男孩｜档案完整度 92%",
    defaultPlan: "vision",
    metrics: ["128.6 cm", "26.5 kg", "16.0 正常"],
    score: 79,
    scoreTag: "管理基线",
    scoreTrend: "改善计划开始前",
    fiveScores: ["52分", "88分", "91分", "95分", "68分"],
    taskSummary: "全部任务 4/5",
    tasks: [
      { coin: "+20", title: "户外活动 ≥2小时", desc: "1.2/2 小时", action: "去完成", done: false },
      { coin: "+10", title: "早睡打卡", desc: "已完成", action: "✓", done: true },
    ],
    package: {
      title: "小眼镜近视防控包",
      desc: "护眼台灯 + 2次在线问诊 + 线下儿童眼科号源 + JD专属券",
      source: "基于医院/体检/儿保数据生成",
    },
    points: "1,280",
    gifts: "3 份",
    report: {
      badge: "新报告",
      title: "儿童健康体检报告已同步",
      source: "北京儿童医院",
      sourceType: "医院体检",
      date: "2026.08.05",
      fullDate: "2026年8月5日",
      auditStatus: "医生已审核",
      total: 18,
      normal: 16,
      attention: 2,
      comparable: 12,
      aiTitle: "本次重点关注视力变化",
      aiInsight: "生长发育整体稳定，右眼远视储备与眼轴变化需要持续观察。建议结合户外行为记录，并按医生建议完成复查。",
      doctor: "张医生 · 儿童眼科",
      doctorAdvice: "建议 3 个月内复查裸眼视力、屈光度与眼轴长度；每日保证 2 小时户外活动，连续近距离用眼不超过 30-40 分钟。",
      metrics: [
        { name: "身高", value: "128.6 cm", note: "P72", status: "正常" },
        { name: "BMI", value: "16.0", note: "同龄正常范围", status: "正常" },
        { name: "裸眼视力", value: "右4.8 / 左4.9", note: "右眼较上次下降", status: "需关注", attention: true },
        { name: "眼轴长度", value: "右24.2 / 左24.0 mm", note: "右眼增长偏快", status: "需关注", attention: true },
        { name: "血红蛋白", value: "132 g/L", note: "无贫血风险", status: "正常" },
        { name: "维生素D", value: "31.6 ng/mL", note: "充足", status: "正常" },
      ],
      findings: [
        { title: "右眼远视储备不足", desc: "较上次检查继续下降，建议结合屈光度与用眼行为综合评估。", tag: "建议复查", type: "vision" },
        { title: "右眼眼轴增长偏快", desc: "近 6 个月增长约 0.20mm，需要连续监测变化趋势。", tag: "持续监测", type: "trend" },
      ],
    },
    medicalRecord: {
      badge: "新病历",
      title: "眼科就诊病历已同步",
      source: "北京儿童医院",
      department: "儿童眼科",
      date: "2026.08.06",
      fullDate: "2026年8月6日",
      signStatus: "医生已签名",
      diagnosisLabel: "近视已确诊",
      diagnosisStatus: "已确诊",
      diagnosisTitle: "双眼近视",
      diagnosisMetrics: [
        { label: "右眼等效球镜", value: "-3.13D" },
        { label: "左眼等效球镜", value: "-3.50D" },
      ],
      diagnosisNote: "睫状肌麻痹后等效球镜均低于 -0.50D，医院诊断为双眼近视。诊断信息来自病历原文，Joykid 不修改诊断结论。",
      refraction: {
        examType: "睫状肌麻痹验光（散瞳）",
        method: "电脑验光 + 检影复核",
        accommodation: "睫状肌麻痹充分",
        eyes: [
          { eye: "右眼 OD", sphere: "-2.75D", cylinder: "-0.75D", axis: "175°", se: "-3.13D", bcva: "5.0" },
          { eye: "左眼 OS", sphere: "-3.25D", cylinder: "-0.50D", axis: "10°", se: "-3.50D", bcva: "5.0" },
        ],
      },
      doctor: "张医生",
      prescription: {
        name: "低浓度阿托品滴眼液",
        usage: "具体浓度、滴数和使用眼别以电子处方原文为准",
        quantity: "1 瓶",
        supply: "预计可使用 7 天",
        currentRemainingDays: 7,
        reminder: "今晚 21:00",
      },
      adviceTitle: "按时用药并定期复查",
      advice: [
        "严格按照电子处方中的浓度、滴数和使用眼别用药",
        "如出现明显畏光、视近模糊或其他不适，及时联系开方医生",
        "每日保证 2 小时户外活动，连续近距离用眼不超过 30-40 分钟",
      ],
      followUp: "2026年8月16日",
      followUpShort: "8月16日需复诊",
    },
    growthProfile: {
      score: 79,
      trend: "同步病历后 -5 分",
      history: [84, 85, 86, 85, 84, 79],
      summary: "生长与牙齿健康状态良好；近视已确诊，需持续就医管理，社交沟通表现建议主动改善并观察。",
      dimensions: [
        { name: "生长发育", short: "生长", score: 91, detail: "身高 · BMI · 生长速度" },
        { name: "牙齿健康", short: "牙齿", score: 88, detail: "龋齿风险 · 口腔习惯" },
        { name: "视力发育", short: "视力", score: 52, detail: "散瞳SE 右-3.13 · 左-3.50D" },
        { name: "心理情绪", short: "心理", score: 68, detail: "社交沟通 · 主动互动" },
        { name: "行为习惯", short: "行为", score: 86, detail: "睡眠 · 运动 · 屏幕时间" },
      ],
      labels: [
        { text: "长高潜力较高", type: "positive" },
        { text: "近视已确诊", type: "risk" },
        { text: "社交沟通轻度关注", type: "attention" },
        { text: "眼科持续管理", type: "risk" },
        { text: "主动互动待提升", type: "attention" },
        { text: "牙齿健康良好", type: "positive" },
        { text: "生长发育正常", type: "positive" },
        { text: "运动能力良好", type: "positive" },
        { text: "肥胖风险低", type: "positive" },
      ],
      adultHeight: "176",
      heightRange: "±3cm",
      potential: "92",
      insight: "生长速度、牙齿健康与运动状态处于良好区间。当前优先级是按眼科医嘱管理近视，并通过亲子游戏、同伴活动和情绪表达练习改善社交沟通；若表现持续或加重，建议由发育行为儿科或儿童心理专业人员评估。",
      completeness: "92%",
      timeline: [
        { age: "出生", title: "出生基础档案", desc: "足月出生，身高 50cm、体重 3.4kg，基础发育情况良好。" },
        { age: "3岁", title: "生长曲线进入 P65", desc: "身高体重增长稳定，牙齿健康和基础发育情况良好。" },
        { age: "6岁", title: "首次出现近视风险", desc: "远视储备下降，家庭开始记录户外与近距离用眼时长。" },
        { age: "7岁", title: "社交沟通轻度关注", desc: "主动互动和情绪表达偏少，当前先进行家庭与同伴场景改善并持续观察。" },
        { age: "现在", title: "当前管理重点", desc: "近视已由医院确诊并进入持续管理；生长、牙齿健康和日常行为指标整体正常，社交沟通持续观察。" },
      ],
    },
    vision: {
      score: "52",
      note: "医院已确诊双眼近视｜按医嘱用药并于 8 月 16 日复诊",
      program: {
        period: "14天专项改善计划",
        title: "近视防控强化方案",
        stage: "07.28-08.10｜第 1 阶段",
      },
      data: [
        ["裸眼视力", "右4.8 / 左4.9", "需持续监测"],
        ["散瞳等效球镜", "右-3.13 / 左-3.50D", "医院已确诊"],
        ["眼轴长度", "24.2 mm", "较上月 +0.1mm"],
        ["户外活动", "2.1 小时/天", "较上月 ↑0.4h"],
      ],
      advice: [
        "按电子处方使用低浓度阿托品，浓度、滴数与使用眼别以处方原文为准",
        "连续近距离用眼不超过 30-40 分钟，配合 20-20-20 游戏",
        "保持每日户外活动 2 小时，优先安排在放学后自然光环境",
        "2026年8月16日按期复诊，由眼科医生评估控制效果和后续方案",
      ],
      records: [
        { icon: "outdoor", title: "户外记录", desc: "已完成 1.2 小时 / 目标 2 小时", action: "去记录" },
        { icon: "eye-rest", title: "用眼记录", desc: "近距离用眼 3 次，最长 42 分钟", action: "去记录" },
        { icon: "sleep", title: "睡眠记录", desc: "昨晚 9.5 小时，入睡时间 21:42", action: "去记录" },
      ],
      dailyPlanSummary: "完成 1/4",
      dailyPlan: [
        { icon: "outdoor", title: "放学后户外 40 分钟", desc: "自然光运动，减少近视进展风险", action: "打卡", done: false },
        { icon: "video", title: "护眼运动视频", desc: "跟练 15 分钟，完成远眺和追光", action: "已打卡", done: true },
        { icon: "posture", title: "读写姿势检查", desc: "灯光、距离、坐姿三项确认", action: "打卡", done: false },
        { icon: "rest", title: "20-20-20 闯关", desc: "每 30 分钟远眺 20 秒", action: "打卡", done: false },
      ],
    },
    growth: {
      score: "91",
      note: "身高趋势良好｜优先提升运动和饮食执行",
      program: {
        period: "21天专项改善计划",
        title: "生长发育支持方案",
        stage: "07.28-08.17｜运动 + 饮食第 1 阶段",
      },
      data: [
        ["身高", "128.6 cm", "较上月 ↑1.2cm"],
        ["年生长速度", "6.2 cm", "优秀"],
        ["身高百分位", "72%", "中上"],
        ["BMI", "16.0", "正常"],
      ],
      advice: [
        "保证 9-11 小时睡眠，固定 21:30 前进入睡前流程",
        "每天 60 分钟中高强度运动，优先跳跃、跑跳和球类",
        "早餐增加优质蛋白，晚餐补足蔬菜和钙来源",
        "每月固定日期记录身高体重，观察趋势而非单点数值",
      ],
      records: [
        { icon: "meal", title: "饮食记录", desc: "早餐蛋白达标，晚餐需补充蔬菜", action: "去记录" },
        { icon: "sport", title: "运动记录", desc: "跳跃训练 8/10 分钟，接近完成", action: "去记录" },
        { icon: "sleep", title: "睡眠记录", desc: "昨晚 9.7 小时，睡眠稳定", action: "去记录" },
      ],
      dailyPlanSummary: "完成 2/4",
      dailyPlan: [
        { icon: "protein", title: "蛋白早餐挑战", desc: "牛奶 + 鸡蛋/豆制品，补足早餐蛋白", action: "已打卡", done: true },
        { icon: "jump", title: "跳跃训练 10 分钟", desc: "跟 Joykid 完成长高跳跳操", action: "打卡", done: false },
        { icon: "stretch", title: "睡前拉伸 8 分钟", desc: "放松身体，帮助进入睡眠流程", action: "打卡", done: false },
        { icon: "measure", title: "本周身高记录", desc: "固定时间测量并同步档案", action: "已打卡", done: true },
      ],
    },
    chat: {
      summary: "基于卓卓的“五小”画像，解释风险、推荐服务包和下一步计划。",
      user: "孩子不愿意做护眼训练怎么办？",
      bot2: "可以从游戏视频开始，把训练拆成 3 分钟小关卡。完成后给孩子即时鼓励和礼品兑换预期，执行意愿会更稳定。",
      quick: ["帮我生成今晚的护眼小游戏", "这个服务包适合卓卓吗？", "什么时候需要复诊？"],
      reply: "结合卓卓当前评估，建议先记录 7 天行为数据，再根据变化决定是否复查。若出现视力持续下降、身高增长明显放缓或其他异常，请及时预约专业医生。",
    },
  },
  {
    name: "依依",
    meta: "6 岁 8 个月｜女孩",
    avatar: "./assets/joykid-girl-avatar.png",
    profileMeta: "6 岁 8 个月｜女孩｜档案完整度 86%",
    defaultPlan: "growth",
    metrics: ["112.4 cm", "18.1 kg", "14.3 偏低"],
    score: 66,
    scoreTag: "需关注",
    scoreTrend: "较上月 ↓7 分",
    fiveScores: ["68分", "84分", "62分", "90分", "76分"],
    taskSummary: "重点任务 1/5",
    tasks: [
      { coin: "+20", title: "蛋白早餐挑战", desc: "今日未完成", action: "去完成", done: false },
      { coin: "+15", title: "跳跃运动 10分钟", desc: "待开始", action: "去训练", done: false },
    ],
    package: {
      title: "小豆芽生长管理包",
      desc: "生长月报 + 饮食运动计划 + 儿保医生复核 + 营养商品履约",
      source: "身高百分位偏低，建议优先管理运动和营养",
    },
    points: "640",
    gifts: "1 份",
    report: {
      badge: "新报告",
      title: "学校健康体检报告已同步",
      source: "朝阳实验小学",
      sourceType: "学校体检",
      date: "2026.08.04",
      fullDate: "2026年8月4日",
      auditStatus: "校医已审核",
      total: 15,
      normal: 12,
      attention: 3,
      comparable: 10,
      aiTitle: "生长速度与视力需要优先复核",
      aiInsight: "身高百分位、BMI 与裸眼视力同时出现需要关注的变化。学校筛查不能替代临床诊断，建议预约儿保和儿童眼科完成专业复核。",
      doctor: "王校医 · 儿童保健",
      doctorAdvice: "建议家长携报告前往儿保门诊复核生长曲线，并在 1 个月内完成儿童眼科检查。近期记录早餐、睡眠与户外活动情况。",
      metrics: [
        { name: "身高", value: "112.4 cm", note: "P18，近期增速偏慢", status: "需关注", attention: true },
        { name: "BMI", value: "14.3", note: "体重偏轻", status: "需关注", attention: true },
        { name: "裸眼视力", value: "右4.7 / 左4.7", note: "较上学期下降", status: "需关注", attention: true },
        { name: "血红蛋白", value: "124 g/L", note: "正常", status: "正常" },
        { name: "口腔检查", value: "乳牙龋齿 1 颗", note: "建议口腔随访", status: "随访" },
        { name: "脊柱筛查", value: "未见异常", note: "体态正常", status: "正常" },
      ],
      findings: [
        { title: "身高百分位偏低", desc: "近 12 个月生长速度低于同龄预期，建议儿保复核生长曲线。", tag: "儿保复核", type: "growth" },
        { title: "裸眼视力下降", desc: "学校筛查结果提示双眼视力下降，需要眼科进一步验光。", tag: "眼科检查", type: "vision" },
        { title: "BMI 偏低", desc: "结合饮食记录评估能量与优质蛋白摄入情况。", tag: "营养评估", type: "nutrition" },
      ],
    },
    medicalRecord: {
      badge: "新病历",
      title: "儿童保健门诊病历已同步",
      source: "北京儿童医院",
      department: "儿童保健科",
      date: "2026.08.05",
      fullDate: "2026年8月5日",
      signStatus: "医生已签名",
      diagnosisLabel: "生长发育待复核",
      diagnosisStatus: "待复核",
      diagnosisTitle: "生长速度偏慢",
      diagnosisMetrics: [
        { label: "身高百分位", value: "P18" },
        { label: "年生长速度", value: "4.1cm" },
      ],
      diagnosisNote: "医生建议结合连续生长曲线进一步评估。该记录属于门诊判断，后续检查结果需由医生复核。",
      doctor: "李医生",
      prescription: null,
      adviceTitle: "完善评估并连续记录生长数据",
      advice: [
        "连续记录身高、体重与睡眠，避免依据单次测量自行判断矮小",
        "保证均衡饮食与适龄运动，不自行使用增高类药品或补充剂",
        "按预约时间到儿童保健科复诊，由医生判断是否需要骨龄或实验室检查",
      ],
      followUp: "2026年8月20日",
      followUpShort: "8月20日需复诊",
    },
    growthProfile: {
      score: 66,
      trend: "近 6 个月 -4 分",
      history: [70, 69, 71, 68, 67, 66],
      summary: "生长速度和家庭行为数据出现偏离，建议优先完成儿保复核并启动营养运动干预。",
      dimensions: [
        { name: "生长发育", short: "生长", score: 62, detail: "身高 · BMI · 生长速度" },
        { name: "牙齿健康", short: "牙齿", score: 80, detail: "龋齿风险 · 刷牙习惯" },
        { name: "视力发育", short: "视力", score: 68, detail: "学校筛查 · 待眼科复核" },
        { name: "心理情绪", short: "心理", score: 82, detail: "情绪状态 · 社交能力" },
        { name: "行为习惯", short: "行为", score: 58, detail: "睡眠 · 户外 · 屏幕时间" },
      ],
      labels: [
        { text: "身高百分位偏低", type: "risk" },
        { text: "生长速度偏慢", type: "risk" },
        { text: "蛋白摄入不足", type: "attention" },
        { text: "户外时间不足", type: "attention" },
        { text: "屏幕时间偏长", type: "risk" },
        { text: "睡眠时长不足", type: "attention" },
        { text: "情绪总体稳定", type: "positive" },
        { text: "体重偏轻", type: "attention" },
      ],
      adultHeight: "160",
      heightRange: "±4cm",
      potential: "74",
      insight: "近 12 个月生长速度低于同龄预期，蛋白摄入、跳跃运动和睡眠时长是主要可干预因素。建议由儿保医生复核生长曲线后再动态校准预测。",
      completeness: "86%",
      timeline: [
        { age: "出生", title: "出生基础档案", desc: "足月出生，身高 49cm、体重 3.1kg，无早产及重大疾病史。" },
        { age: "4岁", title: "身高进入 P28", desc: "生长曲线开始放缓，儿保建议增加优质蛋白和规律运动。" },
        { age: "6岁", title: "视力与行为风险叠加", desc: "户外时间不足、屏幕时长偏高，裸眼视力出现下降。" },
        { age: "现在", title: "当前管理重点", desc: "生长曲线与行为习惯需要优先关注，建议完成儿保专业复核。" },
      ],
    },
    vision: {
      score: "68",
      note: "较上月 ↓5分｜屏幕时长偏高，需复查视力",
      program: {
        period: "14天专项改善计划",
        title: "视力下降干预方案",
        stage: "07.28-08.10｜先复查 + 控屏阶段",
      },
      data: [
        ["裸眼视力", "4.7", "较上月 ↓0.2"],
        ["屈光度", "-1.50D", "近视进展"],
        ["眼轴长度", "23.9 mm", "较上月 +0.2mm"],
        ["户外活动", "0.8 小时/天", "明显不足"],
      ],
      advice: [
        "本周优先完成一次儿童眼科复查，确认视力下降原因",
        "非学习屏幕控制在 30 分钟以内，睡前不使用平板",
        "每天至少 90 分钟自然光户外活动，逐步提升到 2 小时",
        "增加亲子户外游戏，降低孩子对屏幕任务的抵触",
      ],
      records: [
        { icon: "outdoor", title: "户外记录", desc: "今日 0.4 小时 / 目标 1.5 小时", action: "去记录" },
        { icon: "eye-rest", title: "用眼记录", desc: "屏幕 46 分钟，需减少睡前使用", action: "去记录" },
        { icon: "sleep", title: "睡眠记录", desc: "昨晚 8.8 小时，低于目标", action: "去记录" },
      ],
      dailyPlanSummary: "完成 0/4",
      dailyPlan: [
        { icon: "outdoor", title: "自然光户外 30 分钟", desc: "从短时户外开始，降低抵触", action: "打卡", done: false },
        { icon: "video", title: "护眼小游戏视频", desc: "先做 8 分钟闯关训练", action: "打卡", done: false },
        { icon: "posture", title: "屏幕距离检查", desc: "平板距离保持 40cm 以上", action: "打卡", done: false },
        { icon: "rest", title: "睡前无屏幕", desc: "睡前 60 分钟不使用平板", action: "打卡", done: false },
      ],
    },
    growth: {
      score: "62",
      note: "身高百分位偏低｜优先提升蛋白摄入和跳跃运动",
      program: {
        period: "21天专项改善计划",
        title: "小豆芽成长加油方案",
        stage: "07.28-08.17｜营养补足 + 跳跃训练",
      },
      data: [
        ["身高", "112.4 cm", "P18 偏低"],
        ["年生长速度", "4.1 cm", "低于预期"],
        ["体重", "18.1 kg", "偏轻"],
        ["BMI", "14.3", "偏低"],
      ],
      advice: [
        "建议儿保医生复核生长曲线，必要时评估骨龄和饮食摄入",
        "早餐加入牛奶、鸡蛋或豆制品，晚餐保证优质蛋白",
        "每天 10-15 分钟跳跃训练，搭配拉伸和户外跑跳",
        "固定 21:30 前睡眠流程，减少睡前兴奋和屏幕刺激",
      ],
      records: [
        { icon: "meal", title: "饮食记录", desc: "早餐蛋白未达标，建议补充牛奶/鸡蛋", action: "去记录" },
        { icon: "sport", title: "运动记录", desc: "跳跃训练 0/10 分钟，今日待完成", action: "去记录" },
        { icon: "sleep", title: "睡眠记录", desc: "目标 21:30 前入睡，今晚需提醒", action: "去记录" },
      ],
      dailyPlanSummary: "完成 0/4",
      dailyPlan: [
        { icon: "protein", title: "蛋白早餐挑战", desc: "牛奶 + 鸡蛋/豆制品，补足早餐蛋白", action: "打卡", done: false },
        { icon: "jump", title: "跳跃训练 10 分钟", desc: "跟 Joykid 完成长高跳跳操", action: "打卡", done: false },
        { icon: "stretch", title: "睡前拉伸 8 分钟", desc: "放松身体，帮助进入睡眠流程", action: "打卡", done: false },
        { icon: "measure", title: "本周身高记录", desc: "固定时间测量并同步档案", action: "打卡", done: false },
      ],
    },
    chat: {
      summary: "基于依依的异常指标，优先解释小豆芽生长风险、营养运动计划和是否需要儿保复核。",
      user: "依依需要去医院检查吗？",
      bot2: "建议先预约儿保或儿童生长发育门诊复核生长曲线。若医生认为必要，可进一步评估骨龄、饮食摄入和睡眠情况。",
      quick: ["依依身高偏低要检查骨龄吗？", "今天适合做什么长高运动？", "帮我生成一周蛋白早餐计划"],
      reply: "结合依依当前指标，建议优先完成儿保复核，并连续 2 周记录早餐蛋白、睡眠时间和跳跃运动执行情况。",
    },
  },
];

const zhuozhu10 = JSON.parse(JSON.stringify(children[0]));
Object.assign(zhuozhu10, {
  name: "卓卓1.0",
  meta: "7 岁 3 个月｜初次建档",
  profileMeta: "7 岁 3 个月｜男孩｜初次建档",
  demoVersion: "baseline",
  scoreTag: "初次建档",
  scoreTrend: "学校筛查后建档",
});
zhuozhu10.growthProfile.trend = "初次建档，待连续观察";
zhuozhu10.growthProfile.summary = "学校筛查提示视力风险，但尚未完成眼科诊断；当前先完善基础档案、专业复核和家庭行为记录。";
Object.assign(zhuozhu10, {
  score: 72,
  scoreTag: "资料待完善",
  scoreTrend: "学校筛查后初次建档",
  metrics: ["128.6 cm", "26.5 kg", "16.0 正常"],
  taskSummary: "建档任务 0/4",
  points: "0",
  gifts: "0 份",
});
zhuozhu10.report = {
  badge: "待复核",
  title: "学校视力筛查报告已同步",
  source: "XX实验小学",
  sourceType: "学校筛查",
  date: "2024.08.15",
  fullDate: "2024年8月15日",
  auditStatus: "校医已确认",
  total: 6,
  normal: 3,
  attention: 3,
  comparable: 4,
  aiTitle: "筛查提示视力下降，尚不能作为近视诊断",
  aiInsight: "双眼裸眼视力筛查未通过，目前只能说明存在风险。建议完成儿童眼科检查，在明确诊断前不自行用药或配镜。",
  doctor: "王校医 · 学校卫生室",
  doctorAdvice: "建议 1 个月内预约儿童眼科，复核裸眼视力、屈光状态与眼轴；同时记录户外活动和近距离用眼时长。",
  metrics: [
    { name: "右眼裸眼视力", value: "4.7", note: "低于学校筛查参考线", status: "需复核", attention: true },
    { name: "左眼裸眼视力", value: "4.8", note: "较上学期下降", status: "需复核", attention: true },
    { name: "日均户外", value: "0.8 小时", note: "来自家长首次填写", status: "待改善", attention: true },
    { name: "色觉", value: "正常", note: "筛查未见异常", status: "正常" },
  ],
  findings: [
    { title: "双眼视力筛查未通过", desc: "筛查只能发现风险，需要儿童眼科进一步检查后才能明确原因。", tag: "眼科复核", type: "vision" },
  ],
};
Object.assign(zhuozhu10.medicalRecord, {
  badge: "筛查记录",
  title: "学校健康筛查记录已同步",
  source: "XX实验小学",
  department: "校医室",
  date: "2024.08.15",
  fullDate: "2024年8月15日",
  signStatus: "校医已确认",
  diagnosisLabel: "筛查异常待复核",
  diagnosisStatus: "待复核",
  diagnosisTitle: "视力筛查异常",
  diagnosisMetrics: [
    { label: "右眼裸眼视力", value: "4.7" },
    { label: "左眼裸眼视力", value: "4.8" },
  ],
  diagnosisNote: "学校筛查不能替代散瞳验光或临床诊断，当前不应标记为近视已确诊。",
  refraction: null,
  prescription: null,
  doctor: "王校医",
  adviceTitle: "先完成专业复核与基础记录",
  advice: [
    "1个月内预约儿童眼科完成专业检查",
    "连续记录户外活动和近距离用眼时长",
    "明确诊断前不自行使用药物或配镜",
  ],
  followUp: "2024年9月15日前",
  followUpShort: "1个月内建议复核",
});
Object.assign(zhuozhu10.growthProfile, {
  score: 72,
  history: [72],
  completeness: "56%",
  dimensions: [
    { name: "生长发育", short: "生长", score: 86, detail: "身高 · BMI · 单次测量" },
    { name: "牙齿健康", short: "牙齿", score: 84, detail: "口腔筛查 · 刷牙习惯" },
    { name: "视力发育", short: "视力", score: 64, detail: "学校筛查 · 待眼科复核" },
    { name: "心理情绪", short: "心理", score: 80, detail: "首次家长问卷 · 待连续观察" },
    { name: "行为习惯", short: "行为", score: 72, detail: "户外 · 用眼 · 睡眠待记录" },
  ],
  labels: [
    { text: "生长基础数据正常", type: "positive" },
    { text: "视力筛查待复核", type: "attention" },
    { text: "户外记录待建立", type: "attention" },
    { text: "尚无临床诊断", type: "positive" },
  ],
  insight: "目前生长基础数据和口腔筛查未见明显异常。学校视力筛查提示风险，但尚不能作为近视诊断；建议先完成儿童眼科复核，并连续记录户外、近距离用眼和睡眠情况。",
  timeline: [
    { age: "出生", title: "出生基础档案", desc: "足月出生，身高 50cm、体重 3.4kg，基础情况良好。" },
    { age: "3岁", title: "常规儿保记录", desc: "身高体重沿既往曲线增长，未见明显偏离。" },
    { age: "7岁", title: "学校视力筛查未通过", desc: "双眼裸眼视力下降，建议儿童眼科进一步复核。" },
    { age: "现在", title: "初次建档", desc: "已同步学校筛查，家庭行为与医院检查资料仍待补充。" },
  ],
});
Object.assign(zhuozhu10.vision, {
  score: "64",
  note: "学校筛查提示风险｜尚未完成眼科诊断",
  program: { period: "7天建档观察", title: "视力复核准备计划", stage: "先记录 + 完成专业复核" },
  data: [
    ["右眼裸眼视力", "4.7", "学校筛查"],
    ["左眼裸眼视力", "4.8", "学校筛查"],
    ["屈光状态", "待检查", "尚无诊断"],
    ["户外活动", "0.8 小时/天", "首次填写"],
  ],
  advice: [
    "1个月内预约儿童眼科完成散瞳验光等专业检查",
    "明确诊断前不自行使用药物或配镜",
    "每天记录户外活动和连续近距离用眼时长",
    "带上学校筛查报告和既往体检资料就诊",
  ],
});
zhuozhu10.medicationCourse = null;
zhuozhu10.chat = {
  ...zhuozhu10.chat,
  summary: "基于卓卓1.0的初次建档信息，重点解答筛查异常、眼科复核和家庭记录怎么开始。",
  quick: ["学校筛查异常要马上复查吗？", "今天需要先做什么？", "怎么开始记录用眼习惯？"],
};

const zhuozhu20 = JSON.parse(JSON.stringify(children[0]));
Object.assign(zhuozhu20, {
  name: "卓卓2.0",
  meta: "7 岁 3 个月｜连续管理第 15 天",
  profileMeta: "7 岁 3 个月｜男孩｜连续管理第 15 天",
  demoVersion: "15-day-refill",
  score: 83,
  scoreTag: "持续改善",
  scoreTrend: "15天 ↑4 分",
  taskSummary: "今日任务 3/5",
});
zhuozhu20.medicalRecord.date = "2026.07.16";
zhuozhu20.medicalRecord.fullDate = "2026年7月16日";
zhuozhu20.medicalRecord.prescription.supply = "预计可使用 7 天";
zhuozhu20.medicalRecord.prescription.currentRemainingDays = 7;
zhuozhu20.medicalRecord.prescription.reminder = "今晚 21:00 · 第15天";
zhuozhu20.medicalRecord.followUp = "2026年8月16日";
zhuozhu20.medicalRecord.followUpShort = "8月16日需复诊";
zhuozhu20.growthProfile.score = 83;
zhuozhu20.growthProfile.trend = "连续管理15天，执行稳定";
zhuozhu20.growthProfile.history = [79, 80, 80, 81, 82, 83];
zhuozhu20.growthProfile.summary = "近视诊断与屈光指标暂未改变；连续15天用药、户外和家庭记录执行良好，成长管理状态稳步提升。";
zhuozhu20.growthProfile.dimensions = zhuozhu20.growthProfile.dimensions.map((dimension) => {
  if (dimension.name === "行为习惯") return { ...dimension, score: 93, detail: "连续用药 · 户外 · 用眼休息" };
  if (dimension.name === "心理情绪") return { ...dimension, score: 70, detail: "情绪表达 · 主动互动" };
  return dimension;
});
zhuozhu20.growthProfile.labels = [
  { text: "计划执行稳定", type: "positive" },
  { text: "计划连续打卡15天", type: "positive" },
  { text: "近视已确诊", type: "risk" },
  ...zhuozhu20.growthProfile.labels.filter((label) => !["近视已确诊", "眼科持续管理"].includes(label.text)),
];
zhuozhu20.medicationCourse = {
  courseDay: 15,
  adherence: "15/15",
  onTime: 14,
  supplemented: 1,
  remainingDays: 7,
  startDate: "2026年7月27日",
  lastRecord: "2026年8月10日 21:06",
  records: ["7/27", "7/28", "7/29", "7/30", "7/31", "8/01", "8/02", "8/03", "8/04", "8/05", "8/06", "8/07", "8/08", "8/09", "8/10"].map((date, index) => ({
    date,
    day: index + 1,
    status: index === 8 ? "补记" : "已用",
    time: index === 8 ? "次日 08:12" : `21:${String([2, 5, 1, 8, 4, 7, 3, 9, 0, 6, 2, 8, 5, 3, 6][index]).padStart(2, "0")}`,
    reaction: "无明显不适",
  })),
};
zhuozhu20.chat = {
  ...zhuozhu20.chat,
  summary: "基于卓卓2.0连续15天的处方执行记录，重点解答药量不足、在线续方和复诊衔接问题。",
  quick: ["连续用药15天可以直接续方吗？", "续方问诊需要准备哪些资料？", "药量不足2天应该怎么办？"],
};

const zhuozhu30 = JSON.parse(JSON.stringify(zhuozhu20));
Object.assign(zhuozhu30, {
  name: "卓卓3.0",
  meta: "9 岁 3 个月｜连续管理 24 个月",
  profileMeta: "9 岁 3 个月｜男孩｜连续管理 24 个月",
  demoVersion: "24-month-growth",
  score: 91,
  scoreTag: "长期稳定",
  scoreTrend: "24个月持续管理",
  taskSummary: "阶段任务 4/5",
});
zhuozhu30.medicalRecord.date = "2026.07.30";
zhuozhu30.medicalRecord.fullDate = "2026年7月30日";
zhuozhu30.medicalRecord.prescription.supply = "预计可使用 21 天";
zhuozhu30.medicalRecord.prescription.currentRemainingDays = 21;
zhuozhu30.medicalRecord.prescription.reminder = "今晚 21:00 · 持续管理中";
zhuozhu30.medicalRecord.followUp = "2026年10月20日";
zhuozhu30.medicalRecord.followUpShort = "10月20日阶段复查";
zhuozhu30.metrics = ["140.2 cm", "33.1 kg", "16.8 正常"];
zhuozhu30.report = {
  ...zhuozhu30.report,
  badge: "阶段报告",
  title: "年度健康体检报告已同步",
  date: "2026.07.28",
  fullDate: "2026年7月28日",
  total: 18,
  normal: 17,
  attention: 1,
  comparable: 16,
  aiTitle: "生长与生活习惯稳定，视力继续长期随访",
  aiInsight: "身高、BMI 与常规指标处于稳定区间。近视已进入长期随访阶段，本次重点是继续比较屈光度与眼轴变化，不依据单次结果判断控制效果。",
  doctor: "张医生 · 儿童眼科",
  doctorAdvice: "按既定方案持续管理，并于2026年10月完成阶段复查；若近期视物、用药反应或行为状态出现明显变化，提前联系医生。",
  metrics: [
    { name: "身高", value: "140.2 cm", note: "P70，沿既往曲线增长", status: "正常" },
    { name: "BMI", value: "16.8", note: "同龄正常范围", status: "正常" },
    { name: "矫正视力", value: "双眼 5.0", note: "本次检查稳定", status: "正常" },
    { name: "眼轴变化", value: "近6月 +0.05mm", note: "需继续同设备比较", status: "随访", attention: true },
    { name: "血红蛋白", value: "134 g/L", note: "无贫血风险", status: "正常" },
    { name: "口腔检查", value: "未见新发龋齿", note: "保持日常清洁", status: "正常" },
  ],
  findings: [
    { title: "眼轴仍需长期监测", desc: "近6个月变化较小，仍需结合后续同设备检查判断趋势。", tag: "阶段复查", type: "trend" },
  ],
};
Object.assign(zhuozhu30.medicalRecord, {
  diagnosisMetrics: [
    { label: "右眼等效球镜", value: "-3.50D" },
    { label: "左眼等效球镜", value: "-3.75D" },
  ],
  diagnosisNote: "近视已由医院确诊并连续随访24个月；当前结果用于阶段比较，不代表疾病已治愈或无需复查。",
  refraction: {
    examType: "睫状肌麻痹验光（散瞳）",
    method: "电脑验光 + 检影复核",
    accommodation: "睫状肌麻痹充分",
    eyes: [
      { eye: "右眼 OD", sphere: "-3.25D", cylinder: "-0.50D", axis: "175°", se: "-3.50D", bcva: "5.0" },
      { eye: "左眼 OS", sphere: "-3.50D", cylinder: "-0.50D", axis: "10°", se: "-3.75D", bcva: "5.0" },
    ],
  },
});
zhuozhu30.growthProfile.score = 91;
zhuozhu30.growthProfile.trend = "连续管理24个月，阶段稳定";
zhuozhu30.growthProfile.history = [79, 83, 86, 88, 89, 91];
zhuozhu30.growthProfile.summary = "连续管理24个月后，复查、家庭训练和用药记录形成稳定节奏；卓卓在主动表达、单步任务和生活参与上更稳定。";
zhuozhu30.growthProfile.completeness = "98%";
zhuozhu30.growthProfile.dimensions = zhuozhu30.growthProfile.dimensions.map((dimension) => {
  if (dimension.name === "视力发育") return { ...dimension, score: 74, detail: "4次眼科复查 · 控制稳定" };
  if (dimension.name === "心理情绪") return { ...dimension, score: 84, detail: "主动表达 · 情绪等待" };
  if (dimension.name === "行为习惯") return { ...dimension, score: 95, detail: "长期打卡 · 单步任务" };
  return { ...dimension, score: Math.max(dimension.score, 88) };
});
zhuozhu30.growthProfile.insight = "两年报告用于呈现家庭记录与专业阶段评估的连续变化，不作为临床诊断结论。建议把下一阶段重点放在眼科复查衔接、单步任务独立完成和亲子互动质量上。";
zhuozhu30.growthProfile.timeline = [
  { age: "建档", title: "完成基础档案", desc: "同步学校筛查、医院病历和家庭记录，建立长期管理基线。" },
  { age: "6个月", title: "计划执行趋于稳定", desc: "用药、户外和家庭训练形成固定节奏。" },
  { age: "12个月", title: "主动表达提升", desc: "在视觉提示后可以完成更多主动选择。" },
  { age: "24个月", title: "阶段复盘", desc: "已完成4次眼科复查和3次阶段评估，下一阶段计划已更新。" },
];
Object.assign(zhuozhu30.vision, {
  score: "74",
  note: "连续24个月随访｜近6个月屈光与眼轴变化相对稳定",
  data: [
    ["矫正视力", "双眼 5.0", "本次稳定"],
    ["散瞳等效球镜", "右-3.50 / 左-3.75D", "医院复查"],
    ["眼轴长度", "右24.6 / 左24.5mm", "近6月 +0.05mm"],
    ["户外活动", "2.0 小时/天", "近30天均值"],
  ],
});
Object.assign(zhuozhu30.growth, {
  score: "91",
  note: "沿既往生长曲线稳定增长｜保持运动、睡眠和均衡饮食",
  data: [
    ["身高", "140.2 cm", "P70"],
    ["年生长速度", "5.8 cm", "适龄范围"],
    ["体重", "33.1 kg", "稳定增长"],
    ["BMI", "16.8", "正常"],
  ],
});
zhuozhu30.longitudinal = {
  title: "卓卓的2年成长报告",
  months: "24个月",
  headline: "卓卓正在更主动地参与自己的生活",
  metric: "主动表达选择",
  note: "最近变化",
  points: [
    { label: "首次建档", value: 22 },
    { label: "6个月", value: 52 },
    { label: "12个月", value: 72 },
    { label: "18个月", value: 63 },
    { label: "24个月", value: 88 },
  ],
  stats: [
    ["4/4", "眼科复查"],
    ["24月", "持续管理"],
    ["4/5", "单步任务"],
  ],
  stage: "已完成阶段记录",
  next: "计划已更新",
};
zhuozhu30.chat = {
  ...zhuozhu30.chat,
  summary: "基于卓卓3.0连续24个月的阶段记录，重点解答长期趋势、阶段评估和下一阶段计划。",
  quick: ["两年报告怎么看？", "下一阶段应该重点做什么？", "复查和家庭训练怎么衔接？"],
};
zhuozhu30.medicationCourse = null;

children.length = 0;
children.push(zhuozhu10, zhuozhu20, zhuozhu30);

let activeChildIndex = 1;
let activeProgramType = "vision";
let chatPending = false;
const chatHistories = children.map(() => []);
const todayTaskCompletion = children.map(() => new Set());
let joinedCarePlans = {};
let bookedAppointments = {};
let refillConsultations = {};
let recordPayments = {};

try {
  joinedCarePlans = JSON.parse(localStorage.getItem("joykidJoinedCarePlans") || "{}");
} catch (_error) {
  joinedCarePlans = {};
}

try {
  bookedAppointments = JSON.parse(localStorage.getItem("joykidBookedAppointments") || "{}");
  refillConsultations = JSON.parse(localStorage.getItem("joykidRefillConsultations") || "{}");
} catch (_error) {
  bookedAppointments = {};
  refillConsultations = {};
  recordPayments = {};
}

const RECORD_DRUG_PRICE = 58;
const RECORD_BENEFIT_PRICE = 299;

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function isCarePlanJoined(child = children[activeChildIndex]) {
  return Boolean(joinedCarePlans[child.name]);
}

function syncCarePlanState() {
  const child = children[activeChildIndex];
  const joined = isCarePlanJoined(child);
  document.querySelectorAll("[data-care-plan-toggle]").forEach((button) => {
    button.textContent = joined ? "已加入改善计划" : "加入改善计划";
    button.classList.toggle("joined", joined);
    button.setAttribute("aria-pressed", String(joined));
  });

  const supportsMedicalPlan = child.name.startsWith("卓卓");
  document.querySelector("#medicalPlanPending")?.classList.toggle("hidden", !supportsMedicalPlan || joined);
  document.querySelector("#medicalPlanOverview")?.classList.toggle("hidden", !supportsMedicalPlan || !joined);
}

function syncRecordCheckout(child = children[activeChildIndex]) {
  const checkout = document.querySelector("#recordCheckout");
  const addon = document.querySelector("#recordBenefitAddon");
  const consent = document.querySelector("#recordPaymentConsent");
  const payButton = document.querySelector("#recordPayButton");
  const success = document.querySelector("#recordPaymentSuccess");
  const benefitRow = document.querySelector("#recordBenefitPriceRow");
  const hasPrescription = Boolean(child.medicalRecord?.prescription);
  const payment = recordPayments[child.name];
  checkout?.classList.toggle("hidden", !hasPrescription);
  if (!hasPrescription || !addon || !payButton) return;

  if (payment) addon.checked = Boolean(payment.withBenefit);
  const withBenefit = addon.checked;
  const total = RECORD_DRUG_PRICE + (withBenefit ? RECORD_BENEFIT_PRICE : 0);
  benefitRow?.classList.toggle("hidden", !withBenefit);
  setText("#recordPaymentTotal", String(total));

  addon.disabled = Boolean(payment);
  if (consent) consent.disabled = Boolean(payment);
  payButton.disabled = Boolean(payment) || !consent?.checked;
  payButton.classList.toggle("submitted", Boolean(payment));
  payButton.textContent = payment ? `已支付 ¥${payment.total}` : `支付 ¥${total}`;
  success?.classList.toggle("hidden", !payment);
  setText(
    "#recordPaymentSuccessCopy",
    payment?.withBenefit
      ? `药品进入审核，权益包已开通至${child.name}账户`
      : "审核通过后将由京东健康药房安排配送"
  );
}

function syncAppointmentState() {
  const child = children[activeChildIndex];
  const booked = Boolean(bookedAppointments[child.name]);
  document.querySelectorAll("[data-appointment-button]").forEach((button) => {
    button.textContent = booked ? "已预约" : "去预约";
    button.classList.toggle("booked", booked);
    button.setAttribute("aria-pressed", String(booked));
  });
  setText("#appointmentStatusBadge", booked ? "已预约" : "待预约");
  const statusBadge = document.querySelector("#appointmentStatusBadge");
  statusBadge?.classList.toggle("booked", booked);
  const confirmButton = document.querySelector("#confirmAppointmentButton");
  if (confirmButton) {
    confirmButton.textContent = booked ? "预约成功 · 查看预约单" : "确认预约";
    confirmButton.classList.toggle("booked", booked);
  }
}

function syncRefillState() {
  const child = children[activeChildIndex];
  const submitted = Boolean(refillConsultations[child.name]);
  document.querySelectorAll("[data-refill-button]").forEach((button) => {
    button.textContent = submitted ? "续方问诊已提交" : "在线续方";
    button.classList.toggle("submitted", submitted);
  });
  const submitButton = document.querySelector("#submitRefillConsultation");
  if (submitButton) {
    submitButton.textContent = submitted ? "续方问诊已提交 · 等待医生接诊" : "发起在线续方问诊";
    submitButton.classList.toggle("submitted", submitted);
  }
}

function renderRefillDemo(child = children[activeChildIndex]) {
  const isDemo = child.demoVersion === "15-day-refill";
  document.querySelector("#homeRefillReminder")?.classList.toggle("hidden", !isDemo);
  document.querySelector(".medical-record-reminder")?.classList.toggle("hidden", isDemo);
  if (!isDemo || !child.medicationCourse) return;
  setText("#homeRefillReminder .home-refill-copy h2", "预计 7 天后用完");
  setText("#homeRefillReminder .home-refill-copy p", "0.01% 硫酸阿托品滴眼液 · 请遵医嘱使用");
  setText("#homeRefillReminder .home-refill-copy div em", "处方药 · 已记录15天");

  const { medicationCourse } = child;
  const grid = document.querySelector("#refill15DayGrid");
  if (grid) {
    grid.innerHTML = medicationCourse.records.map((record) => `
      <article class="${record.status === "补记" ? "supplemented" : ""}">
        <span>${record.date}</span><strong>${record.status === "补记" ? "补记" : "✓ 已用"}</strong>
      </article>
    `).join("");
  }

  const list = document.querySelector("#refillRecordList");
  if (list) {
    list.innerHTML = medicationCourse.records.slice().reverse().map((record) => `
      <article class="${record.status === "补记" ? "supplemented" : ""}">
        <span>${record.date} · 第${record.day}天</span><strong>${record.time} · ${record.reaction}</strong><em>${record.status}</em>
      </article>
    `).join("");
  }
}

function renderPlanWorkspace(child) {
  const isVision = child.defaultPlan === "vision";
  const isBaseline = child.demoVersion === "baseline";
  const isLongTerm = child.demoVersion === "24-month-growth";
  const activeTab = document.querySelector("#activePlanTab");
  if (activeTab) activeTab.dataset.planTab = child.defaultPlan;
  const activeTabIcon = document.querySelector("#activePlanTabIcon");
  if (activeTabIcon) {
    activeTabIcon.className = `plan-tab-icon ${isVision ? "tab-vision-icon" : "tab-growth-icon"}`;
    activeTabIcon.innerHTML = isVision
      ? `<svg viewBox="0 0 36 36" aria-hidden="true">
          <path class="tab-orbit" d="M7 19c2.6-4.6 6.2-6.9 11-6.9S26.4 14.4 29 19c-2.6 4.6-6.2 6.9-11 6.9S9.6 23.6 7 19Z" />
          <circle class="tab-core" cx="18" cy="19" r="4.6" />
          <path class="tab-detail" d="M10.2 12.8 8 10.6M25.8 12.8l2.2-2.2M12.6 27.6l-1.8 2M23.4 27.6l1.8 2" />
          <path class="tab-spark" d="M28.5 5.8l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
        </svg>`
      : `<svg viewBox="0 0 36 36" aria-hidden="true">
          <path class="tab-detail" d="M8.5 28.5h19M10.5 25.5h3M10.5 21.5h3M10.5 17.5h3M10.5 13.5h3" />
          <path d="M15 28V16.5c0-4.1 2.5-7.2 6.8-8.8-.1 4.8-2.4 8-6.8 9.4" />
          <path class="tab-leaf" d="M15.2 19.5c3.5-3.6 7.7-4.1 11.2-1.6-2.2 4.3-6.1 5.7-11.2 3.9Z" />
          <path class="tab-spark" d="M27.7 7.2l.7 1.7 1.8.7-1.8.8-.7 1.7-.8-1.7-1.7-.8 1.7-.7.8-1.7Z" />
        </svg>`;
  }
  setText("#activePlanTabLabel", "成长支持计划");
  setText("#planGreeting", `${child.name.replace(/\d\.0$/, "")}，今天先完成这些关键动作`);
  const sevenAvatar = document.querySelector("#sevenPlanAvatar");
  if (sevenAvatar) { sevenAvatar.src = child.avatar; sevenAvatar.alt = `${child.name}头像`; }
  setText("#planFollowupDate", `${child.medicalRecord.followUpShort.replace("需复诊", "")} · ${child.medicalRecord.department}`);
  setText("#planFollowupHospital", `${child.medicalRecord.source} · 建议提前完成预约`);
  setText("#appointmentDateTitle", child.medicalRecord.followUpShort.replace("需复诊", ""));
  setText("#appointmentHospitalTitle", `${child.medicalRecord.source} · ${child.medicalRecord.department}`);
  setText("#appointmentPatient", child.name);
  setText("#appointmentReason", isBaseline
    ? "复核学校视力筛查异常并明确下一步"
    : (isLongTerm ? "完成长期管理阶段复查并更新方案" : (isVision ? "评估近视控制效果及是否续方" : "复核生长曲线并评估下一阶段方案")));
  setText("#appointmentSelectedDate", child.medicalRecord.followUpShort.replace("需复诊", ""));
  setText("#planFollowupCountdown", isBaseline ? "建议 1 个月内" : (isLongTerm ? "还有 66 天" : (isVision ? "还有 1 天" : "还有 13 天")));
  const isRefillDemo = child.demoVersion === "15-day-refill";
  setText(".long-term-plan-card .long-term-plan-copy span", isRefillDemo ? "用药与复诊" : "长期计划");
  setText(".long-term-plan-card .long-term-plan-copy h2", isRefillDemo ? "用药与复诊管理" : "长期支持计划");
  setText(".long-term-plan-card .long-term-plan-copy p", isRefillDemo ? "查看近30天用药记录、处方余量和复诊续方准备。" : "把视力管理、社交沟通、家庭记录和复诊准备放在一个节奏里。");
  setText(".long-term-plan-meta strong", isRefillDemo ? "已记录 15 天" : (isLongTerm ? "连续 24 个月" : "第 1 / 10 天"));
  setText(".long-term-plan-meta em", isRefillDemo ? "7月16日处方" : child.medicalRecord.followUpShort.replace("需", ""));
  const longTermButton = document.querySelector(".long-term-plan-card > button");
  if (longTermButton) longTermButton.textContent = isRefillDemo ? "查看用药记录" : "查看长期计划";
  document.querySelectorAll(".long-term-plan-card, .long-term-plan-card > button").forEach((node) => {
    node.dataset.page = isRefillDemo ? "medication-management" : "care-plan-detail";
  });

  const appointmentDates = isBaseline
    ? [["周六", "14", "可约"], ["周日", "15", "建议"], ["周一", "16", "可约"], ["周二", "17", "可约"]]
    : (isLongTerm
      ? [["周一", "19", "可约"], ["周二", "20", "建议"], ["周三", "21", "可约"], ["周四", "22", "可约"]]
      : (isVision
        ? [["周五", "14", "可约"], ["周六", "15", "可约"], ["周日", "16", "建议"], ["周一", "17", "可约"]]
        : [["周二", "18", "可约"], ["周三", "19", "可约"], ["周四", "20", "建议"], ["周五", "21", "可约"]]));
  const appointmentDateList = document.querySelector("#appointmentDateList");
  if (appointmentDateList) {
    appointmentDateList.dataset.month = isBaseline ? "9" : (isLongTerm ? "10" : "8");
    const recommendedIndex = isBaseline || isLongTerm ? 1 : 2;
    appointmentDateList.innerHTML = appointmentDates.map(([weekday, day, status], index) => `<button class="${index === recommendedIndex ? "active" : ""}" type="button"><span>${weekday}</span><strong>${day}</strong><em>${status}</em></button>`).join("");
  }

  const clinicOptions = document.querySelector("#clinicOptions");
  if (clinicOptions) {
    const primary = isBaseline ? "儿童眼科 · 屈光筛查复核" : (isVision ? "儿童眼科 · 近视防控门诊" : "儿童保健科 · 生长发育门诊");
    const secondary = isVision ? "儿童眼科普通门诊" : "儿童保健普通门诊";
    const primaryDesc = isBaseline ? "完成专业检查 · 明确是否需要进一步管理" : (isVision ? "原接诊团队优先 · 可查看连续检查数据" : "连续评估生长曲线 · 医生复核建议");
    const secondaryDesc = isVision ? "可完成屈光与眼轴复查" : "可完成常规生长发育复核";
    clinicOptions.innerHTML = `<button class="active" type="button"><i>${isVision ? "眼" : "长"}</i><span><strong>${primary}</strong><p>${primaryDesc}</p></span><em>推荐</em></button><button type="button"><i>普</i><span><strong>${secondary}</strong><p>${secondaryDesc}</p></span><em>可约</em></button>`;
  }
  bindAppointmentChoices();
  updateAppointmentSummary();

  const refillAlert = document.querySelector("#planRefillAlert");
  const remainingDays = child.medicalRecord.prescription?.currentRemainingDays ?? Infinity;
  refillAlert?.classList.toggle("hidden", remainingDays >= 3);
  document.querySelectorAll("[data-refill-button]").forEach((button) => {
    button.dataset.page = "refill-detail";
  });
  document.querySelector("#planBenefitPromo")?.classList.toggle("hidden", !isVision);
  setText("#benefitChildName", child.name);
  requestAnimationFrame(() => syncPlanAlertCarousel(true));

  const tasks = getTodayPlanTasks(child);
  const taskMarkup = (task) => `<article data-today-task data-today-task-id="${task.id}">${planIconMarkup(task.icon)}<div><span>${task.type}</span><strong>${task.title}</strong><p>${task.desc}</p></div><button data-action="${task.action}"${task.page ? ` data-page="${task.page}"` : ""} type="button">${task.action}</button></article>`;
  const masterList = document.querySelector("#todayMasterList");
  if (masterList) masterList.innerHTML = tasks.map(taskMarkup).join("");
  const homeList = document.querySelector("#homeTodayTaskList");
  if (homeList) homeList.innerHTML = tasks.slice(0, 3).map(taskMarkup).join("");
  bindTodayTaskButtons(tasks);
  syncTodayTaskViews(tasks);

  syncAppointmentState();
  syncRefillState();
}

function updateAppointmentSummary() {
  const dateButton = document.querySelector("#appointmentDateList button.active");
  const timeButton = document.querySelector("#appointmentTimeList button.active");
  const clinicButton = document.querySelector("#clinicOptions button.active");
  if (dateButton && timeButton) {
    const weekday = dateButton.querySelector("span")?.textContent || "";
    const day = dateButton.querySelector("strong")?.textContent || "";
    const month = document.querySelector("#appointmentDateList")?.dataset.month || "8";
    setText("#appointmentSelectionText", `${month}月${day}日 ${weekday} ${timeButton.textContent}`);
    setText("#appointmentSelectedDate", `${month}月${day}日`);
  }
  if (clinicButton) {
    setText("#appointmentSummaryClinic", `${children[activeChildIndex].medicalRecord.source} · ${clinicButton.querySelector("strong")?.textContent || ""}`);
  }
}

function bindAppointmentChoices() {
  ["#appointmentDateList", "#appointmentTimeList", "#clinicOptions"].forEach((selector) => {
    const group = document.querySelector(selector);
    group?.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        updateAppointmentSummary();
      });
    });
  });
}

function getTodayPlanTasks(child) {
  if (child.demoVersion === "baseline") return [
    { id: "upload-report", type: "建档 · 今日", title: "整理学校筛查报告", desc: "拍照上传原始报告，保留完整信息", icon: "posture", page: "medical-folder", action: "去上传" },
    { id: "outdoor", type: "视力 · 记录", title: "记录今日户外时间", desc: "先建立真实基线，不追求一次达标", icon: "outdoor", action: "记录" },
    { id: "eye-rest", type: "视力 · 全天", title: "近距离用眼休息", desc: "每 30-40 分钟远眺放松", icon: "rest", action: "打卡" },
    { id: "book-review", type: "复核 · 1个月内", title: "预约儿童眼科复核", desc: "筛查异常不能替代临床诊断", icon: "medication", page: "appointment-booking", action: "去预约" },
  ];
  return child.defaultPlan === "vision" ? [
    { id: "medicine", type: "医疗 · 21:00", title: "阿托品用药与记录", desc: "按电子处方执行，记录用药后反应", icon: "medication", page: "medication-management", action: "去记录" },
    { id: "outdoor", type: "视力 · 20分钟", title: "户外找色游戏", desc: "在自然光下寻找 5 种颜色", icon: "outdoor", action: "打卡" },
    { id: "eye-rest", type: "视力 · 全天", title: "近距离用眼休息", desc: "每 30-40 分钟远眺放松", icon: "rest", action: "记录" },
    { id: "social-talk", type: "社交沟通 · 晚间", title: "我想说三句话", desc: "和家长轮流表达今天的感受", icon: "social", page: "chat", action: "问一问" },
    { id: "sensory-calm", type: "情绪调节 · 3分钟", title: "安静呼吸小游戏", desc: "跟着做一次放松和等待练习", icon: "training", page: "care-plan-detail", action: "看方案" },
  ] : [
    { id: "breakfast", type: "饮食 · 早餐", title: "蛋白早餐挑战", desc: "牛奶加鸡蛋或豆制品", icon: "nutrition", action: "打卡" },
    { id: "jump", type: "运动 · 10分钟", title: "跳跃运动挑战", desc: "适龄跑跳与落地缓冲练习", icon: "training", action: "去训练" },
    { id: "meals", type: "生活方式 · 全天", title: "三餐饮食记录", desc: "记录优质蛋白和蔬菜摄入", icon: "posture", action: "记录" },
    { id: "sleep", type: "睡眠 · 21:30", title: "睡前流程", desc: "减少屏幕刺激，按时入睡", icon: "rest", action: "打卡" },
  ];
}

function syncTodayTaskViews(tasks) {
  const completed = todayTaskCompletion[activeChildIndex];
  document.querySelectorAll("[data-today-task-id]").forEach((taskNode) => {
    const done = completed.has(taskNode.dataset.todayTaskId);
    taskNode.classList.toggle("done", done);
    const button = taskNode.querySelector("button");
    if (button && !button.dataset.page) button.textContent = done ? "已完成" : button.dataset.action;
  });
  const doneCount = tasks.filter((task) => completed.has(task.id)).length;
  const progress = `${doneCount}/${tasks.length}`;
  setText("#todayPlanProgress", progress);
  setText("#homeTodayProgress", progress);
  setText("#homeHeroProgress", progress);
}

function bindTodayTaskButtons(tasks) {
  document.querySelectorAll("[data-today-task-id] > button").forEach((button) => {
    if (button.dataset.page) {
      button.addEventListener("click", () => setPage(button.dataset.page));
      return;
    }
    button.addEventListener("click", () => {
      const id = button.closest("[data-today-task-id]").dataset.todayTaskId;
      const completed = todayTaskCompletion[activeChildIndex];
      if (completed.has(id)) completed.delete(id);
      else completed.add(id);
      syncTodayTaskViews(tasks);
    });
  });
}

function renderDataGrid(selector, rows) {
  document.querySelectorAll(`${selector} article`).forEach((card, index) => {
    const row = rows[index];
    if (!row) return;
    card.querySelector("span").textContent = row[0];
    card.querySelector("strong").textContent = row[1];
    card.querySelector("em").textContent = row[2];
  });
}

function renderAdvice(selector, rows) {
  const list = document.querySelector(selector);
  if (list) list.innerHTML = rows.map((item) => `<li>${item}</li>`).join("");
}

function renderProgram(selector, plan) {
  const card = document.querySelector(selector);
  if (!card || !plan?.program) return;
  card.querySelector("span").textContent = plan.program.period;
  card.querySelector("h2").textContent = plan.program.title;
  card.querySelector("p").textContent = plan.program.stage;
}

function buildLabReport(child) {
  const record = child.medicalRecord;
  if (child.demoVersion === "baseline" || !record?.refraction) return child.report;
  if (child.name.startsWith("卓卓")) {
    const [rightEye, leftEye] = record.refraction.eyes;
    return {
      documentTitle: "屈光与眼轴检查报告",
      source: `${record.source}眼科`,
      sourceType: "眼科检查",
      date: record.date,
      fullDate: record.fullDate,
      auditStatus: "医生已审核",
      normal: 3,
      attention: 4,
      comparable: 6,
      aiTitle: "双眼近视已确诊，需连续监测眼轴",
      aiInsight: `本次为${record.refraction.examType}，右眼等效球镜 ${rightEye.se}、左眼 ${leftEye.se}，医院已诊断双眼近视。需结合眼轴变化持续评估并按期复诊。`,
      doctor: "张医生 · 儿童眼科",
      doctorAdvice: `按电子处方和医生方案持续记录；${record.followUp}复诊时携带既往验光与眼轴报告，由医生评估控制效果及后续方案。`,
      metrics: [
        { name: "检查方式", value: record.refraction.examType, note: `${record.refraction.method} · ${record.refraction.accommodation}`, status: "有效" },
        { name: "右眼屈光 OD", value: `S ${rightEye.sphere} / C ${rightEye.cylinder}`, note: `AX ${rightEye.axis} · SE ${rightEye.se} · 矫正视力 ${rightEye.bcva}`, status: "近视", attention: true },
        { name: "左眼屈光 OS", value: `S ${leftEye.sphere} / C ${leftEye.cylinder}`, note: `AX ${leftEye.axis} · SE ${leftEye.se} · 矫正视力 ${leftEye.bcva}`, status: "近视", attention: true },
        { name: "右眼眼轴", value: "24.2 mm", note: "需连续监测", status: "关注", attention: true },
        { name: "左眼眼轴", value: "24.0 mm", note: "需连续监测", status: "关注", attention: true },
        { name: "眼压", value: "正常", note: "本次未见异常", status: "正常" },
        { name: "眼前节", value: "未见异常", note: "医生已检查", status: "正常" },
      ],
      findings: [
        { title: "双眼近视", desc: `散瞳后 SE：右眼 ${rightEye.se}、左眼 ${leftEye.se}，以医院诊断与原始报告为准。`, tag: "已确诊", type: "vision" },
        { title: "右眼眼轴需持续监测", desc: "单次结果不能判断进展速度，需与后续同设备复查结果对比。", tag: "按期复查", type: "trend" },
      ],
    };
  }

  return {
    documentTitle: "学校视力筛查报告",
    source: "朝阳实验小学",
    sourceType: "学校筛查",
    date: "2026.08.04",
    fullDate: "2026年8月4日",
    auditStatus: "校医已审核",
    normal: 3,
    attention: 3,
    comparable: 4,
    aiTitle: "筛查提示视力下降，尚不能作为近视诊断",
    aiInsight: "双眼裸眼视力较上次下降。学校筛查用于发现风险，不能替代散瞳验光与儿童眼科诊断，建议按校医意见完成复核。",
    doctor: "王校医 · 儿童保健",
    doctorAdvice: "建议 1 个月内预约儿童眼科检查，复核裸眼视力、屈光状态与眼轴；在明确诊断前不自行使用药物或配镜。",
    metrics: [
      { name: "右眼裸眼视力", value: "4.7", note: "较上学期下降", status: "需复核", attention: true },
      { name: "左眼裸眼视力", value: "4.7", note: "较上学期下降", status: "需复核", attention: true },
      { name: "日均户外", value: "0.8 小时", note: "低于建议时长", status: "不足", attention: true },
      { name: "色觉", value: "正常", note: "筛查未见异常", status: "正常" },
    ],
    findings: [
      { title: "双眼视力筛查未通过", desc: "筛查结果提示风险，需要儿童眼科进一步检查后才能明确原因。", tag: "眼科复核", type: "vision" },
    ],
  };
}

function renderHomeRecord(child) {
  const record = child.medicalRecord;
  if (!record) return;
  const homeCopy = child.demoVersion === "baseline"
    ? { badge: "需要关注", title: "学校筛查结果已更新", source: "XX实验小学", date: "今天 09:30", diagnosis: "视力与屈光筛查有1项异常", label: "查看学校筛查结果" }
    : (child.demoVersion === "24-month-growth"
      ? { badge: "成长报告", title: "2年成长报告可查看", source: "成长报告", date: "今天", diagnosis: "看看这一阶段的变化", label: "查看成长报告" }
      : { badge: "需要关注", title: "预计 7 天后用完", source: record.source, date: record.date, diagnosis: "可先发起在线复诊续方", label: "查看续方提醒" });
  setText("#homeRecordBadge", homeCopy.badge);
  setText("#homeRecordStatus", record.signStatus);
  setText("#homeRecordTitle", homeCopy.title);
  setText("#homeRecordSource", homeCopy.source);
  setText("#homeRecordDate", homeCopy.date);
  setText("#homeRecordDiagnosis", homeCopy.diagnosis);
  setText("#homeRecordFollowUp", record.followUpShort);
  const homeAttentionButton = document.querySelector(".home-attention-card button");
  if (homeAttentionButton) homeAttentionButton.textContent = homeCopy.label;
  setText("#homeHeroFollowup", record.followUpShort?.replace("需复诊", "") || "待确认");
  const remainingDays = record.prescription?.currentRemainingDays;
  setText("#homeHeroMedicine", child.demoVersion === "15-day-refill" ? "7天" : (Number.isFinite(remainingDays) ? `${remainingDays}天` : "无处方"));
  const reminder = document.querySelector(".medical-record-reminder");
  reminder?.setAttribute("aria-label", homeCopy.label);
  if (child.demoVersion === "24-month-growth") reminder?.setAttribute("data-page", "growth-report-2y");
  else reminder?.setAttribute("data-page", child.demoVersion === "baseline" ? "report-detail" : "medical-record-detail");
}

function renderMedicalFolder(child) {
  const record = child.medicalRecord;
  if (!record) return;
  const avatar = document.querySelector("#folderAvatar");
  if (avatar) {
    avatar.src = child.avatar;
    avatar.alt = `${child.name}头像`;
  }
  setText("#folderChildName", child.name);
  const isBaseline = child.demoVersion === "baseline";
  const isLongTerm = child.demoVersion === "24-month-growth";
  const folderConfig = isBaseline
    ? { total: "1", visit: "0 份", reports: "1 份", desc: "已同步学校筛查，医院检查与家庭资料仍待补充" }
    : (isLongTerm
      ? { total: "12", visit: "4 份", reports: "8 份", desc: "24个月复查、体检和检查报告已连续归档" }
      : { total: "3", visit: "1 份", reports: "2 份", desc: "病历、体检和检查数据已按时间归档" });
  setText("#folderDocumentCount", folderConfig.total);
  setText("#folderVisitCount", folderConfig.visit);
  setText("#folderReportCount", folderConfig.reports);
  setText("#folderSummaryDesc", folderConfig.desc);
  document.querySelector("#folderVisitGroup")?.classList.toggle("hidden", isBaseline);
  document.querySelector("#folderLabDoc")?.classList.toggle("hidden", isBaseline);
  setText("#folderRecordTitle", record.title.replace("已同步", ""));
  setText("#folderRecordSource", record.source);
  setText("#folderRecordDate", record.date);
  setText("#folderPhysicalTitle", child.report.title.replace("已同步", ""));
  setText("#folderPhysicalSource", child.report.source);
  setText("#folderPhysicalType", isBaseline ? "学校筛查" : (isLongTerm ? "年度体检" : "体检报告"));
  setText("#folderLabTitle", isLongTerm ? "阶段屈光与眼轴复查报告" : "屈光与眼轴检查报告");
  setText("#folderLabSource", child.name.startsWith("卓卓") ? `${record.source}眼科` : "朝阳实验小学");
}

function renderMedicalRecord(child) {
  const record = child.medicalRecord;
  if (!record) return;
  setText("#recordNavSource", `${record.source}${record.department}`);
  setText("#recordSignStatus", record.signStatus);
  setText("#recordDetailTitle", record.title.replace("已同步", ""));
  setText("#recordDetailSource", `${record.source} · ${record.department}`);
  setText("#recordDetailDate", record.fullDate);
  setText("#recordPatientName", child.name);
  setText("#recordDoctor", record.doctor);
  setText("#recordDiagnosisTitle", record.diagnosisTitle);
  setText("#recordDiagnosisStatus", record.diagnosisStatus);
  setText("#recordDiagnosisNote", record.diagnosisNote);
  setText("#recordAdviceTitle", record.adviceTitle);
  renderAdvice("#recordAdviceList", record.advice);

  const metrics = document.querySelector("#recordDiagnosisMetrics");
  if (metrics) {
    metrics.innerHTML = record.diagnosisMetrics.map((metric) => (
      `<article><span>${metric.label}</span><strong>${metric.value}</strong></article>`
    )).join("");
  }

  const prescriptionCard = document.querySelector("#recordPrescriptionCard");
  const refractionCard = document.querySelector("#recordRefractionCard");
  const hasPrescription = Boolean(record.prescription);
  prescriptionCard?.classList.toggle("hidden", !hasPrescription);
  refractionCard?.classList.toggle("hidden", !record.refraction);

  if (record.prescription) {
    setText("#recordDrugName", record.prescription.name);
    setText("#recordDrugUsage", record.prescription.usage);
    setText("#recordDrugQuantity", record.prescription.quantity);
    setText("#recordDrugSupply", record.prescription.supply);
    setText("#recordPayDrugName", record.prescription.name);
    setText("#recordPayDrugUsage", `处方药 · ${record.prescription.quantity} · 按处方使用`);
  }

  if (record.refraction) {
    setText("#recordRefractionType", record.refraction.examType);
    setText("#recordRefractionMethod", record.refraction.method);
    setText("#recordAccommodationStatus", record.refraction.accommodation);
    const refractionRows = document.querySelector("#recordRefractionRows");
    if (refractionRows) {
      refractionRows.innerHTML = record.refraction.eyes.map((eye) => `
        <div class="refraction-table-row" role="row">
          <strong>${eye.eye}</strong>
          <span>${eye.sphere}</span>
          <span>${eye.cylinder}</span>
          <span>${eye.axis}</span>
          <b>${eye.se}</b>
        </div>
      `).join("");
    }
  }

  syncRecordCheckout(child);
}

function renderReportDetail(child, report = child.report) {
  if (!report) return;
  const documentTitle = report.documentTitle || report.title.replace("已同步", "");
  setText("#reportNavTitle", documentTitle);
  setText("#reportNavSource", report.source);
  setText("#reportSourceType", report.sourceType);
  setText("#reportAuditStatus", report.auditStatus);
  setText("#reportDocumentTitle", `${child.name}的${documentTitle}`);
  setText("#reportSource", report.source);
  setText("#reportDate", report.fullDate);
  setText("#reportNormalCount", report.normal);
  setText("#reportAttentionCount", report.attention);
  setText("#reportCompareCount", report.comparable);
  setText("#reportAiTitle", report.aiTitle);
  setText("#reportAiInsight", report.aiInsight);
  setText("#reportFindingCount", `${report.findings.length} 项`);
  setText("#reportMetricScope", report.sourceType.includes("体检") ? "本次体检" : "本次检查");
  setText("#reportDoctorName", report.doctor);
  setText("#reportDoctorAdvice", report.doctorAdvice);
  setText("#reportProvenance", `原始报告由${report.source}签发，已加密同步至 Joykid`);

  const metricList = document.querySelector("#reportMetricList");
  if (metricList) {
    metricList.innerHTML = report.metrics.map((metric) => `
      <article class="${metric.attention ? "attention" : ""}">
        <div><span>${metric.name}</span><strong>${metric.value}</strong><small>${metric.note}</small></div>
        <em>${metric.status}</em>
      </article>
    `).join("");
  }

  const findings = document.querySelector("#reportFindings");
  if (findings) {
    findings.innerHTML = report.findings.map((finding) => `
      <article>
        <i class="${finding.type}" aria-hidden="true"></i>
        <div><strong>${finding.title}</strong><p>${finding.desc}</p></div>
        <span>${finding.tag}</span>
      </article>
    `).join("");
  }
}

function planIconMarkup(icon) {
  const icons = {
    medication: '<path d="M9 3h6v5l3 3v8H6v-8l3-3V3Z"/><path d="M9 8h6M9 14h6"/>',
    nutrition: '<path d="M4 10h16c0 5-3.6 9-8 9s-8-4-8-9Z"/><path d="M7 7.5c1.1-1.7 2.8-2.5 5-2.5s3.9.8 5 2.5"/>',
    training: '<path d="M4 16V8l8-4 8 4v8l-8 4-8-4Z"/><path d="M8 13h8M9 10h.01M15 10h.01"/>',
    outdoor: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/>',
    video: '<rect x="3.5" y="5" width="17" height="14" rx="4"/><path d="m10.5 9 5 3-5 3V9Z"/>',
    posture: '<path d="M4 5.5c2.7-.7 5.4-.2 8 1.5v12c-2.6-1.7-5.3-2.2-8-1.5v-12ZM20 5.5c-2.7-.7-5.4-.2-8 1.5v12c2.6-1.7 5.3-2.2 8-1.5v-12Z"/>',
    rest: '<path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>',
    protein: '<path d="M4 10h16c0 5-3.6 9-8 9s-8-4-8-9Z"/><path d="M7 7.5c1.1-1.7 2.8-2.5 5-2.5s3.9.8 5 2.5M9 21h6"/>',
    jump: '<circle cx="12" cy="4.5" r="2"/><path d="m8.5 10 3.5-2 3.5 2M12 8v5M12 13l-4 4M12 13l4 4M8 17l-1.5 3M16 17l1.5 3"/>',
    stretch: '<circle cx="12" cy="4.5" r="2"/><path d="M12 7v7M12 9 6.5 6.5M12 9l5.5-2.5M12 14l-3.5 6M12 14l3.5 6"/>',
    measure: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 7h6M13 11h4M11 15h6"/>',
    social: '<path d="M7 11a4 4 0 1 1 8 0c0 3-4 6-4 6s-4-3-4-6Z"/><path d="M15 9.5c2.4.3 4 1.9 4 4.1 0 2.8-3.2 5.4-3.2 5.4M9 13h4"/>',
  };
  const drawing = icons[icon] || '<circle cx="12" cy="12" r="8"/><path d="m8.5 12 2.2 2.2 4.8-5"/>';
  return `<i class="plan-action-icon has-svg ${icon}"><svg viewBox="0 0 24 24" aria-hidden="true">${drawing}</svg></i>`;
}

function renderDailyPlan(selector, plan) {
  const card = document.querySelector(selector);
  if (!card || !plan?.dailyPlan) return;
  card.querySelector(".section-title span").textContent = plan.dailyPlanSummary;
  card.querySelector(".daily-plan-list").innerHTML = plan.dailyPlan.map((item) => `
    <article class="${item.done ? "done" : ""}">
      ${planIconMarkup(item.icon)}
      <div><strong>${item.title}</strong><p>${item.desc}</p></div>
      <button type="button">${item.action}</button>
    </article>
  `).join("");
}

function renderProgramDetail(type = activeProgramType) {
  const child = children[activeChildIndex];
  const plan = child[type] || child[child.defaultPlan];
  if (!plan?.program) return;

  activeProgramType = type;
  setText("#detailPeriod", plan.program.period);
  setText("#detailTitle", plan.program.title);
  setText("#detailStage", plan.program.stage);
  setText("#detailScore", `${plan.score}分`);
  const detailAvatar = document.querySelector("#detailAvatar");
  if (detailAvatar) detailAvatar.src = type === "growth" ? child.avatar : "./assets/joykid-ai-doctor-tab-256.png";
  renderAdvice("#detailGoals", plan.advice.slice(0, 4));
  setText("#detailSummary", plan.dailyPlanSummary);
  const detailList = document.querySelector("#detailDailyList");
  if (detailList) {
    detailList.innerHTML = plan.dailyPlan.map((item) => `
      <article class="${item.done ? "done" : ""}">
        ${planIconMarkup(item.icon)}
        <div><strong>${item.title}</strong><p>${item.desc}</p></div>
        <button type="button">${item.action}</button>
      </article>
    `).join("");
  }
  setText(
    "#detailConsultText",
    type === "growth"
      ? "对营养摄入、运动安排、生长曲线或骨龄复核有疑问，可先问 Joykid，必要时转儿保医生复核。"
      : "对护眼动作、户外时间、复查节点或近视防控商品有疑问，可先问 Joykid，必要时转眼科医生复核。"
  );
}

function getRiskTag(scoreText) {
  const score = Number.parseInt(scoreText, 10);
  if (score < 70) return "需关注";
  if (score < 85) return "中风险";
  return "良好";
}

function renderProfile(child) {
  const profileHero = document.querySelector(".profile-hero");
  if (!profileHero) return;

  profileHero.querySelector("img").src = child.avatar;
  profileHero.querySelector("h1").textContent = child.name;
  profileHero.querySelector("p").textContent = child.profileMeta;

  const profileMetrics = [...child.metrics, `${child.score}分`];
  document.querySelectorAll(".profile-grid strong").forEach((node, index) => {
    node.textContent = profileMetrics[index];
  });

  const riskLabels = ["小眼镜", "小胖墩", "小豆芽", "小蛀牙", "小焦虑"];
  const riskList = document.querySelector(".profile-risk-list");
  if (riskList) {
    riskList.innerHTML = child.fiveScores.map((score, index) => {
      const tag = getRiskTag(score);
      const warn = tag === "需关注" || tag === "中风险";
      return `<div class="${warn ? "warn" : ""}"><span>${riskLabels[index]}</span><strong>${score}</strong><em>${tag}</em></div>`;
    }).join("");
  }

  const activePlan = child.defaultPlan === "growth" ? child.growth : child.vision;
  renderAdvice(".profile-advice", activePlan.advice.slice(0, 3));
}

function buildTrendPath(values) {
  const width = 90;
  const height = 28;
  const left = 2;
  const top = 3;
  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;
  const range = Math.max(max - min, 1);
  const points = values.map((value, index) => {
    const x = left + (index * width) / Math.max(values.length - 1, 1);
    const y = top + height - ((value - min) / range) * height;
    return [Number(x.toFixed(1)), Number(y.toFixed(1))];
  });
  return {
    line: points.map(([x, y], index) => `${index ? "L" : "M"}${x} ${y}`).join(" "),
    area: `${points.map(([x, y], index) => `${index ? "L" : "M"}${x} ${y}`).join(" ")}V34H2Z`,
    last: points.at(-1),
  };
}

function getDimensionStatus(score) {
  if (score < 70) return "需关注";
  if (score < 85) return "稳定";
  return "良好";
}

function getPositiveDimensions(profile) {
  const dimensions = [...(profile.dimensions || [])]
    .filter((dimension) => dimension.score >= 80 && !dimension.detail.includes("待"))
    .map((dimension) => dimension.short);
  if (dimensions.length) return dimensions.slice(0, 3).join(" · ");
  const positiveLabel = (profile.labels || []).find((label) => label.type === "positive");
  return positiveLabel?.text || "持续记录中";
}

function getFocusDimensions(profile) {
  const focus = (profile.dimensions || [])
    .filter((dimension) => dimension.score < 80)
    .map((dimension) => dimension.short);
  return focus.length ? focus.slice(0, 2).join(" · ") : "保持当前节奏";
}

function renderGrowthProfile(child) {
  const profile = child.growthProfile;
  if (!profile) return;

  document.querySelectorAll(".growth-profile-name").forEach((node) => {
    node.textContent = child.name;
  });
  document.querySelectorAll(".growth-profile-avatar").forEach((node) => {
    node.src = child.avatar;
    node.alt = `${child.name}数字画像`;
  });
  setText(".growth-profile-summary", profile.summary);

  const radarPointsBase = [
    [125, 28, "top"], [217, 95, "right upper"], [182, 202, "right lower"], [68, 202, "left lower"], [33, 95, "left upper"],
  ];
  const radarCenter = [125, 115];
  const radarPoints = profile.dimensions.slice(0, 5).map((dimension, index) => {
    const [x, y] = radarPointsBase[index];
    const ratio = Math.max(0, Math.min(100, dimension.score)) / 100;
    return [
      Number((radarCenter[0] + (x - radarCenter[0]) * ratio).toFixed(1)),
      Number((radarCenter[1] + (y - radarCenter[1]) * ratio).toFixed(1)),
    ];
  });
  const radarPolygon = document.querySelector("#growthRadarPolygon");
  if (radarPolygon) radarPolygon.setAttribute("points", radarPoints.map(([x, y]) => `${x},${y}`).join(" "));
  const radarDots = document.querySelector("#growthRadarDots");
  if (radarDots) {
    radarDots.innerHTML = radarPoints.map(([x, y], index) => `<circle class="dot-${index}" cx="${x}" cy="${y}" r="4.5" />`).join("");
  }
  const radarLabels = document.querySelector("#growthRadarLabels");
  if (radarLabels) {
    radarLabels.innerHTML = profile.dimensions.slice(0, 5).map((dimension, index) => (
      `<span class="radar-label-${index}"><b>${dimension.short}</b><em>${getDimensionStatus(dimension.score)}</em></span>`
    )).join("");
  }

  const growthStatus = document.querySelector("#growthStatus");
  if (growthStatus) growthStatus.textContent = getPositiveDimensions(profile);
  const growthFocus = document.querySelector("#growthFocus");
  if (growthFocus) growthFocus.textContent = getFocusDimensions(profile);
  setText("#predictionInsight", profile.insight);
  setText("#twinCompleteness", profile.completeness);

  const timeline = document.querySelector("#growthTimeline");
  if (timeline) {
    timeline.innerHTML = profile.timeline.map((item) => `
      <article>
        <span>${item.age}</span>
        <div><strong>${item.title}</strong><p>${item.desc}</p></div>
      </article>
    `).join("");
  }
}

function renderLongitudinalReport(child) {
  const isLongTerm = child.demoVersion === "24-month-growth";
  const isBaseline = child.demoVersion === "baseline";
  setText("#homeHistoryDuration", isBaseline ? "今日" : (isLongTerm ? "24月" : "15天"));
  setText("#homeWeekCompletion", isBaseline ? "0/7" : (isLongTerm ? "4/5" : "5/7"));
  setText("#homeHistoryDesc", isLongTerm ? "查看长期变化" : "查看计划完成情况");
  setText("#homeDynamicTitle", isBaseline ? "建档动态画像" : (isLongTerm ? "2年动态画像" : "15天动态画像"));
  setText("#homeDynamicDesc", isBaseline ? "先完成病历、筛查和家庭记录同步" : (isLongTerm ? "查看复查、家庭训练和表达变化趋势" : "用药、户外和互动训练已形成连续记录"));
  setText("#longPlanKicker", isBaseline ? "初次建档" : (isLongTerm ? "连续管理24个月" : "连续管理15天"));
  setText("#longPlanTitle", isBaseline ? "建档后连续观察计划" : (isLongTerm ? "2年连续成长管理计划" : "复诊前长期管理计划"));
  setText("#longPlanDesc", isBaseline
    ? "先完成病历、筛查和家庭记录同步，再生成可执行的家庭计划。"
    : (isLongTerm
      ? "把眼科复查、家庭训练和阶段评估放在长期节奏里，方便家长查看变化。"
      : "把用药记录、户外习惯、互动训练和复诊续方放在同一个履约节奏里。"));
  setText("#longPlanStage", isBaseline ? "建档中 · 待复核" : (isLongTerm ? "24个月 · 阶段复盘" : "第15天 · 复诊准备"));
  const longPlanStageLine = document.querySelector("#longPlanStageLine");
  if (longPlanStageLine) {
    const stages = isBaseline ? [
      ["active", "完成建档", "同步医院病历、处方和家庭基础信息"],
      ["", "生成计划", "医生复核后生成家庭执行计划"],
      ["", "开始记录", "形成用药、户外与互动训练记录"],
      ["", "阶段复盘", "按7天节奏查看变化"],
    ] : (isLongTerm ? [
      ["done", "完成建档", "基础档案与复查记录已连续沉淀"],
      ["done", "稳定执行", "眼科复查、户外和家庭训练形成节奏"],
      ["done", "阶段评估", "6/12/24个月完成阶段复盘"],
      ["active", "更新方案", "根据近期变化调整下一阶段计划"],
    ] : [
      ["done", "完成建档", "医院病历与处方已同步"],
      ["done", "连续执行", "用药、户外、训练形成记录"],
      ["active", "复诊续方", "预计7天后用完，准备线上复诊"],
      ["", "更新方案", "复查后调整下一阶段计划"],
    ]);
    longPlanStageLine.innerHTML = stages.map(([state, title, desc]) => `<article class="${state}"><i></i><div><strong>${title}</strong><p>${desc}</p></div></article>`).join("");
  }

  const report = child.longitudinal;
  document.querySelectorAll("[data-longitudinal-entry]").forEach((node) => {
    node.classList.toggle("hidden", !report);
  });
  if (!report) return;
  setText("#homeLongitudinalMonths", report.months);
  setText("#homeLongitudinalTitle", "查看成长报告");
  setText("#homeLongitudinalDesc", "看看这一阶段的变化");
  setText("#longitudinalChildName", child.name.replace(/\d\.0$/, ""));
  setText("#longitudinalTitle", report.title);
  setText("#longitudinalMonths", `持续管理 ${report.months}`);
  setText("#longitudinalHeadline", report.headline);
  setText("#longitudinalMetric", report.metric);
  setText("#longitudinalNote", report.note);
  const polyline = document.querySelector("#longitudinalPolyline");
  const fill = document.querySelector("#longitudinalFill");
  const dots = document.querySelector("#longitudinalDots");
  const labels = document.querySelector("#longitudinalLabels");
  const xPositions = [24, 92, 160, 228, 296];
  const points = report.points.map((point, index) => {
    const x = xPositions[index] ?? (24 + index * 68);
    const y = 170 - Math.max(0, Math.min(100, point.value)) * 1.25;
    return [Number(x.toFixed(1)), Number(y.toFixed(1)), point];
  });
  const pointString = points.map(([x, y]) => `${x},${y}`).join(" ");
  if (polyline) polyline.setAttribute("points", pointString);
  if (fill) fill.setAttribute("points", `24,178 ${pointString} 296,178`);
  if (dots) dots.innerHTML = points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" />`).join("");
  if (labels) labels.innerHTML = report.points.map((point) => `<span>${point.label}</span>`).join("");
  const stats = document.querySelector("#longitudinalStats");
  if (stats) {
    stats.innerHTML = report.stats.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("");
  }
  const longitudinalTimeline = document.querySelector("#longitudinalTimeline");
  if (longitudinalTimeline) {
    const timelineSource = child.growthProfile?.timeline || [];
    longitudinalTimeline.innerHTML = timelineSource.map((item) => `
      <article>
        <span>${item.age}</span>
        <div><strong>${item.title}</strong><p>${item.desc}</p></div>
      </article>
    `).join("");
  }
  setText("#longitudinalStage", report.stage);
  setText("#longitudinalNext", report.next);
}


function renderMedicationManagement(child) {
  const isRefillDemo = child.demoVersion === "15-day-refill";
  const record = child.medicalRecord;
  if (!record?.prescription) return;

  setText("#medication-management .subpage-nav div strong", isRefillDemo ? "用药与复诊管理" : "用药计划与记录");
  setText("#medication-management .subpage-nav div span", isRefillDemo ? "处方执行 · 复诊准备" : "处方执行 · 家长记录");
  setText(".medication-hero span", "今日用药");
  setText(".medication-hero h1", "今晚21:00");
  setText(".medication-hero p", record.prescription.name);
  setText(".medication-hero small", "按电子处方使用，用药后记录孩子反应");

  const infoGrid = document.querySelector(".medication-info-grid");
  if (infoGrid) {
    infoGrid.innerHTML = isRefillDemo
      ? `<article><span>当前处方</span><strong>有效</strong><p>${record.medicationDoctor || "王医生"} · ${record.date}</p></article><article><span>预计余量</span><strong>约 7 天</strong><p>根据近30天记录估算</p></article>`
      : `<article><span>当前预计余量</span><strong>${record.prescription.supply.replace("预计", "约")}</strong><p>根据家长药量记录估算</p></article><article><span>连续记录</span><strong>1 天</strong><p>本周期 1/10</p></article>`;
  }

  const calendar = document.querySelector("#medicationCalendarCard");
  if (!calendar) return;
  if (isRefillDemo) {
    const days = ["一", "二", "三", "四", "五", "六", "日"];
    const dates = ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    const missed = new Set(["16", "11"]);
    const markup = `
      <div class="section-title"><h2>近30天用药记录</h2><span><i></i>已记录 23 天　<i class="miss"></i>漏记 2 天</span></div>
      <div class="medication-month-grid" id="medicationMonthGrid">
        ${days.map((day) => `<b>${day}</b>`).join("")}
        ${dates.map((date) => {
          const cls = date === "15" ? "today" : (missed.has(date) ? "missed" : "done");
          return `<article class="${cls}"><span>${date === "15" ? "今天" : date}</span>${cls === "done" ? "<em>✓</em>" : ""}</article>`;
        }).join("")}
      </div>
      <p class="medication-calendar-note">记录以用药时间为准，每天 06:00 更新</p>`;
    calendar.innerHTML = markup;
  } else {
    calendar.innerHTML = `<div class="section-title"><h2>8月用药记录</h2><span>复诊前</span></div><div class="medication-week"><article class="done"><span>6</span><b>已用</b></article><article class="today"><span>7</span><b>今晚</b></article><article><span>8</span><b>待执行</b></article><article><span>9</span><b>待执行</b></article><article><span>10</span><b>待执行</b></article><article><span>11</span><b>待执行</b></article><article><span>12</span><b>待执行</b></article></div>`;
  }
}

function getChinaGreeting(date = new Date()) {
  const hour = Number(new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    hourCycle: "h23",
  }).format(date));
  if (hour >= 5 && hour < 12) return "早上好";
  if (hour >= 12 && hour < 18) return "下午好";
  return "晚上好";
}

function updateHomeGreeting(child = children[activeChildIndex]) {
  if (!child) return;
  const cleanName = child.name.replace(/\d\.0$/, "");
  setText("#homeTodayFocus", `${getChinaGreeting()}，${cleanName}妈妈`);
}

function renderChild(child) {
  [homeReportUploadStatus, folderReportUploadStatus].forEach((status) => {
    if (!status) return;
    status.textContent = "";
    status.classList.add("hidden");
  });
  setText(".child-row h1", child.name);
  setText(".child-card p", child.meta);
  setText("#homeChildName", child.name.replace(/\d\.0$/, ""));
  setText("#homeChildMeta", child.meta.split("｜")[0]);
  const cleanName = child.name.replace(/\d\.0$/, "");
  updateHomeGreeting(child);
  setText("#homeTodaySub", child.demoVersion === "baseline" ? "今天有1件事需要关注" : (child.demoVersion === "24-month-growth" ? "有一份成长报告可查看" : "今天有1件事需要关注"));
  const childAvatar = document.querySelector(".child-card img");
  if (childAvatar) childAvatar.src = child.avatar;
  const homeChildAvatar = document.querySelector("#homeChildAvatar");
  if (homeChildAvatar) {
    homeChildAvatar.src = child.avatar;
    homeChildAvatar.alt = `${child.name}头像`;
  }
  renderHomeRecord(child);
  renderMedicalFolder(child);
  renderMedicalRecord(child);
  renderReportDetail(child, child.report);
  const homeScore = document.querySelector(".score-main strong");
  if (homeScore) homeScore.innerHTML = `${child.score}<em>/100分</em>`;
  setText(".score-main b", child.scoreTag);
  document.querySelector(".score-main b")?.classList.toggle("warn", child.score < 75);
  setText(".score-main p", child.scoreTrend);
  document.querySelectorAll(".five-score article span").forEach((node, index) => {
    node.textContent = child.fiveScores[index];
  });
  setText(".today-card .section-title span", child.taskSummary);
  document.querySelectorAll(".task-line").forEach((taskNode, index) => {
    const task = child.tasks[index];
    if (!task) return;
    taskNode.classList.toggle("done", task.done);
    taskNode.querySelector(".coin").textContent = task.coin;
    taskNode.querySelector("strong").textContent = task.title;
    taskNode.querySelector("p").textContent = task.desc;
    const oldAction = taskNode.querySelector(".task-action, button, span:last-child");
    const action = document.createElement("button");
    action.className = "task-action";
    action.type = "button";
    action.textContent = task.action;
    action.disabled = task.done;
    if (!task.done) action.dataset.page = "plan";
    oldAction.replaceWith(action);
    action.addEventListener("click", () => {
      if (!task.done) setPage("plan");
    });
  });
  setText(".package-card .section-title h2", `为${child.name}推荐的服务包`);
  setText(".package-item strong", child.package.title);
  setText(".package-item p", child.package.desc);
  setText(".package-item span", child.package.source);
  setText(".points-card > div:first-child strong", child.points);
  setText(".total-points strong", child.gifts);
  setText("#mineName", child.name);
  setText("#mineMeta", child.meta);
  setText("#mineGrowthScore", child.growthProfile.score);
  const isBaselineStage = child.demoVersion === "baseline";
  const isLongTermStage = child.demoVersion === "24-month-growth";
  setText("#homeReportUploadDesc", isBaselineStage
    ? "上传学校筛查或检查报告，建立真实管理基线"
    : (isLongTermStage ? "补充阶段复查报告，保持长期趋势连续" : "同步报告，便于整理变化与复诊准备"));
  setText("#folderReportUploadDesc", isBaselineStage
    ? "补充学校筛查与医院检查资料，完善初次档案"
    : (isLongTermStage ? "补充阶段复查原件，延续24个月健康档案" : "拍照或上传原始报告，统一归档整理"));
  const mineAvatar = document.querySelector("#mineAvatar");
  if (mineAvatar) {
    mineAvatar.src = child.avatar;
    mineAvatar.alt = `${child.name}头像`;
  }
  const shopAvatar = document.querySelector("#shopChildAvatar");
  if (shopAvatar) {
    shopAvatar.src = child.avatar;
    shopAvatar.alt = `${child.name}头像`;
  }
  setText("#shopChildName", child.name);
  const isVisionShop = child.defaultPlan === "vision";
  const shopPackageCopy = isBaselineStage
    ? { stage: "初次建档 · 复核准备", title: "视力复核准备权益包", desc: "先完善专业复核与家庭记录，再决定是否进入专项管理", cta: "查看复核权益", tag: "视力复核" }
    : (isLongTermStage
      ? { stage: "连续管理24个月 · 阶段续接", title: "长期管理阶段权益包", desc: "补充阶段复查、家庭工具和持续专业支持", cta: "查看阶段权益", tag: "长期管理" }
      : { stage: "连续管理15天 · 90天有效", title: "近视管理权益包", desc: "把实物护眼工具和线上、线下专业资源一次配齐", cta: "查看权益", tag: "近视管理" });
  setText("#shopSceneHint", isBaselineStage
    ? "根据学校筛查风险，为你优先匹配复核服务与家庭记录工具"
    : (isLongTermStage ? "根据24个月管理记录，为你匹配阶段复查与长期支持" : (isVisionShop ? "根据近视管理计划，为你优先匹配专业服务与护眼商品" : "根据生长管理计划，为你优先匹配运动工具与家庭测量商品")));
  setText("#shopSceneTag", isVisionShop ? shopPackageCopy.tag : "生长管理");
  setText("#shopPackageStage", shopPackageCopy.stage);
  setText("#shopPackageTitle", shopPackageCopy.title);
  setText("#shopPackageDesc", shopPackageCopy.desc);
  setText("#shopPackageCta", shopPackageCopy.cta);
  setText("#benefitOrderTitle", shopPackageCopy.title);
  setText("#benefitOrderDesc", shopPackageCopy.desc);
  setText("#benefitOrderTag", shopPackageCopy.tag);
  const shopPackageCard = document.querySelector("#shopPackageCard");
  shopPackageCard?.setAttribute("aria-label", `查看${shopPackageCopy.title}`);
  document.querySelector("#shopSceneTag")?.classList.toggle("growth", !isVisionShop);
  shopPackageCard?.classList.toggle("hidden", !isVisionShop);
  document.querySelectorAll("[data-shop-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shopFilter === child.defaultPlan);
  });
  document.querySelectorAll("[data-shop-scene]").forEach((section) => {
    section.classList.toggle("shop-section-hidden", section.dataset.shopScene !== child.defaultPlan);
  });
  document.querySelector("#vision-plan .vision-header h1").innerHTML = `${child.vision.score}<em>/100分</em>`;
  setText("#vision-plan .vision-header p", child.vision.note);
  renderDataGrid("#vision-plan .data-grid", child.vision.data);
  renderAdvice("#vision-plan .check-list", child.vision.advice);
  renderProgram("#vision-plan .program-card", child.vision);
  renderDailyPlan("#vision-plan .daily-plan-card", child.vision);
  document.querySelector("#growth-plan .growth-header h1").innerHTML = `${child.growth.score}<em>/100分</em>`;
  setText("#growth-plan .growth-header p", child.growth.note);
  renderDataGrid("#growth-plan .growth-data", child.growth.data);
  renderAdvice("#growth-plan .check-list", child.growth.advice);
  renderProgram("#growth-plan .program-card", child.growth);
  renderDailyPlan("#growth-plan .daily-plan-card", child.growth);
  setText(".ai-card p", child.chat.summary);
  renderConversation();
  showSuggestionQuestions(child.chat.quick.slice(0, 3), "您可以这样问", false);
  renderProfile(child);
  renderGrowthProfile(child);
  renderLongitudinalReport(child);
  renderProgramDetail(activeProgramType);
  renderPlanWorkspace(child);
  renderMedicationManagement(child);
  renderRefillDemo(child);
  renderChildOptions();
  syncCarePlanState();
}

function setPlanMode(mode = "today") {
  const planPage = document.querySelector("#plan");
  const currentMode = mode === "long" ? "long" : "today";
  const isLong = currentMode === "long";
  planPage?.classList.toggle("long-term-mode", isLong);
  document.querySelectorAll("[data-plan-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.planMode === currentMode);
  });
}

document.querySelectorAll("[data-plan-mode]").forEach((button) => {
  button.addEventListener("click", () => setPlanMode(button.dataset.planMode));
});

function showReportSelection(input, statusNode, sourceLabel) {
  const files = Array.from(input?.files || []);
  if (!files.length || !statusNode) return;
  const detail = files.length === 1 ? files[0].name : `${files.length} 份报告`;
  statusNode.textContent = `${sourceLabel}已添加 · ${detail}`;
  statusNode.classList.remove("hidden");
}

homeReportCamera?.addEventListener("change", () => showReportSelection(homeReportCamera, homeReportUploadStatus, "照片"));
homeReportFiles?.addEventListener("change", () => showReportSelection(homeReportFiles, homeReportUploadStatus, "报告"));
folderReportCamera?.addEventListener("change", () => showReportSelection(folderReportCamera, folderReportUploadStatus, "照片"));
folderReportFiles?.addEventListener("change", () => showReportSelection(folderReportFiles, folderReportUploadStatus, "报告"));
folderImportButton?.addEventListener("click", () => folderReportFiles?.click());

const pageScrollPositions = new Map();
const phoneShell = document.querySelector(".phone-shell");

function syncNavigationScrollState(page) {
  phoneShell?.classList.toggle("is-scrolled", (page?.scrollTop || 0) > 12);
}

pages.forEach((page) => {
  page.addEventListener("scroll", () => {
    if (!page.classList.contains("active")) return;
    pageScrollPositions.set(page.id, page.scrollTop);
    syncNavigationScrollState(page);
  }, { passive: true });
});

function setPage(pageId) {
  const currentPage = document.querySelector(".page.active");
  if (currentPage) pageScrollPositions.set(currentPage.id, currentPage.scrollTop);
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
    if (page.id === pageId) {
      requestAnimationFrame(() => {
        page.scrollTop = pageScrollPositions.get(pageId) || 0;
        syncNavigationScrollState(page);
      });
    }
  });
  document.body.classList.toggle("chat-mode", pageId === "chat" || pageId === "refill-doctor-chat");
  document.body.classList.toggle("immersive-mode", pageId === "train-task" || pageId === "train-feedback");
  document.body.classList.toggle("train-task-mode", pageId === "train-task");
  if (pageId === "home") updateHomeGreeting();

  [...navItems, ...mobileTabs].forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: "auto" });
}

window.setInterval(() => updateHomeGreeting(), 60 * 1000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateHomeGreeting();
});

document.querySelectorAll("[data-train-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-train-choice]").forEach((item) => item.classList.toggle("selected", item === button));
    setTimeout(() => setPage("train-feedback"), 450);
  });
});

document.querySelectorAll('[data-page="train-task"]').forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-train-choice]").forEach((item) => item.classList.remove("selected"));
  });
});

pageButtons.forEach((button) => {
  button.addEventListener("click", () => setPage(button.dataset.page));
  if (button.getAttribute("role") === "button") {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setPage(button.dataset.page);
      }
    });
  }
});

document.querySelectorAll("[data-care-plan-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const child = children[activeChildIndex];
    if (!isCarePlanJoined(child)) {
      joinedCarePlans[child.name] = true;
      try {
        localStorage.setItem("joykidJoinedCarePlans", JSON.stringify(joinedCarePlans));
      } catch (_error) {
        // The in-memory state still keeps the prototype interaction functional.
      }
    }
    syncCarePlanState();
  });
});

const medicationRecordButton = document.querySelector("#medicationRecordButton");
medicationRecordButton?.addEventListener("click", () => {
  const recorded = medicationRecordButton.classList.toggle("recorded");
  medicationRecordButton.textContent = recorded ? "今晚用药已记录" : "记录本次用药";
  medicationRecordButton.setAttribute("aria-pressed", String(recorded));
  document.querySelector(".medication-week .today")?.classList.toggle("done", recorded);
});

document.querySelectorAll(".reaction-options button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".reaction-options button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelector("#confirmAppointmentButton")?.addEventListener("click", () => {
  const child = children[activeChildIndex];
  bookedAppointments[child.name] = true;
  try {
    localStorage.setItem("joykidBookedAppointments", JSON.stringify(bookedAppointments));
  } catch (_error) {
    // Keep the prototype interaction working when storage is unavailable.
  }
  syncAppointmentState();
});

document.querySelector("#submitRefillConsultation")?.addEventListener("click", () => {
  const consent = document.querySelector("#refillConsent");
  if (consent && !consent.checked) {
    consent.closest(".refill-consent")?.classList.add("warn");
    return;
  }
  const child = children[activeChildIndex];
  refillConsultations[child.name] = true;
  try {
    localStorage.setItem("joykidRefillConsultations", JSON.stringify(refillConsultations));
  } catch (_error) {
    // Keep the prototype interaction working when storage is unavailable.
  }
  syncRefillState();
});

const toggleRefillRecords = document.querySelector("#toggleRefillRecords");
const refillRecordList = document.querySelector("#refillRecordList");
toggleRefillRecords?.addEventListener("click", () => {
  const expanded = refillRecordList?.classList.toggle("hidden") === false;
  toggleRefillRecords.innerHTML = expanded ? "收起逐日明细 <b>⌃</b>" : "查看逐日明细 <b>›</b>";
  toggleRefillRecords.setAttribute("aria-expanded", String(expanded));
});

const submitRefillToDoctor = document.querySelector("#submitRefillToDoctor");
const refillQuickReply = document.querySelector("#refillQuickReply");
const refillDoctorResult = document.querySelector("#refillDoctorResult");
submitRefillToDoctor?.addEventListener("click", () => {
  if (submitRefillToDoctor.disabled) return;
  submitRefillToDoctor.disabled = true;
  submitRefillToDoctor.textContent = "资料已发送 · 医生评估中";
  window.setTimeout(() => {
    refillQuickReply?.classList.add("hidden");
    refillDoctorResult?.classList.remove("hidden");
  }, 650);
});

document.querySelector("#refillQuickReply button:nth-child(2)")?.addEventListener("click", () => {
  document.querySelector(".refill-chat-composer input")?.focus();
});

const refillOrderConsent = document.querySelector("#refillOrderConsent");
const submitRefillOrder = document.querySelector("#submitRefillOrder");
const refillOrderSuccess = document.querySelector("#refillOrderSuccess");
function syncRefillOrderSubmit() {
  if (!submitRefillOrder || submitRefillOrder.classList.contains("submitted")) return;
  submitRefillOrder.disabled = !refillOrderConsent?.checked;
}
refillOrderConsent?.addEventListener("change", syncRefillOrderSubmit);
submitRefillOrder?.addEventListener("click", () => {
  if (!refillOrderConsent?.checked || submitRefillOrder.classList.contains("submitted")) return;
  submitRefillOrder.textContent = "已支付 · 药师审核中";
  submitRefillOrder.classList.add("submitted");
  submitRefillOrder.disabled = true;
  refillOrderConsent.disabled = true;
  refillOrderSuccess?.classList.remove("hidden");
});

document.querySelectorAll("[data-report-key]").forEach((button) => {
  const selectReport = () => {
    const child = children[activeChildIndex];
    const report = button.dataset.reportKey === "lab" ? buildLabReport(child) : child.report;
    renderReportDetail(child, report);
  };
  button.addEventListener("click", selectReport);
  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") selectReport();
  });
});

const planTabButtons = document.querySelectorAll("[data-plan-tab]");
const planPanels = {
  vision: document.querySelector("#vision-plan"),
  growth: document.querySelector("#growth-plan"),
};

const planAlertCarousel = document.querySelector("#planAlertCarousel");

function syncPlanAlertCarousel(reset = false) {
  if (!planAlertCarousel) return;
  const visibleCards = [...planAlertCarousel.querySelectorAll(".plan-alert-card")].filter((card) => !card.classList.contains("hidden"));
  const indicators = [...document.querySelectorAll(".carousel-indicator i")];
  if (reset) planAlertCarousel.scrollTo({ left: 0, behavior: "auto" });
  const activeIndex = visibleCards.length > 1
    ? Math.min(visibleCards.length - 1, Math.round(planAlertCarousel.scrollLeft / Math.max(1, planAlertCarousel.clientWidth)))
    : 0;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("hidden", index >= visibleCards.length);
    indicator.classList.toggle("active", index === activeIndex && index < visibleCards.length);
  });
}

planAlertCarousel?.addEventListener("scroll", () => requestAnimationFrame(() => syncPlanAlertCarousel()));

const recordBenefitAddon = document.querySelector("#recordBenefitAddon");
const recordPaymentConsent = document.querySelector("#recordPaymentConsent");
const recordPayButton = document.querySelector("#recordPayButton");

recordBenefitAddon?.addEventListener("change", () => syncRecordCheckout());
recordPaymentConsent?.addEventListener("change", () => syncRecordCheckout());
recordPayButton?.addEventListener("click", () => {
  const child = children[activeChildIndex];
  if (!recordPaymentConsent?.checked || recordPayments[child.name]) return;
  const withBenefit = Boolean(recordBenefitAddon?.checked);
  recordPayments[child.name] = {
    withBenefit,
    total: RECORD_DRUG_PRICE + (withBenefit ? RECORD_BENEFIT_PRICE : 0),
  };
  syncRecordCheckout(child);
});

const benefitOrderConsent = document.querySelector("#benefitOrderConsent");
const submitBenefitOrder = document.querySelector("#submitBenefitOrder");

function syncBenefitOrderSubmit() {
  if (!submitBenefitOrder || submitBenefitOrder.classList.contains("submitted")) return;
  submitBenefitOrder.disabled = !benefitOrderConsent?.checked;
}

benefitOrderConsent?.addEventListener("change", syncBenefitOrderSubmit);
submitBenefitOrder?.addEventListener("click", () => {
  if (!benefitOrderConsent?.checked || submitBenefitOrder.classList.contains("submitted")) return;
  submitBenefitOrder.textContent = "订单已提交 · 待支付";
  submitBenefitOrder.classList.add("submitted");
  submitBenefitOrder.setAttribute("aria-label", "订单已提交，当前待支付");
});

function setPlanTab(tabId) {
  planTabButtons.forEach((item) => item.classList.toggle("active", item.dataset.planTab === tabId));
  Object.entries(planPanels).forEach(([key, panel]) => {
    panel?.classList.toggle("active", key === tabId);
  });
}

planTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlanTab(button.dataset.planTab);
    activeProgramType = button.dataset.planTab;
  });
});

const shopFilterButtons = document.querySelectorAll("[data-shop-filter]");
const shopSceneSections = document.querySelectorAll("[data-shop-scene]");
const shopCartCountNode = document.querySelector("#shopCartCount");
const shopToast = document.querySelector("#shopToast");
let shopCartCount = 0;
let shopToastTimer;

function showShopToast(message) {
  if (!shopToast) return;
  shopToast.textContent = message;
  shopToast.classList.remove("hidden");
  clearTimeout(shopToastTimer);
  shopToastTimer = setTimeout(() => shopToast.classList.add("hidden"), 1500);
}

document.querySelectorAll("[data-add-cart]").forEach((button) => {
  button.addEventListener("click", () => {
    shopCartCount += 1;
    if (shopCartCountNode) {
      shopCartCountNode.textContent = shopCartCount;
      shopCartCountNode.classList.remove("hidden");
    }
    button.textContent = "✓";
    button.classList.add("added");
    showShopToast(`${button.dataset.addCart} 已加入购物车`);
    setTimeout(() => {
      button.textContent = "+";
      button.classList.remove("added");
    }, 900);
  });
});

document.querySelector("#shopCartButton")?.addEventListener("click", () => {
  showShopToast(shopCartCount ? `购物车内有 ${shopCartCount} 件商品` : "购物车还是空的");
});

shopFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.shopFilter;
    shopFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    shopSceneSections.forEach((section) => {
      section.classList.toggle("shop-section-hidden", filter !== "all" && section.dataset.shopScene !== filter);
    });
  });
});

document.querySelectorAll("[data-program-detail]").forEach((button) => {
  button.addEventListener("click", () => {
    renderProgramDetail(button.dataset.programDetail);
    setPage("program-detail");
  });
});

const askSuggestionCard = document.querySelector("#askSuggestionCard");
const suggestionTitle = document.querySelector("#suggestionTitle");
const questionList = document.querySelector("#questionList");
const chatInput = document.querySelector("#chatInput");
const chatForm = document.querySelector("#chatForm");
const chatBox = document.querySelector("#chatBox");

function renderChildOptions() {
  if (!childOptions) return;
  childOptions.innerHTML = children.map((child, index) => {
    const isWarn = child.score < 75;
    const isActive = index === activeChildIndex;
    const status = child.demoVersion === "baseline" ? "初次建档" : (child.demoVersion === "15-day-refill" ? "连续管理15天" : (child.demoVersion === "24-month-growth" ? "连续管理24个月" : (isWarn ? "异常数据" : child.scoreTag)));
    const versionLabel = child.demoVersion === "baseline" ? "1.0" : (child.demoVersion === "24-month-growth" ? "3.0" : "2.0");
    return `
      <button class="child-option${isWarn ? " warn" : ""}${isActive ? " active" : ""}" data-child-index="${index}" type="button">
        <img src="${child.avatar}" alt="${child.name}头像" />
        <div>
          <strong>${child.name}</strong>
          <p>${child.meta}</p>
          <div class="child-option-tags">
            <span>${status}</span>
            <span>${child.demoVersion === "baseline" ? "初次建档" : (child.demoVersion === "24-month-growth" ? "长期复盘" : "复诊续方")}</span>
          </div>
        </div>
        <div class="child-option-score">${versionLabel}</div>
      </button>
    `;
  }).join("");

  childOptions.querySelectorAll("[data-child-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.childIndex);
      selectChild(nextIndex);
    });
  });
}

function openChildPicker() {
  renderChildOptions();
  childPickerModal?.classList.add("open");
  childPickerModal?.setAttribute("aria-hidden", "false");
}

function closeChildPicker() {
  childPickerModal?.classList.remove("open");
  childPickerModal?.setAttribute("aria-hidden", "true");
}

function selectChild(index) {
  if (!Number.isInteger(index) || !children[index]) return;
  activeChildIndex = index;
  const child = children[activeChildIndex];
  renderChild(child);
  setPlanTab(child.defaultPlan);
  activeProgramType = child.defaultPlan;
  renderProgramDetail(child.defaultPlan);
  closeChildPicker();
}

switchChild?.addEventListener("click", openChildPicker);
homeChildProfile?.addEventListener("click", openChildPicker);
mineSwitchChild?.addEventListener("click", openChildPicker);
childPickerClose?.addEventListener("click", closeChildPicker);
childPickerModal?.addEventListener("click", (event) => {
  if (event.target === childPickerModal) closeChildPicker();
});

const lessonData = {
  "vision-main": {
    category: "小眼镜 · 护眼运动",
    title: "Joykid 15 分钟护眼运动课",
    desc: "跟着 Joykid 完成远眺、追光和抛接球训练，适合放学后进行。",
    cue: "远眺窗外绿色目标",
    steps: ["远眺 20 秒", "眼球慢慢追光", "抛接球 30 次", "闭眼放松 1 分钟"],
  },
  "vision-game": {
    category: "小眼镜 · 护眼游戏",
    title: "20-20-20 闯关游戏",
    desc: "每完成一个小关卡，跟着 Joykid 看向远处 20 秒。",
    cue: "通关后看远处",
    steps: ["找屏幕里的绿色星星", "放下屏幕", "看 6 米外目标", "眨眼放松"],
  },
  "vision-outdoor": {
    category: "小眼镜 · 户外运动",
    title: "户外寻宝运动",
    desc: "Joykid 带孩子在户外完成跑跳和自然观察，增加自然光暴露。",
    cue: "寻找户外颜色",
    steps: ["慢跑热身", "找 3 种绿色植物", "亲子抛接球", "记录户外时间"],
  },
  "vision-relax": {
    category: "小眼镜 · 睡前放松",
    title: "睡前眼肌放松",
    desc: "减少睡前屏幕刺激，跟着 Joykid 做轻柔眼部放松。",
    cue: "闭眼深呼吸",
    steps: ["关掉屏幕", "热敷眼周", "闭眼呼吸", "听故事入睡"],
  },
  "growth-jump": {
    category: "小豆芽 · 运动改善",
    title: "Joykid 长高跳跳操",
    desc: "10 分钟亲子跳跃训练，帮助孩子更愿意运动。",
    cue: "跟着 Joykid 跳起来",
    steps: ["脚踝热身", "原地小跳", "摸高挑战", "拉伸放松"],
  },
  "growth-stretch": {
    category: "小豆芽 · 晨间运动",
    title: "晨间拉伸游戏",
    desc: "用游戏化拉伸唤醒身体，改善体态和活动度。",
    cue: "身体伸成小树",
    steps: ["举高手臂", "左右侧弯", "猫式伸展", "深呼吸收尾"],
  },
  "growth-breakfast": {
    category: "小豆芽 · 饮食改善",
    title: "蛋白早餐挑战",
    desc: "Joykid 带孩子认识早餐里的优质蛋白和钙来源。",
    cue: "选择蛋白食物",
    steps: ["选择牛奶或酸奶", "搭配鸡蛋/豆制品", "加入全谷物", "记录早餐"],
  },
  "growth-plate": {
    category: "小豆芽 · 饮食游戏",
    title: "餐盘配色游戏",
    desc: "通过颜色任务让孩子主动选择蔬菜、水果和主食。",
    cue: "点亮彩色餐盘",
    steps: ["选一种绿色蔬菜", "选一种橙色食物", "搭配主食", "完成餐盘打卡"],
  },
};

const lessonModal = document.querySelector("#lessonModal");
const lessonClose = document.querySelector("#lessonClose");
const lessonPlay = document.querySelector("#lessonPlay");
const lessonStage = document.querySelector("#lessonStage");
const lessonProgress = document.querySelector("#lessonProgress");
const lessonCategory = document.querySelector("#lessonCategory");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonDesc = document.querySelector("#lessonDesc");
const lessonCue = document.querySelector("#lessonCue");
const lessonSteps = document.querySelector("#lessonSteps");

function openLesson(lessonId) {
  const lesson = lessonData[lessonId];
  if (!lesson) return;
  lessonCategory.textContent = lesson.category;
  lessonTitle.textContent = lesson.title;
  lessonDesc.textContent = lesson.desc;
  lessonCue.textContent = lesson.cue;
  lessonSteps.innerHTML = lesson.steps.map((step) => `<li>${step}</li>`).join("");
  lessonModal.classList.add("open");
  lessonModal.setAttribute("aria-hidden", "false");
  lessonStage.classList.remove("playing");
  lessonProgress.style.width = "0%";
  lessonPlay.textContent = "开始跟练";
}

function closeLesson() {
  lessonModal.classList.remove("open");
  lessonModal.setAttribute("aria-hidden", "true");
  lessonStage.classList.remove("playing");
  lessonProgress.style.width = "0%";
}

document.querySelectorAll("[data-lesson]").forEach((card) => {
  card.addEventListener("click", () => openLesson(card.dataset.lesson));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLesson(card.dataset.lesson);
    }
  });
});

lessonClose?.addEventListener("click", closeLesson);
lessonModal?.addEventListener("click", (event) => {
  if (event.target === lessonModal) closeLesson();
});

lessonPlay?.addEventListener("click", () => {
  const isPlaying = lessonStage.classList.toggle("playing");
  lessonProgress.style.width = isPlaying ? "100%" : "0%";
  lessonPlay.textContent = isPlaying ? "暂停视频" : "继续跟练";
});

function showSuggestionQuestions(questions, title = "你还可以继续问", isFollowUp = true) {
  if (!askSuggestionCard || !questionList) return;
  suggestionTitle.textContent = title;
  questionList.innerHTML = questions.slice(0, isFollowUp ? 2 : 3)
    .map((question) => `<button class="quick-question" type="button">${escapeHtml(question)}</button>`)
    .join("");
  questionList.querySelectorAll(".quick-question").forEach((button) => {
    button.addEventListener("click", () => {
      if (chatPending) return;
      const question = button.textContent.trim();
      hideSuggestionQuestions();
      submitChatQuestion(question);
    });
  });
  askSuggestionCard.classList.toggle("follow-up", isFollowUp);
  askSuggestionCard.classList.remove("hidden");
}

function hideSuggestionQuestions() {
  askSuggestionCard?.classList.add("hidden");
}

function deriveFollowUpQuestions(question, answer, child) {
  const topic = `${question} ${answer}`;
  const askedQuestions = new Set(
    [...document.querySelectorAll(".message.user")].map((message) => message.textContent.trim())
  );
  const pickUnasked = (candidates) => {
    const fallbacks = child.defaultPlan === "vision"
      ? ["今天最优先完成哪一项护眼任务？", "什么时候需要提前联系眼科医生？", "怎样记录卓卓一周的视力变化？"]
      : ["今天最优先完成哪一项生长任务？", "哪些指标变化需要儿保医生复核？", "怎样记录一周的饮食和运动？"];
    return [...candidates, ...fallbacks]
      .filter((candidate, index, all) => all.indexOf(candidate) === index && !askedQuestions.has(candidate))
      .slice(0, 2);
  };
  if (/复诊|复查|验光|眼轴|报告/.test(question)) {
    return pickUnasked([
      "复诊前需要准备哪些检查和家庭记录？",
      "哪些视力变化需要提前就医？",
      "家庭用药和用眼记录怎样整理？",
      "散瞳验光当天需要注意什么？",
      "复诊时医生会重点评估哪些指标？",
      "怎样判断近视控制方案是否有效？"
    ]);
  }
  if (/阿托品|用药|滴眼液|续方/.test(question)) {
    return pickUnasked([
      "用药后出现哪些情况需要及时联系医生？",
      "药量不足时如何发起在线续方？",
      "阿托品滴眼液漏用一次怎么办？",
      "怎样记录每天的用药情况？"
    ]);
  }
  if (/服务包|权益|商品|购买/.test(question)) {
    return pickUnasked([
      "这个权益包与免费服务有什么区别？",
      "两次在线问诊分别适合什么时候使用？",
      "线下眼科号源福利如何预约？",
      "商城优惠券可以购买哪些护眼商品？"
    ]);
  }
  if (/近视|护眼|户外|用眼|眼睛/.test(question)) {
    return pickUnasked([
      "怎样把每天2小时户外活动拆分完成？",
      "在家如何记录用眼和眼部不适？",
      "20-20-20护眼法怎样让孩子更容易坚持？",
      "哪些室内活动也能减少近距离用眼？"
    ]);
  }
  if (/身高|生长|骨龄|营养|饮食/.test(question)) {
    return pickUnasked([
      "接下来两周应该重点记录哪些生长数据？",
      "运动和饮食计划怎样安排更容易坚持？",
      "每天什么时候测量身高更准确？",
      "哪些睡眠习惯会影响生长发育？"
    ]);
  }
  if (/情绪|心理|社交|焦虑|注意力/.test(question)) {
    return pickUnasked([
      "在家可以观察哪些情绪和社交表现？",
      "出现哪些信号时需要寻求专业评估？",
      "怎样鼓励孩子表达当天的感受？",
      "可以从哪些轻松的社交练习开始？"
    ]);
  }
  if (/阿托品|用药|滴眼液|续方/.test(topic)) {
    return pickUnasked(["用药后出现哪些情况需要及时联系医生？", "药量不足时如何发起在线续方？", "阿托品滴眼液漏用一次怎么办？", "怎样记录每天的用药情况？"]);
  }
  if (/复诊|复查|验光|眼轴|报告/.test(topic)) {
    return pickUnasked(["复诊前需要准备哪些检查和家庭记录？", "哪些视力变化需要提前就医？", "家庭用药和用眼记录怎样整理？", "散瞳验光当天需要注意什么？"]);
  }
  if (/近视|护眼|户外|用眼|眼睛/.test(topic)) {
    return pickUnasked(["怎样把每天2小时户外活动拆分完成？", "在家如何记录用眼和眼部不适？", "20-20-20护眼法怎样让孩子更容易坚持？", "哪些室内活动也能减少近距离用眼？"]);
  }
  if (/身高|生长|骨龄|营养|饮食/.test(topic)) {
    return pickUnasked(["接下来两周应该重点记录哪些生长数据？", "运动和饮食计划怎样安排更容易坚持？", "每天什么时候测量身高更准确？", "哪些睡眠习惯会影响生长发育？"]);
  }
  if (/情绪|心理|社交|焦虑|注意力/.test(topic)) {
    return pickUnasked(["在家可以观察哪些情绪和社交表现？", "出现哪些信号时需要寻求专业评估？", "怎样鼓励孩子表达当天的感受？", "可以从哪些轻松的社交练习开始？"]);
  }
  if (/服务包|权益|商品|购买/.test(topic)) {
    return pickUnasked(["这个权益包与免费服务有什么区别？", "两次在线问诊分别适合什么时候使用？", "线下眼科号源福利如何预约？", "商城优惠券可以购买哪些护眼商品？"]);
  }
  return pickUnasked(child.defaultPlan === "vision"
    ? ["今天最优先完成哪一项护眼任务？", "什么时候需要提前联系眼科医生？"]
    : ["今天最优先完成哪一项生长任务？", "哪些指标变化需要儿保医生复核？"]);
}

renderChild(children[activeChildIndex]);

async function submitChatQuestion(questionOverride = "") {
  const question = (questionOverride || chatInput.value).trim();
  if (!question || chatPending) return;
  hideSuggestionQuestions();

  const childIndex = activeChildIndex;
  const history = chatHistories[childIndex];
  history.push({ role: "user", content: question });
  renderConversation();
  chatInput.value = "";
  setChatPending(true);
  const pendingMessage = appendPendingMessage();
  let liveMessage;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: question,
        history: history.slice(0, -1),
        child: buildChatContext(children[childIndex]),
      }),
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.error || "AI 服务暂时不可用，请稍后再试。");
    }
    if (!response.body) throw new Error("当前浏览器暂不支持流式回答。");

    pendingMessage.remove();
    liveMessage = appendMessage("bot", "");
    liveMessage.classList.add("streaming");
    const contentNode = liveMessage.querySelector(".message-content");
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let answer = "";

    const processLine = (line) => {
      if (!line.trim()) return;
      const eventData = JSON.parse(line);
      if (eventData.type === "error") throw new Error(eventData.error || "AI 回答中断，请重新提问。");
      if (eventData.type !== "delta") return;
      answer += eventData.text || "";
      renderRichText(contentNode, answer);
      chatBox.scrollTop = chatBox.scrollHeight;
    };

    for (;;) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      lines.forEach(processLine);
      if (done) break;
    }
    if (buffer.trim()) processLine(buffer);
    if (!answer.trim()) throw new Error("AI 暂未生成有效回答，请重新提问。");
    liveMessage.classList.remove("streaming");
    history.push({ role: "assistant", content: answer });
    showSuggestionQuestions(deriveFollowUpQuestions(question, answer, children[childIndex]));
  } catch (error) {
    liveMessage?.remove();
    const message = window.location.protocol === "file:"
      ? "真实 AI 问答需要从服务地址打开。"
      : error.message || "暂时无法获取回答，请稍后重试。";
    history.push({ role: "assistant", content: message, error: true });
    showSuggestionQuestions(["重新尝试刚才的问题", "哪些情况需要尽快联系医生？"], "可以继续问");
  } finally {
    pendingMessage.remove();
    if (!liveMessage || liveMessage.classList.contains("streaming")) renderConversation();
    setChatPending(false);
    chatInput.focus();
  }
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitChatQuestion();
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;
  event.preventDefault();
  submitChatQuestion();
});

function buildChatContext(child) {
  const mapData = (rows) => Object.fromEntries(rows.map(([name, value, trend]) => (
    [name, { value, trend }]
  )));

  return {
    name: child.name,
    meta: child.meta,
    metrics: {
      height: child.metrics[0],
      weight: child.metrics[1],
      bmi: child.metrics[2],
    },
    growthProfile: {
      score: child.growthProfile.score,
      summary: child.growthProfile.summary,
      dimensions: child.growthProfile.dimensions.map(({ name, score }) => ({ name, score })),
      labels: child.growthProfile.labels.map(({ text, type }) => ({ text, type })),
    },
    vision: {
      score: child.vision.score,
      note: child.vision.note,
      metrics: mapData(child.vision.data),
      advice: child.vision.advice,
    },
    growth: {
      score: child.growth.score,
      note: child.growth.note,
      metrics: mapData(child.growth.data),
      advice: child.growth.advice,
    },
    currentPlan: child.defaultPlan,
  };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function markdownToHtml(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  const output = [];
  let listType = "";
  let inCode = false;
  let codeLines = [];
  const closeList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = "";
  };

  lines.forEach((line) => {
    if (line.trim().startsWith("```")) {
      closeList();
      if (inCode) {
        output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
      }
      inCode = !inCode;
      return;
    }
    if (inCode) {
      codeLines.push(line);
      return;
    }
    const unordered = line.match(/^\s*[-*+]\s+(.+)/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)/);
    if (unordered || ordered) {
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        output.push(`<${listType}>`);
      }
      output.push(`<li>${renderInlineMarkdown((unordered || ordered)[1])}</li>`);
      return;
    }
    closeList();
    if (!line.trim()) return;
    const heading = line.match(/^\s*(#{1,3})\s+(.+)/);
    if (heading) {
      const level = Math.min(4, heading[1].length + 1);
      output.push(`<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`);
      return;
    }
    const quote = line.match(/^\s*>\s?(.+)/);
    if (quote) {
      output.push(`<blockquote>${renderInlineMarkdown(quote[1])}</blockquote>`);
      return;
    }
    output.push(`<p>${renderInlineMarkdown(line)}</p>`);
  });
  closeList();
  if (inCode && codeLines.length) output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  return output.join("");
}

function sanitizeHtml(source) {
  const template = document.createElement("template");
  template.innerHTML = source;
  const allowed = new Set(["P", "DIV", "SPAN", "BR", "STRONG", "B", "EM", "I", "UL", "OL", "LI", "H2", "H3", "H4", "BLOCKQUOTE", "CODE", "PRE", "A"]);
  [...template.content.querySelectorAll("script,style,iframe,object,embed,link,meta")].forEach((node) => node.remove());
  [...template.content.querySelectorAll("*")].forEach((node) => {
    [...node.attributes].forEach((attribute) => node.removeAttribute(attribute.name));
    if (!allowed.has(node.tagName)) node.replaceWith(document.createTextNode(node.textContent || ""));
  });
  return template.innerHTML;
}

function renderRichText(container, source) {
  if (!container) return;
  const containsHtml = /<\/?[a-z][^>]*>/i.test(source);
  container.innerHTML = containsHtml ? sanitizeHtml(source) : markdownToHtml(source);
}

function renderConversation() {
  if (!chatBox) return;
  chatBox.innerHTML = "";
  chatHistories[activeChildIndex].forEach((message) => {
    appendMessage(message.role === "assistant" ? "bot" : "user", message.content, message.error);
  });
  chatBox.closest(".ai-dialog-card")?.classList.toggle("is-empty", chatHistories[activeChildIndex].length === 0);
}

function appendMessage(type, text, isError = false) {
  chatBox.closest(".ai-dialog-card")?.classList.remove("is-empty");
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}`;
  if (isError) wrapper.classList.add("error");

  if (type === "bot") {
    const title = document.createElement("strong");
    title.textContent = "Joykid";
    wrapper.appendChild(title);
  }

  if (type === "bot" && !isError) {
    const content = document.createElement("div");
    content.className = "message-content";
    renderRichText(content, text);
    wrapper.appendChild(content);
  } else {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    wrapper.appendChild(paragraph);
  }
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  return wrapper;
}

function appendPendingMessage() {
  const wrapper = document.createElement("div");
  wrapper.className = "message bot pending";
  const title = document.createElement("strong");
  title.textContent = "Joykid";
  const row = document.createElement("div");
  row.className = "typing-row";
  const text = document.createElement("span");
  text.textContent = "正在结合成长画像分析";
  const dots = document.createElement("i");
  dots.innerHTML = "<b></b><b></b><b></b>";
  row.append(text, dots);
  wrapper.append(title, row);
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  return wrapper;
}

function setChatPending(isPending) {
  chatPending = isPending;
  chatInput.disabled = isPending;
  chatForm.classList.toggle("pending", isPending);
  chatForm.setAttribute("aria-busy", String(isPending));
}
