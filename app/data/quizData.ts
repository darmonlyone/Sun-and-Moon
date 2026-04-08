export type Lang = 'en' | 'th';

export type ResultKey =
  | 'newMoon'
  | 'fullMoon'
  | 'supermoon'
  | 'micromoon'
  | 'blueMoon'
  | 'bloodMoon'
  | 'harvestMoon'
  | 'lunarEclipse'
  | 'sunrise'
  | 'solarNoon'
  | 'sunset'
  | 'sunspot'
  | 'solarEclipse';

export const resultOrder: ResultKey[] = [
  'newMoon',
  'fullMoon',
  'supermoon',
  'micromoon',
  'blueMoon',
  'bloodMoon',
  'harvestMoon',
  'lunarEclipse',
  'sunrise',
  'solarNoon',
  'sunset',
  'sunspot',
  'solarEclipse',
];

export type ResultProfile = {
  titleEn: string;
  titleTh: string;
  meaningEn: string;
  meaningTh: string;
  personalityEn: string;
  personalityTh: string;
  loveEn: string;
  loveTh: string;
  palette: string;
  pattern: string;
};

export const results: Record<ResultKey, ResultProfile> = {
  newMoon: {
    titleEn: 'New Moon',
    titleTh: 'เดือนดับ / จันทร์ดับ',
    meaningEn: 'The phase of new beginnings, hidden seeds, and private dreams. It reflects a personality that grows inward first, trusting quiet instincts before showing the world what is taking shape.',
    meaningTh: 'ช่วงเวลาแห่งการเริ่มต้นใหม่ เมล็ดฝันที่ซ่อนอยู่ และความตั้งใจเงียบ ๆ สะท้อนบุคลิกที่เติบโตจากข้างใน เชื่อในสัญชาตญาณเงียบ ๆ ก่อนค่อยเผยตัวตนออกมาให้โลกเห็น',
    personalityEn:
      'You are softly mysterious and reflective. You recharge in quiet spaces, then return with fresh ideas and surprising confidence. People trust your calm timing, because you always bloom when the moment is right.',
    personalityTh:
      'คุณเป็นคนลึกลับแบบนุ่มนวล ชอบทบทวนใจตัวเอง และกลับมาพร้อมไอเดียใหม่กับความมั่นใจที่น่าประหลาดใจ ผู้คนไว้ใจจังหวะของคุณ เพราะคุณมักเปล่งประกายในเวลาที่เหมาะสมเสมอ',
    loveEn:
      'In love, you open slowly but deeply. You do not give your heart away casually, yet once you feel safe, your care is sincere, thoughtful, and lasting.',
    loveTh:
      'ในความรัก คุณค่อย ๆ เปิดใจแต่เปิดอย่างลึกซึ้ง คุณไม่ได้มอบหัวใจให้ใครง่าย ๆ แต่เมื่อรู้สึกปลอดภัยแล้ว ความรักของคุณจะจริงใจ ละเอียดอ่อน และยืนยาว',
    palette: 'from-slate-900 via-indigo-900 to-slate-700',
    pattern: 'bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%)]',
  },
  fullMoon: {
    titleEn: 'Full Moon',
    titleTh: 'พระจันทร์เต็มดวง / วันเพ็ญ',
    meaningEn: 'A symbol of illumination, completion, and emotional clarity. It suits someone whose presence helps feelings come into focus and makes people feel seen, included, and emotionally understood.',
    meaningTh: 'สัญลักษณ์ของความสว่าง การเติมเต็ม และความชัดเจนทางอารมณ์ เหมาะกับคนที่การมีอยู่ของเขาทำให้ความรู้สึกต่าง ๆ ชัดขึ้น และทำให้คนรอบตัวรู้สึกว่าถูกมองเห็นและเข้าใจ',
    personalityEn:
      'You glow in social moments and make people feel seen. Your heart is open, expressive, and genuinely warm. You naturally bring closure, celebration, and “we did it” energy into shared spaces.',
    personalityTh:
      'คุณเปล่งประกายในช่วงเวลาที่อยู่กับผู้คน ทำให้คนรอบข้างรู้สึกมีคุณค่า ใจคุณเปิดกว้างและอบอุ่นจริงใจ และมักพาพลังแห่งการเฉลิมฉลองมาสู่คนรอบตัว',
    loveEn:
      'In love, you are affectionate, expressive, and generous with reassurance. You make people feel chosen, and your warmth can turn ordinary moments into something memorable.',
    loveTh:
      'ในความรัก คุณเป็นคนแสดงออก อบอุ่น และให้ความมั่นใจกับคนรักเก่ง คุณทำให้อีกฝ่ายรู้สึกว่าถูกเลือก และเปลี่ยนช่วงเวลาธรรมดาให้กลายเป็นความทรงจำพิเศษได้',
    palette: 'from-blue-600 via-indigo-500 to-violet-500',
    pattern: 'bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_30%)]',
  },
  supermoon: {
    titleEn: 'Supermoon',
    titleTh: 'ซูเปอร์มูน',
    meaningEn: 'The moon at its closest and brightest appearance from Earth. It points to a personality with strong presence, natural magnetism, and a way of making emotions and ideas feel larger than life.',
    meaningTh: 'ช่วงที่ดวงจันทร์อยู่ใกล้โลกและสว่างโดดเด่นเป็นพิเศษ บ่งบอกถึงบุคลิกที่มีพลังชัดเจน ดึงดูดโดยธรรมชาติ และทำให้ความรู้สึกหรือความคิดต่าง ๆ ดูมีชีวิตชีวาเป็นพิเศษ',
    personalityEn:
      'Your presence feels big and magnetic. You inspire people just by being unapologetically yourself. Even your smallest actions can lift a room and remind others to think bigger.',
    personalityTh:
      'พลังของคุณชัดเจนและดึงดูดใจ คุณสร้างแรงบันดาลใจให้คนอื่นได้ด้วยการเป็นตัวเองอย่างมั่นใจ แม้สิ่งเล็ก ๆ ที่คุณทำก็ทำให้บรรยากาศทั้งห้องดีขึ้นได้',
    loveEn:
      'In love, you love boldly and memorably. You enjoy chemistry, excitement, and the feeling of being all-in, while still wanting someone who can truly match your energy.',
    loveTh:
      'ในความรัก คุณรักแบบชัดเจน เต็มที่ และน่าจดจำ คุณชอบแรงดึงดูด ความตื่นเต้น และความรู้สึกที่ต่างฝ่ายต่างทุ่มเทให้กันอย่างจริงจัง',
    palette: 'from-fuchsia-700 via-violet-600 to-blue-500',
    pattern: 'bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_40%,rgba(255,255,255,0.18))]',
  },
  micromoon: {
    titleEn: 'Micromoon',
    titleTh: 'ไมโครมูน',
    meaningEn: 'The moon when it appears smaller and more distant. It reflects a personality that may seem understated at first, yet carries depth, patience, and quiet insight that others rely on more than they realize.',
    meaningTh: 'ช่วงที่ดวงจันทร์ดูเล็กลงและอยู่ไกลจากโลก สะท้อนบุคลิกที่อาจดูเรียบเงียบในตอนแรก แต่มีความลึก ความอดทน และสายตาที่มองเห็นรายละเอียดซึ่งคนอื่นพึ่งพาอยู่เสมอ',
    personalityEn:
      'You are gentle, humble, and deeply observant. You may stay in the background, but your insight is powerful. You notice patterns before anyone else and quietly prevent chaos.',
    personalityTh:
      'คุณอ่อนโยน ถ่อมตัว และช่างสังเกต แม้จะอยู่เบื้องหลัง แต่ความเข้าใจของคุณทรงพลังมาก คุณมองเห็นแพตเทิร์นก่อนคนอื่น และช่วยกันความวุ่นวายแบบเงียบ ๆ',
    loveEn:
      'In love, you notice the little things that matter. You may be reserved at first, but your devotion shows through consistency, care, and the quiet ways you protect a relationship.',
    loveTh:
      'ในความรัก คุณใส่ใจรายละเอียดเล็ก ๆ ที่มีความหมาย คุณอาจดูเก็บตัวในช่วงแรก แต่ความรักของคุณจะแสดงออกผ่านความสม่ำเสมอ การดูแล และการปกป้องความสัมพันธ์อย่างเงียบ ๆ',
    palette: 'from-gray-700 via-zinc-700 to-slate-600',
    pattern: 'bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.15),transparent_40%)]',
  },
  blueMoon: {
    titleEn: 'Blue Moon',
    titleTh: 'บลูมูน',
    meaningEn: 'A rare moon event associated with uniqueness and surprise. It fits someone whose charm comes from originality, unexpected perspective, and the courage to stay delightfully unlike anyone else.',
    meaningTh: 'ปรากฏการณ์จันทร์หายากที่สื่อถึงความไม่เหมือนใครและความน่าประหลาดใจ เหมาะกับคนที่เสน่ห์มาจากความเป็นตัวเอง มุมมองที่คาดไม่ถึง และความกล้าที่จะต่างอย่างน่าหลงใหล',
    personalityEn:
      'You are rare in the best way: witty, creative, and impossible to copy. People remember your vibe for a long time. Your charm comes from surprising combinations that somehow always work.',
    personalityTh:
      'คุณพิเศษแบบหาได้ยาก ฉลาดมีไหวพริบ สร้างสรรค์ และไม่มีใครเลียนแบบได้ง่าย ๆ เสน่ห์ของคุณคือการผสมสิ่งที่คาดไม่ถึงแล้วออกมาลงตัว',
    loveEn:
      'In love, you charm people with originality and playfulness. You need connection that feels alive and interesting, and you fall hardest when someone appreciates your weirdest, brightest sides.',
    loveTh:
      'ในความรัก คุณมีเสน่ห์จากความสดใหม่และความขี้เล่น คุณต้องการความสัมพันธ์ที่มีชีวิตชีวาและไม่น่าเบื่อ และจะรักมากเมื่ออีกฝ่ายชื่นชมด้านแปลกแต่น่ารักของคุณ',
    palette: 'from-sky-700 via-blue-600 to-cyan-500',
    pattern: 'bg-[radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.25),transparent_35%)]',
  },
  bloodMoon: {
    titleEn: 'Blood Moon',
    titleTh: 'พระจันทร์สีเลือด (จันทรุปราคาเต็มดวง)',
    meaningEn: 'A dramatic red moon during a total lunar eclipse. It symbolizes a personality with intense feeling, emotional bravery, and the power to transform pain or vulnerability into strength.',
    meaningTh: 'ดวงจันทร์สีแดงเข้มอันโดดเด่นระหว่างจันทรุปราคาเต็มดวง เป็นสัญลักษณ์ของบุคลิกที่มีอารมณ์เข้มข้น กล้าเผชิญความรู้สึก และเปลี่ยนความเปราะบางให้กลายเป็นพลังได้',
    personalityEn:
      'You carry bold emotions and transformative energy. You face difficult feelings honestly and come out stronger. Your emotional courage helps others stop hiding from their truth.',
    personalityTh:
      'คุณมีอารมณ์ที่หนักแน่นและพลังแห่งการเปลี่ยนแปลง กล้าเผชิญความรู้สึกยาก ๆ และเติบโตอย่างแข็งแกร่ง ความกล้าทางอารมณ์ของคุณยังช่วยให้คนอื่นกล้าเผชิญความจริงของตัวเองด้วย',
    loveEn:
      'In love, you feel everything intensely. You want honesty, depth, and emotional courage, and shallow connection rarely satisfies your heart for long.',
    loveTh:
      'ในความรัก คุณรู้สึกทุกอย่างอย่างเข้มข้น คุณต้องการความจริงใจ ความลึกซึ้ง และความกล้าทางอารมณ์ เพราะความสัมพันธ์ผิวเผินมักไม่เพียงพอสำหรับหัวใจของคุณ',
    palette: 'from-red-900 via-rose-700 to-orange-600',
    pattern: 'bg-[linear-gradient(140deg,rgba(0,0,0,0.25),transparent_50%,rgba(255,255,255,0.12))]',
  },
  harvestMoon: {
    titleEn: 'Harvest Moon',
    titleTh: 'จันทร์เก็บเกี่ยว',
    meaningEn: 'A moon connected to abundance, gratitude, and celebration. It reflects a personality that nurtures people well, notices what is needed, and turns warmth, care, and generosity into something deeply memorable.',
    meaningTh: 'ดวงจันทร์ที่เชื่อมโยงกับความอุดมสมบูรณ์ ความขอบคุณ และการเฉลิมฉลอง สะท้อนบุคลิกที่ดูแลคนรอบตัวเก่ง มองเห็นสิ่งที่คนอื่นต้องการ และเปลี่ยนความอบอุ่นใจให้เป็นการกระทำจริง',
    personalityEn:
      'You are nurturing and generous, always helping others gather joy and confidence. Home feels brighter with you around. You are the person who remembers details and turns care into action.',
    personalityTh:
      'คุณเป็นคนอบอุ่นและใจกว้าง ช่วยให้คนรอบตัวเก็บเกี่ยวความสุขและความมั่นใจ บ้านจะสดใสขึ้นเมื่อมีคุณ และคุณยังเป็นคนที่ใส่ใจรายละเอียดเล็ก ๆ แล้วแปลงเป็นการดูแลจริงจัง',
    loveEn:
      'In love, you show affection through care, reliability, and emotional generosity. You are the kind of person who makes love feel safe, grounded, and deeply comforting.',
    loveTh:
      'ในความรัก คุณแสดงความรักผ่านการดูแล ความสม่ำเสมอ และความใจกว้างทางอารมณ์ คุณคือคนที่ทำให้ความรักรู้สึกปลอดภัย มั่นคง และอบอุ่นมาก',
    palette: 'from-amber-700 via-orange-500 to-yellow-400',
    pattern: 'bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_35%)]',
  },
  lunarEclipse: {
    titleEn: 'Lunar Eclipse',
    titleTh: 'จันทรุปราคา',
    meaningEn: 'A moment when the Earth’s shadow reveals new emotional truths. It suits a personality that carries hidden depth, sees through surfaces, and often grows strongest in life’s more difficult seasons.',
    meaningTh: 'ช่วงเวลาที่เงาโลกเผยให้เห็นความจริงใหม่ ๆ ทางอารมณ์ เหมาะกับบุคลิกที่มีความลึกซ่อนอยู่ มองทะลุสิ่งฉาบหน้า และมักเติบโตแข็งแรงที่สุดในช่วงเวลาที่ยาก',
    personalityEn:
      'Quiet intensity, emotional depth, and powerful hidden strength define you. People may underestimate your silence, then feel your impact. You transform dark moments into wisdom and direction.',
    personalityTh:
      'คุณมีความเข้มข้นแบบเงียบ ๆ ลึกซึ้งทางอารมณ์ และมีพลังแฝงที่แข็งแรง ผู้คนอาจประเมินความนิ่งของคุณต่ำไป ก่อนจะรับรู้พลังของคุณ คุณเปลี่ยนช่วงเวลามืดให้กลายเป็นบทเรียนและทิศทางได้',
    loveEn:
      'In love, you do not love lightly. You bond through trust, emotional truth, and unspoken understanding, and once committed, your loyalty runs very deep.',
    loveTh:
      'ในความรัก คุณไม่ได้รักแบบผิวเผิน คุณผูกพันผ่านความไว้ใจ ความจริงทางอารมณ์ และความเข้าใจที่ไม่ต้องพูดมาก และเมื่อรักแล้วคุณจะภักดีมาก',
    palette: 'from-indigo-950 via-purple-900 to-rose-700',
    pattern: 'bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent_30%,rgba(0,0,0,0.3))]',
  },
  sunrise: {
    titleEn: 'Sunrise',
    titleTh: 'พระอาทิตย์ขึ้น',
    meaningEn: 'The beginning light of hope, renewal, and momentum. It reflects someone whose energy lifts the mood, encourages fresh starts, and helps others believe there is still something beautiful ahead.',
    meaningTh: 'แสงแรกแห่งความหวัง การเริ่มต้นใหม่ และพลังในการก้าวต่อ สะท้อนคนที่พลังของเขาช่วยยกบรรยากาศขึ้น เปิดทางให้การเริ่มต้นใหม่ และทำให้คนอื่นเชื่อว่ายังมีสิ่งดี ๆ รออยู่ข้างหน้า',
    personalityEn:
      'You are optimistic and healing. Even when things are hard, your energy says, “we can begin again.” You are the spark that gets ideas moving and hearts unstuck.',
    personalityTh:
      'คุณเต็มไปด้วยความหวังและพลังเยียวยา ต่อให้ยากแค่ไหน พลังของคุณบอกเสมอว่า “เราเริ่มใหม่ได้” คุณคือประกายที่ช่วยให้ทั้งความคิดและหัวใจเริ่มขยับอีกครั้ง',
    loveEn:
      'In love, you bring freshness, hope, and emotional momentum. Being with you feels like a new chapter, especially for someone who needs warmth, encouragement, and gentle light.',
    loveTh:
      'ในความรัก คุณนำความสดใหม่ ความหวัง และพลังให้หัวใจได้ขยับต่อ การได้อยู่กับคุณจึงเหมือนการเริ่มบทใหม่ที่อบอุ่นและมีแสงสว่าง',
    palette: 'from-pink-500 via-orange-400 to-yellow-300',
    pattern: 'bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.35),transparent_45%)]',
  },
  solarNoon: {
    titleEn: 'Solar Noon',
    titleTh: 'เที่ยงสุริยะ',
    meaningEn: 'The sun at its highest point, symbolizing precision and clarity. It matches a personality that thinks clearly, acts directly, and brings order and confidence when everything around them feels uncertain.',
    meaningTh: 'ช่วงที่ดวงอาทิตย์อยู่สูงสุด สื่อถึงความชัดเจนและแม่นยำ เข้ากับบุคลิกที่คิดเป็นระบบ ลงมืออย่างตรงไปตรงมา และนำความมั่นคงมาให้เมื่อรอบตัวเต็มไปด้วยความไม่แน่นอน',
    personalityEn:
      'You are focused, direct, and reliable. You cut through confusion and help everyone see what matters most. Your clarity is grounding, especially when everyone else is overwhelmed.',
    personalityTh:
      'คุณมีสมาธิ ตรงไปตรงมา และน่าเชื่อถือ ช่วยให้ทุกคนเห็นสิ่งสำคัญท่ามกลางความสับสน ความชัดเจนของคุณทำให้คนรอบตัวรู้สึกมั่นคง โดยเฉพาะในช่วงที่วุ่นวาย',
    loveEn:
      'In love, you value clarity over games. You are serious about trust, consistency, and mutual effort, and your steadiness can make a relationship feel wonderfully secure.',
    loveTh:
      'ในความรัก คุณให้ค่ากับความชัดเจนมากกว่าเกมเดาใจ คุณจริงจังกับความไว้ใจ ความสม่ำเสมอ และความพยายามจากทั้งสองฝ่าย จนทำให้ความสัมพันธ์รู้สึกมั่นคงมาก',
    palette: 'from-yellow-500 via-amber-400 to-orange-400',
    pattern: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.3),transparent_60%)]',
  },
  sunset: {
    titleEn: 'Sunset',
    titleTh: 'พระอาทิตย์ตก',
    meaningEn: 'A time of reflection, romance, and gentle closure. It reflects a personality that carries tenderness, emotional grace, and a soft beauty that lingers long after the moment has passed.',
    meaningTh: 'ช่วงเวลาแห่งการทบทวน ความโรแมนติก และการปิดวันอย่างอ่อนโยน สะท้อนบุคลิกที่อ่อนโยน มีความละมุนทางอารมณ์ และมีเสน่ห์นุ่มลึกที่ยังคงอยู่แม้ช่วงเวลานั้นจะผ่านไปแล้ว',
    personalityEn:
      'You are poetic, thoughtful, and comforting. You know how to make endings feel beautiful, not scary. Your empathy helps people release what no longer fits and move on with grace.',
    personalityTh:
      'คุณมีความละมุนแบบกวี ช่างคิด และปลอบโยนเก่ง คุณทำให้การจบลงดูสวยงาม ไม่ใช่น่ากลัว ความเข้าอกเข้าใจของคุณช่วยให้ผู้คนวางสิ่งเดิมและก้าวต่อได้อย่างนุ่มนวล',
    loveEn:
      'In love, you are tender, romantic, and emotionally attentive. You love through atmosphere, softness, and meaningful moments that make people feel gently cherished.',
    loveTh:
      'ในความรัก คุณอ่อนโยน โรแมนติก และใส่ใจความรู้สึกมาก คุณรักผ่านบรรยากาศ ความละมุน และช่วงเวลาที่มีความหมายซึ่งทำให้อีกฝ่ายรู้สึกถูกรักอย่างนุ่มนวล',
    palette: 'from-rose-500 via-purple-500 to-indigo-600',
    pattern: 'bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.2),transparent_35%)]',
  },
  sunspot: {
    titleEn: 'Sunspot',
    titleTh: 'จุดมืดบนดวงอาทิตย์',
    meaningEn: 'Dark spots that reveal the sun’s dynamic magnetic activity. It suits a personality that is playful, unpredictable, and full of lively contrast, bringing humor and spark wherever they go.',
    meaningTh: 'จุดมืดที่แสดงพลังการเปลี่ยนแปลงทางแม่เหล็กของดวงอาทิตย์ เหมาะกับบุคลิกที่ขี้เล่น คาดเดายาก และเต็มไปด้วยความต่างที่มีชีวิตชีวา สร้างประกายและเสียงหัวเราะให้คนรอบตัว',
    personalityEn:
      'You are intriguingly complex. You can be playful one moment and analytical the next, always interesting and real. Your mind loves depth, and your humor keeps everything human.',
    personalityTh:
      'คุณเป็นคนซับซ้อนน่าค้นหา บางช่วงสนุกสดใส บางช่วงวิเคราะห์ลึก และมีเสน่ห์แบบจริงใจเสมอ คุณคิดลึกแต่ก็ยังมีอารมณ์ขันที่ทำให้ทุกอย่างเข้าถึงได้',
    loveEn:
      'In love, you attract through wit, surprise, and personality. You need someone who enjoys your layered mind and can move with both your playful side and your deeper thoughts.',
    loveTh:
      'ในความรัก คุณดึงดูดคนอื่นด้วยไหวพริบ ความคาดไม่ถึง และเสน่ห์เฉพาะตัว คุณต้องการคนที่สนุกกับความคิดหลายชั้นของคุณ และรับได้ทั้งด้านขี้เล่นกับด้านลึกของคุณ',
    palette: 'from-orange-900 via-amber-700 to-lime-500',
    pattern: 'bg-[radial-gradient(circle_at_40%_40%,rgba(0,0,0,0.25),transparent_30%)]',
  },
  solarEclipse: {
    titleEn: 'Solar Eclipse',
    titleTh: 'สุริยุปราคา',
    meaningEn: 'A rare alignment where shadow and light create awe. It reflects a personality that feels unforgettable, layered, and quietly powerful, leaving a deep impression without needing to explain itself too much.',
    meaningTh: 'ปรากฏการณ์หายากที่เงาและแสงมาเรียงตัวกันอย่างน่าทึ่ง สะท้อนบุคลิกที่น่าจดจำ มีหลายมิติ และทรงพลังอย่างเงียบ ๆ จนสร้างความประทับใจลึกโดยไม่ต้องอธิบายตัวเองมากนัก',
    personalityEn:
      'You are charismatic and unforgettable, balancing softness and power. When you commit, your focus is legendary. You thrive in pivotal moments and turn uncertainty into awe.',
    personalityTh:
      'คุณมีเสน่ห์แรงและน่าจดจำ ผสานความอ่อนโยนกับพลังได้ลงตัว และเมื่อโฟกัสอะไรแล้วจะจริงจังมาก คุณโดดเด่นในช่วงหัวเลี้ยวหัวต่อ และเปลี่ยนความไม่แน่นอนให้กลายเป็นความน่าทึ่ง',
    loveEn:
      'In love, you create powerful chemistry and unforgettable emotional gravity. You are drawn to meaningful connection, and when your heart decides, your love can feel fated.',
    loveTh:
      'ในความรัก คุณสร้างแรงดึงดูดที่เข้มข้นและน่าจดจำ คุณมักถูกดึงดูดด้วยความสัมพันธ์ที่มีความหมาย และเมื่อหัวใจตัดสินแล้ว ความรักของคุณจะให้ความรู้สึกราวกับถูกกำหนดไว้',
    palette: 'from-slate-900 via-amber-700 to-yellow-200',
    pattern: 'bg-[linear-gradient(115deg,rgba(0,0,0,0.35),transparent_45%,rgba(255,255,255,0.2))]',
  },
};

export type Answer = {
  textEn: string;
  textTh: string;
  scoreMap: Partial<Record<ResultKey, number>>;
};

export const resultShortDescriptions: Record<ResultKey, { en: string; th: string }> = {
  newMoon: {
    en: 'First lunar phase: the Moon is between Earth and Sun, so its lit side faces away from us.',
    th: 'ระยะจันทร์แรก: ดวงจันทร์อยู่ระหว่างโลกกับดวงอาทิตย์ ทำให้ด้านสว่างหันออกจากโลก',
  },
  fullMoon: {
    en: 'Occurs when Earth is between Sun and Moon, so the Moon appears fully illuminated.',
    th: 'เกิดเมื่อโลกอยู่ระหว่างดวงอาทิตย์กับดวงจันทร์ ทำให้เห็นดวงจันทร์สว่างเต็มดวง',
  },
  supermoon: {
    en: 'A full or new moon near perigee, making the Moon appear bigger and brighter.',
    th: 'จันทร์เต็มดวงหรือจันทร์ดับที่ใกล้โลก ทำให้ดูใหญ่และสว่างขึ้น',
  },
  micromoon: {
    en: 'A full or new moon near apogee, appearing slightly smaller from Earth.',
    th: 'จันทร์เต็มดวงหรือจันทร์ดับที่ไกลโลก ทำให้ดูเล็กลงเล็กน้อย',
  },
  blueMoon: {
    en: 'A rare timing event, commonly the second full moon in a calendar month.',
    th: 'ปรากฏการณ์ตามปฏิทินที่พบไม่บ่อย โดยมากคือพระจันทร์เต็มดวงครั้งที่สองในเดือนเดียว',
  },
  bloodMoon: {
    en: 'The reddish Moon seen during a total lunar eclipse, tinted by Earth’s atmosphere.',
    th: 'ดวงจันทร์สีแดงในจันทรุปราคาเต็มดวง เกิดจากแสงผ่านชั้นบรรยากาศโลก',
  },
  harvestMoon: {
    en: 'The full moon nearest the September equinox, historically linked to harvest evenings.',
    th: 'พระจันทร์เต็มดวงที่ใกล้วันศารทวิษุวัตที่สุด ซึ่งเกี่ยวข้องกับฤดูเก็บเกี่ยว',
  },
  lunarEclipse: {
    en: 'Happens when Earth’s shadow falls on the Moon during full moon alignment.',
    th: 'เกิดเมื่อเงาโลกทอดบนดวงจันทร์ในช่วงแนวเรียงตัวของพระจันทร์เต็มดวง',
  },
  sunrise: {
    en: 'The moment the Sun first appears above the horizon as Earth rotates.',
    th: 'ช่วงที่ดวงอาทิตย์เริ่มโผล่เหนือขอบฟ้าจากการหมุนของโลก',
  },
  solarNoon: {
    en: 'When the Sun reaches its highest daily point in your local sky.',
    th: 'ช่วงที่ดวงอาทิตย์อยู่สูงที่สุดของวันในท้องฟ้าพื้นที่นั้น',
  },
  sunset: {
    en: 'The time when the Sun disappears below the horizon at day’s end.',
    th: 'ช่วงที่ดวงอาทิตย์ลับขอบฟ้าในตอนท้ายของวัน',
  },
  sunspot: {
    en: 'Temporary darker regions on the Sun’s surface caused by intense magnetic activity.',
    th: 'บริเวณมืดชั่วคราวบนผิวดวงอาทิตย์ที่เกิดจากสนามแม่เหล็กเข้มข้น',
  },
  solarEclipse: {
    en: 'When the Moon passes between Earth and Sun, blocking all or part of sunlight.',
    th: 'เกิดเมื่อดวงจันทร์เคลื่อนผ่านระหว่างโลกกับดวงอาทิตย์ บดบังแสงบางส่วนหรือทั้งหมด',
  },
};

export type Question = {
  id: string;
  textEn: string;
  textTh: string;
  answers: Answer[];
};

const spreadScores = (target: ResultKey, amount = 3): Partial<Record<ResultKey, number>> => ({
  [target]: amount,
});

const questionBank: Question[] = [
  {
    id: 'crush-think',
    textEn: 'If someone has a crush on you, what do you think about first?',
    textTh: 'ถ้ามีคนแอบชอบคุณ คุณจะคิดเรื่องอะไรเป็นอย่างแรก?',
    answers: [
      { textEn: 'Maybe they see a side of me I hide.', textTh: 'หรือเขาเห็นมุมที่ฉันซ่อนไว้', scoreMap: spreadScores('lunarEclipse') },
      { textEn: 'Cute! Let’s see where this goes.', textTh: 'น่ารักดี ลองดูว่าจะไปต่อยังไง', scoreMap: spreadScores('sunrise') },
      { textEn: 'I overanalyze every tiny sign.', textTh: 'ฉันวิเคราะห์ทุกสัญญาณเล็ก ๆ', scoreMap: spreadScores('micromoon') },
      { textEn: 'I enjoy the attention, not gonna lie.', textTh: 'ชอบความสนใจนะ พูดตรง ๆ', scoreMap: spreadScores('supermoon') },
    ],
  },
  {
    id: 'meet-crush',
    textEn: 'If you meet your crush, how do you tell them?',
    textTh: 'ถ้าได้เจอคนที่แอบชอบ คุณจะบอกเขายังไง?',
    answers: [
      { textEn: 'I write a thoughtful message at night.', textTh: 'เขียนข้อความจริงใจตอนกลางคืน', scoreMap: spreadScores('newMoon') },
      { textEn: 'I say it directly with confidence.', textTh: 'บอกตรง ๆ อย่างมั่นใจ', scoreMap: spreadScores('solarNoon') },
      { textEn: 'I flirt playfully and let the vibe grow.', textTh: 'แซวเล่นให้บรรยากาศค่อย ๆ ไป', scoreMap: spreadScores('blueMoon') },
      { textEn: 'I wait for the perfect cinematic moment.', textTh: 'รอจังหวะเหมือนฉากหนัง', scoreMap: spreadScores('sunset') },
    ],
  },
  {
    id: 'ice-cream',
    textEn: 'What ice cream are you choosing right now?',
    textTh: 'ตอนนี้คุณจะเลือกไอศกรีมรสอะไร?',
    answers: [
      { textEn: 'Dark chocolate with sea salt.', textTh: 'ดาร์กช็อกโกแลตโรยเกลือทะเล', scoreMap: spreadScores('bloodMoon') },
      { textEn: 'Vanilla with honey and nuts.', textTh: 'วานิลลากับน้ำผึ้งและถั่ว', scoreMap: spreadScores('harvestMoon') },
      { textEn: 'Blueberry yogurt swirl.', textTh: 'โยเกิร์ตบลูเบอร์รีหมุนวน', scoreMap: spreadScores('blueMoon') },
      { textEn: 'Mango sorbet, bright and refreshing.', textTh: 'ซอร์เบต์มะม่วงสดใส', scoreMap: spreadScores('sunrise') },
    ],
  },
  {
    id: 'outside-room',
    textEn: 'What do you expect to see when you step out of your room?',
    textTh: 'คุณคาดหวังจะเห็นอะไรเมื่อก้าวออกจากห้อง?',
    answers: [
      { textEn: 'A calm sky and one meaningful message.', textTh: 'ท้องฟ้านิ่ง ๆ กับข้อความที่มีความหมาย', scoreMap: spreadScores('newMoon') },
      { textEn: 'Friends waiting to go somewhere fun.', textTh: 'เพื่อนรอไปเที่ยวแบบสนุก ๆ', scoreMap: spreadScores('fullMoon') },
      { textEn: 'Golden light and a new opportunity.', textTh: 'แสงสีทองกับโอกาสใหม่', scoreMap: spreadScores('sunrise') },
      { textEn: 'A strange sign that changes my day.', textTh: 'สัญญาณแปลก ๆ ที่เปลี่ยนวันทั้งวัน', scoreMap: spreadScores('solarEclipse') },
    ],
  },
  {
    id: 'energy-time',
    textEn: 'When do you feel most like yourself?',
    textTh: 'ช่วงเวลาไหนที่คุณรู้สึกเป็นตัวเองที่สุด?',
    answers: [
      { textEn: 'Very late night.', textTh: 'ดึกมาก ๆ', scoreMap: spreadScores('newMoon') },
      { textEn: 'Morning with soft sunlight.', textTh: 'ตอนเช้าพร้อมแดดอ่อน', scoreMap: spreadScores('sunrise') },
      { textEn: 'Midday when everything is clear.', textTh: 'กลางวันตอนทุกอย่างชัดเจน', scoreMap: spreadScores('solarNoon') },
      { textEn: 'Twilight when emotions open up.', textTh: 'ช่วงพลบค่ำที่ความรู้สึกเปิดออก', scoreMap: spreadScores('sunset') },
    ],
  },
  {
    id: 'social-role',
    textEn: 'In your friend group, you are usually…',
    textTh: 'ในกลุ่มเพื่อน คุณมักเป็นคนแบบไหน?',
    answers: [
      { textEn: 'The planner and organizer.', textTh: 'คนวางแผนและจัดการ', scoreMap: spreadScores('solarNoon') },
      { textEn: 'The emotional support friend.', textTh: 'เพื่อนสายรับฟังและปลอบใจ', scoreMap: spreadScores('harvestMoon') },
      { textEn: 'The one with unexpected jokes.', textTh: 'คนเล่นมุกเซอร์ไพรส์', scoreMap: spreadScores('sunspot') },
      { textEn: 'The mysterious one who appears perfectly.', textTh: 'คนลึกลับที่โผล่มาถูกจังหวะ', scoreMap: spreadScores('lunarEclipse') },
    ],
  },
  {
    id: 'ideal-date',
    textEn: 'Pick your ideal date.',
    textTh: 'เลือกเดตในฝันของคุณ',
    answers: [
      { textEn: 'Picnic under the full moon.', textTh: 'ปิกนิกใต้พระจันทร์เต็มดวง', scoreMap: spreadScores('fullMoon') },
      { textEn: 'Sunrise beach walk.', textTh: 'เดินชายหาดตอนพระอาทิตย์ขึ้น', scoreMap: spreadScores('sunrise') },
      { textEn: 'Museum + coffee + deep talk.', textTh: 'พิพิธภัณฑ์ + กาแฟ + คุยลึก ๆ', scoreMap: spreadScores('micromoon') },
      { textEn: 'Spontaneous road trip with no plan.', textTh: 'โรดทริปแบบไม่วางแผน', scoreMap: spreadScores('solarEclipse') },
    ],
  },
  {
    id: 'conflict-style',
    textEn: 'When conflict happens, you…',
    textTh: 'เมื่อเกิดความขัดแย้ง คุณจะ…',
    answers: [
      { textEn: 'Talk immediately and clearly.', textTh: 'คุยทันทีแบบชัดเจน', scoreMap: spreadScores('solarNoon') },
      { textEn: 'Need time, then explain deeply.', textTh: 'ขอเวลาทบทวนแล้วค่อยคุยลึก ๆ', scoreMap: spreadScores('lunarEclipse') },
      { textEn: 'Turn it into humor to soften things.', textTh: 'ใช้มุกเพื่อให้สถานการณ์เบาลง', scoreMap: spreadScores('sunspot') },
      { textEn: 'Try to keep harmony for everyone.', textTh: 'พยายามรักษาความกลมกลืนของทุกคน', scoreMap: spreadScores('harvestMoon') },
    ],
  },
  {
    id: 'dream-home',
    textEn: 'Your dream room feels like…',
    textTh: 'ห้องในฝันของคุณให้ความรู้สึกแบบไหน?',
    answers: [
      { textEn: 'Minimal, dark, and peaceful.', textTh: 'มินิมอล โทนเข้ม และสงบ', scoreMap: spreadScores('newMoon') },
      { textEn: 'Bright, sunny, and organized.', textTh: 'สว่าง มีแดด และเป็นระเบียบ', scoreMap: spreadScores('solarNoon') },
      { textEn: 'Warm lights and comfy textures.', textTh: 'ไฟอุ่น ๆ กับสัมผัสสบาย', scoreMap: spreadScores('sunset') },
      { textEn: 'Colorful and artistic corners.', textTh: 'สีสันสดใสกับมุมศิลปะ', scoreMap: spreadScores('supermoon') },
    ],
  },
  {
    id: 'rare-moment',
    textEn: 'Which rare moment feels most magical?',
    textTh: 'ช่วงเวลาหายากแบบไหนที่คุณรู้สึกว่ามหัศจรรย์ที่สุด?',
    answers: [
      { textEn: 'A total eclipse.', textTh: 'สุริยุปราคาหรือจันทรุปราคาเต็มดวง', scoreMap: spreadScores('solarEclipse') },
      { textEn: 'A moon that looks enormous.', textTh: 'พระจันทร์ที่ดูใหญ่พิเศษ', scoreMap: spreadScores('supermoon') },
      { textEn: 'A moon that appears only once in a while.', textTh: 'พระจันทร์ที่เกิดไม่บ่อย', scoreMap: spreadScores('blueMoon') },
      { textEn: 'A quiet dawn after a long night.', textTh: 'รุ่งเช้าเงียบ ๆ หลังคืนยาวนาน', scoreMap: spreadScores('sunrise') },
    ],
  },
  {
    id: 'creative-mode',
    textEn: 'How do your best ideas arrive?',
    textTh: 'ไอเดียที่ดีที่สุดของคุณมาแบบไหน?',
    answers: [
      { textEn: 'Suddenly, like a flash.', textTh: 'มาแบบวาบเดียวทันที', scoreMap: spreadScores('solarEclipse') },
      { textEn: 'After long observation.', textTh: 'หลังจากเฝ้าดูและเก็บรายละเอียดนาน ๆ', scoreMap: spreadScores('micromoon') },
      { textEn: 'While talking with people.', textTh: 'ตอนคุยกับผู้คน', scoreMap: spreadScores('fullMoon') },
      { textEn: 'In emotional turning points.', textTh: 'ช่วงจังหวะเปลี่ยนอารมณ์แรง ๆ', scoreMap: spreadScores('bloodMoon') },
    ],
  },
  {
    id: 'compliment',
    textEn: 'Which compliment feels the best?',
    textTh: 'คำชมแบบไหนที่ทำให้คุณรู้สึกดีที่สุด?',
    answers: [
      { textEn: '“You make people feel safe.”', textTh: '“อยู่กับคุณแล้วปลอดภัย”', scoreMap: spreadScores('harvestMoon') },
      { textEn: '“You are unforgettable.”', textTh: '“คุณน่าจดจำมาก”', scoreMap: spreadScores('solarEclipse') },
      { textEn: '“You are so calm and wise.”', textTh: '“คุณนิ่งและฉลาดมาก”', scoreMap: spreadScores('newMoon') },
      { textEn: '“You light up the room.”', textTh: '“คุณทำให้ห้องสว่างขึ้นเลย”', scoreMap: spreadScores('fullMoon') },
    ],
  },
  {
    id: 'weekend',
    textEn: 'Your ideal weekend plan?',
    textTh: 'แผนสุดสัปดาห์ในอุดมคติของคุณ?',
    answers: [
      { textEn: 'Sunrise workout + fresh breakfast.', textTh: 'ออกกำลังกายรับแสงเช้า + อาหารเช้าสดชื่น', scoreMap: spreadScores('sunrise') },
      { textEn: 'Sleep late and stargaze at night.', textTh: 'นอนตื่นสายแล้วดูดาวตอนดึก', scoreMap: spreadScores('newMoon') },
      { textEn: 'Gather everyone for dinner.', textTh: 'ชวนทุกคนมากินข้าวเย็นด้วยกัน', scoreMap: spreadScores('harvestMoon') },
      { textEn: 'Try something weird and new.', textTh: 'ลองอะไรแปลกใหม่', scoreMap: spreadScores('blueMoon') },
    ],
  },
  {
    id: 'heart-protect',
    textEn: 'How do you protect your heart?',
    textTh: 'คุณปกป้องหัวใจตัวเองอย่างไร?',
    answers: [
      { textEn: 'By setting clear boundaries.', textTh: 'ตั้งขอบเขตให้ชัดเจน', scoreMap: spreadScores('solarNoon') },
      { textEn: 'By staying private at first.', textTh: 'เก็บตัวและไม่เปิดหมดในตอนแรก', scoreMap: spreadScores('micromoon') },
      { textEn: 'By joking and staying playful.', textTh: 'เล่นมุกไว้ก่อนให้เบาใจ', scoreMap: spreadScores('sunspot') },
      { textEn: 'By expressing everything through art/music.', textTh: 'ระบายผ่านงานศิลปะหรือดนตรี', scoreMap: spreadScores('sunset') },
    ],
  },
  {
    id: 'deep-night-thought',
    textEn: 'At 2 AM, your thoughts are mostly about…',
    textTh: 'ตอนตีสอง คุณมักคิดถึงเรื่อง…',
    answers: [
      { textEn: 'Future goals and strategy.', textTh: 'เป้าหมายอนาคตและแผนการ', scoreMap: spreadScores('solarNoon') },
      { textEn: 'Love, fate, and hidden feelings.', textTh: 'ความรัก โชคชะตา และความรู้สึกที่ซ่อนอยู่', scoreMap: spreadScores('lunarEclipse') },
      { textEn: 'The beauty of small moments.', textTh: 'ความงามของช่วงเวลาเล็ก ๆ', scoreMap: spreadScores('sunset') },
      { textEn: 'A big new start.', textTh: 'การเริ่มต้นครั้งใหญ่ครั้งใหม่', scoreMap: spreadScores('sunrise') },
    ],
  },
];

export const questions: Question[] = [
  questionBank[4],
  questionBank[2],
  questionBank[7],
  questionBank[1],
  questionBank[0],
  questionBank[9],
  questionBank[3],
  questionBank[10],
  questionBank[5],
  questionBank[11],
  questionBank[8],
  questionBank[12],
  questionBank[6],
  questionBank[13],
  questionBank[14],
];

export const introCopy = {
  en: {
    title: 'Moon & Sun Personality Quiz',
    subtitle:
      'A short personality quiz that takes you on a journey to discover what kind of moon or sun energy matches you most. Answer each question without overthinking, and see your cosmic type.',
    note: 'Note: This quiz is just for fun, don’t take it too seriously.',
    start: 'Start Quiz',
    language: 'ภาษาไทย',
  },
  th: {
    title: 'แบบทดสอบบุคลิกภาพ พระจันทร์ & พระอาทิตย์',
    subtitle:
      'แบบทดสอบสั้น ๆ ที่จะพาคุณไปค้นหาว่า พลังแบบดวงจันทร์หรือดวงอาทิตย์แบบไหนที่ตรงกับตัวคุณมากที่สุด ตอบแบบไม่ต้องคิดเยอะ แล้วมาดูพลังจักรวาลของคุณกัน',
    note: 'หมายเหตุ: แบบทดสอบนี้ทำเพื่อความสนุกเท่านั้น ไม่ต้องจริงจังมากนะ',
    start: 'เริ่มแบบทดสอบ',
    language: 'English',
  },
};

export const midwayQuote = {
  en: 'The sun and the moon do not try to be alike. One lights the day, the other softens the night - each finding their place, each enough as they are.',
  th: 'ดวงอาทิตย์กับดวงจันทร์ไม่จำเป็นต้องเหมือนกัน ดวงหนึ่งส่องสว่างให้กลางวัน อีกดวงทำให้กลางคืนอ่อนโยน ต่างมีที่ทางของตัวเอง และต่างก็เพียงพอในแบบของตัวเอง',
};

export const preResultQuote = {
  en: 'You are lovely to the moon and sun — a heart that shines in every sky.',
  th: 'คุณช่างน่ารักสำหรับทั้งดวงจันทร์และดวงอาทิตย์ — หัวใจที่เปล่งประกายในทุกท้องฟ้า',
};
