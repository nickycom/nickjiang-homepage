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
      "国际葡萄酒&烈酒二级认证 (WSET Level 2)",
    ],
    experiences: [
      {
        period: "2024.10 – 至今",
        title: "外部品牌顾问",
        company: "外资啤酒品牌（该国市场份额第一）",
        bullets: [
          "为品牌中国区业务增长提供全维度市场品牌战略咨询、落地指导与资源对接，成功实现 13% 年复合销量增长",
          "聚焦经典型拉格核心市场，优化产品组合，战略层面确立 3 号产品为大单品",
          "本土化重新定位品牌，实现数字化内容营销，融合本土化线下激活与数字化营销手段",
          "指导品牌旺季营销战役，优化线上线下营销资源配比，打造局部样本市场，赋能渠道客户开发",
          "配合啤酒行业高端化发展趋势，为核心城市现饮和非现饮渠道开发定制化数字营销工具，提升全品牌动销",
        ],
      },
      {
        period: "2025.10 – 2025.11",
        title: "市场品牌部负责人",
        company: "会稽山黄酒",
        bullets: [
          "制定会稽山 1743、气泡黄酒、高端兰亭黄酒三大核心品牌全年战略规划，明确各品牌定位、目标客群、价格带及核心打法，构建「高端引领、腰部发力、年轻破圈」的差异化品牌矩阵",
          "操盘兰亭黄酒入选法国总统马克龙访华国礼公关事件，成功确立兰亭品牌高端定位，提升经销商签约率 50%",
        ],
      },
      {
        period: "2023.08 – 2024.09",
        title: "市场总监",
        company: "华润雪花华南深圳营销中心",
        bullets: [
          "主导营销中心喜力/雪花双品牌驱动增长和渠道营销能力提升，实现年度 9% 营收增长",
          "国际品牌战役：喜力通过潮汕强势市场新年本土文化植入及夏季整合营销战役，实现品牌销量双位数成长",
          "国内品牌战役：主导雪花勇闯天涯大单品年度沟通策略，通过年轻消费者电竞场景打造，招募高校人群；通过老雪品牌&金威地方品牌上市，结合地方政府文旅项目，完成南区高端样本市场打造",
          "主导渠道营销数字化建设，降本增效：现饮渠道推行终端服务员数字化激励，中高端及高端覆盖提升 8%，核心市场单店动销提升 15%；非现饮渠道通过品牌内容+促销优化+终端销售执行组合拳，全品牌覆盖提升 15%，动销增长 8%",
        ],
      },
      {
        period: "2020.12 – 2023.07",
        title: "品牌总监",
        company: "挪瓦咖啡总部",
        bullets: [
          "从 0 到 1 建立品牌定位「品质现磨，立马在线」，强化年轻化视觉全渠道（线上内容+渠道）提升",
          "创立咖啡「品质差异化」+「咖啡奶茶化」新品策略，下沉市场 GMV 提升 1000%",
          "创立果咖细分类目，通过跨界联名超 30 个品牌（植物基品牌「野生植物」、lululemon、Keep、超级猩猩等），累计创造品牌超 3 亿声量，创造健康、运动等多场景消费",
        ],
      },
      {
        period: "2016.09 – 2020.09",
        title: "品牌副总监",
        company: "哈尔滨啤酒品牌，百威亚太",
        bullets: [
          "主导哈尔滨啤酒品牌老牌焕新，4 年间年轻化品牌力增长 15%，成为中国年轻消费者最喜爱啤酒品牌",
          "主导全产品线策略增长：通过「产品重塑+央视传统媒体覆盖+年轻消费者内容打造+渠道动销联动」组合拳，达成淡爽型大单品哈冰纯两年内止跌回稳、重塑增长",
          "发起中高端女性市场开发，主导哈尔滨白啤酒开发上市，通过内容事件、体验营销等整合营销，驱动哈啤中高端核心市场 10% 增长贡献",
          "全行业首次定位打造「街头啤酒」+「街头美食」+「街头文化」定位，通过消费场景打造、整合 IP 合作、DTC、线下饮用场景打通体验生态，案例荣获 2020 年金投赏创意银奖",
          "后疫情期通过全国各地方政府合作和 IP 联名，抢占夜市街头新消费饮用场景，通过抖音百大美食 KOL 探店直播，配合全国 5000+ 渠道门店，实现 4.9 亿全媒体曝光、渠道营业额提升 60%",
        ],
      },
      {
        period: "2012.01 – 2016.08",
        title: "品牌经理",
        company: "地方性品牌，百威英博总部",
        bullets: [
          "负责全国扩张市场 14 个收购区域品牌及哈尔滨品牌的商业与品牌增长（占公司 20% 体量）",
          "首次启动全国地方性品牌「联合品牌」+区域品牌新品策略，获百威英博内部最佳实践",
          "驱动哈尔滨品牌+区域品牌销量扭转，成功实现区域品牌至哈尔滨品牌的切换，哈尔滨知晓度年复合增长率 29.4%（全国平均 13.2%）",
        ],
      },
      {
        period: "2009.05 – 2011.12",
        title: "渠道营销副经理",
        company: "百威英博华东事业部",
        bullets: [
          "启动建立分品牌全售点执行标准，开发渠道项目投入计划，改善渠道执行质量，提升售点份额",
          "试点哈尔滨、百威关键渠道（中餐、夜店 KTV）渠道热点区域创新物料开发，创建售点物料管理体系，执行提升售点销量 20%",
        ],
      },
      {
        period: "2007.11 – 2009.05",
        title: "管理培训生",
        company: "TESCO 中国",
        bullets: [
          "负责非食品品类货架陈列空间优化和库存管理，提升营业额和每平方产出",
          "协助制定和执行品类全年促销排期，提升品类毛利",
        ],
      },
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
      "WSET Level 2 Certification (Wine & Spirits)",
    ],
    experiences: [
      {
        period: "Oct 2024 – Present",
        title: "Brand & Marketing Consultant",
        company: "Foreign Beer Brand (No.1 Market Share in Origin Country)",
        bullets: [
          "Crafted holistic marketing strategic consulting, on-site implementation guidance and resource connection for the brand's business growth in China, successfully driving 13% YoY sales growth",
          "Focused on the core market of classic lager, optimized the product portfolio, and strategically identified Product No.3 as the flagship SKU at the corporate level in China",
          "Repositioned the brand and rolled out digital content marketing, integrating localized offline activation with digital marketing initiatives",
          "Led marketing campaign development in peak season, optimized the allocation of online and offline marketing resources, built regional role model markets, and empowered the development of channel partners",
          "Aligned with the high-end development trend of the beer industry, developed customized digital marketing tools for on-trade and off-trade channels in core cities, boosting the overall sales velocity of the brand",
        ],
      },
      {
        period: "Oct 2025 – Nov 2025",
        title: "Head of Marketing",
        company: "Kuaijishan Yellow Wine Brewing Tech",
        bullets: [
          "Led crafting annual strategic plans for Kuaijishan's three core brands — 1743 (mainstream), Sparkling Yellow Rice Wine (youth-oriented innovation), and Lanting (premium) — defining brand positioning, target audiences, price tiers, and core strategies to build a differentiated brand matrix",
          "Successfully secured Lanting's premium brand image among high-end clients by seeding the product as the state gift presented to French President Emmanuel Macron during his official state visit to China, increasing the distributor sign-up rate by 50%",
        ],
      },
      {
        period: "Aug 2023 – Sep 2024",
        title: "Marketing Director",
        company: "China Resources Beer (CR Beer), South China Center",
        bullets: [
          "Led the marketing center's Heineken/SNOW dual-brand growth strategy and channel marketing capability enhancement, achieving 9% annual revenue growth",
          "Heineken: achieved double-digit volume growth through CNY and football campaign development in stronghold and attacking markets (Chaoshan & Shenzhen)",
          "SNOW: fulfilled CORE+ portfolio strategy via SNOW Classic and Kingway new product launches; combined regional government cultural tourism projects to build premium model markets in South China",
          "Established trade marketing digitalization to drive brand penetration and volume uplift in Shenzhen, which was recognized as a national best practice market",
          "On-trade channel: optimized promoter investment and implemented digital incentive programs, achieving 8% coverage improvement in premium segments and 15% per-store volume growth in core markets",
        ],
      },
      {
        period: "Dec 2020 – Jul 2023",
        title: "Brand Director",
        company: "NOWWA Coffee",
        bullets: [
          "Established brand positioning from zero to one with the tagline 'Quality Freshly Ground, Instantly Online'; rejuvenated the brand VI system across all online content and channels",
          "Founded the 'Quality Differentiation' + 'Coffee Milk-Tea Hybrid' innovation strategy, driving over 1000% GMV growth in lower-tier markets",
          "Created the fruit-coffee subcategory through 30+ cross-over co-branding campaigns (e.g. Wild Plant, lululemon, Keep, Supermonkey), generating over 300M brand buzz and establishing health, sports, and multi-occasion consumption scenarios",
        ],
      },
      {
        period: "Sep 2016 – Sep 2020",
        title: "Brand Associate Director",
        company: "Harbin Beer Brand, Budweiser APAC",
        bullets: [
          "Drove ABI Core+ Classic segment national expansion and established Harbin's new experiential model for brand equity building, effectively driving online-to-offline synergy and making Harbin the No.1 favorite beer brand among young Chinese consumers (brand power +15% over 4 years)",
          "Led Harbin Core+ Classic segment portfolio strategy and innovation, achieving full-year GMV target by H1 and 120% segment trade-up",
          "Launched HAPI Street brand with a deep dive into street music and fashion, developing an innovative brand-integrated experiential model spanning drinking occasions, owned media, and DTC — won the Silver Prize at the 2020 ROI Creative Festival (Case RC-W-2020-19152)",
          "Led 'China No.1 Skewer' campaign with street-food bonding communication; rapidly rolled out the Harbin Street Stall platform across 58 cities post-COVID-19, achieving 490M media reach, 73M+ Weibo buzz (35% earned), and 60% channel volume uplift — won the Silver Prize at the 2020 ROI Creative Festival (Case RC-W-2020-19695)",
        ],
      },
      {
        period: "Jan 2012 – Aug 2016",
        title: "Brand Manager, Regional Brands",
        company: "Budweiser APAC China",
        bullets: [
          "Responsible for 14 regional brands and Harbin brand's commercial and brand growth in expansion markets (20% of ABI total volume)",
          "Successfully piloted co-brand campaigns with local innovation nationwide, recognized as ABI best practice",
          "Drove Harbin + regional brand volume turnaround, successfully transferred local brand volume to Harbin, helping Harbin awareness grow at CAGR 29.4% vs. non-co-brand areas at 13.2%",
        ],
      },
      {
        period: "May 2009 – Dec 2011",
        title: "Associate Trade Marketing Manager",
        company: "Budweiser APAC, Business Unit",
        bullets: [
          "Piloted and established POS execution standards covering all channels and brands (excluding KA), improving POS availability and visibility",
          "Piloted and led POSM innovation projects in the Business Unit, developed 2 new POSMs for nightclub and Chinese restaurant channels, which helped stimulate purchase conversion and drove a 20% volume uplift",
        ],
      },
      {
        period: "Nov 2007 – May 2009",
        title: "Management Trainee",
        company: "TESCO China",
        bullets: [
          "Under the direction of the Merchandising Manager, conducted display space optimization through business analysis of production and inventory",
          "Collaborated with outlets to improve turnover and margin per square foot",
        ],
      },
    ],
  },
};

export default data;
