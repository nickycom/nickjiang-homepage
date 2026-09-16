export type Experience = {
  period: string;
  title: string;
  company: string;
  bullets: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  phone: string;
  email: string;
  education: {
    period: string;
    degree: string;
    major: string;
    school: string;
  };
  about: string[];
  experiences: Experience[];
};

const data: Record<"zh" | "en", ResumeData> = {
  zh: {
      name: "蒋卢",
      title: "市场总监",
      phone: "18621971310",
      email: "nickycom@msn.com",
      education: {
        period: "2003 – 2007",
        degree: "管理学学士",
        major: "信息管理与信息系统",
        school: "上海大学",
      },
      about: [
        "MBTI 人格类型: ENTJ",
        "国际精酿啤酒一级认证 (Cicerone)",
        "国际葡萄酒&烈酒二级认证 (WSET Level 2)"
      ],
    experiences: [
        {
          period: "10/2024 – 至今",
          title: "外部品牌顾问",
          company: "外资啤酒品牌",
          bullets: [
            "操盘外资啤酒品牌中国区业务，实现 13% 年复合销量增长，提供战略咨询、落地指导与资源对接。",
            "聚焦经典型拉格核心市场，优化产品组合，确立 3 号产品为集团旗舰大单品。",
            "主导品牌本土化再定位，落地数字化内容营销，打通线下激活与数字化营销链路。",
            "操盘旺季营销战役，优化线上线下资源配比，打造样板市场，赋能渠道客户开发。"
          ],
        },
        {
          period: "10/2025 – 11/2025",
          title: "品牌市场外部顾问",
          company: "会稽山黄酒",
          bullets: [
            "制定会稽山 1743、气泡黄酒、高端兰亭三大核心品牌全年战略规划，构建“高端引领、腰部发力、年轻破圈”的差异化品牌矩阵。",
            "操盘兰亭黄酒入选法国总统马克龙访华国礼公关事件，确立兰亭高端定位，经销商签约率提升 50%。"
          ],
        },
        {
          period: "08/2023 – 09/2024",
          title: "市场总监",
          company: "华润雪花华南深圳营销中心",
          bullets: [
            "操盘喜力/国内品牌双轮增长与渠道营销能力建设，实现年度营收增长 9%。",
            "主导国际/国内品牌主题战役，驱动地方品牌焕新与高端化。",
            "主导喜力高端化，借潮汕强势市场新年本土文化植入与夏季整合战役，实现销量双位数增长。",
            "主导雪花勇闯天涯大单品年度沟通策略，切入电竞场景，规模化招募高校人群。",
            "操盘老雪、金威地方品牌上市，联动地方政府文旅项目，打造南区高端样本市场。",
            "主导渠道营销数字化建设，降本增效，实现市场费用缩减与终端覆盖、动销提升。",
            "现饮渠道：优化促销员投入，推行终端服务员数字化激励，中高端及高端覆盖提升 8%，核心市场单店动销提升 15%，打造全国数字化标杆市场。",
            "非现饮渠道：以“品牌内容+促销优化+终端执行”组合拳，全品牌覆盖提升 15%，动销增长 8%。"
          ],
        },
        {
          period: "12/2020 – 07/2023",
          title: "品牌总监",
          company: "挪瓦咖啡总部",
          bullets: [
            "从 0 到 1 搭建挪瓦咖啡品牌、私域媒体与全年新品策略。",
            "打造“品质现磨，立马在线”定位，升级年轻化视觉体系，全渠道渗透线上内容与渠道。",
            "创立“品质差异化 + 咖啡奶茶化”新品策略，下沉市场 GMV 提升 1000%。",
            "开创果咖细分类目，跨界联名超 30 个品牌，累计声量超 3 亿；联合 lululemon、Keep、超级猩猩等打造健康运动场景，饿了么/美团增长率提升 155%。"
          ],
        },
        {
          period: "09/2016 – 09/2020",
          title: "品牌副总监",
          company: "哈尔滨啤酒品牌，百威亚太",
          bullets: [
            "主导哈啤品牌老牌焕新与全产品线增长，中高端市场份额 4 年提升 1%。",
            "操盘“产品重塑+央视覆盖+年轻内容+渠道动销+问题市场上新”组合拳，淡爽大单品哈冰纯两年止跌回稳、重回增长。",
            "发起中高端女性市场，主导哈尔滨白啤开发上市，贡献哈啤中高端核心市场 10% 增长。",
            "主导高端经典型拉格新品开发上市，抢占居家饮用场景，新品半年完成全年目标，销量达成率 120%。",
            "启动品牌年轻化再定位，年轻化品牌力 4 年增长 15%，成为中国年轻消费者最喜爱啤酒品牌；首创“街头啤酒+街头美食+街头文化”定位，打通体验生态，获 2020 金投赏创意银奖（RC-W-2020-19152）。",
            "后疫情期间联动地方政府与 IP，抢占夜市街头饮用场景；抖音百大美食 KOL 探店直播 + 5000+ 渠道门店联动，渠道营业额提升 60%，声量 4.9 亿曝光、7385 万微博阅读、35% 免费声量。"
          ],
        },
        {
          period: "01/2012 – 08/2016",
          title: "品牌经理",
          company: "区域性品牌，百威英博总部",
          bullets: [
            "统筹全国扩张市场 15 个收购区域性品牌与哈尔滨品牌商务销售（占公司 20% 体量）。",
            "首创全国区域性品牌“联合品牌”+区域新品策略，获百威英博内部最佳实践。",
            "驱动哈尔滨品牌与区域品牌销量扭转及切换，哈尔滨知晓度 CAGR 29.4%（全国平均 13.2%）。"
          ],
        },
        {
          period: "05/2009 – 12/2011",
          title: "渠道营销副经理",
          company: "百威英博华东事业部",
          bullets: [
            "建立分品牌全售点执行标准与渠道项目投入计划，改善渠道执行质量，提升售点份额。",
            "试点哈尔滨、百威关键渠道（中餐/夜店/KTV）创新物料，提升购买转化率；搭建售点物料体系，推动售点销量提升 20%。"
          ],
        },
        {
          period: "11/2007 – 05/2009",
          title: "管理培训生",
          company: "TESCO 中国",
          bullets: [
            "优化非食品品类货架陈列与库存管理，提升营业额与每平方产出。",
            "制定并执行品类全年促销排期，提升品类毛利。"
          ],
        }
    ],
  },

  en: {
      name: "Nick Jiang",
      title: "Marketing Director",
      phone: "18621971310",
      email: "nickycom@msn.com",
      education: {
        period: "2003 – 2007",
        degree: "Bachelor of Business",
        major: "Information Management & Systems",
        school: "Shanghai University",
      },
      about: [
        "MBTI: ENTJ",
        "Cicerone Global Beer Level 1 Certification",
        "WSET Level 2 Certification (Wine & Spirits)"
      ],
    experiences: [
        {
          period: "10/2024 – Present",
          title: "Brand & Marketing Consultant",
          company: "An Imported Beer Brand",
          bullets: [
            "Drove 13% annual compound sales growth for an imported beer brand in China, providing strategic consulting, on-site guidance and resource connection.",
            "Focused on the core classic lager market, optimized the product portfolio, and established Product No.3 as the group's flagship SKU.",
            "Led brand localization and repositioning, launched digital content marketing, and connected offline activation with digital marketing.",
            "Ran peak-season marketing campaigns, optimized online/offline resource allocation, built model markets, and empowered channel customer development."
          ],
        },
        {
          period: "10/2025 – 11/2025",
          title: "Brand & Marketing Consultant",
          company: "Kuaijishan Shaoxing Wine Co., Ltd.",
          bullets: [
            "Built the annual strategic plan for Kuaijishan's three core brands (1743, Sparkling Huangjiu, premium Lanting), shaping a differentiated \"premium-led, mid-tier growth, youth breakthrough\" brand matrix.",
            "Led Lanting Huangjiu's selection as the state gift for French President Emmanuel Macron's China visit, establishing Lanting's premium positioning and lifting the distributor sign-up rate by 50%."
          ],
        },
        {
          period: "08/2023 – 09/2024",
          title: "Marketing Director",
          company: "China Resources Beer, South China Marketing Center",
          bullets: [
            "Ran Heineken/domestic brand growth and channel marketing capability building, achieving 9% annual revenue growth.",
            "Led international/domestic brand campaigns, driving regional brand rejuvenation and premiumization.",
            "Led Heineken premiumization via Chinese New Year cultural integration in the stronghold Chaoshan market and summer integrated campaigns, achieving double-digit volume growth.",
            "Led the annual communication strategy for the SNOW \"Brave the World\" flagship SKU, tapping esports scenarios to recruit college consumers at scale.",
            "Launched the Laoxue and Kingway regional brands, partnering with local government cultural tourism projects to build a high-end model market in South China.",
            "Led channel marketing digitization to cut costs and improve efficiency, reducing market spend and improving terminal coverage and sell-through.",
            "On-trade: optimized promoter investment and launched digital incentives for terminal staff, lifting mid-to-high-end and high-end coverage by 8% and core-market per-store sell-through by 15%, building a national digital benchmark market.",
            "Off-trade: combined brand content, promotion optimization and terminal execution, lifting all-brand coverage by 15% and sell-through growth by 8%."
          ],
        },
        {
          period: "12/2020 – 07/2023",
          title: "Brand Director",
          company: "NOWWA Coffee",
          bullets: [
            "Built NOWWA Coffee's brand system, private-domain media and annual new-product strategy from zero to one.",
            "Established the \"Fresh-brewed, Ready On-the-go\" positioning and upgraded the youthful visual identity across online content and channels.",
            "Created the \"quality differentiation + coffee milk-tea-ization\" new-product strategy, driving 1000% GMV growth in lower-tier markets.",
            "Created the fruit-coffee sub-category, collaborating with 30+ brands to generate 300M+ brand buzz; partnered with lululemon, Keep and SuperMonkey to build health/sports occasions, lifting Ele.me/Meituan growth by 155%."
          ],
        },
        {
          period: "09/2016 – 09/2020",
          title: "Brand Associate Director",
          company: "Harbin Beer Brand, Budweiser APAC",
          bullets: [
            "Led Harbin Beer's brand rejuvenation and full-portfolio growth, lifting mid-to-high-end market share by 1% over 4 years.",
            "Ran the \"product reshaping + CCTV coverage + youth content + channel sell-through + problem-market relaunch\" playbook, turning around the light-flavor flagship Habin-chun within two years.",
            "Initiated the mid-to-high-end female market and led Harbin White Beer's launch, contributing 10% growth in Harbin's core mid-to-high-end market.",
            "Led the premium classic lager new-product launch, seizing the at-home occasion during the pandemic to hit the full-year target in six months with a 120% achievement rate.",
            "Led brand youth repositioning, lifting youthful brand power by 15% over 4 years and becoming the most-loved beer brand among young Chinese consumers; pioneered the industry-first \"Street Beer + Street Food + Street Culture\" positioning and won the 2020 ROI Creative Festival Silver Award (RC-W-2020-19152).",
            "Post-pandemic, partnered with local governments and IPs to capture the night-market street occasion; via 100 Douyin food KOL livestreams and 5000+ store activations, lifted channel revenue by 60% and generated 490M media exposure, 73.85M Weibo reads and 35% earned buzz."
          ],
        },
        {
          period: "01/2012 – 08/2016",
          title: "Brand Manager",
          company: "Regional Brands, AB InBev HQ",
          bullets: [
            "Managed commercial sales of 15 acquired regional brands and Harbin Beer in national expansion markets (20% of company volume).",
            "Pioneered the national \"co-branding\" + regional new-product strategy, winning AB InBev internal best practice.",
            "Drove Harbin and regional brand volume turnaround and migration; Harbin awareness grew at a 29.4% CAGR (vs. 13.2% national average)."
          ],
        },
        {
          period: "05/2009 – 12/2011",
          title: "Associate Trade Marketing Manager",
          company: "AB InBev East China BU",
          bullets: [
            "Built brand-specific POS execution standards and channel project investment plans, improving channel execution quality and outlet share.",
            "Piloted innovative POSM in key Harbin/Budweiser channels (Chinese restaurant, nightclub, KTV), boosting purchase conversion; built a POSM system lifting outlet sales by 20%."
          ],
        },
        {
          period: "11/2007 – 05/2009",
          title: "Management Trainee",
          company: "TESCO China",
          bullets: [
            "Optimized non-food shelf display and inventory management, improving turnover and per-square-meter output.",
            "Built and executed the category's annual promotion calendar, improving category gross margin."
          ],
        }
    ],
  },
};

export default data;
