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
          period: "10/2024-至今",
          title: "外部品牌顾问",
          company: "外资啤酒品牌",
          bullets: [
            "为品牌中国区业务增长提供全维度市场品牌战略咨询，落地指导，资源对接，成功实现13%年复合销量增长。",
            "聚焦经典型拉格核心市场，优化产品组，战略层级确立聚焦3号产品大单品。",
            "本土化重新定位品牌，实现数字化内容营销，融合本土化线下激活与数字化营销手段。",
            "指导品牌旺季营销战役，优化线上线下营销资源配比，打造局部样本市场，赋能渠道客户开发。"
          ],
        },
        {
          period: "10/2025-11/2025",
          title: "市场品牌部负责人",
          company: "会稽山黄酒",
          bullets: [
            "制定会稽山 1743、气泡黄酒、高端兰亭黄酒三大核心品牌全年战略规划，明确各品牌定位、目标客群、价格带及核心打法，构建 “高端引领、腰部发力、年轻破圈” 的差异化品牌矩阵。",
            "操盘兰亭黄酒入选法国总统马克龙访华国礼公关事件，成功确立兰亭品牌高端定位，提升经销商签约率50%。"
          ],
        },
        {
          period: "08/2023 –09/2024",
          title: "市场总监",
          company: "华润雪花华南深圳营销中心",
          bullets: [
            "主导营销中心喜力/雪花双品牌驱动增长，和渠道营销能力提升。实现年度9%营收增长",
            "主导营销中心，国际品牌/国内品牌主题战役，打造地方品牌焕新&高端化",
            "高端化通过强势市场（潮汕市场）新年本土文化植入以及夏季整合营销战役打造，实现品牌销量双位数成长。",
            "主导雪花勇闯天涯大单品年度沟通策略，通过年轻消费者电竞场景的打造，招募高校人群",
            "通过老雪品牌&金威地方品牌上市，结合地方政府文旅项目，完成南区高端市场样本市场打造。",
            "主导渠道营销数字化建设，降本增效，实现市场费用缩减，终端组合覆盖和动销提升，",
            "针对现饮渠道，优化促销员投入，推行终端服务员数字化激励，实现中高端及高端覆盖8%提升，核心市场单店动销提升15%，成功打造全国数字化标杆市场。",
            "针对非现饮渠道，通过品牌内容+促销优化+终端销售执行组合拳，提升全品牌15%覆盖提升，动销8%增长"
          ],
        },
        {
          period: "12/2020 –07/2023",
          title: "品牌总监",
          company: "挪瓦咖啡总部",
          bullets: [
            "从0建立挪瓦咖啡品牌建设&私域媒体策略以及全年创新新品策略。实现：",
            "从0到1品牌打造“品质现磨，立马在线”定位；品牌强化年轻化视觉全渠道（线上内容+渠道）提升。",
            "创立咖啡“品质差异化”+“咖啡奶茶化”新品策略，提升下沉市场GMV 提升1000%，",
            "创立果咖细分类目，通过跨界联名超30个品牌，累计创造品牌超3亿声量，创造健康，运动等多场景消费：如植物基品牌「野生植物」联名推出燕麦拿铁），在饿了么/美团成长率提升155%；联合运动品牌lululemon、Keep、超级猩猩等推广健康场景，深化“运动+咖啡”标签."
          ],
        },
        {
          period: "09/2016 –09/2020",
          title: "品牌副总监, 哈尔滨啤酒品牌",
          company: "百威亚太",
          bullets: [
            "主导哈尔滨啤酒品牌老牌焕新，负责主导哈啤全产品线策略增长,实现品牌中高端市场4年市场份额提升1%",
            "主导通过“产品重塑+央视传统媒体覆盖+年轻消费者内容打造+渠道动销联动+问题市场上新”组合拳，达成淡爽型大单品哈冰纯两年内止跌回稳，重塑增长。",
            "发起中高端市场女性市场开发，并主导哈尔滨白啤酒开发上市，通过内容事件，体验营销等整合营销，驱动在哈啤中高端核心市场10%的增长贡献。",
            "主导旗下高端经典型拉格啤酒产品线新品开发&上市沟通，疫情期间抓住在家饮用场景，迅速调整产品结构，并在产品上新半年完成全年目标，销量达成率120%",
            "通过启动品牌重新定位聚焦品牌年轻化重塑，四年间年轻化品牌力增长15%，同时成为中国年轻消费者最喜爱啤酒品牌。",
            "全行业第一次定位打造“街头啤酒”+“街头美食”+“街头文化”的定位。通过消费场景打造，整合IP合作，DTC，线下饮用场景，打通体验生态，赋能品牌增长案例荣获2020年金投赏创意银奖，案例号RC-W-2020-19152",
            "该后疫情期通过全国各地方政府合作和IP联名，抢占夜市街头新消费饮用场景。通过抖音百大美食KOL探店直播，配合全国5000+渠道门店特色地域互动及全新包装，完成线上线下联动，实现渠道营业额提升60%，声量：4.9亿全媒体曝光，7385万微博话题阅读数，35%为免费声量。"
          ],
        },
        {
          period: "01/2012 –08/2016",
          title: "品牌经理",
          company: "地方性品牌, 百威英博总部",
          bullets: [
            "负责全国扩张市场15个收购区域品牌+哈尔滨品牌&商务销售。(占20%公司体量)",
            "首次启动全国地方性品牌“联合品牌”+区域品牌新品策略，该策略获得百威英博内部最佳实践，实现：",
            "驱动当地哈尔滨品牌+哈尔滨品牌销量扭转以及从区域品牌至哈尔滨品牌的切换。",
            "哈尔滨知晓度年复合增长率29.4%（全国平均13.2%）。"
          ],
        },
        {
          period: "05/2009—12/2011",
          title: "渠道营销副经理",
          company: "百威英博华东事业部",
          bullets: [
            "启动建立分品牌全售点执行标准，开发渠道项目投入计划，帮助改善渠道执行质量，提升售点份额。",
            "试点哈尔滨，百威关键渠道（中餐，夜店KTV）渠道热点区域创新物料开发，帮助购买转化率提升。创建售点物料管理体系，执行提升售点销量20%。"
          ],
        },
        {
          period: "11/2007—05/2009",
          title: "管理培训生",
          company: "TESCO 中国",
          bullets: [
            "非食品品来货架陈列空间优化和库存管理，提升营业额和每平方产出。",
            "协助制定和执行品类全年促销排期，提升品类毛利。"
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
          period: "10/2024 –present",
          title: "Brand & Marketing Consultant",
          company: "An Imported Beer Brand",
          bullets: [
            "Crafting holistic marketing strategic consulting, on-site implementation guidance and resource connection for the brand’s business growth in China, driving 13% sales growth successfully.",
            "Focused on the core market of classic lager, optimized the product portfolio, and strategically identified Product No.3 as the flagship SKU at the corporate level in China",
            "Repositioning the brand and rolled out digital content marketing, integrating localized offline activation with digital marketing initiatives.",
            "lead marketing campaigns development in peak season , optimized the allocation of online and offline marketing resources, built regional role model markets, and empowered the development of channel partners.",
            "Aligned with the high-end development trend of the beer industry, developed customized digital marketing tools for on-trade and off-trade channels in core cities, boosting the overall sales velocity of the brand."
          ],
        },
        {
          period: "10/2025 – 11/2025",
          title: "Head of Marketing",
          company: "Kuaijishan yellow wine brewing Tech",
          bullets: [
            "Lead crafting annual plan for Kuaijishan's — repositioning brand Architecture：1743 (mainstream), Sparkling Yellow Rice Wine (youth-oriented innovation), and Lanting (premium)",
            "successfully secured Lanting as premium image among the high-end client, by seeding the product as the state gift presented to French President Emmanuel Macron during his official state visit to China.  Increased distributor sign-up rate by 50%."
          ],
        },
        {
          period: "08/2023 –09/2024",
          title: "MKT DIRECTOR",
          company: "China Resource beer South Center",
          bullets: [
            "Lead the portfolio premiumization and channel digital transformation",
            "Leading the international/domestic brand brand campaign development, regional brand rejuvenation projection",
            "Heineken: achieved double-digit volume growth through the CNY and football campaign development in stronghold &attacking market (Chaoshan & Shenzhen)",
            "SNOW: fulfill CORE+ portfolio address via SNOW classic and Kingway new product launch.",
            "Established trade marketing digitization to drive brand penetration and volume uplift in Shenzhen, in which is set up as national best practice market."
          ],
        },
        {
          period: "12/2020 –07/2023",
          title: "BRAND DIRECTOR",
          company: "NOWWA Coffee",
          bullets: [
            "Responsible for brand positioning, communication and DTC, innovation, achieved: Established brand positioning from zero to one with full year communication plan, developed the product centric business model. Rejuvenated brand VI system",
            "Established portfolio optimization and innovation pipeline, innovation GMV weighting increased over 1000%.",
            "Generating brand buzz over 300M by over 30 cross-over cobranding which creating content and drinking occasion"
          ],
        },
        {
          period: "09/2016 –09/2020",
          title: "BRAND ASSOCIATE DIRECTOR",
          company: "Harbin Brand, APAC",
          bullets: [
            "Drove ABI Core+ Classic segment national expansion to keep gaining share in past 3 years. Established Harbin new experiential model for equity building, effectively driving online to offline synergy.",
            "Led Harbin Core+ Classic segment portfolio strategy and innovation, achieved FY GMV by 1st half year and 120% segment trading up.",
            "Established HAPI street brand, Deep dive in street music and fashion. Developed innovative brand integrated experiential evolution with drinking occasion, owned media, DTC, which leverage brand building and achieved ：",
            "No 1 social buzz in 2019 summer, 240 M social buzz in 4 weeks.",
            "Over 340% Weibo engagement VS benchmark.",
            "Case ”HAPI BEERWEAR” ‘RC-W-202019152’  won the silver prize of 2020 ROI creative festival.",
            "Led “China No. 1 Skewer” campaign with street food bonding centric communication. Quickly developed Harbin street stall platform in 58 cities after COVID-19, owned new LDA drinking occasion with local packaging launching by KOL live streaming on trade, achieved:",
            "Voice：490M media reaching, over 73 M weibo buzz with 35% earned buzz.",
            "Volume：MTD growth by 18.8% in June, 60% channel volume uplift.",
            "Case “China No.1 skewer” RC-W-2020-19695 won the silver prize of 2002 ROI creative festival."
          ],
        },
        {
          period: "01/2012 –08/2016",
          title: "BRAND MGR",
          company: "REGIONAL BRAND, APAC CHINA",
          bullets: [
            "Responsible for 14 regional brands and Harbin brand growth of commercial and brand in expansion market. (20% of ABI total volume)",
            "Successfully Piloted cobrand campaign with local innovation nationwide, won best practice in ABI, achieved:",
            "Driving Harbin + regional brand volume volume turn around, Successfully transferred local brand volume to HRB.",
            "Helped HRB awareness growing (CAGR: 29.4%) faster than non-cobrand area (13.2%)."
          ],
        },
        {
          period: "05/2009—12/2011",
          title: "ASSCOIATE TRADE MARKETING MANGER",
          company: "BU, ABI",
          bullets: [
            "Piloted and Established POS Execution standard, which cover all Channel & brand (exclude KA), helped to improve POS availability and visibility",
            "Piloted and lead POSM innovation project in BUE, develop 2 new POSM for nightclub and Chinese restaurant channel, which help to stimulate and drive volume uplift by 20%."
          ],
        },
        {
          period: "11/2007—05/2009",
          title: "MANAGEMENT TRAINEE",
          company: "TESCO CHINA",
          bullets: [
            "Under the direction of the merchandising Manager, conducted display space optimization by business analysis production and inventory.",
            "Collaborated with outlets to improve turnover and margin per space."
          ],
        }
    ],
  },
};

export default data;
