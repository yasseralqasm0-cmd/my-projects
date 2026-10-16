
const CH = [
 {id:"c1", name:"الفصل ١ — المنشآت والأحمال", files:"الملفات 1، 2، 3"},
 {id:"c2", name:"الفصل ٢ — المثلنة والاتزان والاستقرار", files:"الملفات 4، 5"},
 {id:"c4", name:"الفصل ٤ — القوى الداخلية", files:"الملف 6"}
];

const CONCEPTS = {
c1:[
 ["أنواع العناصر الإنشائية",`<ul>
 <li><b>الكوابل والشدّادات (Cables, Tie rods, Hangers):</b> شد فقط.</li>
 <li><b>عناصر التربيط (Bracing / Links):</b> شد أو ضغط بدون عزم.</li>
 <li><b>الكمرات (Beams):</b> قوة محورية + قص + عزم انحناء. أنواعها: بسيطة، مستمرة، كابولي، مركّبة.</li>
 <li><b>الأعمدة (Columns):</b> قوة محورية بشكل أساسي.</li>
 <li><b>الإطارات (Frames):</b> دور واحد/بحر واحد، أو متعددة الأدوار والبحور، أو فراغية.</li>
 <li><b>الجملونات (Trusses):</b> عناصر مفصلية الأطراف، الأحمال على العُقد فقط، كل عنصر إما شد أو ضغط.</li>
 <li><b>الأقواس (Arches):</b> ضغط غالباً تحت الأحمال الرأسية، بحور حتى 300 m.</li>
 <li><b>المنشآت السطحية (Surface structures):</b> قشريات وأغشية.</li></ul>
 <p>متطلبات المنشأ: معمارية، إنشائية (اتزان، أمان، صلاحية، ديمومة)، اقتصادية، بيئية.</p>`],
 ["الوحدات: الكتلة والوزن",`<p>الوزن = الكتلة × تسارع الجاذبية (9.8 ≈ 10 m/s²)</p>
 <span class="eq">1 kg weight ≈ 10 N      1 ton = 10 kN      1 kN ≈ 0.1 ton</span>`],
 ["أشكال الأحمال",`<ul>
 <li><b>حمل مركّز P</b> عند نقطة.</li>
 <li><b>عزم مركّز M</b> = P × الذراع.</li>
 <li><b>حمل منتظم w (kN/m):</b> محصلته <span class="eqi">wL</span> في منتصف الطول L/2. مثل وزن كمرة خرسانية أو جدار.</li>
 <li><b>حمل مثلثي:</b> محصلته <span class="eqi">wL/2</span> على بعد <span class="eqi">L/3</span> من الجهة الكبيرة (2L/3 من الرأس). مثل ضغط التربة الجانبي.</li></ul>`],
 ["الأحمال الميتة (Dead Loads)",`<p>أوزان العناصر الإنشائية (كمرات، أعمدة، بلاطات) وكل ما هو مثبت بشكل دائم (جدران، لياسة، أرضيات، تمديدات).</p>
 <p>الحساب بالقاعدة: <span class="eqi">kN/m = (المساحة m²) × (الكثافة kN/m³)</span> أو <span class="eqi">(العرض m) × (kN/m²)</span>.</p><p>شف <a href="#ex1">المثال 1</a>.</p>`],
 ["الأحمال الحية وتخفيضها",`<p>أحمال متغيرة في المقدار والمكان (ناس، أثاث، مركبات). قيمها من الكود (SBC 301 جدول 4-1، ASCE 7).</p>
 <span class="eq">L = Lo ( 0.25 + 4.57 / √(K_LL · A_T) )</span>
 <ul><li><span class="eqi">K_LL = 4</span> للعمود الداخلي.</li>
 <li>يُسمح بالتخفيض إذا <span class="eqi">K_LL·A_T ≥ 37.2 m²</span>.</li>
 <li>لا يقل L عن <span class="eqi">0.5 Lo</span> (عنصر يحمل دور واحد).</li>
 <li>لا تخفيض للجراجات ولا للسطح في مثال المحاضرة.</li></ul><p>شف <a href="#ex2">المثال 2</a>.</p>`],
 ["أحمال الجسور ومعامل الصدمة",`<ul><li>جسور الطرق: شاحنات AASHTO مثل <span class="eqi">H15-44</span> (H + الوزن بالطن + سنة المواصفة).</li>
 <li>جسور السكك: AREA، مثل <span class="eqi">E-72</span> (حمل محور 320 kN).</li></ul>
 <span class="eq">I = 15.24 / (L + 38.1) ≤ 0.3     (L بالمتر)</span>`],
 ["أحمال الرياح",`<span class="eq">q = 0.613 Kz Kzt Kd V²   (N/m²)</span>
 <ul><li>V: سرعة الرياح (هبّة 3 ثواني على ارتفاع 10 m) من خرائط الكود.</li>
 <li>Kz: معامل التعرض حسب الارتفاع. Kzt: الطبوغرافيا. Kd: الاتجاه.</li></ul>
 <p>ضغط التصميم على المباني:</p><span class="eq">p = q G Cp − qh (G Cpi)</span>
 <p>القوة على اللوحات الإعلانية:</p><span class="eq">F = qz G Cf Af</span>
 <p>للمباني العالية أو الحساسة للرياح يُستخدم التحليل الديناميكي. شف <a href="#ex3">المثال 3</a>.</p>`],
 ["أحمال الثلوج",`<span class="eq">pf = 0.7 Ce Ct I pg      (سقف مستوٍ، ميل < 5%)</span>
 <ul><li>Ce: معامل التعرض (0.8 مكشوف تماماً، 1.3 محمي وسط مدينة).</li>
 <li>Ct: حراري (1.2 غير مدفأ، 1.0 مدفأ).</li>
 <li>I: الأهمية (0.8 مخازن/زراعي، 1.2 مستشفى).</li>
 <li>إذا <span class="eqi">pg ≤ 0.96 kN/m²</span> خذ الأكبر من المعادلة و <span class="eqi">I·pg</span>.</li>
 <li>إذا <span class="eqi">pg > 0.96</span> فالحد الأدنى <span class="eqi">I(0.96)</span>.</li></ul><p>شف <a href="#ex4">المثال 4</a>.</p>`],
 ["الزلازل وأحمال أخرى",`<span class="eq">Cs = S_DS / (R / I)</span>
 <ul><li>S_DS: تسارع الاستجابة الطيفية للفترات القصيرة. R: معامل تعديل الاستجابة (حسب المطيلية). I: الأهمية.</li>
 <li>ضغط سوائل وتربة: خزانات، سدود، جدران ساندة.</li>
 <li>أخرى: انفجارات، فيضانات، تغير حرارة، هبوط تفاضلي.</li></ul>`],
 ["التصميم وتوافيق الأحمال",`<p><b>إجهادات التشغيل (Working stress):</b></p><span class="eq">D  |  0.6D + 0.6W  |  0.6D + 0.7E</span>
 <p><b>المقاومة القصوى (Ultimate strength):</b></p><span class="eq">1.4D  |  1.2D + 1.6L + 0.5S  |  0.9D + 1.0E  |  0.9D + 1.0W</span>`]
],
c2:[
 ["أنواع الركائز",`<div class="tw"><table class="t"><tr><th>الركيزة</th><th>تمنع</th><th>عدد المجاهيل</th></tr>
 <tr><td>Roller (متدحرجة)</td><td>الحركة العمودية على سطح التلامس</td><td class="mono">1</td></tr>
 <tr><td>Pin / Hinge (مفصلية)</td><td>الحركة في الاتجاهين</td><td class="mono">2</td></tr>
 <tr><td>Fixed (مثبتة)</td><td>الحركة والدوران</td><td class="mono">3</td></tr></table></div>
 <p>في الواقع كل وصلة لها جساءة دورانية k: إذا k = 0 مفصل، وإذا k → ∞ مثبتة.</p>`],
 ["توزيع أحمال البلاطات (Tributary Loading)",`<ul><li><b>اتجاه واحد:</b> إذا <span class="eqi">L2/L1 ≥ 2</span>، الحمل ينتقل للكمرات الطويلة، وكل كمرة تأخذ نصف المسافة لجارتها من كل جهة.</li>
 <li><b>اتجاهين:</b> إذا <span class="eqi">L2/L1 < 2</span> والكمرات بنفس المنسوب، نرسم خطوط 45° من الأركان. الكمرة القصيرة تاخذ مثلث والطويلة تاخذ شبه منحرف.</li></ul>
 <span class="eq">w_max = (الحمل kN/m²) × (L1 / 2)</span><p>شف الأمثلة <a href="#ex5">5</a> و <a href="#ex6">6</a> و <a href="#ex7">7</a>.</p>`],
 ["مبدأ التراكب (Superposition)",`<p>الإزاحة أو القوة الداخلية الكلية = مجموع تأثير كل حمل لحاله.</p><p>شروطه: مادة مرنة خطية (قانون هوك) وإزاحات صغيرة لا تغيّر الشكل الهندسي.</p>`],
 ["معادلات الاتزان",`<span class="eq">ΣFx = 0    ΣFy = 0    ΣMo = 0</span><p>ارسم دائماً مخطط الجسم الحر (FBD) قبل التطبيق.</p>`],
 ["التحديد والاستقرار للكمرات والإطارات",`<p>r = عدد المجاهيل (ردود الأفعال والقوى في الوصلات)، n = عدد الأجزاء.</p>
 <span class="eq">r = 3n  محدد استاتيكياً    r > 3n  غير محدد    r < 3n  غير مستقر</span>
 <p>حتى لو r ≥ 3n يكون المنشأ <b>غير مستقر</b> إذا كانت كل ردود الأفعال <b>متلاقية في نقطة</b> أو <b>متوازية</b>.</p>`],
 ["التحديد والاستقرار للجملونات",`<p>b = عدد العناصر، r = ردود الأفعال، j = عدد العُقد.</p>
 <span class="eq">b + r = 2j  محدد    b + r > 2j  غير محدد    b + r < 2j  غير مستقر</span><p>شف <a href="#ex8">المثال 8</a>.</p>`],
 ["استراتيجية حساب ردود الأفعال",`<ul><li>اختر نقطة العزوم اللي تلغي أكبر عدد من المجاهيل.</li>
 <li>تجنّب استخدام رد فعل محسوب لحساب رد فعل آخر.</li>
 <li>خلّ <span class="eqi">ΣFy = 0</span> للتحقق فقط.</li></ul>`]
],
c4:[
 ["القوى الداخلية الثلاث",`<ul><li><b>N (قوة عمودية):</b> عمودية على المقطع، موازية لمحور العنصر.</li>
 <li><b>V (قوة القص):</b> موازية للمقطع.</li><li><b>M (عزم الانحناء):</b> حول المحور الرئيسي للمقطع.</li></ul><p>تظهر فقط إذا عملنا قطع في العنصر. عنصر الجملون له N فقط.</p>`],
 ["العلاقة بين الحمل والقص والعزم",`<span class="eq">dV/dx = w(x)        dM/dx = V(x)</span>
 <span class="eq">ΔV = مساحة الحمل      ΔM = مساحة مخطط القص</span>
 <ul><li>الحمل المركّز يعمل قفزة في مخطط القص.</li><li>العزم المركّز يعمل قفزة في مخطط العزم.</li><li>أقصى عزم عند نقطة القص = صفر.</li></ul>`],
 ["أين نحسب العزوم؟",`<ol style="padding-inline-start:20px"><li>بداية ونهاية الكمرة.</li><li>عند كل حمل مركّز.</li><li>بداية ونهاية الأحمال الموزعة.</li><li>عند الركائز الوسطية.</li><li>قبل وبعد أي عزم مركّز.</li><li>عند نقطة القص صفر (العزم الأقصى).</li></ol>
 <p>إشارة العزم: <b>موجب</b> إذا الشد في الأسفل، <b>سالب</b> إذا الشد في الأعلى. شف <a href="#ex9">المثال 9</a>.</p>`]
]};

const EX = [
{id:1,ch:"c1",title:"Dead Load على Steel Beam",short:"نجمع أوزان Concrete slab و Masonry wall و Plaster و Mechanical equipment لكل متر.",src:"ملف 2 — صفحة 16",img:"e1",
 q:"For the shown steel beam, determine its total dead load per unit meter length.",
 given:["Concrete weight = 22.6 kN/m³","Steel beam = 0.25 kN/m","Normal weight masonry = 21.2 kN/m³","Plaster (each side of wall) = 0.24 kN/m²","Suspended metal & gypsum plaster = 0.48 kN/m²","Mechanical equipment = 0.20 kN/m²","Concrete slab: t = 0.12 m, width = 1 + 1 = 2 m","Wall: 0.3 m × 4.0 m"],
 steps:[
  ["الفكرة","كل حمل نحوّله إلى kN/m. الحمل بوحدة kN/m³ نضربه في مساحة المقطع (m²)، والحمل بوحدة kN/m² نضربه في العرض (m).","kN/m³ × m² = kN/m      kN/m² × m = kN/m"],
  ["Steel beam","معطى مباشرة لكل متر.","w₁ = 0.25 kN/m"],
  ["Concrete slab","مساحة المقطع = t × width = 0.12 × 2.","w₂ = (0.12 × 2) × 22.6 = 5.424 kN/m"],
  ["Suspended metal & gypsum plaster","حمل سطحي × width = 2 m.","w₃ = 2 × 0.48 = 0.96 kN/m"],
  ["Mechanical equipment","حمل سطحي × width = 2 m.","w₄ = 2 × 0.20 = 0.40 kN/m"],
  ["Masonry wall","مقطع الـ wall = 0.3 × 4.","w₅ = (0.3 × 4) × 21.2 = 25.44 kN/m"],
  ["Plaster (both sides)","ارتفاع الـ wall = 4 m، والـ plaster على وجهين.","w₆ = 2 × 4 × 0.24 = 1.92 kN/m"],
  ["Total dead load","نجمع كل الأحمال.","w = 0.25 + 5.424 + 0.96 + 0.40 + 25.44 + 1.92 = 34.394 kN/m"]
 ],
 ans:"Total dead load ≈ <b>34.39 kN/m</b> ≈ 3.5 t/m",
 idea:"الـ Masonry wall أكبر حمل (أكثر من 70% من المجموع). انتبه لعدد أوجه الـ plaster."},

{id:2,ch:"c1",title:"Live Load Reduction على Central Column",short:"3 أدوار: Garage و Office و Roof. متى نطبّق الـ reduction.",src:"ملف 2 — صفحة 24",img:"e2",
 q:"Determine the reduced live load on a central column of the shown 3-story building.",
 given:["Live load on garage = 2.4 kN/m²","Live load on office floor = 2.4 kN/m²","Live load on roof = 1.0 kN/m²","Spans: 8 m × 6 m","K_LL = 4 (interior column)"],
 steps:[
  ["Tributary area A_T","الـ central column يحمل نص البحر من كل جهة: (4 + 4) × (3 + 3).","A_T = 8 × 6 = 48 m²"],
  ["Garage","ما فيه live load reduction للـ garage.","F_garage = 48 × 2.4 = 115.2 kN"],
  ["Office floor: نطبّق الـ reduction؟","نتحقق من الشرط K_LL · A_T ≥ 37.2 m².","4 × 48 = 192 m² > 37.2 m²   ✓  reduce"],
  ["Reduced live load L","نعوّض في Eq. 1.1.","L = 2.4 (0.25 + 4.57/√192) = 2.4 (0.25 + 0.330) = 1.39 kN/m²"],
  ["Check الحد الأدنى","L لازم ما يقل عن 0.5 Lo.","0.5 × 2.4 = 1.2   →   1.39 > 1.2   ✓"],
  ["F_office","","F_office = 48 × 1.39 = 66.72 kN"],
  ["Roof","ما فيه reduction للـ roof.","F_roof = 48 × 1.0 = 48.0 kN"],
  ["Total","","F = 115.2 + 66.72 + 48 = 229.9 ≈ 230 kN"]
 ],
 ans:"Total reduced live load on central column = <b>230 kN</b>",
 idea:"الـ reduction يُطبّق بس على الدور اللي يسمح فيه الـ code، ودايماً تحقق من حد 50%."},

{id:3,ch:"c1",title:"Wind Load على Sign (ASCE 7-98 vs 7-10)",short:"مقارنة الكودين للوحة في الرياض.",src:"ملف 3 — صفحة 16",img:"e3",
 q:"For the given sign road, calculate the total wind force if it is located at Riyadh city according to both codes.",
 given:["B = 4 m","s = 1 m","h = 10 m","V = 46 m/s (Riyadh)","Kzt = Kd = 1.0","G = 0.85","As = 4 × 1 = 4 m²"],
 steps:[
  ["Height for q","7-98: عند center of sign. 7-10: عند top of sign.","z(7-98) = 10 − 0.5 = 9.5 m      h(7-10) = 10 m"],
  ["Kz","من Table 1-5.","Kz(7-98) = 0.988      Kz(7-10) = 1.0"],
  ["q (ASCE 7-98)","I = 1.0","q = 0.613 × 0.988 × 1 × 1 × 1 × 46² = 1281.5 N/m²"],
  ["q (ASCE 7-10)","","q = 0.613 × 1.0 × 1 × 1 × 46² = 1297.1 N/m²"],
  ["Cf","7-98: يعتمد على B/s بس. 7-10: على B/s و s/h.","B/s = 4 → Cf = 1.2      B/s = 4, s/h = 0.1 → Cf = 1.85"],
  ["F (ASCE 7-98)","F = q · G · Cf · As","F = 1281.5 × 0.85 × 1.2 × 4 = 5228.5 N"],
  ["F (ASCE 7-10)","","F = 1297.1 × 0.85 × 1.85 × 4 = 8158.8 N"]
 ],
 ans:"ASCE 7-98: <b>F ≈ 5.23 kN</b> — ASCE 7-10: <b>F ≈ 8.16 kN</b>",
 idea:"الفرق سببه Cf في الكود الأحدث (1.85 بدل 1.2)، يعني ASCE 7-10 أكثر تحفظاً بحوالي 56%."},

{id:4,ch:"c1",title:"Snow Load على Flat Roof (Example 1.4)",short:"Unheated storage facility على flat open terrain.",src:"ملف 3 — صفحات 20-21",img:"e4",
 q:"The unheated storage facility is located on flat open terrain near Cairo, Illinois where the ground snow load is 0.72 kN/m². Determine the design snow load on the roof.",
 given:["pg = 0.72 kN/m²","Unheated → Ct = 1.2","Fully exposed → Ce = 0.8","Storage → I = 0.8","Flat roof → Eq. 1.5"],
 steps:[
  ["Ce, Ct, I","من وصف المسألة: fully exposed و unheated و storage.","Ce = 0.8    Ct = 1.2    I = 0.8"],
  ["Eq. 1.5","الـ roof مستوي.","pf = 0.7 Ce Ct I pg = 0.7 (0.8)(1.2)(0.8)(0.72) = 0.39 kN/m²"],
  ["Check pg ≤ 0.96","بما أن pg = 0.72 < 0.96 نحسب I · pg بعد.","pf = I · pg = 0.8 × 0.72 = 0.58 kN/m²"],
  ["Choose","ناخذ الأكبر.","max(0.39, 0.58) = 0.58 kN/m²"],
  ["الحالة 2: المعادلة هي اللي تحكم","نفس المخزن بس محمي في وسط مدينة كبيرة (sheltered) → Ce = 1.3. هنا pg ما زال ≤ 0.96 فنقارن مع I · pg، بس المعادلة تطلع أكبر.","pf = 0.7 (1.3)(1.2)(0.8)(0.72) = 0.63      I · pg = 0.58      →   pf = 0.63 kN/m²"],
  ["الحالة 3: pg > 0.96 والحد الأدنى يحكم","لو الثلج الأرضي pg = 1.2 kN/m² (أكبر من 0.96)، الحد الأدنى يصير I × 0.96 بدل I × pg.","pf = 0.7 (0.8)(1.2)(0.8)(1.2) = 0.65      I (0.96) = 0.8 × 0.96 = 0.77      →   pf = 0.77 kN/m²"],
  ["الحالة 4: pg > 0.96 والمعادلة تحكم","نفس pg = 1.2 بس مبنى مدفّأ (Ct = 1.0) وسط مدينة (Ce = 1.3) ومستشفى (I = 1.2).","pf = 0.7 (1.3)(1.0)(1.2)(1.2) = 1.31      I (0.96) = 1.2 × 0.96 = 1.15      →   pf = 1.31 kN/m²"]
 ],
 ans:"Design snow load <b>pf = 0.58 kN/m²</b><br>الحالات الثانية: sheltered → <b>0.63</b> (المعادلة تحكم)، pg = 1.2 → <b>0.77</b> (I × 0.96 يحكم)، heated hospital → <b>1.31</b> (المعادلة تحكم).",
 idea:"دايماً احسب الاثنين وخذ الأكبر: Eq. 1.5، والحد الأدنى (I × pg لو pg ≤ 0.96، أو I × 0.96 لو pg > 0.96)."},

{id:5,ch:"c2",title:"One-Way System: Beam CD و Girder AE",short:"نوزّع 4.8 kN/m² على الـ beam ثم ننقل الـ reactions للـ girder.",src:"ملف 5 — صفحة 3",img:"e5q",
 q:"Beams AB, CD & EF rest on girders AE & BF. The floor load is 4.8 kN/m². Find the load on beam CD and on girder AE.",
 given:["Floor load = 4.8 kN/m²","Beam span CD = 3 m","Beam spacing = 1.5 m","Girder span AE = 3 m"],
 steps:[
  ["Tributary width","الـ beam CD ياخذ نص المسافة لكل beam جاره: 0.75 + 0.75.","b = 1.5 m"],
  ["Uniform load على CD","","w = 4.8 × 1.5 = 7.2 kN/m"],
  ["Reactions of CD","Simply supported beam تحت UDL، الـ reaction = wL/2.","R_C = R_D = 7.2 × 3 / 2 = 10.8 kN"],
  ["Edge beams AB و EF","الـ tributary width لها 0.75 m بس.","w = 4.8 × 0.75 = 3.6 kN/m   →   R = 3.6 × 3 / 2 = 5.4 kN"],
  ["Load على Girder AE","الـ girder يستقبل reactions الـ beams: 10.8 kN في المنتصف و 5.4 kN عند كل طرف (فوق الـ support مباشرة).","P = 10.8 kN at 1.5 m"]
 ],
 stepImg:"e5a",stepCap:"(c) idealized beam CD — (d) idealized girder",
 ans:"Beam CD: <b>w = 7.2 kN/m</b>، R = 10.8 kN. Girder AE: <b>P = 10.8 kN</b> في المنتصف + 5.4 kN عند الطرفين.",
 idea:"Load path: slab ← beam ← girder ← column. الـ reaction حق الـ beam يصير load على الـ girder."},

{id:6,ch:"c2",title:"Two-Way System (L2/L1 = 1)",short:"45° lines تعطي triangular load على الـ beam.",src:"ملف 5 — صفحة 5",img:"e6q",
 q:"A 3 m × 3 m panel with beams and girders at the same level carries 4.8 kN/m². Find the load on beam AB.",
 given:["L1 = L2 = 3 m","Floor load = 4.8 kN/m²"],
 steps:[
  ["Slab type","","L2/L1 = 3/3 = 1 < 2   →   two-way"],
  ["Tributary area","نرسم 45° lines من الأركان، فتنقسم الـ slab لأربع triangles. الـ beam AB ياخذ الـ triangle اللي جنبه.",""],
  ["w_max","في المنتصف، عمق الـ triangle = L1/2 = 1.5 m.","w_max = 4.8 × 1.5 = 7.2 kN/m"],
  ["Total load W","مساحة الـ triangle.","W = ½ × 3 × 7.2 = 10.8 kN"],
  ["Reactions","Symmetric.","R_A = R_B = 10.8 / 2 = 5.4 kN"]
 ],
 stepImg:"e6a",stepCap:"(c) triangular load on beam AB",
 ans:"Triangular load على AB، <b>w_max = 7.2 kN/m</b>، W = 10.8 kN.",
 idea:"Check: 4 × 10.8 = 43.2 kN = 4.8 × 9 m² ✓"},

{id:7,ch:"c2",title:"Two-Way System (L2/L1 = 1.5)",short:"Trapezoidal على الـ long beam و triangular على الـ short beam.",src:"ملف 5 — صفحة 6",img:"e7q",
 q:"A 4.5 m × 3 m panel carries 4.8 kN/m². Find the loads on the long beam AB and the short beam AC.",
 given:["L2 = 4.5 m","L1 = 3 m","Floor load = 4.8 kN/m²"],
 steps:[
  ["Slab type","","L2/L1 = 4.5/3 = 1.5 < 2   →   two-way"],
  ["45° lines","الخطوط من الأركان تلتقي على بعد 1.5 m من كل طرف، ويبقى ridge في النص طوله 4.5 − 2(1.5) = 1.5 m.",""],
  ["w_max","","w_max = 4.8 × 1.5 = 7.2 kN/m"],
  ["Beam AB: trapezoidal","يطلع 1.5 m، ثابت 1.5 m، ينزل 1.5 m.","W_AB = 7.2 × (4.5 + 1.5) / 2 = 21.6 kN"],
  ["Beam AC: triangular","","W_AC = ½ × 3 × 7.2 = 10.8 kN"],
  ["Check","مجموع الأربع beams = الحمل الكلي على الـ panel.","2(21.6) + 2(10.8) = 64.8 = 4.8 × 13.5   ✓"]
 ],
 stepImg:"e7a",stepCap:"(b) trapezoidal on AB — (c) triangular on AC",
 ans:"AB: trapezoidal، <b>w_max = 7.2 kN/m</b> (21.6 kN). AC: triangular، <b>w_max = 7.2 kN/m</b> (10.8 kN).",
 idea:"الـ w_max نفسه في الـ beams كلها لأنه يعتمد على L1/2، الفرق بس في الشكل."},

{id:8,ch:"c2",title:"Determinacy & Stability of Trusses",short:"خمس حالات: concurrent و parallel و b + r مقابل 2j.",src:"ملف 5 — صفحات 19-20",img:"t3",
 q:"Classify each truss as stable/unstable and statically determinate/indeterminate.",
 given:["b + r = 2j → statically determinate","b + r > 2j → statically indeterminate","b + r < 2j → unstable","Concurrent or parallel reactions → unstable"],
 cases:[
  ["t1","(a) Concurrent reactions","كل خطوط الـ reactions تمر بنقطة وحدة، فالـ truss يقدر يدور حولها.","Unstable"],
  ["t2","(b) Parallel reactions","ثلاث reactions رأسية بس، ما فيه شي يقاوم الحركة الأفقية.","Unstable"],
  ["t3","(d) Truss on wall","r = 3, b = 12, j = 8   →   b + r = 15 < 2j = 16","Unstable"],
  ["t4","Fig. 3-18b","b = 15, r = 4, j = 9   →   b + r = 19 > 2j = 18","Indeterminate to the 1st degree"],
  ["t5","Fig. 3-18c","b = 9, r = 3, j = 6   →   b + r = 12 = 2j = 12","Statically determinate"]
 ],
 ans:"ابدأ بعدّ b و r و j، وبعدها افحص شكل الـ reactions: لو concurrent أو parallel فهو unstable حتى لو العدد كافي.",
 idea:"Degree of indeterminacy = (b + r) − 2j."},

{id:9,ch:"c4",title:"Shear & Moment Diagrams (Example 4-9)",short:"Beam عليه concentrated load و concentrated moment.",src:"ملف 6 — صفحة 10",img:"e9q",
 q:"Draw the shear and moment diagrams for the shown beam.",
 given:["L = 6 m (A–C = 3 m, C–D = 1.5 m, D–B = 1.5 m)","P = 3 kN at C","M = 6 kN·m (clockwise) at D","A: pin    B: roller"],
 steps:[
  ["Reaction B_y (ΣM_A = 0)","عكس عقارب الساعة موجب.","B_y (6) − 3 (3) − 6 = 0   →   B_y = 2.5 kN ↑"],
  ["Reaction A_y","","A_y = 3 − 2.5 = 0.5 kN ↑"],
  ["SFD","من A إلى C الـ shear = +0.5. عند C ينزل بمقدار P = 3. الـ concentrated moment ما يأثر على الـ shear.","V(A→C) = +0.5 kN      V(C→B) = 0.5 − 3 = −2.5 kN"],
  ["M_C","من اليسار. Tension bottom = موجب.","M_C = +0.5 × 3 = +1.5 kN·m"],
  ["M_D before","قبل الـ concentrated moment.","M_D(before) = 0.5 × 4.5 − 3 × 1.5 = −2.25 kN·m"],
  ["M_D after","نضيف 6 kN·m (jump في الـ BMD).","M_D(after) = −2.25 + 6 = +3.75 kN·m"],
  ["Check من اليمين","","M_D(after) = 2.5 × 1.5 = +3.75 kN·m   ✓"],
  ["M_A و M_B","Simple supports.","M_A = M_B = 0"]
 ],
 diagram:true,stepImg:"e9a",stepCap:"SFD & BMD from the file",
 ans:"Shear: <b>V(A→C) = +0.5 kN</b> و <b>V(C→B) = −2.5 kN</b>.<br>Moment: <b>M_C = +1.5</b> و <b>M_D(before) = −2.25</b> و <b>M_D(after) = +3.75 kN·m</b>، و M_A = M_B = 0.",
 idea:"Concentrated load = jump في الـ SFD. Concentrated moment = jump في الـ BMD بنفس مقداره."}
];

/* ---------- simulations: drawn on the example itself ---------- */

/* signs (+/−) and curve degree labels for notebook-style diagrams */
function polyDeg(f,a,b){const h=(b-a)/4,v=[1,2,3].map(i=>f(a+h*i)).concat([f(a+h*0.5),f(b-h*0.5)]);const s=[f(a+1e-6+ (b-a)*0.1),f(a+(b-a)*0.3),f(a+(b-a)*0.5),f(a+(b-a)*0.7),f(a+(b-a)*0.9)];const sc=1e-6*(1+Math.max(...s.map(Math.abs)));
 const d1=s.slice(1).map((x,i)=>x-s[i]),d2=d1.slice(1).map((x,i)=>x-d1[i]),d3=d2.slice(1).map((x,i)=>x-d2[i]);
 if(d1.every(x=>Math.abs(x)<sc*50))return 0;if(d2.every(x=>Math.abs(x)<sc*200))return 1;if(d3.every(x=>Math.abs(x)<sc*800))return 2;return 3}
function nbSigns(f,ps,X,Y,base,zs,degAdd){let s='';ps.forEach(p=>{const rt=[];{const N=80;let x0=p.a+1e-6,f0=f(x0);for(let i=1;i<=N;i++){const x1=p.a+(p.b-p.a)*i/N-(i===N?1e-6:0),f1=f(x1);if(f0*f1<0){let lo=x0,hi=x1;for(let t=0;t<40;t++){const m=(lo+hi)/2;if(f(lo)*f(m)<=0)hi=m;else lo=m}rt.push((lo+hi)/2)}x0=x1;f0=f1}}const cuts=[p.a,...rt,p.b];
  for(let i=0;i<cuts.length-1;i++){const u=cuts[i],v=cuts[i+1];if(X(v)-X(u)<34)continue;const xm=(u+v)/2,val=f(xm);if(Math.abs(val)<1e-6)continue;let y=(base+Y(val))/2;if(Math.abs(Y(val)-base)<30)y=Y(val)+(val>0?-16:16);
   s+=`<g class="sgn"><circle cx="${X(xm).toFixed(1)}" cy="${y.toFixed(1)}" r="11"/><text x="${X(xm).toFixed(1)}" y="${(y+6).toFixed(1)}" text-anchor="middle">${val>0?'+':'−'}</text></g>`}
  if(degAdd!=null&&X(p.b)-X(p.a)>110){const dg=polyDeg(f,p.a,p.b);if(dg>=2){const xq=p.a+(p.b-p.a)*0.22,vq=f(xq);s+=`<text x="${X(xq).toFixed(1)}" y="${(base+(vq>=0?18:-8)).toFixed(1)}" text-anchor="middle" class="deg">${dg===2?'2nd':'3rd'} degree</text>`}}});return s}

/* ===== رسم الـ SFD / BMD قطعة قطعة في المحاكاة ===== */
function segPieces(f,ks,zs,Ln,X,Y,base,fc,lc,N=60){const eps=1e-7,out=[];let prev=0;const kk=ks.filter(x=>x>=0&&x<=Ln);
 for(let j=0;j<kk.length-1;j++){const a=kk[j],b=kk[j+1];if(b-a<1e-9)continue;const xs=[];for(let i=0;i<=N;i++)xs.push(a+(b-a)*i/N);(zs||[]).forEach(z=>{if(z>a&&z<b)xs.push(z)});xs.sort((p,q)=>p-q);
  const vals=xs.map((x,i)=>f(i===0?a+eps:i===xs.length-1?b-eps:x)),P=xs.map((x,i)=>`${X(x).toFixed(1)},${Y(vals[i]).toFixed(1)}`);
  let d=`M${X(a).toFixed(1)},${Y(prev).toFixed(1)} L`+P.join(' L');if(j===kk.length-2)d+=` L${X(b).toFixed(1)},${base}`;
  out.push({a,b,fill:`<polygon points="${X(a).toFixed(1)},${base} ${P.join(' ')} ${X(b).toFixed(1)},${base}" class="${fc} segf0"/>`,line:`<path d="${d}" class="${lc} segl"/>`});prev=vals[vals.length-1]}
 return out}
function segIdx(ps,x,side){const e=1e-6;if(side==='l'){const i=ps.findIndex(p=>Math.abs(p.b-x)<e);if(i>=0)return i}else{const i=ps.findIndex(p=>Math.abs(p.a-x)<e);if(i>=0)return i}const j=ps.findIndex(p=>x>p.a-e&&x<p.b+e);return j<0?ps.length-1:j}
function segWrap(ps,labs,off=0){const D=Math.min(.8,2.4/Math.max(1,ps.length));return ps.map((p,i)=>`<g class="seg" data-d="${(off+i*D).toFixed(2)}">${p.fill}${p.line}${labs&&labs[i]?`<g class="segt">${labs[i]}</g>`:''}</g>`).join('')}
function segAnim(root,k){if(!root)return;root.querySelectorAll('.seg').forEach(g=>{const h=g.closest('[data-from]'),go=!!h&&+h.dataset.from===k,d=(+g.dataset.d||0)*1000;
 g.querySelectorAll('.segl,.segf0,.segt').forEach(el=>{(el._an||[]).forEach(a=>{try{a.cancel()}catch(_){}});el._an=[];if(el.classList.contains('segl')){el.style.strokeDasharray='';el.style.strokeDashoffset=''}
  if(!go||!el.animate)return;
  if(el.classList.contains('segl')){const len=el.getTotalLength?el.getTotalLength():0;if(!len)return;el.style.strokeDasharray=len+' '+len;const an=el.animate([{strokeDashoffset:len},{strokeDashoffset:0}],{duration:750,delay:d,fill:'both',easing:'ease-in-out'});an.onfinish=()=>{an.cancel();el.style.strokeDasharray=''};el._an.push(an)}
  else el._an.push(el.animate([{opacity:0},{opacity:1}],{duration:450,delay:d+(el.classList.contains('segt')?600:200),fill:'both'}))})})}
const at=(f,h,o)=>`${f!=null?`data-from="${f}"`:''} ${h!=null?`data-hl="${h}"`:''} ${o!=null?`data-only="${o}"`:''}`;
const T=(x,y,s,c='',a='middle',ex='')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="${c}" ${ex}>${s}</text>`;
const AR=(x1,y1,x2,y2,c,ex='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" marker-end="url(#m-${c.split(' ')[0]})" ${ex}/>`;
const L=(x1,y1,x2,y2,c,ex='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}" ${ex}/>`;
const R=(x,y,w,h,c,ex='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${c}" ${ex}/>`;
const PG=(pts,c,ex='')=>`<polygon points="${pts}" class="${c}" ${ex}/>`;
const PIN=(x,y)=>PG(`${x},${y} ${x-10},${y+16} ${x+10},${y+16}`,'kf');
const ROL=(x,y)=>PG(`${x},${y} ${x-9},${y+13} ${x+9},${y+13}`,'kf')+`<line x1="${x-12}" y1="${y+18}" x2="${x+12}" y2="${y+18}" class="k"/>`;
// arrows under a load profile f(x) down to base y
const LOADAR=(x1,x2,n,top,base)=>{let s='';for(let i=0;i<=n;i++){const x=x1+(x2-x1)*i/n,y=top(x);if(base-y>8)s+=AR(x,y,x,base-1,'ld');}return s};
const DEFS=`<defs>${['ld','rx','k'].map(c=>`<marker id="m-${c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mk-${c}"/></marker>`).join('')}</defs>`;

const SIMS={
1:()=>{let s='';
 s+=R(60,250,240,22,'kf',at(0,2+1));
 s+=`<path d="M150,272H210V278H183V306H210V312H150V306H177V278H150Z" class="kf" ${at(0,2)}/>`;
 s+=`<g ${at(0,4)}>${L(90,272,90,330,'k')}${L(270,272,270,282,'k')}${L(60,330,300,330,'k thick')}</g>`;
 s+=R(225,282,45,24,'kf',at(0,5))+T(247,299,'ME','m');
 s+=R(166,60,28,190,'kf',at(0,6));
 s+=R(160,60,6,190,'kf',at(0,7))+R(194,60,6,190,'kf',at(0,7));
 s+=L(60,352,300,352,'dm')+T(180,368,'2.0 m','m')+T(52,266,'0.12 m','m','end')+T(155,160,'4.0 m','m','end')+T(180,50,'0.3 m','m');
 s+=T(180,20,'kN/m³ × m²  →  kN/m','s','middle',at(null,null,1));
 s+=T(145,300,'0.25','r','end',at(2,2));
 s+=T(68,244,'5.424','r','start',at(3,3));
 s+=T(68,324,'0.96','r','start',at(4,4));
 s+=T(278,300,'0.40','r','start',at(5,5));
 s+=T(208,160,'25.44','r','start',at(6,6));
 s+=T(208,82,'1.92','r','start',at(7,7));
 // accumulating stack
 const seg=[[2,2,338],[3,43.4,294.6],[4,7.7,286.9],[5,3.2,283.7],[6,203.5,80.2],[7,15.4,64.8]];
 s+=L(405,340,495,340,'dm')+T(450,358,'Σ w (kN/m)','m');
 seg.forEach(([k,h,y])=>s+=R(420,y,60,h,'ldf',at(k,k)));
 s+=T(488,320,'slab','m','start',at(3))+T(488,185,'wall','m','start',at(6))+T(488,76,'plaster','m','start',at(7));
 [[2,'0.25'],[3,'5.674'],[4,'6.634'],[5,'7.034'],[6,'32.474'],[7,'34.394']].forEach(([k,v])=>s+=T(450,50,'Σ = '+v,'s','middle',at(null,null,k)));
 s+=T(450,50,'Σ = 34.394 kN/m','r big','middle',at(null,null,'8,9'));
 return {vb:'0 0 600 380',svg:s}},

2:()=>{let s='';
 s+=L(40,320,250,320,'k')+R(136,90,8,230,'kf',at(0,8));
 [[250,'Garage','2.4',2],[170,'Office','2.4','3,4,5,6'],[90,'Roof','1.0',7]].forEach(([y,n,q,h])=>{s+=L(60,y,220,y,'k thick',at(0,h))+T(228,y+4,n,'s','start')+T(228,y+20,q+' kN/m²','m','start')});
 s+=T(132,242,'115.2','r','end',at(2,2))+T(132,162,'66.72','r','end',at(6,6))+T(132,82,'48.0','r','end',at(7,7));
 s+=T(140,345,'Σ = 230 kN','r big','middle',at(8,8));
 // plan
 [60,160,260].forEach(y=>s+=L(320,y,560,y,'dm dsh'));[320,440,560].forEach(x=>s+=L(x,60,x,260,'dm dsh'));
 s+=R(380,110,120,100,'ldf',at(1,1));
 [320,440,560].forEach(x=>[60,160,260].forEach(y=>s+=R(x-6,y-6,12,12,'kf')));
 s+=T(380,285,'8 m','m')+T(500,285,'8 m','m')+T(590,114,'6 m','m','end')+T(590,214,'6 m','m','end');
 s+=T(440,165,'A_T = 48 m²','s','middle',at(1,1));
 s+=T(440,325,'4 × 48 = 192 > 37.2 ✓','r','middle',at(null,null,3));
 s+=T(440,325,'L = 1.39 kN/m²','r','middle',at(null,null,4));
 s+=T(440,325,'1.39 > 0.5 × 2.4 = 1.2 ✓','r','middle',at(null,null,5));
 return {vb:'0 0 600 360',svg:s}},

3:()=>{let s='';
 s+=L(20,330,430,330,'k')+R(94,70,12,260,'kf')+L(106,100,160,100,'k');
 s+=R(160,70,240,60,'kf',at(0,'6,7'))+T(280,60,'B = 4 m','m')+T(405,104,'s = 1 m','m','start');
 s+=L(440,70,440,330,'dm')+T(432,200,'h = 10 m','m','middle','transform="rotate(-90 432 200)"');
 [85,100,115].forEach(y=>s+=AR(18,y,82,y,'ld'));s+=T(50,72,'V = 46 m/s','s');
 s+=L(400,100,440,100,'rx dsh',at(1,1))+L(400,70,440,70,'rx dsh',at(1,1));
 s+=T(280,152,'7-98: z = 9.5 m (center)','r','middle',at(1,1))+T(280,174,'7-10: h = 10 m (top)','r','middle',at(1,1));
 s+=R(452,25,146,160,'dm')+T(522,45,'7-98','m')+T(570,45,'7-10','m');
 const row=(y,lab,a,b,ka,kb)=>T(458,y,lab,'s','start')+T(522,y,a,'','middle',at(ka,ka))+T(570,y,b,'','middle',at(kb,kb));
 s+=row(75,'Kz','0.988','1.0',2,2)+row(105,'q','1281.5','1297.1',3,4)+row(135,'Cf','1.2','1.85',5,5)+row(165,'F','5228.5','8158.8',6,7);
 s+=T(160,226,'F (7-98) = 5228.5 N','s','start',at(6,6))+R(160,232,160,20,'ldf',at(6,6));
 s+=T(160,276,'F (7-10) = 8158.8 N','s','start',at(7,7))+R(160,282,250,20,'ldf',at(7,7));
 return {vb:'0 0 600 360',svg:s}},

4:()=>{let s='';
 s+=L(0,290,600,290,'k')+R(150,170,300,120,'kf')+R(180,220,50,70,'k')+R(260,220,50,70,'k')+R(360,200,60,30,'k');
 s+=R(10,276,130,14,'ldf')+R(460,276,130,14,'ldf')+T(75,266,'pg = 0.72','s');
 [[180,'Ce = 0.8','fully exposed'],[300,'Ct = 1.2','unheated'],[420,'I = 0.8','storage']].forEach(([x,a,b])=>s+=T(x,50,a,'s','middle',at(1,1))+T(x,72,b,'m','middle',at(1)));
 s+=R(150,162,300,8,'ldf',at(null,2,2))+T(300,148,'pf = 0.39 kN/m²','r','middle',at(null,null,2));
 s+=R(150,159,300,11,'ldf',at(3,'3,4'));
 s+=T(300,145,'0.72 < 0.96  →  I · pg = 0.58','r','middle',at(null,null,3));
 s+=T(300,145,'pf = 0.58 kN/m²  ✓','r big','middle',at(null,null,'4,8'));
 const CS=(k,t1,t2,t3)=>`<g ${at(null,null,k)}>${R(30,84,540,64,'ldf soft')}${T(300,104,t1,'s','middle')}${T(300,124,t2,'m','middle')}${T(300,142,t3,'r','middle')}</g>`;
 s+=CS(5,'Case 2: sheltered → Ce = 1.3','pg = 0.72 ≤ 0.96  →  compare with I·pg = 0.58','Eq. 1.5 = 0.63 > 0.58  →  pf = 0.63');
 s+=CS(6,'Case 3: pg = 1.2 > 0.96','min = I(0.96) = 0.77','Eq. 1.5 = 0.65 < 0.77  →  pf = 0.77');
 s+=CS(7,'Case 4: pg = 1.2, Ce = 1.3, Ct = 1.0, I = 1.2','min = I(0.96) = 1.15','Eq. 1.5 = 1.31 > 1.15  →  pf = 1.31');
 s+=T(300,112,'pf = max( Eq. 1.5 ,  minimum )','r','middle',at(null,null,8));
 return {vb:'0 0 600 320',svg:s}},

5:()=>{let s='';
 s+=R(210,75,180,90,'ldf',at(1,1));
 s+=R(210,30,180,45,'ldf soft',at(4,4))+R(210,165,180,45,'ldf soft',at(4,4));
 s+=L(210,30,210,210,'k thick',at(0,5))+L(390,30,390,210,'k thick');
 [30,120,210].forEach(y=>s+=L(210,y,390,y,'k',y===120?at(0,'2,3'):''));
 s+=T(200,26,'A','s','end')+T(400,26,'B','s','start')+T(200,124,'C','s','end')+T(400,124,'D','s','start')+T(200,222,'E','s','end')+T(400,222,'F','s','start');
 s+=T(80,40,'4.8 kN/m²','s')+T(300,100,'b = 1.5 m','r','middle',at(1,1));
 s+=L(425,75,425,165,'dm')+T(432,101,'0.75','m','start')+T(432,148,'0.75','m','start');
 s+=T(300,56,'R = 5.4 kN','r','middle',at(4,4))+T(300,192,'R = 5.4 kN','r','middle',at(4,4));
 // beam CD
 s+=L(50,340,250,340,'k thick')+PIN(50,340)+ROL(250,340)+T(150,372,'beam CD — 3 m','m');
 s+=`<g ${at(2,2)}>${L(50,298,250,298,'ld')}${LOADAR(50,250,10,()=>298,338)}${T(150,290,'w = 7.2 kN/m','s')}</g>`;
 s+=`<g ${at(3,3)}>${AR(50,410,50,360,'rx')}${AR(250,410,250,360,'rx')}${T(64,404,'10.8','r','start')}${T(236,404,'10.8','r','end')}</g>`;
 // girder
 s+=`<g ${at(5,5)}>${L(340,340,560,340,'k thick')}${PIN(340,340)}${ROL(560,340)}${AR(450,282,450,337,'rx')}${T(450,276,'10.8 kN','r')}${AR(340,300,340,337,'rx')}${AR(560,300,560,337,'rx')}${T(348,300,'5.4','r','start')}${T(552,300,'5.4','r','end')}${T(450,372,'girder AE — 3 m','m')}</g>`;
 return {vb:'0 0 600 420',svg:s}},

6:()=>{let s='';
 s+=PG('60,40 240,40 150,130','ldf',at(2,2));
 s+=R(60,40,180,180,'k')+L(60,40,240,220,'ld',at(2))+L(240,40,60,220,'ld',at(2));
 s+=T(52,36,'A','s','end')+T(248,36,'B','s','start')+T(52,232,'C','s','end')+T(248,232,'D','s','start');
 s+=T(150,28,'3 m','m')+T(256,135,'3 m','m','start')+T(150,170,'4.8 kN/m²','m');
 s+=T(150,262,'L2/L1 = 1 < 2  →  two-way','r','middle',at(null,null,1));
 s+=AR(150,40,150,128,'rx',at(3,3))+T(158,92,'1.5 m','r','start',at(3,3));
 s+=L(330,230,570,230,'k thick')+PIN(330,230)+ROL(570,230)+T(450,342,'beam AB — 3 m','m');
 const top=x=>225-75*(1-Math.abs(x-450)/120);
 s+=`<g ${at(3,3)}>${PG('330,225 450,150 570,225','ldf')}${LOADAR(330,570,12,top,228)}${T(450,142,'w_max = 7.2 kN/m','s')}</g>`;
 s+=`<g ${at(4,4)}>${AR(450,110,450,226,'rx dsh')}${T(470,110,'W = 10.8 kN','r','start')}</g>`;
 s+=`<g ${at(5,5)}>${AR(330,300,330,252,'rx')}${AR(570,300,570,252,'rx')}${T(340,300,'5.4','r','start')}${T(560,300,'5.4','r','end')}</g>`;
 return {vb:'0 0 600 360',svg:s}},

7:()=>{let s='';
 s+=PG('40,40 310,40 220,130 130,130','ldf',at(4,4))+PG('40,40 130,130 40,220','ldf',at(5,5));
 s+=R(40,40,270,180,'k');
 s+=`<g ${at(2,2)}>${L(40,40,130,130,'ld')}${L(310,40,220,130,'ld')}${L(40,220,130,130,'ld')}${L(310,220,220,130,'ld')}${L(130,130,220,130,'ld')}${T(175,148,'1.5 m','s')}</g>`;
 s+=T(32,36,'A','s','end')+T(318,36,'B','s','start')+T(32,232,'C','s','end')+T(318,232,'D','s','start')+T(175,28,'4.5 m','m')+T(318,135,'3 m','m','start');
 s+=T(175,262,'L2/L1 = 4.5/3 = 1.5 < 2  →  two-way','r','middle',at(null,null,1));
 s+=AR(175,40,175,128,'rx',at(3,3))+T(182,90,'1.5 m','r','start',at(3,3));
 const tz=x=>x<430?155-60*(x-350)/80:x>510?155-60*(590-x)/80:95;
 s+=L(350,160,590,160,'k thick')+PIN(350,160)+ROL(590,160)+T(350,82,'beam AB — 4.5 m','m','start');
 s+=`<g ${at(4,4)}>${PG('350,155 430,95 510,95 590,155','ldf')}${LOADAR(350,590,12,tz,158)}${T(470,88,'7.2 kN/m','s')}${T(470,206,'W_AB = 21.6 kN','r')}</g>`;
 const tt=x=>315-60*(1-Math.abs(x-470)/90);
 s+=L(380,320,560,320,'k thick')+PIN(380,320)+ROL(560,320)+T(380,244,'beam AC — 3 m','m','start');
 s+=`<g ${at(5,5)}>${PG('380,315 470,255 560,315','ldf')}${LOADAR(380,560,9,tt,318)}${T(470,248,'7.2 kN/m','s')}${T(470,368,'W_AC = 10.8 kN','r')}</g>`;
 s+=T(175,292,'2(21.6) + 2(10.8) = 64.8 ✓','r','middle',at(null,null,6));
 s+=T(175,314,'4.8 × 4.5 × 3 = 64.8','r','middle',at(null,null,6));
 return {vb:'0 0 600 380',svg:s}},

8:()=>{let s='';
 const ks=['t1','t2','t3','t4','t5'];
 s+=T(300,40,'Classify each truss','s big','middle',at(null,null,'0,6'));
 ks.forEach((k,i)=>s+=`<image href="${IMG[k]}" x="${8+i*118}" y="80" width="110" height="140" preserveAspectRatio="xMidYMid meet" ${at(null,null,'0,6')}/>`);
 const C=[["(a) Concurrent",["all reactions meet","at one point"],"Unstable"],["(b) Parallel",["3 vertical reactions","no horizontal resistance"],"Unstable"],["(d) Truss on wall",["b = 12   r = 3   j = 8","b + r = 15","2j = 16","15 < 16"],"Unstable"],["Fig. 3-18b",["b = 15   r = 4   j = 9","b + r = 19","2j = 18","19 > 18"],"Indeterminate (1°)"],["Fig. 3-18c",["b = 9   r = 3   j = 6","b + r = 12","2j = 12","12 = 12"],"Determinate"]];
 C.forEach(([t,ls,r],i)=>{const k=i+1;s+=`<g ${at(null,null,k)}><image href="${IMG[ks[i]]}" x="10" y="20" width="330" height="270" preserveAspectRatio="xMidYMid meet"/>${T(470,50,t,'s big')}${ls.map((l,j)=>T(470,95+j*30,l,'')).join('')}${T(470,250,r,'r big hl')}</g>`});
 return {vb:'0 0 600 300',svg:s}},

9:()=>{let s='';
 [300,420].forEach(x=>s+=L(x,80,x,390,'dm dsh faint'));
 s+=R(60,64,480,10,'kf')+PIN(60,74)+ROL(540,74);
 s+=T(42,74,'A','s','end')+T(558,74,'B','s','start')+T(300,104,'C','s')+T(420,104,'D','s');
 s+=AR(300,18,300,62,'rx')+T(310,28,'3 kN','r','start');
 s+=`<path d="M400,56 A22,22 0 1,1 440,56" class="rx" marker-end="url(#m-rx)"/>`+T(448,36,'6 kN·m','r','start');
 s+=T(180,128,'3 m','m')+T(360,128,'1.5 m','m')+T(480,128,'1.5 m','m');
 s+=`<g ${at(1,1)}>${AR(540,140,540,96,'rx')}${T(532,140,'B_y = 2.5','r','end')}</g>`;
 s+=`<g ${at(2,2)}>${AR(60,140,60,96,'rx')}${T(68,140,'A_y = 0.5','r','start')}</g>`;
 s+=L(60,200,540,200,'dm')+T(52,204,'V','m','end');
 s+=`<g ${at(3,3)}>${segWrap(segPieces(x=>x<3?.5:-2.5,[0,3,6],[],6,x=>60+80*x,v=>200-v*16,200,'ldf nos','ldl'),[T(180,186,'+0.5','s'),T(420,258,'−2.5','s')])}</g>`;
 s+=L(60,330,540,330,'dm')+T(52,334,'M','m','end');
 s+=`<g class="seg" data-d="0" ${at(4,4)}><path d="M60,330 L300,309" class="rx thick segl"/></g>`+`<circle cx="300" cy="309" r="4" class="dot" ${at(4,4)}/>`+T(300,298,'+1.5','r','middle',at(4,4));
 s+=`<g class="seg" data-d="0" ${at(5,5)}><path d="M300,309 L420,361.5" class="rx thick segl"/></g>`+`<circle cx="420" cy="361.5" r="4" class="dot" ${at(5,5)}/>`+T(412,380,'−2.25','r','end',at(5,5));
 s+=`<g class="seg" data-d="0" ${at(6,6)}><path d="M420,361.5 L420,277.5" class="rx thick segl"/></g>`+`<circle cx="420" cy="277.5" r="4" class="dot" ${at(6,6)}/>`+T(428,272,'+3.75','r','start',at(6,6));
 s+=`<g class="seg" data-d="0" ${at(7,7)}><path d="M420,277.5 L540,330" class="rx thick segl"/></g>`+T(470,405,'2.5 × 1.5 = 3.75 ✓','r','middle',at(null,null,7));
 s+=`<circle cx="60" cy="330" r="5" class="dot" ${at(8,8)}/><circle cx="540" cy="330" r="5" class="dot" ${at(8,8)}/>`+T(300,405,'M_A = M_B = 0','r','middle',at(null,null,8));
 return {vb:'0 0 600 420',svg:s}}
};

/* ---------- extra examples (2 per chapter) ---------- */
const FIX=(x,y1,y2)=>R(x-14,y1,14,y2-y1,'kf')+Array.from({length:Math.floor((y2-y1)/12)},(_,i)=>L(x-14,y1+12*i+12,x-4,y1+12*i+2,'k')).join('');
const PATH=(pts,c,ex='')=>`<path d="M${pts.map(p=>p.join(',')).join(' L')}" class="${c}" ${ex}/>`;
const fx=(f,a,b,n,X,Y)=>Array.from({length:n+1},(_,i)=>{const x=a+(b-a)*i/n;return[X(x),Y(f(x))]});

EX.push(
{id:10,ch:"c1",extra:true,title:"Dead Load + Load Combination على RC Beam",short:"Concrete beam تحمل slab و wall، ثم نحسب wu من load combinations.",src:"مثال إضافي — على نمط ملف 2 و 3",
 q:"An interior RC beam (0.3 m × 0.6 m) supports a one-way slab and a masonry wall. Find the dead load per meter, then the factored load wu.",
 given:["γ_concrete = 24 kN/m³","Beam: 0.3 m × 0.6 m","Slab: t = 0.15 m, tributary width = 4 m","Floor finish = 1.0 kN/m²","Wall: 0.2 m × 3.0 m, γ = 18 kN/m³","Live load = 2.0 kN/m²"],
 steps:[
  ["Beam self-weight","مساحة المقطع × γ.","w₁ = 0.3 × 0.6 × 24 = 4.32 kN/m"],
  ["Concrete slab","t × tributary width × γ.","w₂ = 0.15 × 4 × 24 = 14.4 kN/m"],
  ["Floor finish","kN/m² × width.","w₃ = 1.0 × 4 = 4.0 kN/m"],
  ["Masonry wall","","w₄ = 0.2 × 3.0 × 18 = 10.8 kN/m"],
  ["Total dead load D","","D = 4.32 + 14.4 + 4.0 + 10.8 = 33.52 kN/m"],
  ["Live load L","kN/m² × tributary width.","L = 2.0 × 4 = 8.0 kN/m"],
  ["Combination 1: 1.4D","","wu = 1.4 × 33.52 = 46.93 kN/m"],
  ["Combination 2: 1.2D + 1.6L","ناخذ الأكبر.","wu = 1.2 × 33.52 + 1.6 × 8.0 = 53.02 kN/m   ← governs"]
 ],
 ans:"D = <b>33.52 kN/m</b>، L = 8.0 kN/m، وأكبر factored load <b>wu = 53.02 kN/m</b> من 1.2D + 1.6L.",
 idea:"احسب كل load combinations وخذ الأكبر. هنا 1.2D + 1.6L تتحكم لأن الـ live load موجود."},

{id:11,ch:"c1",extra:true,title:"Snow Load على Hospital (pg > 0.96)",short:"Heated hospital في وسط مدينة، والحالة الثانية من شرط pg.",src:"مثال إضافي — على نمط Example 1.4",
 q:"A heated hospital with a flat roof is sheltered in the center of a large city. The ground snow load is 1.2 kN/m². Determine the design snow load on the roof.",
 given:["pg = 1.2 kN/m²","Heated → Ct = 1.0","Sheltered, city center → Ce = 1.3","Hospital → I = 1.2","Flat roof → Eq. 1.5"],
 steps:[
  ["Ce, Ct, I","sheltered في center of a large city و heated و hospital.","Ce = 1.3    Ct = 1.0    I = 1.2"],
  ["Eq. 1.5","","pf = 0.7 (1.3)(1.0)(1.2)(1.2) = 1.31 kN/m²"],
  ["Check pg > 0.96","بما أن pg = 1.2 > 0.96 فالحد الأدنى I(0.96).","pf,min = 1.2 × 0.96 = 1.152 kN/m²"],
  ["Choose","1.31 > 1.152، فنعتمد قيمة Eq. 1.5.","pf = 1.31 kN/m²"]
 ],
 ans:"Design snow load <b>pf = 1.31 kN/m²</b>",
 idea:"قارن مع Example 1.4: هناك pg ≤ 0.96 فأخذنا I·pg. هنا pg > 0.96 فالحد الأدنى I(0.96)، والمعادلة أعطت أكبر منه."},

{id:12,ch:"c2",extra:true,title:"Determinacy & Stability of Beams",short:"r مقابل 3n لأربع beams: pin-roller و fixed و internal hinge و two rollers.",src:"مثال إضافي — على نمط ملف 5",
 q:"Classify each beam as stable/unstable and statically determinate/indeterminate using r and 3n.",
 given:["r = 3n → statically determinate","r > 3n → statically indeterminate","r < 3n → unstable","Pin = 2, Roller = 1, Fixed = 3, Internal hinge = 2"],
 cases:[
  ["B1","(a) Pin + Roller","r = 2 + 1 = 3, n = 1   →   r = 3n","Statically determinate"],
  ["B2","(b) Fixed + Roller","r = 3 + 1 = 4, n = 1   →   4 > 3","Indeterminate to the 1st degree"],
  ["B3","(c) Fixed + Hinge + Roller","r = 3 + 2 + 1 = 6, n = 2   →   6 = 6","Statically determinate"],
  ["B4","(d) Roller + Roller","r = 1 + 1 = 2, n = 1   →   2 < 3","Unstable (parallel reactions)"]
 ],
 ans:"(a) و (c) <b>determinate</b>، (b) <b>indeterminate 1°</b>، (d) <b>unstable</b>.",
 idea:"الـ internal hinge يقسم الـ beam لجزئين (n = 2) ويضيف 2 forces في r."},

{id:13,ch:"c2",extra:true,title:"One-Way Slab: Interior Beam",short:"L2/L1 ≥ 2، tributary width، ثم R و M_max.",src:"مثال إضافي — على نمط ملف 5",
 q:"A floor has beams spanning 8 m spaced at 3 m, simply supported on girders. Floor load = 5 kN/m². Find the load on an interior beam, its reactions, and M_max.",
 given:["Beam span L2 = 8 m","Beam spacing L1 = 3 m","Floor load = 5 kN/m²","Simply supported beams"],
 steps:[
  ["Slab type","","L2/L1 = 8/3 = 2.67 ≥ 2   →   one-way"],
  ["Tributary width","الـ interior beam ياخذ 1.5 m من كل جهة.","b = 1.5 + 1.5 = 3 m"],
  ["Uniform load w","","w = 5 × 3 = 15 kN/m"],
  ["Reactions","","R = wL/2 = 15 × 8 / 2 = 60 kN"],
  ["M_max","في المنتصف، حيث V = 0.","M_max = wL²/8 = 15 × 8² / 8 = 120 kN·m"]
 ],
 ans:"w = <b>15 kN/m</b>، R = <b>60 kN</b>، M_max = <b>120 kN·m</b> at mid-span.",
 idea:"لما L2/L1 ≥ 2 الـ load يمشي في اتجاه واحد للـ beams، والـ girders تاخذ reactions الـ beams بس."},

{id:14,ch:"c4",extra:true,title:"SFD & BMD: UDL + Point Load",short:"Simply supported beam، ونلقى M_max عند V = 0.",src:"مثال إضافي — على نمط ملف 6",
 q:"Draw the shear and moment diagrams for the simply supported beam and find M_max.",
 given:["L = 6 m (A: pin, B: roller)","w = 4 kN/m over the whole span","P = 12 kN at x = 2 m from A"],
 steps:[
  ["Reaction B_y (ΣM_A = 0)","","B_y (6) − 4 (6)(3) − 12 (2) = 0   →   B_y = 16 kN ↑"],
  ["Reaction A_y","","A_y = 4 (6) + 12 − 16 = 20 kN ↑"],
  ["SFD","الـ shear ينزل بميل w = 4 ويقفز عند P.","V(0) = +20    V(2⁻) = 20 − 8 = +12    V(2⁺) = 12 − 12 = 0    V(6) = 0 − 4(4) = −16"],
  ["M_max عند V = 0","الـ shear = 0 عند x = 2 m.","M(2) = 20 (2) − 4 (2)² / 2 = 32 kN·m"],
  ["Check M_B = 0","","M(6) = 20 (6) − 4 (6)² / 2 − 12 (4) = 120 − 72 − 48 = 0   ✓"]
 ],
 ans:"A_y = 20 kN، B_y = 16 kN، <b>M_max = 32 kN·m</b> at x = 2 m.",
 idea:"تحت UDL الـ SFD خطوط مائلة والـ BMD منحنى (parabola). أعلى نقطة في الـ BMD تكون عند V = 0."},

{id:15,ch:"c4",extra:true,title:"SFD & BMD: Cantilever Beam",short:"Fixed support فيه reaction moment، والـ moment كله سالب.",src:"مثال إضافي — على نمط ملف 6",
 q:"Draw the shear and moment diagrams for the cantilever beam.",
 given:["L = 4 m, fixed at A, free at B","w = 3 kN/m over the whole span","P = 5 kN at B"],
 steps:[
  ["Reaction A_y","","A_y = 3 (4) + 5 = 17 kN ↑"],
  ["Reaction moment M_A","Tension top → سالب.","M_A = −[3 (4)(2) + 5 (4)] = −44 kN·m"],
  ["SFD","يبدأ 17 وينزل بميل 3 لين 5 عند B، ثم ينزل لـ 0 تحت P.","V(0) = +17    V(4) = 17 − 12 = +5"],
  ["M at mid-span","","M(2) = −44 + 17 (2) − 3 (2)² / 2 = −16 kN·m"],
  ["M_B","Free end.","M_B = 0"]
 ],
 ans:"A_y = 17 kN، <b>M_A = −44 kN·m</b> (أكبر moment عند الـ fixed support)، M_B = 0.",
 idea:"في الـ cantilever الـ tension فوق، فالـ moment كله سالب، وأكبره عند الـ fixed support."}
);
const ORD={c1:1,c2:2,c4:3};EX.sort((a,b)=>ORD[a.ch]-ORD[b.ch]||a.id-b.id);

/* case drawings for example 12 (viewBox 0 0 300 140) */
const CASE={
 B1:L(30,70,270,70,'k thick')+PIN(30,72)+ROL(270,72)+AR(0,96,22,96,'rx')+AR(30,130,30,92,'rx')+AR(270,130,270,96,'rx')+T(150,30,'r = 3   n = 1','s'),
 B2:FIX(30,40,100)+L(30,70,270,70,'k thick')+ROL(270,72)+AR(270,130,270,96,'rx')+`<path d="M44,98 A18,18 0 0,1 44,42" class="rx" marker-end="url(#m-rx)"/>`+T(150,30,'r = 4   n = 1','s'),
 B3:FIX(30,40,100)+L(30,70,270,70,'k thick')+`<circle cx="150" cy="70" r="7" class="kf"/>`+ROL(270,72)+AR(270,130,270,96,'rx')+T(150,96,'hinge','m')+T(150,30,'r = 6   n = 2','s'),
 B4:L(30,70,270,70,'k thick')+ROL(30,72)+ROL(270,72)+AR(30,130,30,96,'rx')+AR(270,130,270,96,'rx')+T(150,30,'r = 2   n = 1','s')
};

Object.assign(SIMS,{
10:()=>{let s='';
 s+=R(60,200,300,26,'kf',at(0,2))+R(60,192,300,8,'ldf soft',at(0,3))+R(180,226,60,60,'kf',at(0,1))+R(195,82,30,110,'kf',at(0,4));
 s+=L(60,350,360,350,'dm')+T(210,366,'4.0 m','m')+T(52,218,'0.15','m','end')+T(185,140,'3.0 m','m','end')+T(210,74,'0.2','m')+T(210,302,'0.3 × 0.6','m');
 s+=`<g ${at(6,6)}>${LOADAR(70,350,7,()=>160,190)}${L(70,160,350,160,'ld')}${T(300,152,'L = 8.0 kN/m','s')}</g>`;
 s+=T(248,262,'4.32','r','start',at(1,1))+T(68,244,'14.4','r','start',at(2,2))+T(352,188,'4.0','r','end',at(3,3))+T(232,130,'10.8','r','start',at(4,4));
 const seg=[[1,21.6,318.4],[2,72,246.4],[3,20,226.4],[4,54,172.4]];
 s+=L(395,340,585,340,'dm');seg.forEach(([k,h,y])=>s+=R(410,y,50,h,'ldf',at(k,k)));
 s+=T(435,358,'D','m')+T(435,164,'33.52','r','middle',at(5,5));
 s+=R(500,340-46.93*5,50,46.93*5,'ldf soft',at(null,null,7))+T(525,96,'46.93','r','middle',at(null,null,7));
 s+=R(500,340-53.02*5,50,53.02*5,'kf',at(8,8))+T(525,66,'wu = 53.02','r','middle',at(8,8))+T(525,358,'wu','m','middle',at(7));
 return {vb:'0 0 600 380',svg:s}},

11:()=>{let s='';
 s+=L(0,290,600,290,'k')+R(20,110,100,180,'kf')+R(480,90,100,200,'kf');
 s+=R(170,170,260,120,'kf')+R(292,195,16,46,'rx')+R(277,210,46,16,'rx');
 s+=R(122,278,46,12,'ldf')+R(432,278,46,12,'ldf')+T(145,270,'pg = 1.2','s');
 [[180,'Ce = 1.3','sheltered'],[300,'Ct = 1.0','heated'],[420,'I = 1.2','hospital']].forEach(([x,a,b])=>s+=T(x,40,a,'s','middle',at(1,1))+T(x,62,b,'m','middle',at(1)));
 s+=R(170,152,260,18,'ldf',at(2,'2,4'))+T(300,140,'pf = 1.31 kN/m²','r','middle',at(null,null,2));
 s+=L(170,154,430,154,'rx dsh',at(null,null,3))+T(300,140,'1.2 > 0.96 → pf,min = 1.152','r','middle',at(null,null,3));
 s+=T(300,140,'pf = 1.31 > 1.152  ✓','r big','middle',at(null,null,'4,5'));
 return {vb:'0 0 600 310',svg:s}},

12:()=>{let s='';const ks=['B1','B2','B3','B4'];
 s+=T(300,30,'Classify each beam','s big','middle',at(null,null,'0,5'));
 ks.forEach((k,i)=>s+=`<g transform="translate(${(i%2)*300},${50+Math.floor(i/2)*130})" ${at(null,null,'0,5')}>${CASE[k]}</g>`);
 const C=[["(a) Pin + Roller",["r = 2 + 1 = 3","n = 1","r = 3n"],"Determinate"],["(b) Fixed + Roller",["r = 3 + 1 = 4","n = 1","r > 3n"],"Indeterminate (1°)"],["(c) Fixed + Hinge + Roller",["r = 3 + 2 + 1 = 6","n = 2","r = 3n"],"Determinate"],["(d) Roller + Roller",["r = 1 + 1 = 2","n = 1","r < 3n"],"Unstable"]];
 C.forEach(([t,ls,r],i)=>s+=`<g ${at(null,null,i+1)}><g transform="translate(0,60) scale(1.15)">${CASE[ks[i]]}</g>${T(470,60,t,'s')}${ls.map((l,j)=>T(470,105+j*30,l,'')).join('')}${T(470,240,r,'r big hl')}</g>`);
 return {vb:'0 0 600 310',svg:s}},

13:()=>{let s='';
 s+=R(100,110,400,100,'ldf',at(2,2));
 [60,160,260].forEach(y=>s+=L(100,y,500,y,'k',y===160?at(0,'3,4,5'):''));
 s+=L(100,60,100,260,'k thick')+L(500,60,500,260,'k thick');
 s+=T(300,50,'8 m','m')+T(512,114,'3 m','m','start')+T(512,214,'3 m','m','start')+T(90,164,'B2','s','end')+T(50,30,'5 kN/m²','s');
 s+=T(300,240,'8 / 3 = 2.67 ≥ 2  →  one-way','r','middle',at(null,null,1))+T(300,140,'b = 3 m','r','middle',at(2,2));
 s+=L(100,330,500,330,'k thick')+PIN(100,330)+ROL(500,330);
 s+=`<g ${at(3,3)}>${L(100,292,500,292,'ld')}${LOADAR(100,500,16,()=>292,328)}${T(300,284,'w = 15 kN/m','s')}</g>`;
 s+=`<g ${at(4,4)}>${AR(100,380,100,350,'rx')}${AR(500,380,500,350,'rx')}${T(110,378,'60 kN','r','start')}${T(490,378,'60 kN','r','end')}</g>`;
 s+=L(100,445,500,445,'dm',at(5))+PATH(fx(x=>15*x*(8-x)/2,0,8,32,x=>100+50*x,m=>445-m*0.42),'rx thick',at(5,5))+T(300,384,'M_max = 120 kN·m','r','middle',at(5,5));
 return {vb:'0 0 600 460',svg:s}},

14:()=>{let s='';const X=x=>60+80*x;
 s+=R(60,78,480,8,'kf')+PIN(60,86)+ROL(540,86);
 s+=L(60,40,540,40,'ld')+LOADAR(60,540,24,()=>40,76)+T(400,32,'w = 4 kN/m','s');
 s+=AR(220,2,220,38,'rx')+T(230,14,'P = 12 kN','r','start');
 s+=T(42,86,'A','s','end')+T(558,86,'B','s','start')+T(140,128,'2 m','m')+T(380,128,'4 m','m');
 s+=`<g ${at(1,1)}>${AR(540,140,540,108,'rx')}${T(530,140,'B_y = 16','r','end')}</g>`+`<g ${at(2,2)}>${AR(60,140,60,108,'rx')}${T(70,140,'A_y = 20','r','start')}</g>`;
 s+=L(60,210,540,210,'dm')+T(52,214,'V','m','end');
 s+=`<g ${at(3,3)}>${segWrap(segPieces(x=>x<2?20-4*x:8-4*x,[0,2,6],[],6,X,v=>210-3*v,210,'ldf nos','ldl'),[T(70,144,'+20','s','start')+T(214,168,'+12','s','end'),T(530,276,'−16','s','end')])}</g>`;
 s+=L(220,140,220,390,'dm dsh faint',at(4));
 const M=x=>x<=2?20*x-2*x*x:20*x-2*x*x-12*(x-2);
 s+=L(60,380,540,380,'dm')+T(52,384,'M','m','end');
 s+=`<g ${at(4,4)}>${segWrap(segPieces(M,[0,2,6],[],6,X,m=>380-m*2.5,380,'mfill nos','rx thick'))}</g>`+`<circle cx="220" cy="300" r="4" class="dot" ${at(4,4)}/>`+T(232,296,'M_max = 32 kN·m','r','start',at(4,4));
 s+=`<circle cx="540" cy="380" r="5" class="dot" ${at(5,5)}/>`+T(530,410,'M_B = 0 ✓','r','end',at(5,5));
 return {vb:'0 0 600 420',svg:s}},

15:()=>{let s='';const X=x=>60+120*x;
 s+=FIX(60,50,110)+R(60,76,480,8,'kf');
 s+=L(60,40,540,40,'ld')+LOADAR(80,540,20,()=>40,74)+T(300,32,'w = 3 kN/m','s');
 s+=AR(540,2,540,74,'rx')+T(530,14,'P = 5 kN','r','end');
 s+=T(32,80,'A','s','end')+T(552,84,'B','s','start')+T(300,124,'4 m','m');
 s+=`<g ${at(1,1)}>${AR(70,150,70,92,'rx')}${T(80,150,'A_y = 17','r','start')}</g>`;
 s+=`<g ${at(2,2)}><path d="M28,100 A30,30 0 0,1 28,52" class="rx" marker-end="url(#m-rx)"/>${T(12,40,'M_A = 44','r','start')}</g>`;
 s+=L(60,210,540,210,'dm')+T(52,214,'V','m','end');
 s+=`<g ${at(3,3)}>${segWrap(segPieces(x=>17-3*x,[0,4],[],4,X,v=>210-4*v,210,'ldf nos','ldl'),[T(70,136,'+17','s','start')+T(530,184,'+5','s','end')])}</g>`;
 const M=x=>-44+17*x-1.5*x*x;
 s+=L(60,300,540,300,'dm')+T(52,304,'M','m','end');
 s+=`<g ${at(2,2)}><circle cx="60" cy="410" r="4" class="dot"/>${T(70,425,'−44','r','start')}</g>`;
 s+=`<g ${at(4,4)}>${segWrap(segPieces(M,[0,4],[],4,X,m=>300-m*2.5,300,'mfill nos','rx thick'))}</g>`+`<circle cx="300" cy="340" r="4" class="dot" ${at(4,4)}/>`+T(310,356,'−16','r','start',at(4,4));
 s+=`<circle cx="540" cy="300" r="5" class="dot" ${at(5,5)}/>`+T(530,290,'M_B = 0','r','end',at(5,5));
 return {vb:'0 0 600 440',svg:s}}
});

/* ---------- equilibrium examples (reactions) ---------- */
EX.push(
{id:16,ch:"c2",extra:true,title:"Equilibrium: Inclined Load + Partial UDL",short:"Pin + roller، حمل مائل نحلله لمركبات، و UDL على جزء من الـ beam.",src:"مثال إضافي — Application of Equations of Equilibrium (ملف 5)",
 q:"Determine the reactions at A (pin) and B (roller) for the shown beam.",
 given:["L = 8 m, A: pin, B: roller","P = 20 kN at x = 3 m, inclined 60° to the horizontal (down-right)","w = 6 kN/m from x = 4 m to x = 8 m"],
 steps:[
  ["FBD + components of P","نحلل الـ inclined load لمركبتين.","Px = 20 cos60 = 10 kN →      Py = 20 sin60 = 17.32 kN ↓"],
  ["Resultant of UDL","W = w × length، ويأثر في منتصف الجزء المحمّل.","W = 6 × 4 = 24 kN   at x = 6 m"],
  ["ΣM_A = 0 → B_y","نختار A لأنها تلغي A_x و A_y.","B_y (8) − 17.32 (3) − 24 (6) = 0   →   B_y = 24.50 kN ↑"],
  ["ΣF_x = 0 → A_x","","A_x + 10 = 0   →   A_x = −10   →   A_x = 10 kN ←"],
  ["ΣM_B = 0 → A_y","نحسب A_y بمعادلة عزوم ثانية بدل ما نستخدم B_y.","−A_y (8) + 17.32 (5) + 24 (2) = 0   →   A_y = 16.82 kN ↑"],
  ["Check ΣF_y = 0","","16.82 + 24.50 − 17.32 − 24 = 0   ✓"]
 ],
 ans:"<b>A_x = 10 kN ←</b>، <b>A_y = 16.82 kN ↑</b>، <b>B_y = 24.50 kN ↑</b>",
 idea:"حلّل الـ inclined load أول شي، واستبدل كل distributed load بـ resultant. خلّ ΣF_y للتحقق بس."},

{id:17,ch:"c2",extra:true,title:"Equilibrium: Cantilever + Triangular Load",short:"Fixed support فيه 3 reactions: A_x و A_y و M_A.",src:"مثال إضافي — Application of Equations of Equilibrium (ملف 5)",
 q:"Determine the reactions at the fixed support A of the cantilever beam.",
 given:["L = 4 m, fixed at A, free at B","Triangular load: 0 at A → 6 kN/m at B","P = 8 kN ↓ at B"],
 steps:[
  ["Resultant of triangular load","مساحة المثلث، ويأثر على بعد 2L/3 من الطرف الصفري.","W = ½ × 4 × 6 = 12 kN   at x = 2.667 m from A"],
  ["ΣF_x = 0","ما فيه أحمال أفقية.","A_x = 0"],
  ["ΣF_y = 0","","A_y − 12 − 8 = 0   →   A_y = 20 kN ↑"],
  ["ΣM_A = 0 → M_A","عكس عقارب الساعة موجب.","M_A − 12 (2.667) − 8 (4) = 0   →   M_A = 64 kN·m ↺"],
  ["Check ΣM_B = 0","","64 − 20 (4) + 12 (1.333) = 64 − 80 + 16 = 0   ✓"]
 ],
 ans:"<b>A_x = 0</b>، <b>A_y = 20 kN ↑</b>، <b>M_A = 64 kN·m ↺</b>",
 idea:"الـ triangular load محصلته ½·w·L، ومكانها على بعد L/3 من الطرف الكبير (2L/3 من الطرف الصفري)."},

{id:18,ch:"c2",extra:true,title:"Equilibrium: Compound Beam (Internal Hinge)",short:"نقسم عند الـ hinge لأن M_C = 0، ونحل كل جزء لحاله.",src:"مثال إضافي — Application of Equations of Equilibrium (ملف 5)",
 q:"Determine the reactions at A (fixed) and B (roller). C is an internal hinge.",
 given:["A: fixed (x = 0)   C: hinge (x = 4 m)   B: roller (x = 8 m)","P = 10 kN ↓ at x = 2 m","w = 3 kN/m on CB (x = 4 → 8 m)","r = 3 + 1 + 2 = 6, n = 2 → determinate"],
 steps:[
  ["نقسم عند الـ hinge C","عند الـ hinge الـ moment = 0، فنفصل الـ beam لجزئين CB و AC وبينهم force C_y.","M_C = 0"],
  ["Segment CB: ΣM_C = 0","W = 3 × 4 = 12 kN في منتصف CB.","B_y (4) − 12 (2) = 0   →   B_y = 6 kN ↑"],
  ["Segment CB: C_y","الـ hinge force على CB لفوق، وعلى AC لتحت.","C_y = 12 − 6 = 6 kN"],
  ["Segment AC: ΣF_y = 0","","A_y − 10 − 6 = 0   →   A_y = 16 kN ↑"],
  ["Segment AC: ΣM_A = 0","","M_A − 10 (2) − 6 (4) = 0   →   M_A = 44 kN·m ↺"],
  ["Check (whole beam)","","A_y + B_y = 16 + 6 = 22 = 10 + 12   ✓"]
 ],
 ans:"<b>A_y = 16 kN ↑</b>، <b>M_A = 44 kN·m ↺</b>، <b>B_y = 6 kN ↑</b>، A_x = 0، والـ hinge force C_y = 6 kN.",
 idea:"ابدأ بالجزء اللي فيه مجاهيل أقل (CB: مجهولين بس)، وبعدين انقل الـ hinge force للجزء الثاني بعكس الاتجاه."}
);
EX.sort((a,b)=>ORD[a.ch]-ORD[b.ch]||a.id-b.id);

Object.assign(SIMS,{
16:()=>{let s='';const X=x=>60+60*x;
 s+=R(60,146,480,8,'kf')+PIN(60,154)+ROL(540,154);
 s+=T(42,154,'A','s','end')+T(558,154,'B','s','start');
 s+=AR(200,81,238,144,'rx')+T(196,74,'P = 20 kN','r','end')+T(215,128,'60°','m','end');
 s+=L(300,100,540,100,'ld')+LOADAR(300,540,12,()=>100,144)+T(350,92,'w = 6 kN/m','s');
 s+=L(60,270,540,270,'dm')+T(150,262,'3 m','m')+T(270,262,'1 m','m')+T(420,262,'4 m','m');
 s+=`<g ${at(1,1)}>${AR(240,86,240,144,'rx dsh')}${T(248,70,'Py = 17.32','r','start')}${AR(178,118,236,118,'rx dsh')}${T(176,112,'Px = 10','r','end')}</g>`;
 s+=`<g ${at(2,2)}>${AR(420,40,420,98,'rx dsh')}${T(428,40,'W = 24 kN','r','start')}</g>`;
 s+=`<g ${at(3,3)}>${AR(540,234,540,176,'rx')}${T(530,234,'B_y = 24.50','r','end')}</g>`;
 s+=`<g ${at(4,4)}>${AR(56,190,12,190,'rx')}${T(14,206,'A_x = 10','r','start')}</g>`;
 s+=`<g ${at(5,5)}>${AR(70,234,70,176,'rx')}${T(80,234,'A_y = 16.82','r','start')}</g>`;
 s+=T(300,320,'16.82 + 24.50 = 17.32 + 24 ✓','r','middle',at(null,null,6));
 return {vb:'0 0 600 340',svg:s}},

17:()=>{let s='';
 s+=FIX(80,110,190)+R(80,146,480,8,'kf');
 s+=PG('80,144 560,144 560,96','ldf')+LOADAR(120,560,11,x=>144-48*(x-80)/480,144)+T(548,90,'6 kN/m','s','end');
 s+=AR(560,12,560,142,'rx')+T(552,24,'P = 8 kN','r','end');
 s+=T(60,140,'A','s','end')+T(570,160,'B','s','start')+L(80,200,560,200,'dm')+T(320,216,'4 m','m');
 s+=`<g ${at(1,1)}>${AR(400,60,400,142,'rx dsh')}${T(392,56,'W = 12 kN','r','end')}${T(240,186,'2.667 m','r')}${L(80,176,400,176,'rx dsh')}</g>`;
 s+=T(320,290,'A_x = 0','r','middle',at(null,null,2));
 s+=`<g ${at(3,3)}>${AR(110,290,110,160,'rx')}${T(120,290,'A_y = 20 kN','r','start')}</g>`;
 s+=`<g ${at(4,4)}><path d="M48,190 A44,44 0 0,1 48,110" class="rx" marker-end="url(#m-rx)"/>${T(14,98,'M_A = 64','r','start')}</g>`;
 s+=T(320,320,'64 − 80 + 16 = 0 ✓','r','middle',at(null,null,5));
 return {vb:'0 0 600 340',svg:s}},

18:()=>{let s='';
 s+=FIX(60,110,190)+R(60,146,236,8,'kf')+R(304,146,236,8,'kf')+`<circle cx="300" cy="150" r="7" class="kf" ${at(0,1)}/>`+ROL(540,154);
 s+=T(42,140,'A','s','end')+T(300,132,'C','s')+T(558,154,'B','s','start');
 s+=AR(180,70,180,144,'rx')+T(190,80,'P = 10 kN','r','start');
 s+=L(304,100,540,100,'ld')+LOADAR(304,540,12,()=>100,144)+T(420,92,'w = 3 kN/m','s');
 s+=L(60,270,540,270,'dm')+T(120,262,'2 m','m')+T(240,262,'2 m','m')+T(420,262,'4 m','m');
 s+=L(300,30,300,250,'rx dsh',at(1,1))+T(300,24,'M_C = 0','r','middle',at(1,1));
 s+=`<g ${at(2,2)}>${AR(540,234,540,176,'rx')}${T(530,234,'B_y = 6','r','end')}</g>`;
 s+=`<g ${at(3,3)}>${AR(320,226,320,160,'rx')}${T(328,226,'C_y = 6 ↑ (on CB)','r','start')}${AR(280,104,280,144,'rx')}${T(272,100,'6 ↓ (on AC)','r','end')}</g>`;
 s+=`<g ${at(4,4)}>${AR(90,234,90,176,'rx')}${T(100,234,'A_y = 16','r','start')}</g>`;
 s+=`<g ${at(5,5)}><path d="M28,190 A44,44 0 0,1 28,110" class="rx" marker-end="url(#m-rx)"/>${T(6,98,'M_A = 44','r','start')}</g>`;
 s+=T(300,320,'16 + 6 = 10 + 12 ✓','r','middle',at(null,null,6));
 return {vb:'0 0 600 340',svg:s}}
});

/* use own drawings only: drop slide crops from solutions */
EX.forEach(e=>{delete e.stepImg});
/* ================= BEAM ENGINE (solves + draws determinate beams) ================= */
const BF=(v,n=2)=>{if(!isFinite(v))return'—';let r=Math.round(v*10**n)/10**n;if(Math.abs(r)<1e-9)r=0;return String(r).replace('-','−')};
const FIXR=(x,y1,y2)=>R(x,y1,14,y2-y1,'kf')+Array.from({length:Math.floor((y2-y1)/12)},(_,i)=>L(x+14,y1+12*i+12,x+4,y1+12*i+2,'k')).join('');
const BE={
 part(l,x){const a=l.a,b=l.b,c=Math.min(x,b);if(c<=a)return{W:0,xc:a};const h=c-a,wc=l.w1+(l.w2-l.w1)*h/(b-a),W=(l.w1+wc)/2*h,sw=l.w1+wc;const cen=Math.abs(sw)<1e-12?h/2:h*(l.w1+2*wc)/(3*sw);return{W,xc:a+cen}},
 gauss(A,b){const n=b.length,M=A.map((r,i)=>[...r,b[i]]);for(let c=0;c<n;c++){let p=c;for(let r=c+1;r<n;r++)if(Math.abs(M[r][c])>Math.abs(M[p][c]))p=r;[M[c],M[p]]=[M[p],M[c]];const d=M[c][c]||1e-12;for(let r=0;r<n;r++){if(r===c)continue;const k=M[r][c]/d;for(let j=c;j<=n;j++)M[r][j]-=k*M[c][j]}}return M.map((r,i)=>r[n]/r[i])},
 solve(sp){
  const Ln=sp.L,sups=sp.sup||[],loads=sp.loads||[],hinges=sp.hinge||[];
  const U=[];sups.forEach((s,i)=>{U.push({i,k:'y'});if(s.t==='fixed')U.push({i,k:'m'})});
  const knownM=h=>{let m=0;loads.forEach(l=>{if(l.k==='P'&&l.x<h)m+=-(h-l.x)*(l.py||0)+(l.e||0)*(l.px||0);if(l.k==='M'&&l.x<h)m+=l.M;if(l.k==='w'){const p=BE.part(l,h);m+=-p.W*(h-p.xc)}});return m};
  const rows=[],rhs=[];
  {let c=0;loads.forEach(l=>{if(l.k==='P')c-=l.py||0;if(l.k==='w')c-=BE.part(l,1e9).W});rows.push(U.map(u=>u.k==='y'?1:0));rhs.push(-c)}
  {let c=0;loads.forEach(l=>{if(l.k==='P')c+=-(l.py||0)*l.x-(l.e||0)*(l.px||0);if(l.k==='M')c+=-l.M;if(l.k==='w'){const p=BE.part(l,1e9);c+=-p.W*p.xc}});rows.push(U.map(u=>u.k==='y'?sups[u.i].x:1));rhs.push(-c)}
  hinges.forEach(h=>{rows.push(U.map(u=>{const s=sups[u.i];if(s.x>=h)return 0;return u.k==='y'?(h-s.x):-1}));rhs.push(-knownM(h))});
  const sol=U.length?BE.gauss(rows.slice(0,U.length),rhs.slice(0,U.length)):[];
  const Ry=sups.map(()=>0),Mr=sups.map(()=>0);U.forEach((u,j)=>{if(u.k==='y')Ry[u.i]=sol[j];else Mr[u.i]=sol[j]});
  let sx=0;loads.forEach(l=>{if(l.k==='P')sx+=l.px||0});const rxI=sups.findIndex(s=>s.t!=='roller');const Rx=sups.map((s,i)=>i===rxI?-sx:0);
  const V=x=>{let v=0;sups.forEach((s,i)=>{if(s.x<x)v+=Ry[i]});loads.forEach(l=>{if(l.k==='P'&&l.x<x)v-=l.py||0;if(l.k==='w')v-=BE.part(l,x).W});return v};
  const M=x=>{let m=0;sups.forEach((s,i)=>{if(s.x<x)m+=Ry[i]*(x-s.x)-Mr[i]});return m+knownM(x)};
  const keys=new Set([0,Ln]);sups.forEach(s=>keys.add(s.x));hinges.forEach(h=>keys.add(h));loads.forEach(l=>{if(l.k==='w'){keys.add(l.a);keys.add(l.b)}else keys.add(l.x)});
  const ks=[...keys].filter(x=>x>=0&&x<=Ln).sort((a,b)=>a-b);
  const zeros=[];for(let j=0;j<ks.length-1;j++){const a=ks[j]+1e-7,b=ks[j+1]-1e-7;const N=60;let pa=a,va=V(pa);for(let i=1;i<=N;i++){const pb=a+(b-a)*i/N,vb=V(pb);if(vb===0&&i<N&&va!==0){zeros.push(pb)}else if(va*vb<0){let lo=pa,hi=pb;for(let t=0;t<50;t++){const mid=(lo+hi)/2;if(V(lo)*V(mid)<=0)hi=mid;else lo=mid}zeros.push((lo+hi)/2)}pa=pb;va=vb}}
  return{Ry,Mr,Rx,V,M,keys:ks,zeros,L:Ln};
 },
 draw(sp,o={}){
  const so=BE.solve(sp),Ln=sp.L,x0=o.x0??60,x1=o.x1??540,X=x=>x0+(x1-x0)*x/Ln,BY=o.by??110,A=o.at||{};
  const G=(k,body)=>body?`<g ${k!=null?at(k):''}>${body}</g>`:'';
  let s='';
  // ---- loads
  let ld='';const ws=(sp.loads||[]).filter(l=>l.k==='w'),wmax=Math.max(1e-9,...ws.map(l=>Math.max(Math.abs(l.w1),Math.abs(l.w2)))),H=o.wh??40;
  ws.forEach(l=>{const h=w=>w/wmax*H,xa=X(l.a),xb=X(l.b),ya=BY-6-h(l.w1),yb=BY-6-h(l.w2);
   ld+=PG(`${xa},${BY-6} ${xa},${ya} ${xb},${yb} ${xb},${BY-6}`,'ldf soft');
   const top=x=>BY-6-h(l.w1+(l.w2-l.w1)*(x-xa)/((xb-xa)||1));ld+=LOADAR(xa,xb,Math.max(2,Math.round((xb-xa)/22)),top,BY-6);
   if(l.lab===false)return;if(typeof l.lab==='string'){const xm=l.w2>=l.w1?xb:xa,ym=Math.min(ya,yb);ld+=T(Math.min(x1-4,Math.max(x0+4,xm)),ym-7,l.lab,'s',xm>=x1-30?'end':xm<=x0+30?'start':'middle');return}
   if(Math.abs(l.w1-l.w2)<1e-9)ld+=T((xa+xb)/2,ya-7,BF(l.w1)+' kN/m','s');
   else{if(l.w1)ld+=T(xa,ya-7,BF(l.w1)+' kN/m','s',xa<x0+30?'start':'middle');if(l.w2)ld+=T(xb,yb-7,BF(l.w2)+' kN/m','s',xb>x1-30?'end':'middle')}});
  (sp.loads||[]).filter(l=>l.k==='P').forEach(l=>{const px=l.px||0,py=l.py||0,m=Math.hypot(px,py)||1,dx=px/m,dy=py/m,len=l.len||52;
   const ex=X(l.x),ey=py>=-1e-9?BY-6:BY+6,sx=ex-dx*len,sy=ey-dy*len;ld+=AR(sx,sy,ex,ey,'rx');
   const lab=l.lab??(BF(m)+' kN');if(lab)ld+=T(sx+(Math.abs(dx)>.3?(dx>0?-4:4):0),dy>=0?sy-6:sy+16,lab,'r',Math.abs(dx)>.3?(dx>0?'end':'start'):'middle')});
  (sp.loads||[]).filter(l=>l.k==='M').forEach(l=>{const cx=X(l.x),r=15,cw=l.M>0;if(l.below){const cy=BY+20;ld+=cw?`<path d="M${cx+r},${cy-6} A${r},${r} 0 1,1 ${cx-r},${cy-6}" class="rx" marker-end="url(#m-rx)"/>`:`<path d="M${cx-r},${cy-6} A${r},${r} 0 1,0 ${cx+r},${cy-6}" class="rx" marker-end="url(#m-rx)"/>`;ld+=T(cx+(cx>x1-30?-r-4:r+4),cy+r+12,l.lab??(BF(Math.abs(l.M))+' kN·m'),'r',cx>x1-30?'end':'start');return}const cy=BY-24;
   ld+=cw?`<path d="M${cx-r},${cy+6} A${r},${r} 0 1,1 ${cx+r},${cy+6}" class="rx" marker-end="url(#m-rx)"/>`:`<path d="M${cx+r},${cy+6} A${r},${r} 0 1,0 ${cx-r},${cy+6}" class="rx" marker-end="url(#m-rx)"/>`;
   ld+=T(Math.min(x1,Math.max(x0,cx)),cy-r-6,l.lab??(BF(Math.abs(l.M))+' kN·m'),'r',cx>x1-30?'end':cx<x0+30?'start':'middle')});
  // ---- beam + supports
  let bm=R(x0,BY-4,x1-x0,8,'kf');
  (sp.sup||[]).forEach(su=>{const x=X(su.x);if(su.t==='pin')bm+=PIN(x,BY+4);else if(su.t==='roller')bm+=ROL(x,BY+4);else bm+=su.x<Ln/2?FIX(x,BY-28,BY+28):FIXR(x,BY-28,BY+28)});
  (sp.hinge||[]).forEach(h=>bm+=`<circle cx="${X(h)}" cy="${BY}" r="6" class="kf"/>`);
  (sp.pts||[]).forEach(p=>bm+=T(X(p.x)+(p.dx??-9),BY+(p.dy??38),p.t,'s',p.x>=Ln-1e-9&&(p.dx??-9)>0?'start':'end'));
  if(o.dims!==false){const ds=(o.dims||so.keys).slice().sort((a,b)=>a-b),dy=BY+(o.dimy??104);bm+=L(x0,dy,x1,dy,'dm');ds.forEach(d=>bm+=L(X(d),dy-5,X(d),dy+5,'dm'));for(let j=0;j<ds.length-1;j++){const w=ds[j+1]-ds[j];if(w>1e-9&&X(ds[j+1])-X(ds[j])>18)bm+=T((X(ds[j])+X(ds[j+1]))/2,dy+14,BF(w)+(X(ds[j+1])-X(ds[j])>40?' m':''),'m')}}
  s+=bm+G(o.loadK,ld);
  // ---- resultants
  (o.res||[]).forEach(r=>{const x=X(r.x),top=BY-6-H-34;s+=G(r.k??A.res,AR(x,top,x,BY-7,'rx dsh')+T(x+(r.dx??5),top+(r.dy??-2),r.lab??('W = '+BF(r.W)+' kN'),'r',r.anchor??'start'))});
  // ---- reactions
  const rk=i=>typeof A.reac==='object'?A.reac[i]:A.reac;
  (sp.sup||[]).forEach((su,i)=>{const x=X(su.x),ry=so.Ry[i],lab=su.lab||'';if(Math.abs(ry)>1e-9){const up=ry>0,anc=su.x>=Ln-1e-9?'end':su.x<=1e-9?'start':'middle';
    s+=G(rk(i),(up?AR(x,BY+72,x,BY+24,'rx'):AR(x,BY+24,x,BY+72,'rx'))+T(x+(anc==='end'?-4:anc==='start'?4:0),BY+88,`${lab}<tspan baseline-shift="sub" font-size="70%">y</tspan> = ${BF(Math.abs(ry))}`,'r',anc))}
   if(su.t==='fixed'&&Math.abs(so.Mr[i])>1e-9){const left=su.x<Ln/2,cx=left?x-24:x+24,ccw=so.Mr[i]>0,r=20;
    const path=left?(ccw?`M${cx+4},${BY+r} A${r},${r} 0 0,1 ${cx+4},${BY-r}`:`M${cx+4},${BY-r} A${r},${r} 0 0,0 ${cx+4},${BY+r}`):(ccw?`M${cx-4},${BY-r} A${r},${r} 0 0,0 ${cx-4},${BY+r}`:`M${cx-4},${BY+r} A${r},${r} 0 0,1 ${cx-4},${BY-r}`);
    s+=G(rk('m'+i)??rk(i),`<path d="${path}" class="rx" marker-end="url(#m-rx)"/>`+T(left?x+30:x-30,BY+50,`M<tspan baseline-shift="sub" font-size="70%">${lab}</tspan> = ${BF(Math.abs(so.Mr[i]))} ${ccw?'↺':'↻'}`,'r',left?'start':'end'))}
   if(Math.abs(so.Rx[i])>1e-9){const right=so.Rx[i]>0,y=BY+(o.rxy??0);const tail=su.x>=Ln-1e-9?x+50:x-50,head=su.x>=Ln-1e-9?x+10:x-10;const a=right?(su.x>=Ln-1e-9?AR(head,y,tail,y,'rx'):AR(tail,y,head,y,'rx')):(su.x>=Ln-1e-9?AR(tail,y,head,y,'rx'):AR(head,y,tail,y,'rx'));
    s+=G(rk('x')??rk(i),a+T(tail,y-8,`${lab}<tspan baseline-shift="sub" font-size="70%">x</tspan> = ${BF(Math.abs(so.Rx[i]))}`,'r',su.x>=Ln-1e-9?'end':'start'))}});
  // ---- cut
  if(o.cut){const c=o.cut,x=X(c.x),yb=o.diag?BY+340:BY+96;s+=G(c.k,L(x,BY-60,x,yb,'rx dsh')+T(x,BY-64,c.lab||'C','r big'));
   if(c.vk!=null)s+=G(c.vk,T(x+8,BY+(c.vy??140),`V<tspan baseline-shift="sub" font-size="70%">${c.lab||'C'}</tspan> = ${BF(so.V(c.x+1e-7))} kN`,'r','start'));
   if(c.mk!=null)s+=G(c.mk,T(x+8,BY+(c.vy??140)+18,`M<tspan baseline-shift="sub" font-size="70%">${c.lab||'C'}</tspan> = ${BF(so.M(c.x))} kN·m`,'r','start'))}
  let h=BY+(o.dims===false?96:126)+(o.cut&&!o.diag?60:0);
  // ---- diagrams
  if(o.diag){const VY=BY+(o.vgap??(o.cut?214:178)),MY=o.onlyM?VY:VY+(o.mgap??150),eps=1e-7;
   const xs=[];for(let i=0;i<=300;i++)xs.push(Ln*i/300);so.keys.forEach(k=>{xs.push(k-eps,k+eps)});so.zeros.forEach(z=>xs.push(z));const xx=[...new Set(xs.filter(x=>x>0&&x<Ln))].sort((a,b)=>a-b);
   const vm=Math.max(1e-9,...xx.map(x=>Math.abs(so.V(x)))),extra=o.extraM||[],mm=Math.max(1e-9,...xx.map(x=>Math.abs(so.M(x))),...extra.flatMap(e=>xx.map(x=>Math.abs(e.f(x))))),av=o.av??48,am=o.am??56;
   const Vy=v=>VY-v/vm*av,My=m=>MY-m/mm*am;
   const pv=segPieces(so.V,so.keys,[],Ln,X,Vy,VY,'ldf nos','ldl'),lv=pv.map(()=>'');
   let sv=L(x0,VY,x1,VY,'dm')+T(x0-6,VY+4,'V','m','end');
   const vl=[];const addV=(x,v,side)=>{if(Math.abs(v)<1e-3)return;const px=X(x)+(side==='l'?-4:side==='r'?4:0);if(vl.some(q=>Math.abs(q.v-v)<.005&&Math.abs(q.px-px)<70))return;vl.push({px,v});lv[segIdx(pv,x,side)]+=T(Math.min(x1+18,Math.max(x0-18,px)),Vy(v)+(v>=0?-5:14),BF(v),'s',side==='l'?'end':side==='r'?'start':'middle')};
   so.keys.forEach(k=>{const vL=k>0?so.V(k-eps):null,vR=k<Ln?so.V(k+eps):null;if(vL!=null&&vR!=null&&Math.abs(vL-vR)>1e-6){addV(k,vL,'l');addV(k,vR,'r')}else if(vR!=null)addV(k,vR,k===0?'r':'m');else addV(k,vL,'l')});
   (o.vlines?so.keys:so.keys.filter(k=>k>0&&k<Ln)).forEach(k=>{sv+=L(X(k),o.vlines?BY+12:VY-av-6,X(k),MY+am+6,'dm dsh faint')});
   sv+=segWrap(pv,lv);if(o.signs)sv+=nbSigns(so.V,pv,X,Vy,VY,so.zeros,1);
   if(!o.onlyM)s+=G(A.sfd,sv);else s+=G(null,so.keys.filter(k=>k>0&&k<Ln).map(k=>L(X(k),MY-am-6,X(k),MY+am+6,'dm dsh faint')).join(''));
   const pm=segPieces(so.M,so.keys,so.zeros,Ln,X,My,MY,'mfill nos','mdl'),lm=pm.map(()=>'');
   let sm=L(x0,MY,x1,MY,'dm')+T(x0-6,MY+4,'M','m','end');
   const ml=[];const addM=(x,m,side,big)=>{if(Math.abs(m)<1e-3)return;const px=X(x)+(side==='l'?-4:side==='r'?4:0);if(ml.some(q=>Math.abs(q.m-m)<.01&&Math.abs(q.px-px)<60))return;ml.push({px,m});lm[segIdx(pm,x,side)]+=`<circle cx="${X(x)}" cy="${My(m)}" r="3.2" class="dot"/>`+T(Math.min(x1+18,Math.max(x0-18,px)),My(m)+(m>=0?-7:16),BF(m),big?'r':'r',side==='l'?'end':side==='r'?'start':'middle')};
   so.zeros.forEach(z=>{const mz=so.M(z),zi=segIdx(pm,z,'m');if(Math.abs(mz)>=1e-3){ml.push({px:X(z),m:mz});lm[zi]+=`<circle cx="${X(z)}" cy="${My(mz)}" r="3.2" class="dot"/>`+T(X(z),My(mz)+(mz>=0?-19:28),BF(mz),'r')}lm[zi]+=T(X(z),o.onlyM?MY+am+18:VY+(so.V(z-1e-3)>0?16:-8),'x = '+BF(z)+' m','m')});
   so.keys.forEach(k=>{const mL=k>0?so.M(k-eps):null,mR=k<Ln?so.M(k+eps):null;if(mL!=null&&mR!=null&&Math.abs(mL-mR)>1e-6){addM(k,mL,'l');addM(k,mR,'r')}else addM(k,mR??mL,k===0?'r':k===Ln?'l':'m')});
   if(o.signs)sm+=nbSigns(so.M,pm,X,My,MY,so.zeros.concat(o.mzeros||[]),1);sm+=segWrap(pm,lm,(A.sfd!=null&&A.sfd===A.bmd&&!o.onlyM)?Math.min(.8,2.4/Math.max(1,pv.length))*pv.length+.6:0);s+=G(A.bmd,sm);
   extra.forEach(e=>{s+=G(e.k,`<g class="seg" data-d="0"><polyline points="${xx.map(x=>`${X(x).toFixed(1)},${My(e.f(x)).toFixed(1)}`).join(' ')}" class="${e.cls||'k dsh'} segl" fill="none"/></g>`+(e.lab?T(e.lx??x1+4,e.ly??My(e.f(Ln-1e-6))+4,e.lab,'m','start'):''))});
   h=MY+am+26}
  if(o.extra)s+=o.extra;
  return{vb:`0 0 600 ${o.h??h}`,svg:s,sol:so};
 }
};
/* generic "classify these" sim (cases) */
function casesSim(keys,C,title,W=300,Hh=140){let s='';
 s+=T(300,30,title,'s big','middle',at(null,null,'0,'+(keys.length+1)));
 keys.forEach((k,i)=>s+=`<g transform="translate(${(i%2)*300},${50+Math.floor(i/2)*130})" ${at(null,null,'0,'+(keys.length+1))}>${CASE[k]}</g>`);
 C.forEach(([t,ls,r],i)=>s+=T(150+(i%2)*300,50+Math.floor(i/2)*130+124,r,'r','middle',at(null,null,keys.length+1)));
 C.forEach(([t,ls,r],i)=>s+=`<g ${at(null,null,i+1)}><g transform="translate(0,60) scale(1.15)">${CASE[keys[i]]}</g>${T(470,60,t,'s')}${ls.map((l,j)=>T(470,105+j*30,l,'')).join('')}${T(470,240,r,'r big hl')}</g>`);
 return{vb:'0 0 600 310',svg:s}}

BE.plot=(sp,o)=>{const so=BE.solve(sp),Ln=sp.L,x0=o.x0,x1=o.x1,X=x=>x0+(x1-x0)*x/Ln,base=o.base,amp=o.amp??40,eps=1e-7,kind=o.kind;
 const f=kind==='V'?so.V:so.M;const xs=[];for(let i=0;i<=200;i++)xs.push(Ln*i/200);so.keys.forEach(k=>xs.push(k-eps,k+eps));so.zeros.forEach(z=>xs.push(z));const xx=[...new Set(xs.filter(x=>x>0&&x<Ln))].sort((a,b)=>a-b);
 const mx=Math.max(1e-9,...xx.map(x=>Math.abs(f(x)))),Y=v=>base-v/mx*amp;
 let s=L(x0,base,x1,base,'dm')+T((x0+x1)/2,base-amp-26,o.title,'s');const pp=segPieces(f,so.keys,kind==='M'?so.zeros:[],Ln,X,Y,base,kind==='V'?'ldf nos':'mfill nos',kind==='V'?'ldl':'mdl'),lp=pp.map(()=>'');
 const pts=[];so.keys.forEach(k=>{if(k>0)pts.push([k,f(k-eps),'l']);if(k<Ln)pts.push([k,f(k+eps),'r'])});if(kind==='M')so.zeros.forEach(z=>pts.push([z,f(z),'m']));
 const seen=[];pts.forEach(([x,v,sd])=>{if(Math.abs(v)<1e-3)return;const px=X(x)+(sd==='l'?-3:sd==='r'?3:0);if(seen.some(q=>Math.abs(q.v-v)<.01&&Math.abs(q.px-px)<50))return;if(kind==='M'&&seen.some(q=>Math.abs(q.px-px)<30))return;seen.push({px,v});lp[segIdx(pp,x,sd)]+=(kind==='M'?`<circle cx="${X(x)}" cy="${Y(v)}" r="3" class="dot"/>`:'')+T(px,Y(v)+(v>=0?-5:14),BF(v),kind==='V'?'s':'r',sd==='l'?'end':sd==='r'?'start':'middle')});
 s+=segWrap(pp,lp)+T(x0-8,base+4,o.a||'','s','end')+T(x1+8,base+4,o.b||'','s','start');
 return `<g ${o.k!=null?at(o.k):''}>${s}</g>`};

/* ================= HIBBELER TEXTBOOK EXAMPLES ================= */
const HB=(no,p)=>`كتاب Hibbeler — Example ${no} (ص ${p})`;
const BS={
 e208:{L:6.5,sup:[{x:0,t:'pin',lab:'A'},{x:4.5,t:'roller',lab:'B'}],loads:[{k:'P',x:3,px:-125,py:216.506,e:0.3,lab:'250 kN @ 60°'},{k:'M',x:6.5,M:60}],pts:[{x:0,t:'A',dx:-6},{x:4.5,t:'B'}]},
 e209:{L:12,sup:[{x:0,t:'fixed',lab:'A'}],loads:[{k:'w',a:0,b:12,w1:15,w2:5}],pts:[{x:0,t:'A',dx:-18}]},
 e211:{L:5,sup:[{x:0,t:'fixed',lab:'A'},{x:5,t:'roller',lab:'C'}],hinge:[3],loads:[{k:'w',a:0,b:3,w1:6,w2:6},{k:'M',x:5,M:8}],pts:[{x:0,t:'A',dx:-18},{x:3,t:'B'},{x:5,t:'C',dx:12}]},
 e401:{L:12,sup:[{x:1.2,t:'pin',lab:'R'},{x:10.8,t:'roller',lab:'R'}],loads:Array.from({length:13},(_,i)=>({k:'P',x:i,py:(i==0||i==12)?3.6:7.2,len:34,lab:(i==0||i==12)?'3.6':(i==1||i==11)?'7.2':''}))},
 e402:{L:6,sup:[{x:0,t:'pin',lab:'A'},{x:6,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:6,w1:0,w2:45}],pts:[{x:0,t:'A',dx:-6},{x:6,t:'B',dx:12}]},
 e403:{L:6,sup:[{x:0,t:'pin',lab:'A'},{x:6,t:'roller',lab:'B'}],loads:[{k:'P',x:3,py:30},{k:'P',x:4.5,py:15}],pts:[{x:0,t:'A',dx:-6},{x:6,t:'B',dx:12}]},
 e404:{L:3,sup:[{x:0,t:'fixed',lab:'A'}],loads:[{k:'w',a:0,b:3,w1:0,w2:10}],pts:[{x:0,t:'A',dx:-18}]},
 e405:{L:3,sup:[{x:0,t:'fixed',lab:'A'}],loads:[{k:'w',a:0,b:2,w1:50,w2:50},{k:'P',x:3,py:50},{k:'M',x:3,M:50,below:true}],pts:[{x:0,t:'A',dx:-18}]},
 e406:{L:9,sup:[{x:0,t:'pin',lab:'A'},{x:9,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:9,w1:10,w2:30}],pts:[{x:0,t:'A',dx:-6},{x:9,t:'B',dx:12}]},
 e407:{L:6,sup:[{x:1.5,t:'pin',lab:'B'},{x:4.5,t:'roller',lab:'D'}],loads:[{k:'P',x:0,py:4},{k:'P',x:3,py:4},{k:'P',x:6,py:4}],pts:[{x:0,t:'A',dx:-6},{x:1.5,t:'B'},{x:3,t:'C'},{x:4.5,t:'D'},{x:6,t:'E',dx:8}]},
 e408:{L:9,sup:[{x:0,t:'pin',lab:'A'},{x:9,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:9,w1:0,w2:20}],pts:[{x:0,t:'A',dx:-6},{x:9,t:'B',dx:12}]},
 e409a:{L:4.5,sup:[{x:4.5,t:'fixed',lab:'B'}],loads:[{k:'M',x:0,M:15},{k:'w',a:0,b:1.5,w1:0,w2:8,lab:false},{k:'w',a:1.5,b:4.5,w1:8,w2:8}],pts:[{x:0,t:'A',dx:-6}]},
 e409b:{L:6,sup:[{x:0,t:'pin',lab:'A'},{x:6,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:3,w1:0,w2:6,lab:false},{k:'w',a:3,b:6,w1:6,w2:0,lab:false}],pts:[{x:0,t:'A',dx:-6},{x:6,t:'B',dx:12}]},
 e409c:{L:4,sup:[{x:2,t:'pin',lab:'B'},{x:4,t:'roller',lab:'C'}],loads:[{k:'P',x:0,py:20},{k:'M',x:0,M:-30,below:true},{k:'w',a:2,b:4,w1:30,w2:30}],pts:[{x:0,t:'A',dx:-6},{x:2,t:'B'},{x:4,t:'C',dx:12}]},
 e410:{L:1.75,sup:[{x:0.75,t:'roller',lab:'B'},{x:1.75,t:'pin',lab:'C'}],loads:[{k:'w',a:0,b:1.75,w1:10,w2:10}],pts:[{x:0,t:'A',dx:-6},{x:0.75,t:'B'},{x:1.75,t:'C',dx:12}]},
 e411:{L:14,sup:[{x:0,t:'roller',lab:'A'},{x:8,t:'roller',lab:'C'},{x:14,t:'pin',lab:'E'}],hinge:[5],loads:[{k:'M',x:0,M:150},{k:'w',a:0,b:5,w1:20,w2:20,lab:'20 kN/m'},{k:'P',x:6,py:30},{k:'w',a:8,b:11,w1:0,w2:30,lab:false},{k:'w',a:11,b:14,w1:30,w2:0,lab:'30 kN/m'}],pts:[{x:0,t:'A',dx:-6},{x:5,t:'B'},{x:8,t:'C'},{x:11,t:'D'},{x:14,t:'E',dx:12}]},
 e415:{L:6,sup:[{x:1.5,t:'pin',lab:'A'},{x:6,t:'roller',lab:'B'}],loads:[{k:'M',x:0,M:-90},{k:'w',a:1.5,b:6,w1:0,w2:50}],pts:[{x:1.5,t:'A'},{x:6,t:'B',dx:12}]}
};
BS.e409b.loads[1].lab='6 kN/m';

EX.push(
/* ---------- Chapter 1 ---------- */
{id:101,ch:'c1',book:true,no:'H 1.1',lvl:1,title:'Dead Load: Floor Beam + Block Wall',short:'Concrete slab بالـ mm و plaster و block wall فوق الـ beam.',src:HB('1.1',27),
 q:'The floor beam supports the 1.8 m width of a lightweight plain concrete slab 100 mm thick. Its bottom is coated with plaster, and a 3 m-high, 300-mm-thick lightweight concrete block wall sits directly over the beam. Determine the loading on the beam per meter of length.',
 given:['Slab width = 1.8 m (0.9 + 0.9)','Slab thickness = 100 mm','Lightweight plain concrete = 0.015 kN/m² per mm','Plaster ceiling = 0.24 kN/m²','Block wall: 3 m × 0.3 m, γ = 16.5 kN/m³'],
 steps:[
  ['الفكرة','كل حمل نحوله لـ kN/m. الـ slab مكتوب بوحدة kN/m² لكل mm سماكة، فنضربه في السماكة أول ثم في العرض.','kN/(m²·mm) × mm × m = kN/m'],
  ['Concrete slab','نضرب في السماكة 100 mm ثم في العرض 1.8 m.','w₁ = 0.015 × 100 × 1.8 = 2.70 kN/m'],
  ['Plaster ceiling','تحت الـ slab بنفس العرض 1.8 m.','w₂ = 0.24 × 1.8 = 0.43 kN/m'],
  ['Block wall','حمل حجمي × مساحة مقطع الجدار.','w₃ = 16.5 × 3 × 0.3 = 14.85 kN/m'],
  ['Total','نجمع.','w = 2.70 + 0.43 + 14.85 = 17.98 kN/m']
 ],ans:'الحمل على الـ beam = <b>17.98 kN/m</b>',idea:'انتبه للوحدات: 0.015 kN/m² لكل mm، يعني 100 mm تعطي 1.5 kN/m² قبل الضرب في العرض.'},

{id:102,ch:'c1',book:true,no:'H 1.2',lvl:1,title:'Live Load Reduction: Office Column',short:'Interior column يحمل دور واحد، A_T = 36 m².',src:HB('1.2',30),
 q:'An office building has interior columns spaced 6 m apart in two perpendicular directions. Determine the reduced live load supported by a typical interior column at ground level. The column only supports the floor above it.',
 given:['Column spacing = 6 m × 6 m','Offices: L₀ = 2.40 kN/m² (Table 1.4)','Interior column → K_LL = 4','يحمل دور واحد → الحد الأدنى 0.5 L₀'],
 steps:[
  ['Tributary area','الـ column ياخذ نص البحر من كل جهة: 3 + 3 في الاتجاهين.','A_T = 6 × 6 = 36 m²'],
  ['هل نطبّق الـ reduction؟','الشرط K_LL·A_T ≥ 37.2 m²، و L₀ أقل من 4.79.','4 × 36 = 144 m² > 37.2   ✓'],
  ['Eq. 1–1','','L = 2.40 (0.25 + 4.57/√144) = 2.40 (0.25 + 0.381) = 1.514 kN/m²'],
  ['Check الحد الأدنى','نسبة L إلى L₀ لازم ≥ 50% لعنصر يحمل دور واحد.','1.514 / 2.40 = 63.1% > 50%   ✓'],
  ['القوة على الـ column','','F = 1.514 × 36 = 54.5 kN']
 ],ans:'Reduced live load على الـ column = <b>54.5 kN</b> (بدل 86.4 kN بدون reduction)',idea:'الـ reduction وفّرت 37% من الحمل. لكن تأكد دائماً من حد 50% (دور واحد) أو 40% (أكثر من دور).'},

{id:103,ch:'c1',book:true,no:'H 1.3',lvl:3,title:'Wind Pressure على مخزن (ASCE 7-16)',short:'q_z يتغير مع الارتفاع، Cp لكل سطح، وحالتين للضغط الداخلي.',src:HB('1.3',38),
 q:'The enclosed storage building is on open flat terrain where V = 50 m/s. With the wind directed as shown, determine the design wind pressure on the roof and sides using ASCE 7-16.',
 given:['V = 50 m/s','Kzt = Kd = Ke = 1.0','Wall height = 7.5 m, roof slope 10°','Plan: 45 m (B) × 2(22.5) m (L)','G = 0.85, (GCpi) = ±0.18','Kz: 0–4.6 → 0.85, 6.1 → 0.90, 7.6 → 0.94'],
 steps:[
  ['Velocity pressure q_z','نعوّض كل المعاملات = 1.','q_z = 0.613 Kz (1)(1)(1)(50)² = 1532.5 Kz  N/m²'],
  ['Mean roof height h','ارتفاع الـ ridge فوق الجدار h′ = 22.5 tan10°، وناخذ المتوسط.','h′ = 3.967 m   →   h = 7.5 + 3.967/2 = 9.48 m'],
  ['q_h عند h','Kz عند 9.48 m بالـ interpolation بين 9.1 m و 12.2 m.','Kz = 0.987   →   q_h = 1532.5 (0.987) = 1513 N/m²'],
  ['Eq. 1–3','الضغط الخارجي ناقص الداخلي. الداخلي ثابت لكل الأسطح.','p = q(0.85)Cp − 1513(±0.18) = 0.85 q Cp ∓ 272.38'],
  ['Windward wall (Cp = 0.8)','هذا الوحيد اللي يستخدم q_z لأنه يتغير مع الارتفاع.','p(0–4.6) = 0.85(1303)(0.8) ∓ 272.38 = 613 أو 1158\np(6.1) = 666 أو 1210      p(7.6) = 707 أو 1252  N/m²'],
  ['Leeward wall','L/B = 45/45 = 1 → Cp = −0.5، و q = q_h.','p = 0.85(1513)(−0.5) ∓ 272.38 = −916 أو −371 N/m²'],
  ['Side walls','Cp = −0.7 لكل قيم L/B.','p = 0.85(1513)(−0.7) ∓ 272.38 = −1173 أو −628 N/m²'],
  ['Windward roof','h/L = 9.48/45 = 0.211 < 0.25 → Cp = −0.7.','p = −1173 أو −628 N/m²'],
  ['Leeward roof','Cp = −0.3.','p = 0.85(1513)(−0.3) ∓ 272.38 = −658 أو −113 N/m²']
 ],ans:'Windward wall: <b>613 → 707 N/m²</b> (أو 1158 → 1252)، Leeward wall: <b>−916</b> (أو −371)، Side walls و windward roof: <b>−1173</b> (أو −628)، Leeward roof: <b>−658</b> (أو −113).',
 idea:'كل سطح له Cp. الـ windward wall بس يستخدم q_z، والباقي يستخدم q_h. والسالب يعني suction (سحب للخارج). وفيه دايماً حالتين بسبب ±GCpi.'},

/* ---------- Chapter 2 ---------- */
{id:104,ch:'c2',book:true,no:'H 2.1',lvl:1,title:'One-Way Slab: Bar Joists',short:'Classroom floor، joists كل 0.75 m، dead + live.',src:HB('2.1',61),
 q:'A classroom floor is supported by bar joists 4.5 m long spaced 0.75 m apart. The floor is 100 mm lightweight concrete. Neglect the weight of the joists and deck, and determine the load along each joist.',
 given:['Joist span L₂ = 4.5 m','Spacing L₁ = 0.75 m','Lightweight concrete = 0.015 kN/m² per mm, t = 100 mm','Classroom live load = 1.92 kN/m²'],
 steps:[
  ['Dead load','','100 × 0.015 = 1.50 kN/m²'],
  ['Total floor load','dead + live.','1.50 + 1.92 = 3.42 kN/m²'],
  ['نوع الـ slab','','L₂/L₁ = 4.5/0.75 = 6 > 2   →   one-way'],
  ['Load على الـ joist','tributary width = spacing.','w = 3.42 × 0.75 = 2.565 kN/m'],
  ['Reactions','','R = 2.565 × 4.5 / 2 = 5.77 kN']
 ],ans:'w = <b>2.565 kN/m</b> على كل joist، و R = <b>5.77 kN</b> عند كل طرف',idea:'لا تنسى تجمع الـ live load مع الـ dead load قبل الضرب في الـ tributary width.'},

{id:105,ch:'c2',book:true,no:'H 2.2',lvl:2,title:'Two-Way Roof: Beams BC و DC',short:'Trapezoid على BC و triangle على DC من نفس الـ panel.',src:HB('2.2',62),
 q:'A flat roof supports a total load of 2 kN/m². Determine the roof load within region ABCD that is transmitted to beams BC and DC.',
 given:['Region ABCD: DC = 4 m، BC = 7 m (2 + 3 + 2)','Roof load = 2 kN/m²'],
 steps:[
  ['نوع الـ slab','L₂ = 7، L₁ = 4.','L₂/L₁ = 1.75 < 2   →   two-way'],
  ['خطوط 45°','من الأركان تلتقي على بعد L₁/2 = 2 m، فتطلع ① trapezoid لـ BC و ③ triangle لـ DC.',''],
  ['Peak intensity','نفسها للكمرتين.','w = 2 × 2 = 4 kN/m'],
  ['Beam BC','trapezoid: يطلع 2 m، ثابت 3 m، ينزل 2 m.','W_BC = 4 × (7 + 3)/2 = 20 kN   →   R = 10 kN'],
  ['Beam DC','triangle على 4 m.','W_DC = ½ × 4 × 4 = 8 kN   →   R = 4 kN'],
  ['Check','الأربع كمرات = مساحة الـ panel × الحمل.','2(20) + 2(8) = 56 = 2 × 4 × 7   ✓']
 ],ans:'BC: trapezoid <b>4 kN/m</b> (W = 20 kN). DC: triangle <b>4 kN/m</b> (W = 8 kN).',idea:'BC بعد ياخذ حمل من الـ panel ② اللي على يمينه، فالحمل الحقيقي عليه ضعف هذا لو الـ panel الثاني نفس المقاس.'},

{id:106,ch:'c2',book:true,no:'H 2.3',lvl:2,title:'Interior Girder في Parking Garage',short:'الـ girder ياخذ trapezoid من الجهتين، L₂/L₁ = 2.',src:HB('2.3',63),
 q:'Concrete girders in a parking garage span 10 m and are spaced 5 m on center. The floor slab is 125 mm reinforced stone concrete and the live load is 2.50 kN/m². Determine the distributed load transmitted to each interior girder.',
 given:['Girder span L₂ = 10 m','Spacing L₁ = 5 m','Slab t = 0.125 m, γ = 22.6 kN/m³','Live load = 2.50 kN/m²'],
 steps:[
  ['Floor load','','p = 22.6 × 0.125 + 2.50 = 5.325 kN/m²'],
  ['نوع الـ slab','الكتاب يعتبر L₂/L₁ = 2 حد الـ two-way.','L₂/L₁ = 10/5 = 2   →   two-way (حسب الكتاب)'],
  ['Peak من كل جهة','عمق الـ trapezoid = L₁/2 = 2.5 m.','5.325 × 2.5 = 13.31 kN/m'],
  ['الجهتين ① و ②','الـ girder داخلي، فياخذ من الـ panel اللي فوقه واللي تحته.','w_max = 2 × 13.31 = 26.625 kN/m'],
  ['Total & reactions','trapezoid 2.5 – 5 – 2.5.','W = 26.625 × (10 + 5)/2 = 199.7 kN   →   R = 99.8 kN']
 ],ans:'Trapezoid على الـ girder بقيمة قصوى <b>26.625 kN/m</b>، والحمل الكلي ≈ <b>199.7 kN</b>.',
 idea:'تنبيه: الكتاب يعتبر L₂/L₁ = 2 two-way، والسلايدات تقول ≥ 2 one-way. اتبع اللي يعتمده الدكتور في الاختبار.'},

{id:107,ch:'c2',book:true,no:'H 2.4',lvl:1,title:'Determinacy of Beams (4 حالات)',short:'r مقابل 3n لأربع beams منها compound.',src:HB('2.4',68),
 q:'Classify each beam as statically determinate or indeterminate. If indeterminate, report the degree.',
 given:['r = 3n → determinate','r > 3n → indeterminate بدرجة r − 3n','Compound beam: نفكه عند الـ pins ونعدّ القوى بين الأجزاء'],
 cases:[['H4a','(a) Pin + Roller','r = 2 + 1 = 3، n = 1  →  3 = 3','Statically determinate'],['H4b','(b) Fixed + 2 Rollers','r = 3 + 1 + 1 = 5، n = 1  →  5 > 3','Indeterminate — 2nd degree'],['H4c','(c) Fixed + Pin + Roller','r = 3 + 2 + 1 = 6، n = 2  →  6 = 6','Statically determinate'],['H4d','(d) Fixed – 2 Pins – Fixed','r = 3 + 2 + 2 + 3 = 10، n = 3  →  10 > 9','Indeterminate — 1st degree']],
 ans:'(a) و (c) <b>determinate</b>، (b) <b>2nd degree</b>، (d) <b>1st degree</b>.',idea:'كل internal pin يضيف 2 للـ r ويزيد n بواحد، يعني يضيف 2 مجاهيل و 3 معادلات.'},

{id:108,ch:'c2',book:true,no:'H 2.7',lvl:2,title:'Stability: Stable أو Unstable',short:'Concurrent و parallel و r < 3n.',src:HB('2.7',73),
 q:'Classify each structure as stable or unstable.',
 given:['r < 3n → unstable','Reactions concurrent (تتلاقى في نقطة) → unstable','Reactions parallel → unstable'],
 cases:[['H7a','(a) L-member: pin + roller','3 reactions، مو متلاقية ولا متوازية','Stable — determinate'],['H7b','(b) Reactions تمر بـ B','الـ 3 reactions تتلاقى في B فيدور حولها','Unstable (concurrent)'],['H7c','(c) Beam على 3 rollers','كل الـ reactions رأسية','Unstable (parallel)'],['H7d','(d) 3 أجزاء بـ pins','r = 7، n = 3  →  7 < 9','Unstable']],
 ans:'(a) <b>stable</b>، و (b) و (c) و (d) <b>unstable</b>.',idea:'العدّ وحده ما يكفي: (b) و (c) فيها r = 3n بالضبط، ومع ذلك unstable بسبب شكل الـ reactions.'},

{id:109,ch:'c2',book:true,no:'H 2.8',lvl:2,title:'Reactions: Inclined Load + Couple',short:'حمل مائل مطبق فوق المحور بـ 0.3 m، و couple حر.',src:HB('2.8',78),
 q:'Determine the reactions on the beam. The 250 kN force acts at 60° on the top of the beam, 0.3 m above its axis.',
 given:['A: pin، B: roller على 4.5 m','250 kN عند x = 3 m بزاوية 60° مع الأفقي','نقطة التطبيق فوق المحور بـ 0.3 m','60 kN·m (clockwise) عند الطرف'],
 steps:[
  ['FBD: تحليل القوة','','250 sin60° = 216.5 kN ↓      250 cos60° = 125 kN ←'],
  ['الـ couple','couple moment هو free vector: مكانه ما يأثر على الـ reactions، فبُعد 2 m ما نحتاجه.',''],
  ['ΣFx = 0','','A_x − 125 = 0   →   A_x = 125 kN →'],
  ['ΣM_A = 0','الـ 125 kN لها ذراع 0.3 m لأنها فوق المحور.','−216.5(3) + 125(0.3) + B_y(4.5) − 60 = 0   →   B_y = 149.3 kN ↑'],
  ['ΣF_y = 0','','A_y − 216.5 + 149.3 = 0   →   A_y = 67.2 kN ↑']
 ],ans:'<b>A_x = 125 kN →</b>، <b>A_y = 67.2 kN ↑</b>، <b>B_y = 149.3 kN ↑</b>',idea:'لا تنسى عزم المركبة الأفقية لما تكون القوة مطبقة بعيد عن المحور (هنا 125 × 0.3).'},

{id:110,ch:'c2',book:true,no:'H 2.9',lvl:1,title:'Reactions: Cantilever + Trapezoid',short:'نقسم الـ trapezoid لمثلث ومستطيل.',src:HB('2.9',78),
 q:'Determine the reactions on the cantilever beam (fixed at A).',
 given:['L = 12 m، fixed at A','Trapezoid: 15 kN/m عند A → 5 kN/m عند الطرف'],
 steps:[
  ['تقسيم الـ trapezoid','مثلث (10 → 0) + مستطيل (5 ثابت).',''],
  ['Resultants','المثلث عند L/3 من الطرف الكبير، والمستطيل في النص.','½(10)(12) = 60 kN @ 4 m      5(12) = 60 kN @ 6 m'],
  ['ΣFx = 0','','A_x = 0'],
  ['ΣFy = 0','','A_y − 60 − 60 = 0   →   A_y = 120 kN ↑'],
  ['ΣM_A = 0','','M_A − 60(4) − 60(6) = 0   →   M_A = 600 kN·m ↺']
 ],ans:'<b>A_y = 120 kN ↑</b>، <b>M_A = 600 kN·m ↺</b>، A_x = 0',idea:'أي trapezoid = مثلث + مستطيل. كل جزء محصلته عند centroid حقه.'},

{id:111,ch:'c2',book:true,no:'H 2.10',lvl:3,title:'Reactions: Bent Beam + Inclined Roller',short:'الـ roller على سطح مائل (3-4-5)، و N_B عمودي عليه.',src:HB('2.10',79),
 q:'Determine the reactions on the beam. A is a pin and the support at B is a roller (smooth surface).',
 given:['AK أفقي 2 m عليه 7.5 kN/m','KB مائل: 0.9 m أفقي و 1.2 m رأسي','B على سطح أملس، اتجاه N_B من مثلث 3-4-5'],
 steps:[
  ['Resultant','','7.5 × 2 = 15 kN @ 1 m من A'],
  ['اتجاه N_B','عمودي على السطح: مركباته من مثلث 3-4-5.','N_Bx = (4/5)N_B ←      N_By = (3/5)N_B ↑      B = (2.9, 1.2) m'],
  ['ΣM_A = 0','A فيها مجهولين، فالعزوم حولها تعطي N_B مباشرة.','−15(1) + (4/5)N_B(1.2) + (3/5)N_B(2.9) = 0   →   N_B = 5.56 kN'],
  ['ΣFx = 0','','A_x − (4/5)(5.56) = 0   →   A_x = 4.44 kN →'],
  ['ΣFy = 0','','A_y − 15 + (3/5)(5.56) = 0   →   A_y = 11.7 kN ↑']
 ],ans:'<b>N_B = 5.56 kN</b>، <b>A_x = 4.44 kN →</b>، <b>A_y = 11.7 kN ↑</b>',idea:'الـ roller على سطح مائل يعطي reaction عمودي على السطح، مو رأسي. حلّله لمركبتين قبل العزوم.'},

{id:112,ch:'c2',book:true,no:'H 2.11',lvl:2,title:'Compound Beam: Fixed + Pin + Roller',short:'نبدأ بالـ segment BC، وبعدها AB.',src:HB('2.11',80),
 q:'The compound beam is fixed at A. Determine the reactions at A, B and C. B is a pin and C is a roller.',
 given:['A fixed (x = 0)، B pin (x = 3)، C roller (x = 5)','6 kN/m على AB','8 kN·m (clockwise) عند C'],
 steps:[
  ['Determinacy','نفك عند B.','r = 3 + 2 + 1 = 6،  n = 2   →   determinate'],
  ['Segment BC: ΣM_C = 0','نبدأ فيه لأنه أقل مجاهيل.','−8 + B_y(2) = 0   →   B_y = 4 kN'],
  ['Segment BC: ΣFy','','−4 + C_y = 0   →   C_y = 4 kN ↑'],
  ['ΣFx','ما فيه أحمال أفقية.','B_x = 0،  A_x = 0'],
  ['Segment AB: ΣM_A = 0','B_y = 4 ترجع على AB بعكس الاتجاه (لفوق).','M_A − 18(1.5) + 4(3) = 0   →   M_A = 15 kN·m ↺'],
  ['Segment AB: ΣFy','','A_y − 18 + 4 = 0   →   A_y = 14 kN ↑'],
  ['SFD (إضافة)','V يبدأ 14 وينزل بميل 6 لين −4 عند B، ويبقى −4 لين C.','V = 0 عند x = 14/6 = 2.33 m'],
  ['BMD (إضافة)','M يبدأ −15، أقصاه عند V = 0، صفر عند الـ hinge، −8 قبل C ثم jump بالـ couple.','M_max = 1.33 kN·m      M_B = 0      M_C⁻ = −8']
 ],ans:'<b>A_y = 14 kN ↑</b>، <b>M_A = 15 kN·m ↺</b>، <b>B_y = 4 kN</b>، <b>C_y = 4 kN ↑</b>',idea:'الـ moment عند الـ hinge = صفر دايماً. استخدمها كمعادلة إضافية.'},

{id:113,ch:'c2',book:true,no:'H 2.12',lvl:3,title:'Two-Member Frame: Pins A, B, C',short:'Member BC أول، بعدين AB، وقوى B متساوية ومتعاكسة.',src:HB('2.12',81),
 q:'Determine the horizontal and vertical components of reaction at the pins A, B and C of the two-member frame.',
 given:['A = (0, 0)، B = (2, 1.5)، C = (4, 1.5) m','AB مائل (3-4-5)، و 8 kN عمودي عليه على بعد 2 m من A','3 kN/m على BC'],
 steps:[
  ['FBD','نفك عند B. القوى عند B على AB عكس اللي على BC.','6 kN = 3 × 2 على BC @ 1 m'],
  ['Member BC: ΣM_C = 0','','−B_y(2) + 6(1) = 0   →   B_y = 3 kN'],
  ['Member AB: ΣM_A = 0','الـ 8 kN عمودي على AB فذراعها 2 m.','−8(2) − 3(2) + B_x(1.5) = 0   →   B_x = 14.7 kN'],
  ['Member AB: ΣFx','مركبة الـ 8 kN الأفقية = (3/5)8.','A_x + 4.8 − 14.7 = 0   →   A_x = 9.87 kN →'],
  ['Member AB: ΣFy','','A_y − (4/5)8 − 3 = 0   →   A_y = 9.40 kN ↑'],
  ['Member BC: ΣFx و ΣFy','','14.7 − C_x = 0 → C_x = 14.7 kN ←      3 − 6 + C_y = 0 → C_y = 3 kN ↑']
 ],ans:'<b>A_x = 9.87 →</b>، <b>A_y = 9.40 ↑</b>، <b>B_x = 14.7</b>، <b>B_y = 3</b>، <b>C_x = 14.7 ←</b>، <b>C_y = 3 ↑</b> (kN)',idea:'لما الـ frame يصير collapsible بعد شيل الـ supports، لازم تفكه لأعضاء وتحل كل عضو لحاله.'},

{id:114,ch:'c2',book:true,no:'H 2.13',lvl:3,title:'Gable Arch تحت Wind',short:'ضغط 15 kPa و suction 5 kPa على 3-hinged arch.',src:HB('2.13',82),
 q:'The building side is under wind: 15 kPa normal pressure on the windward side and 5 kPa suction on the leeward side. Determine the reaction components at the pins A, B and C of the supporting gable arch (frames spaced 4 m).',
 given:['Tributary width = 4 m','Columns 3 m، apex B على 6 m','A و C على بعد 6 m، B في النص','الـ roof بزاوية 45°'],
 steps:[
  ['Loads على الـ frame','الضغط × الـ tributary width.','windward: 15 × 4 = 60 kN/m      leeward: 5 × 4 = 20 kN/m'],
  ['Resultants','الـ roof طوله 3√2 = 4.243 m.','walls: 180 kN و 60 kN @ 1.5 m      roofs: 254.6 kN و 84.9 kN (عمودية على السقف)'],
  ['Entire frame: ΣM_A = 0','','C_y(6) = 240(1.5) + 339.5 cos45°(4.5) + 254.6 sin45°(1.5) − 84.9 sin45°(4.5)   →   C_y = 240 kN ↑'],
  ['Entire frame: ΣFy','','−A_y − 180 + 60 + 240 = 0   →   A_y = 120 kN ↓'],
  ['Member AB: ΣM_B = 0','','−A_x(6) + 120(3) + 180(4.5) + 254.6(2.12) = 0   →   A_x = 285 kN ←'],
  ['Member AB: ΣFx و ΣFy','','B_x = 75 kN      B_y = 300 kN'],
  ['Member CB: ΣFx','','−C_x + 60 + 60 + 75 = 0   →   C_x = 195 kN ←']
 ],ans:'<b>A_x = 285 ←</b>، <b>A_y = 120 ↓</b>، <b>B_x = 75</b>، <b>B_y = 300</b>، <b>C_x = 195 ←</b>، <b>C_y = 240 ↑</b> (kN)',idea:'Check سريع: مجموع القوى الأفقية = 180 + 180 + 60 + 60 = 480 = A_x + C_x = 285 + 195 ✓'},

/* ---------- Chapter 4 ---------- */
{id:115,ch:'c4',book:true,no:'H 4.1',lvl:2,title:'Girder: V و M عند نقطة C',short:'Roof → beams → girder، ثم section عند C.',src:HB('4.1',158),
 q:'The roof weighs 1.8 kN/m² and is supported on 8-m simply supported beams spaced 1 m apart, which transmit their loads to the front girder. Determine the internal shear and moment in the girder at C (2.4 m from its end).',
 given:['Roof = 1.8 kN/m²','Beams: span 8 m، spacing 1 m','Girder 12 m، columns على بعد 1.2 m من الطرفين','C على بعد 2.4 m من الطرف'],
 steps:[
  ['One-way','','L₂/L₁ = 8/1 = 8 > 2   →   كل beam داخلي ياخذ 1.8 kN/m (والطرفي 0.9)'],
  ['Beam reactions على الـ girder','','interior: 1.8 × 8/2 = 7.2 kN      edge: 3.6 kN'],
  ['Column reactions','11 beam داخلي + 2 طرفي، متماثل.','R = [2(3.6) + 11(7.2)]/2 = 43.2 kN'],
  ['Section عند C','ناخذ الجزء اليسار: 3.6 @ 0، 7.2 @ 1، 7.2 @ 2، و 43.2 @ 1.2.',''],
  ['ΣFy = 0','','43.2 − 3.6 − 2(7.2) − V_C = 0   →   V_C = 25.2 kN'],
  ['ΣM_C = 0','','M_C + 7.2(0.4) + 7.2(1.4) + 3.6(2.4) − 43.2(1.2) = 0   →   M_C = 30.2 kN·m']
 ],ans:'<b>V_C = 25.2 kN</b>، <b>M_C = 30.2 kN·m</b>',idea:'Load path: roof → beams → girder → columns. كل reaction يصير load على العنصر اللي بعده.'},

{id:116,ch:'c4',book:true,no:'H 4.2',lvl:2,title:'V و M عند C تحت Triangular Load',short:'لا تستخدم المحصلة الكاملة داخل القطع.',src:HB('4.2',159),
 q:'Determine the internal shear and moment at a section through point C (2 m from A).',
 given:['Simply supported 6 m','Triangle: 0 عند A → 45 kN/m عند B','C على بعد 2 m من A'],
 steps:[
  ['Reactions','المحصلة 135 kN عند 4 m.','A_y = 45 kN      B_y = 90 kN'],
  ['شدة الحمل عند C','بالتناسب.','w_C = (2/6)(45) = 15 kN/m'],
  ['محصلة الجزء AC','مثلث صغير، مكانه على 2/3 من A.','½(15)(2) = 15 kN @ 0.667 m من C'],
  ['ΣFy = 0','','45 − 15 − V_C = 0   →   V_C = 30 kN'],
  ['ΣM_C = 0','','−45(2) + 15(0.667) + M_C = 0   →   M_C = 80 kN·m'],
  ['SFD و BMD (إضافة)','V = 0 عند x = √(45·6/22.5) = 3.46 m.','M_max = 103.9 kN·m']
 ],ans:'<b>V_C = 30 kN</b>، <b>M_C = 80 kN·m</b>',idea:'استبدل الحمل بالمحصلة بعد ما تقطع، مو قبل. المحصلة الكاملة 135 kN تخدم الـ reactions بس.'},

{id:117,ch:'c4',book:true,no:'H 4.3',lvl:3,title:'Floor Panel → Beams → Girder',short:'45 kN على panel، ننقلها خطوة خطوة للـ girder.',src:HB('4.3',160),
 q:'The 45 kN force is supported by floor panel DE, simply supported on floor beams that transmit their loads to the simply supported girder AB. Determine the internal shear and moment at C in the girder.',
 given:['Girder AB = 6 m، floor beams كل 1.5 m','Panel DE بين x = 3 و 4.5','45 kN على بعد 0.5 m من D','C على بعد 3.75 m من A'],
 steps:[
  ['Panel DE','simply supported على span 1.5 m.','D = 45(1)/1.5 = 30 kN      E = 45(0.5)/1.5 = 15 kN'],
  ['Floor beams','ينقلون نفس القوى للـ girder.','30 kN @ 3 m      15 kN @ 4.5 m'],
  ['Girder reactions','','B_y(6) − 30(3) − 15(4.5) = 0 → B_y = 26.25 kN      A_y = 18.75 kN'],
  ['ΣFy على AC','','18.75 − 30 − V_C = 0   →   V_C = −11.25 kN'],
  ['ΣM_C على AC','','−18.75(3.75) + 30(0.75) + M_C = 0   →   M_C = 47.8 kN·m']
 ],ans:'<b>V_C = −11.25 kN</b>، <b>M_C = 47.8 kN·m</b>',idea:'الـ girder ما يشوف الـ 45 kN مباشرة، يشوف reactions الـ floor beams بس. والإشارة السالبة تعني V بعكس الاتجاه المفروض.'},

{id:118,ch:'c4',book:true,no:'H 4.4',lvl:2,title:'V(x) و M(x): Cantilever + Triangle',short:'نوجد الشدة عند القطع بالتناسب.',src:HB('4.4',163),
 q:'Determine the shear and moment in the beam as a function of x.',
 given:['Cantilever 3 m، fixed at A (يسار)','Triangle: 0 عند A → 10 kN/m عند الطرف الحر'],
 steps:[
  ['Reactions','المحصلة 15 kN عند 2 m.','A_y = 15 kN ↑      M_A = 15(2) = 30 kN·m ↺'],
  ['Section عند x','الشدة عند القطع بالتناسب، والمحصلة على x/3 من القطع.','w = 10x/3      محصلة = ½(10x/3)x'],
  ['ΣFy = 0','','15 − ½(10x/3)x − V = 0   →   V = 15 − 1.667x²'],
  ['ΣM_S = 0','','30 − 15x + ½(10x/3)x·(x/3) + M = 0   →   M = −30 + 15x − 0.556x³'],
  ['Check عند x = 3','الطرف حر فلازم V و M صفر.','V = 15 − 15 = 0 ✓      M = −30 + 45 − 15 = 0 ✓']
 ],ans:'<b>V = 15 − 1.667x²</b> kN، <b>M = −30 + 15x − 0.556x³</b> kN·m',idea:'Check دائماً: dM/dx = V و dV/dx = w. هنا d(−30 + 15x − 0.556x³)/dx = 15 − 1.667x² ✓'},

{id:119,ch:'c4',book:true,no:'H 4.5',lvl:2,title:'V(x) و M(x) على منطقتين',short:'Discontinuity عند x = 2 يحتاج x₁ و x₂.',src:HB('4.5',164),
 q:'Determine the shear and moment in the beam as a function of x.',
 given:['Cantilever 3 m، fixed at A','50 kN/m على أول 2 m','50 kN ↓ و 50 kN·m (clockwise) عند الطرف'],
 steps:[
  ['Reactions','','A_y = 100 + 50 = 150 kN ↑      M_A = 100(1) + 50(3) + 50 = 300 kN·m ↺'],
  ['منطقتين','الحمل الموزع يوقف عند 2 m.','0 ≤ x₁ < 2      2 < x₂ ≤ 3'],
  ['V في المنطقة 1','','V = 150 − 50x₁'],
  ['M في المنطقة 1','','M = 150x₁ − 25x₁² − 300'],
  ['V في المنطقة 2','الحمل كله 100 kN صار يسار القطع.','V = 150 − 100 = 50 kN'],
  ['M في المنطقة 2','','M = 50x₂ − 200'],
  ['Check عند x = 3','قبل الـ couple M = −50، والـ couple clockwise 50 يرجّعه صفر.','V = 50      M = −50 + 50 = 0 ✓']
 ],ans:'0 ≤ x < 2: <b>V = 150 − 50x</b>، <b>M = 150x − 25x² − 300</b>. 2 < x ≤ 3: <b>V = 50</b>، <b>M = 50x − 200</b>',idea:'كل ما يتغير الحمل (يبدأ أو يوقف أو قوة مركزة) تحتاج دالة جديدة.'},

{id:120,ch:'c4',book:true,no:'H 4.6',lvl:3,title:'V(x) و M(x): Trapezoidal Load',short:'مستطيل + مثلث، و M_max عند V = 0.',src:HB('4.6',165),
 q:'Determine the shear and moment in the beam as a function of x.',
 given:['Simply supported 9 m','Trapezoid: 10 kN/m عند A → 30 kN/m عند B'],
 steps:[
  ['Reactions','مستطيل 90 kN @ 4.5 m + مثلث 90 kN @ 6 m.','B_y(9) = 90(4.5) + 90(6) → B_y = 105 kN      A_y = 75 kN'],
  ['Section عند x','مستطيل 10x + مثلث شدته عند القطع 20x/9.','محصلة المثلث = ½(20x/9)x'],
  ['ΣFy = 0','','V = 75 − 10x − 1.11x²'],
  ['ΣM_S = 0','','M = 75x − 5x² − 0.370x³'],
  ['V = 0 (إضافة)','نحل المعادلة التربيعية.','1.11x² + 10x − 75 = 0   →   x = 4.87 m'],
  ['M_max (إضافة)','','M_max = 75(4.87) − 5(4.87)² − 0.370(4.87)³ = 204 kN·m']
 ],ans:'<b>V = 75 − 10x − 1.11x²</b>، <b>M = 75x − 5x² − 0.370x³</b>، و M_max ≈ <b>204 kN·m</b> عند x = 4.87 m',idea:'أي trapezoid عند القطع = مستطيل كامل + مثلث شدته تتناسب مع x.'},

{id:121,ch:'c4',book:true,no:'H 4.7',lvl:1,title:'SFD و BMD: Powerline Frame',short:'Point loads بس، فالـ V ثابت والـ M خطوط.',src:HB('4.7',171),
 q:'Each horizontal member of the powerline support frame carries the cable loads shown. Draw the shear and moment diagrams.',
 given:['Member 6 m، loads 4 kN عند A و C و E','الأعمدة عند B و D (1.5 m من الطرفين)'],
 steps:[
  ['Reactions','متماثل.','B_y = D_y = 12/2 = 6 kN ↑'],
  ['SFD','نتبع الحمل: −4، ثم +6 → 2، ثم −4 → −2، ثم +6 → 4، ثم −4 → 0.','V = −4، 2، −2، 4'],
  ['BMD','الـ M خطوط مستقيمة لأن V ثابت. نحسب بالمساحات.','M_B = −4(1.5) = −6      M_C = −6 + 2(1.5) = −3      M_D = −6']
 ],ans:'V: <b>−4، 2، −2، 4 kN</b>. M: <b>−6</b> عند B و D، و <b>−3</b> عند C.',idea:'تغير الـ M بين نقطتين = مساحة الـ SFD بينهم. أسرع من الـ sections.'},

{id:122,ch:'c4',book:true,no:'H 4.8',lvl:2,title:'SFD و BMD: Triangular Load',short:'V = 0 عند 5.20 m و M_max = 104.',src:HB('4.8',172),
 q:'Draw the shear and moment diagrams for the beam.',
 given:['Simply supported 9 m','Triangle: 0 عند A → 20 kN/m عند B'],
 steps:[
  ['Reactions','المحصلة 90 kN عند 6 m.','A_y = 30 kN      B_y = 60 kN'],
  ['SFD','يبدأ بميل صفر (w = 0) وينتهي بميل −20. منحنى من الدرجة الثانية.','V(0) = 30      V(9) = −60'],
  ['V = 0','','30 − ½(20x/9)x = 0   →   x = 5.20 m'],
  ['BMD و M_max','عند V = 0.','M = 30(5.20) − ½(20·5.20/9)(5.20)(5.20/3) = 104 kN·m']
 ],ans:'<b>A_y = 30</b>، <b>B_y = 60 kN</b>، و <b>M_max = 104 kN·m</b> عند x = 5.20 m',idea:'ميل الـ SFD = شدة الحمل عند النقطة، فالـ V ينزل ببطء أول وبسرعة آخر.'},

{id:123,ch:'c4',book:true,no:'H 4.9a',lvl:2,title:'SFD و BMD: Cantilever + Couple',short:'Couple عند الطرف الحر وحمل متغير.',src:HB('4.9a',173),
 q:'Draw the shear and moment diagrams for the cantilever (fixed at the right). The support reactions are 30 kN and 42 kN·m.',
 given:['L = 4.5 m، fixed at B (يمين)','15 kN·m (clockwise) عند الطرف الحر A','الحمل: 0 → 8 kN/m على أول 1.5 m، ثم 8 kN/m على 3 m'],
 steps:[
  ['Reactions','','B_y = 6 + 24 = 30 kN ↑      M_B = 42 kN·m'],
  ['SFD','V يبدأ صفر (ما فيه قوة عند A)، منحنى أول 1.5 m ثم خط بميل −8.','V(1.5) = −6      V(4.5) = −30'],
  ['BMD','يبدأ 15 بسبب الـ couple، وينزل.','M(0) = 15      M(1.5) = 15 − 3 = 12      M(4.5) = −42']
 ],ans:'V: <b>0 → −6 → −30 kN</b>. M: <b>15 → 12 → −42 kN·m</b>',idea:'Clockwise couple يرفع الـ BMD (jump لفوق)، و counterclockwise ينزله.'},

{id:124,ch:'c4',book:true,no:'H 4.9b',lvl:1,title:'SFD و BMD: Symmetric Triangle',short:'مثلث peak في النص، M_max = 18.',src:HB('4.9b',173),
 q:'Draw the shear and moment diagrams. The support reactions are 9 kN each.',
 given:['Simply supported 6 m','Triangle: peak 6 kN/m في المنتصف'],
 steps:[
  ['Reactions','المحصلة ½(6)(6) = 18 kN، متماثل.','A_y = B_y = 9 kN'],
  ['SFD','منحنى من 9 لين −9، صفر في النص.','V(3) = 9 − ½(6)(3) = 0'],
  ['BMD','M_max عند V = 0.','M_max = 9(3) − 9(1) = 18 kN·m']
 ],ans:'V من <b>9</b> إلى <b>−9 kN</b>، و <b>M_max = 18 kN·m</b> في النص',idea:'في الأحمال المتماثلة، V = 0 و M_max دايماً في النص.'},

{id:125,ch:'c4',book:true,no:'H 4.9c',lvl:3,title:'SFD و BMD: Overhang + Reaction سالب',short:'Reaction عند C طلع لتحت (−5 kN).',src:HB('4.9c',173),
 q:'Draw the shear and moment diagrams. The support reactions are 85 kN at B and 5 kN at C.',
 given:['A حر، B support على 2 m، C على 4 m','20 kN ↓ و 30 kN·m (counterclockwise) عند A','30 kN/m على BC'],
 steps:[
  ['Reactions','ΣM_C و ΣFy.','B_y = 85 kN ↑      C_y = 5 kN ↓'],
  ['SFD','−20 ثابت لين B، يقفز +85 إلى 65، وينزل بميل −30 لين 5.','V: −20 → 65 → 5'],
  ['BMD','يبدأ −30 بالـ couple، ينزل لين B، ثم يرجع صفر عند C.','M(0) = −30      M_B = −30 − 20(2) = −70      M_C = −70 + ½(65 + 5)(2) = 0']
 ],ans:'V: <b>−20، 65 → 5 kN</b>. M: <b>−30 → −70 → 0 kN·m</b>',idea:'لو طلع الـ reaction سالب يعني اتجاهه عكس اللي فرضته. هنا C تسحب الـ beam لتحت.'},

{id:126,ch:'c4',book:true,no:'H 4.10',lvl:2,title:'SFD و BMD: Overhang Beam',short:'M_min −2.81 عند B و M_max صغير 0.239.',src:HB('4.10',174),
 q:'The beam supports a portion of an entrance overhang. B is a roller and C is pinned. Draw the shear and moment diagrams.',
 given:['A حر، B على 0.75 m، C على 1.75 m','10 kN/m على الطول كله'],
 steps:[
  ['Reactions','ΣM_C: B_y(1) = 17.5(0.875).','B_y = 15.31 kN ↑      C_y = 2.19 kN ↑'],
  ['SFD','V_B⁻ = −10(0.75) = −7.50، يقفز +15.31 إلى 7.81، وينزل لين −2.19.','V = 0 عند 7.81/x = 2.19/(1 − x) → x = 0.781 m بعد B'],
  ['BMD','بالمساحات.','M_B = ½(−7.50)(0.75) = −2.81      M_max = −2.81 + ½(7.81)(0.781) = 0.239 kN·m']
 ],ans:'<b>B_y = 15.31</b>، <b>C_y = 2.19 kN</b>. M: <b>−2.81</b> عند B و <b>0.239 kN·m</b> عند x = 1.531 m',idea:'الـ overhang يعطي moment سالب عند الـ support (hogging)، وهذا غالباً أكبر قيمة.'},

{id:127,ch:'c4',book:true,no:'H 4.11',lvl:3,title:'SFD و BMD: Compound Beam',short:'Hinge عند B، triangle على CE، وcouple 150 عند A.',src:HB('4.11',175),
 q:'Draw the shear and moment diagrams for the compound beam. A and C are rollers, B and E are pins.',
 given:['A (0)، B hinge (5)، C (8)، D (11)، E (14) m','150 kN·m (clockwise) عند A','20 kN/m على AB، و 30 kN عند x = 6','Triangle على CE: peak 30 kN/m عند D'],
 steps:[
  ['Segment AB: M_B = 0','نفك عند الـ hinge.','A_y(5) + 150 − 100(2.5) = 0   →   A_y = 20 kN      B = 80 kN'],
  ['Segment BE','80 kN تنتقل لـ BE لتحت عند B.','ΣM_C: 80(3) + 30(2) − 90(3) + 6E_y = 0 → E_y = −5 kN      C_y = 205 kN'],
  ['SFD','20 → −80 عند B، jump −30 → −110، ثم +205 → 95، وينزل لين 5.','V = 0 عند x = 1 m'],
  ['BMD','يبدأ 150 بالـ couple.','M_max = 160 عند x = 1      M_B = 0      M_C = −300      M_D = −60      M_E = 0']
 ],ans:'<b>A_y = 20</b>، <b>C_y = 205</b>، <b>E_y = −5 kN</b>. M: <b>160</b> عند x = 1 m و <b>−300 kN·m</b> عند C',idea:'الـ M عند الـ hinge صفر دائماً، وهذا أفضل check على رسمتك.'},

{id:128,ch:'c4',book:true,no:'H 4.12',lvl:3,title:'Moment Diagram: L-Frame',short:'Column + beam، نقطع عند الـ joint C.',src:HB('4.12',177),
 q:'Draw the moment diagram for the frame. A is a roller and B is a pin.',
 given:['Column AC: 3.3 m (15 kN أفقي على 1.8 m)','Beam CB: 4.5 m','25 kN ↓ عند C','A roller (رأسي)، B pin'],
 steps:[
  ['Entire frame: ΣFx','','B_x = 15 kN ←'],
  ['Entire frame: ΣM_B','','−A_y(4.5) + 25(4.5) + 15(1.5) = 0   →   A_y = 30 kN ↑'],
  ['ΣFy','','30 − 25 + B_y = 0   →   B_y = 5 kN ↓'],
  ['Member AC','تحت الـ 15 kN ما فيه shear، فوقها M يزيد خطياً.','M = 0 من A لين 1.8 m      M_C = −15(1.5) = −22.5 kN·m'],
  ['Member CB','نفس الـ moment ينتقل عبر الـ rigid joint C، ويرجع صفر عند الـ pin B.','M: −22.5 → 0 خطي (V = 5 kN)']
 ],ans:'<b>A_y = 30 ↑</b>، <b>B_x = 15 ←</b>، <b>B_y = 5 ↓</b> (kN)، و <b>M_C = −22.5 kN·m</b> في العضوين',idea:'عند الـ rigid joint الـ moment نفسه يكمل من عضو لعضو. Check: الـ joint C لازم يكون في equilibrium.'},

{id:129,ch:'c4',book:true,no:'H 4.13',lvl:3,title:'SFD و BMD: Inclined Frame + Wind',short:'حمل أفقي على عضو مائل: نحلله ⊥ و ∥ للعضو.',src:HB('4.13',178),
 q:'Draw the shear and moment diagrams for the frame. A is a pin, C is a roller, and B is a rigid joint.',
 given:['AB مائل: 4 m أفقي، 3 m رأسي (5 m)','BC أفقي 4 m، 80 kN في نصه','Wind 40 kN/m أفقي على ارتفاع AB'],
 steps:[
  ['Resultant','40 kN/m على 3 m ارتفاع.','120 kN → @ 1.5 m'],
  ['ΣM_A = 0','','C_y(8) − 120(1.5) − 80(6) = 0   →   C_y = 82.5 kN ↑'],
  ['ΣFx و ΣFy','','A_x = 120 kN ←      A_y = 80 − 82.5 = −2.5 → 2.5 kN ↓'],
  ['Member BC','','V = −2.5 ثم −82.5      M_B = 82.5(4) − 80(2) = 170 → 165 → 0'],
  ['حمل AB على طوله','120 kN على 5 m = 24 kN/m، نحلله ⊥ و ∥.','⊥: 24(0.6) = 14.4 kN/m      ∥: 24(0.8) = 19.2 kN/m'],
  ['Member AB','الـ shear عند A = مركبة الـ reactions العمودية على العضو.','V_A = 120(0.6) − 2.5(0.8) = 70      V = 70 − 14.4s → 0 عند s = 4.86 m'],
  ['M على AB','','M = 70s − 7.2s²      M_max = 170.1      M_B = 170 kN·m ✓']
 ],ans:'<b>A_x = 120 ←</b>، <b>A_y = 2.5 ↓</b>، <b>C_y = 82.5 ↑</b> (kN). M_B = <b>170 kN·m</b>، و M_max على AB = <b>170.1 kN·m</b>',idea:'على العضو المائل لازم تحلل كل القوى لمركبات عمودية وموازية لمحوره قبل ما ترسم V و M.'},

{id:130,ch:'c4',book:true,no:'H 4.15',lvl:3,title:'BMD بطريقة Superposition',short:'Cantilever من B: ثلاث رسمات نجمعها.',src:HB('4.15',186),
 q:'Draw the moment diagram for the beam using the method of superposition. Consider the beam cantilevered from the support at B.',
 given:['Overhang 1.5 m، A على 1.5 m، B على 6 m','90 kN·m (counterclockwise) عند الطرف الحر','Triangle: 0 عند A → 50 kN/m عند B','Reactions: A = 57.5، B = 55 kN'],
 steps:[
  ['الفكرة','نعتبر الـ beam cantilever من B، ونحط عليه نفس الأحمال + A_y كحمل.',''],
  ['الجزء 1: الـ couple','ثابت على الطول كله.','M₁ = −90'],
  ['الجزء 2: A_y = 57.5 ↑','يبدأ من A.','M₂ = 57.5(x − 1.5)   →   258.75 عند B'],
  ['الجزء 3: الـ triangle','cubic.','M₃ = −(50/4.5)(x − 1.5)³/6   →   −168.75 عند B'],
  ['الجمع','','M_B = −90 + 258.75 − 168.75 = 0 ✓      M_max = 33.3 kN·m عند x = 4.72 m']
 ],ans:'الـ BMD النهائي: <b>−90</b> على الـ overhang، و <b>M_max = 33.3 kN·m</b> عند x = 4.72 m، و صفر عند B',idea:'الـ superposition تعطيك أشكال بسيطة (ثابت، خطي، cubic) سهل تحسب مساحاتها، وهذا مهم لاحقاً في الـ deflection.'}
);
EX.sort((a,b)=>ORD[a.ch]-ORD[b.ch]||a.id-b.id);

/* ---- case drawings (300×140) ---- */
Object.assign(CASE,{
 H4a:L(30,70,270,70,'k thick')+PIN(30,72)+ROL(190,72)+T(150,30,'r = 3   n = 1','s'),
 H4b:FIX(30,40,100)+L(30,70,270,70,'k thick')+ROL(180,72)+ROL(270,72)+T(150,30,'r = 5   n = 1','s'),
 H4c:FIX(30,40,100)+L(30,70,110,70,'k thick')+`<circle cx="110" cy="70" r="6" class="kf"/>`+L(116,72,268,108,'k thick')+ROL(268,110)+T(150,30,'r = 6   n = 2','s'),
 H4d:FIX(30,40,100)+L(30,70,270,70,'k thick')+FIXR(270,40,100)+`<circle cx="110" cy="70" r="6" class="kf"/><circle cx="190" cy="70" r="6" class="kf"/>`+T(150,30,'r = 10   n = 3','s'),
 H7a:L(40,110,200,110,'k thick')+L(200,110,200,40,'k thick')+PIN(40,112)+`<circle cx="208" cy="45" r="6" class="kf"/>`+L(216,25,216,65,'k')+T(30,104,'A','s','end')+T(214,30,'B','s','start')+T(250,90,'stable','m'),
 H7b:L(70,40,70,110,'k thick')+L(70,110,220,110,'k thick')+PIN(220,112)+`<circle cx="66" cy="34" r="6" class="kf"/>`+L(48,24,82,48,'k')+L(66,34,220,110,'dm dsh')+T(56,40,'A','s','end')+T(232,110,'B','s','start'),
 H7c:L(30,70,270,70,'k thick')+ROL(30,72)+ROL(150,72)+ROL(270,72)+T(30,58,'A','s')+T(150,58,'B','s')+T(270,58,'C','s'),
 H7d:L(30,50,120,50,'k thick')+L(120,50,120,105,'k thick')+L(120,105,250,105,'k thick')+ROL(30,52)+ROL(250,107)+`<circle cx="120" cy="50" r="5" class="kf"/><circle cx="120" cy="105" r="5" class="kf"/>`+T(30,40,'A','s')+T(130,44,'B','s','start')+T(110,120,'C','s','end')+T(250,95,'D','s')
});

/* ---- sims ---- */
Object.assign(SIMS,{
101:()=>{let s='';
 s+=R(60,232,300,18,'kf',at(0,2))+R(60,250,300,7,'ldf',at(0,3));
 s+=`<path d="M190,257H230V263H213V300H230V306H190V300H207V263H190Z" class="kf"/>`;
 s+=R(185,80,50,152,'kf',at(0,4));
 s+=L(60,326,360,326,'dm')+T(135,342,'0.9 m','m')+T(285,342,'0.9 m','m')+L(210,320,210,332,'dm');
 s+=T(52,244,'100 mm','m','end')+T(178,160,'3 m','m','end')+T(210,72,'300 mm','m')+T(370,256,'plaster','m','start');
 s+=T(68,226,'2.70','r','start',at(2,2))+T(352,272,'0.43','r','end',at(3,3))+T(244,160,'14.85','r','start',at(4,4));
 const seg=[[2,2.70],[3,0.43],[4,14.85]];let y=330;seg.forEach(([k,v])=>{const h=v*15;y-=h;s+=R(440,y,60,h,'ldf',at(k,k))});
 s+=L(425,330,515,330,'dm')+T(470,346,'Σ w (kN/m)','m');
 [[2,'2.70'],[3,'3.13'],[4,'17.98']].forEach(([k,v])=>s+=T(470,48,'Σ = '+v,'s','middle',at(null,null,k)));
 s+=T(470,48,'Σ = 17.98 kN/m','r big','middle',at(null,null,'5,6'));
 return{vb:'0 0 600 360',svg:s}},
102:()=>{let s='';const xs=[100,220,340,460],ys=[50,170,290];
 xs.forEach(x=>s+=L(x,30,x,310,'dm dsh'));ys.forEach(y=>s+=L(80,y,480,y,'dm dsh'));
 s+=R(160,110,120,120,'ldf',at(1,1));
 xs.forEach(x=>ys.forEach(y=>s+=R(x-7,y-7,14,14,x===220&&y===170?'rx':'kf')));
 s+=T(160,326,'6 m','m')+T(280,326,'6 m','m')+T(498,114,'6 m','m','start')+T(498,234,'6 m','m','start');
 s+=T(220,214,'A_T = 36 m²','s','middle',at(1,1));
 s+=T(300,360,'4 × 36 = 144 m² > 37.2 ✓','r big','middle',at(null,null,2));
 s+=T(300,360,'L = 1.514 kN/m²','r big','middle',at(null,null,3));
 s+=T(300,360,'1.514 / 2.40 = 63% > 50% ✓','r big','middle',at(null,null,4));
 s+=T(300,360,'F = 1.514 × 36 = 54.5 kN','r big','middle',at(null,null,'5,6'));
 return{vb:'0 0 600 380',svg:s}},
103:()=>{let s='';const gx0=120,gx1=480,gy=360,wy=gy-120,ry=wy-64,mx=300;
 s+=L(40,gy,560,gy,'k')+PG(`${gx0},${gy} ${gx0},${wy} ${mx},${ry} ${gx1},${wy} ${gx1},${gy}`,'kf');
 s+=T(mx,gy-20,'45 m (2 × 22.5)','m')+T(gx1-8,wy+60,'7.5 m','m','end')+T(mx,ry+34,'h = 9.48 m','s','middle',at(2,2));
 s+=AR(20,200,60,200,'ld')+AR(20,220,60,220,'ld')+T(40,190,'wind','s');
 const bands=[[0,4.6,'613 | 1158'],[4.6,6.1,'666 | 1210'],[6.1,7.5,'707 | 1252']];
 let ww='';bands.forEach(([a,b,t],i)=>{const y1=gy-a*16,y2=gy-b*16;const len=38+i*4;for(let y=y1-6;y>y2+2;y-=12)ww+=AR(gx0-len-4,y,gx0-3,y,'rx');ww+=T(gx0-len-8,(y1+y2)/2+4,t,'r','end')});
 s+=`<g ${at(5,5)}>${ww}</g>`;
 let lw='';for(let y=gy-8;y>wy;y-=14)lw+=AR(gx1+3,y,gx1+40,y,'rx');lw+=T(gx1+46,gy-60,'−916 | −371','r','start');s+=`<g ${at(6,6)}>${lw}</g>`;
 const roof=(p1,p2,n,len,lab,k,anc)=>{let r='';for(let i=1;i<6;i++){const t=i/6,x=p1[0]+(p2[0]-p1[0])*t,y=p1[1]+(p2[1]-p1[1])*t;r+=AR(x+n[0]*3,y+n[1]*3,x+n[0]*len,y+n[1]*len,'rx')}r+=T((p1[0]+p2[0])/2+n[0]*(len+18),(p1[1]+p2[1])/2+n[1]*(len+18),lab,'r',anc);return `<g ${at(k,k)}>${r}</g>`};
 const nl=[-0.336,-0.942],nr=[0.336,-0.942];
 s+=roof([gx0,wy],[mx,ry],nl,40,'−1173 | −628',8,'middle')+roof([mx,ry],[gx1,wy],nr,24,'−658 | −113',9,'middle');
 s+=T(mx,gy-60,'Side walls: −1173 | −628','r','middle',at(7,7));
 s+=T(300,24,'q_z = 1532.5 K_z','s big','middle',at(null,null,1))+T(300,24,'q_h = 1532.5 (0.987) = 1513 N/m²','s big','middle',at(null,null,3))+T(300,24,'p = 0.85 q Cp ∓ 272.38','s big','middle',at(null,null,4));
 s+=T(300,24,'N/m² — الرقم الأول (+GCpi) | الثاني (−GCpi)','m','middle',at(null,null,'5,6,7,8,9,10'));
 return{vb:'0 0 600 380',svg:s}},
104:()=>{let s='';const X0=60,W=270;
 [40,85,130,175,220,265].forEach(y=>s+=L(X0,y,X0+W,y,y===130?'k thick':'k'));s+=L(X0,40,X0,265,'k thick')+L(X0+W,40,X0+W,265,'k thick');
 s+=R(X0,107.5,W,45,'ldf',at(4,4));
 s+=T(X0+W/2,30,'4.5 m','m')+T(X0+W+8,110,'0.75 m','m','start')+T(X0+W+8,132,'joist','s','start');
 s+=T(470,90,'3.42 kN/m²','r big','middle',at(2,2))+T(470,120,'L₂/L₁ = 6 > 2','r','middle',at(3,3));
 const b=BE.draw({L:4.5,sup:[{x:0,t:'pin',lab:'A'},{x:4.5,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:4.5,w1:2.565,w2:2.565,lab:'2.565 kN/m'}]},{by:360,at:{reac:5},loadK:4});
 return{vb:'0 0 600 490',svg:s+b.svg}},
105:()=>{let s='';const X=x=>60+x*40,Y=y=>30+y*40;
 s+=PG(`${X(4)},${Y(0)} ${X(4)},${Y(7)} ${X(2)},${Y(5)} ${X(2)},${Y(2)}`,'ldf',at(2,'4'));s+=PG(`${X(0)},${Y(0)} ${X(4)},${Y(0)} ${X(2)},${Y(2)}`,'mfill',at(2,'5'));
 s+=R(X(0),Y(0),160,280,'k');
 s+=`<g ${at(2,2)}>${L(X(0),Y(0),X(2),Y(2),'ld')}${L(X(4),Y(0),X(2),Y(2),'ld')}${L(X(0),Y(7),X(2),Y(5),'ld')}${L(X(4),Y(7),X(2),Y(5),'ld')}${L(X(2),Y(2),X(2),Y(5),'ld')}${T(X(3),Y(3.6),'①','s')}${T(X(2),Y(0.9),'③','r')}</g>`;
 s+=T(X(0)-6,Y(0)+4,'D','s','end')+T(X(4)+6,Y(0)+4,'C','s','start')+T(X(0)-6,Y(7)+4,'A','s','end')+T(X(4)+6,Y(7)+4,'B','s','start')+T(X(2),Y(0)-8,'4 m','m')+T(X(0)-22,Y(3.5),'7 m','m','end');
 s+=T(140,330,'L₂/L₁ = 1.75 < 2 → two-way','r','middle',at(null,null,1));
 const b1=BE.draw({L:7,sup:[{x:0,t:'pin',lab:'B'},{x:7,t:'roller',lab:'C'}],loads:[{k:'w',a:0,b:2,w1:0,w2:4,lab:false},{k:'w',a:2,b:5,w1:4,w2:4},{k:'w',a:5,b:7,w1:4,w2:0,lab:false}]},{x0:270,x1:570,by:80,wh:30,at:{reac:4},loadK:3,dims:[0,2,5,7]});
 const b2=BE.draw({L:4,sup:[{x:0,t:'pin',lab:'D'},{x:4,t:'roller',lab:'C'}],loads:[{k:'w',a:0,b:2,w1:0,w2:4,lab:false},{k:'w',a:2,b:4,w1:4,w2:0,lab:false}]},{x0:340,x1:520,by:300,wh:30,at:{reac:5},loadK:3,dims:[0,2,4]});
 return{vb:'0 0 600 440',svg:s+b1.svg+T(420,20,'beam BC','s')+b2.svg+T(430,246,'beam DC — peak 4 kN/m','s','middle',at(3))}},
106:()=>{let s='';const X=x=>60+x*25,Y=y=>30+y*25;
 s+=PG(`${X(0)},${Y(5)} ${X(10)},${Y(5)} ${X(7.5)},${Y(2.5)} ${X(2.5)},${Y(2.5)}`,'ldf',at(3,'3,4'))+PG(`${X(0)},${Y(5)} ${X(10)},${Y(5)} ${X(7.5)},${Y(7.5)} ${X(2.5)},${Y(7.5)}`,'ldf',at(4,'4'));
 s+=R(X(0),Y(0),250,250,'k')+L(X(0),Y(5),X(10),Y(5),'k thick');
 s+=`<g ${at(3,3)}>${[[0,0],[10,0],[0,10],[10,10]].map(([x,y])=>L(X(x),Y(y),X(x+(x?-2.5:2.5)),Y(y+(y?-2.5:2.5)),'ld')).join('')}${[[0,5],[10,5]].map(([x,y])=>L(X(x),Y(y),X(x+(x?-2.5:2.5)),Y(2.5),'ld')+L(X(x),Y(y),X(x+(x?-2.5:2.5)),Y(7.5),'ld')).join('')}${L(X(2.5),Y(2.5),X(7.5),Y(2.5),'ld')}${L(X(2.5),Y(7.5),X(7.5),Y(7.5),'ld')}${T(X(5),Y(4),'①','s')}${T(X(5),Y(6.6),'②','s')}</g>`;
 s+=T(X(0)-6,Y(5)+4,'A','s','end')+T(X(10)+6,Y(5)+4,'B','s','start')+T(X(5),Y(0)-8,'10 m','m')+T(X(10)+8,Y(2.5),'5 m','m','start')+T(X(10)+8,Y(7.5),'5 m','m','start');
 s+=T(460,60,'p = 5.325 kN/m²','r big','middle',at(1,1))+T(460,90,'L₂/L₁ = 2','r','middle',at(2,2))+T(460,120,'13.31 × 2 = 26.625 kN/m','r','middle',at(4,4));
 const b=BE.draw({L:10,sup:[{x:0,t:'pin',lab:'A'},{x:10,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:2.5,w1:0,w2:26.625,lab:false},{k:'w',a:2.5,b:7.5,w1:26.625,w2:26.625,lab:'26.625 kN/m'},{k:'w',a:7.5,b:10,w1:26.625,w2:0,lab:false}]},{by:370,at:{reac:5},loadK:4,dims:[0,2.5,7.5,10]});
 return{vb:'0 0 600 500',svg:s+b.svg}},
107:()=>casesSim(['H4a','H4b','H4c','H4d'],[['(a) Pin + Roller',['r = 2 + 1 = 3','n = 1','r = 3n'],'Determinate'],['(b) Fixed + 2 Rollers',['r = 3 + 1 + 1 = 5','n = 1','r − 3n = 2'],'Indeterminate (2°)'],['(c) Fixed + Pin + Roller',['r = 3 + 2 + 1 = 6','n = 2','r = 3n'],'Determinate'],['(d) Fixed – Pins – Fixed',['r = 10','n = 3','r − 3n = 1'],'Indeterminate (1°)']],'Classify each beam'),
108:()=>casesSim(['H7a','H7b','H7c','H7d'],[['(a) L-member',['3 reactions','not concurrent','not parallel'],'Stable'],['(b) Concurrent',['all reactions','pass through B'],'Unstable'],['(c) 3 Rollers',['all reactions','vertical (parallel)'],'Unstable'],['(d) 3 parts',['r = 7, n = 3','7 < 9'],'Unstable']],'Stable or unstable?'),
109:()=>BE.draw(BS.e208,{at:{reac:{x:3,0:5,1:4}},res:[{x:3,k:1,lab:'216.5 kN  |  125 kN',dy:-4}],dims:[0,3,4.5,6.5],rxy:-14}),
110:()=>BE.draw(BS.e209,{at:{reac:{0:4,m0:5}},res:[{x:4,W:60,k:2,lab:'60 kN',dy:-4,anchor:'end',dx:-4},{x:6,W:60,k:2,lab:'60 kN',dy:-4}],dims:[0,4,6,12]}),
111:()=>{let s='';const S=110,A=[100,250],K=[150+2*S,250],B=[150+2.9*S,250-1.2*S];
 s+=FIX(A[0],A[1]-30,A[1]+30)+L(A[0],A[1],K[0],K[1],'k thick')+L(K[0],K[1],B[0],B[1],'k thick');
 s+=PG(`${A[0]},${A[1]-6} ${A[0]},${A[1]-40} ${K[0]},${K[1]-40} ${K[0]},${K[1]-6}`,'ldf soft')+LOADAR(A[0],K[0],10,()=>A[1]-40,A[1]-6)+T((A[0]+K[0])/2+40,A[1]-48,'7.5 kN/m','s');
 const n=[0.8,0.6],t=[0.6,-0.8],p=[B[0]+n[0]*8,B[1]+n[1]*8];s+=L(p[0]-t[0]*34,p[1]-t[1]*34,p[0]+t[0]*34,p[1]+t[1]*34,'k')+`<circle cx="${B[0]+n[0]*3}" cy="${B[1]+n[1]*3}" r="5" class="kf"/>`;
 s+=T(A[0]-18,A[1]-34,'A','s','end')+T(B[0]-8,B[1]-6,'B','s','end')+L(A[0],A[1]+40,K[0],K[1]+40,'dm')+L(K[0],K[1]+40,B[0],K[1]+40,'dm')+T((A[0]+K[0])/2,A[1]+54,'2 m','m')+T((K[0]+B[0])/2,A[1]+54,'0.9 m','m')+T((K[0]+B[0])/2-12,(K[1]+B[1])/2+4,'rise 1.2 m','m','end');
 s+=`<g ${at(1,1)}>${AR(A[0]+S,A[1]-90,A[0]+S,A[1]-8,'rx dsh')}${T(A[0]+S+6,A[1]-80,'15 kN @ 1 m','r','start')}</g>`;
 s+=`<g ${at(2,2)}>${AR(B[0]+n[0]*60,B[1]+n[1]*60,B[0]+n[0]*6,B[1]+n[1]*6,'rx')}${T(B[0]+n[0]*64,B[1]+n[1]*64+14,'N_B','r','start',at(null,null,2))}${T(B[0]+n[0]*64,B[1]+n[1]*64+32,'(4/5 , 3/5) N_B','m','start')}</g>`;
 s+=T(B[0]+n[0]*64,B[1]+n[1]*64+14,'N_B = 5.56 kN','r','start',at(3,3));
 s+=`<g ${at(4,4)}>${AR(A[0]-74,A[1]+12,A[0]-16,A[1]+12,'rx')}${T(A[0]-20,A[1]+30,'A_x = 4.44','r','end')}</g>`;
 s+=`<g ${at(5,5)}>${AR(A[0]+14,A[1]+80,A[0]+14,A[1]+34,'rx')}${T(A[0]+20,A[1]+92,'A_y = 11.7','r','start')}</g>`;
 return{vb:'0 0 600 360',svg:s}},
112:()=>BE.draw(BS.e211,{diag:true,at:{reac:{0:6,m0:5,1:3},sfd:7,bmd:8},res:[{x:1.5,W:18,k:5,lab:'18 kN'}],dims:[0,3,5]}),
113:()=>{let s='';const S=100,P=(x,y)=>[70+x*S,330-y*S],A=P(0,0),B=P(2,1.5),C=P(4,1.5);
 s+=PIN(A[0],A[1]+4)+L(A[0],A[1],B[0],B[1],'k thick')+L(B[0],B[1],C[0],C[1],'k thick')+`<circle cx="${B[0]}" cy="${B[1]}" r="6" class="kf"/>`+FIXR(C[0]+8,C[1]-30,C[1]+30)+`<circle cx="${C[0]}" cy="${C[1]}" r="6" class="kf"/>`;
 s+=PG(`${B[0]},${B[1]-6} ${B[0]},${B[1]-34} ${C[0]},${C[1]-34} ${C[0]},${C[1]-6}`,'ldf soft')+LOADAR(B[0],C[0],9,()=>B[1]-34,B[1]-6)+T((B[0]+C[0])/2+40,B[1]-42,'3 kN/m','s');
 const F=P(1.6,1.2),d=[0.6,0.8];s+=AR(F[0]-d[0]*60,F[1]-d[1]*60,F[0]-2,F[1]-3,'rx')+T(F[0]-d[0]*64,F[1]-d[1]*64-6,'8 kN ⊥ AB','r','end');
 s+=T(A[0]-12,A[1]+4,'A','s','end')+T(B[0]-4,B[1]-12,'B','s','end')+T(C[0]-6,C[1]-12,'C','s','end')+L(A[0],350,B[0],350,'dm')+L(B[0],350,C[0],350,'dm')+T((A[0]+B[0])/2,366,'2 m','m')+T((B[0]+C[0])/2,366,'2 m','m')+T(569,(A[1]+C[1])/2+40,'1.5 m','m','end')+L(575,C[1]+32,575,A[1],'dm');
 s+=`<g ${at(1,1)}>${AR((B[0]+C[0])/2,B[1]-80,(B[0]+C[0])/2,B[1]-36,'rx dsh')}${T((B[0]+C[0])/2+6,B[1]-74,'6 kN','r','start')}</g>`;
 s+=`<g ${at(2,2)}>${AR(B[0]+10,B[1]+44,B[0]+10,B[1]+8,'rx')}${T(B[0]+16,B[1]+40,'B_y = 3 (on BC)','r','start')}</g>`;
 s+=`<g ${at(3,3)}>${AR(B[0]+12,B[1]+92,B[0]+56,B[1]+92,'rx')}${T(B[0]+60,B[1]+96,'B_x = 14.7 (on BC)','r','start')}</g>`;
 s+=`<g ${at(4,4)}>${AR(A[0]-60,A[1]-14,A[0]-14,A[1]-14,'rx')}${T(A[0]-60,A[1]-22,'A_x = 9.87','r','start')}</g>`;
 s+=`<g ${at(5,5)}>${AR(A[0]+20,A[1]+50,A[0]+20,A[1]+12,'rx')}${T(A[0]+26,A[1]+56,'A_y = 9.40','r','start')}</g>`;
 s+=`<g ${at(6,6)}>${AR(C[0]-10,C[1]+40,C[0]-54,C[1]+40,'rx')}${T(C[0]-10,C[1]+58,'C_x = 14.7','r','end')}${AR(C[0]+18,C[1]+90,C[0]+18,C[1]+10,'rx')}${T(C[0]+26,C[1]+104,'C_y = 3','r','start')}</g>`;
 return{vb:'0 0 600 400',svg:s}},
114:()=>{let s='';const S=40,P=(x,y)=>[180+x*S,350-y*S],A=P(0,0),C=P(6,0),Lw=P(0,3),Rw=P(6,3),B=P(3,6);
 s+=PIN(A[0],A[1]+4)+PIN(C[0],C[1]+4)+L(A[0],A[1],Lw[0],Lw[1],'k thick')+L(Lw[0],Lw[1],B[0],B[1],'k thick')+L(B[0],B[1],Rw[0],Rw[1],'k thick')+L(Rw[0],Rw[1],C[0],C[1],'k thick')+`<circle cx="${B[0]}" cy="${B[1]}" r="6" class="kf"/>`;
 let w='';for(let y=A[1]-10;y>Lw[1];y-=20)w+=AR(Lw[0]-48,y,Lw[0]-4,y,'ld');for(let y=C[1]-10;y>Rw[1];y-=20)w+=AR(Rw[0]+4,y,Rw[0]+30,y,'ld');
 for(let i=1;i<6;i++){const t=i/6,x=Lw[0]+(B[0]-Lw[0])*t,y=Lw[1]+(B[1]-Lw[1])*t;w+=AR(x-34,y-34,x-4,y-4,'ld');const x2=B[0]+(Rw[0]-B[0])*t,y2=B[1]+(Rw[1]-B[1])*t;w+=AR(x2+4,y2-4,x2+22,y2-22,'ld')}
 s+=w+T(Lw[0]-52,Lw[1]+10,'60 kN/m','s','end')+T(Rw[0]+34,Rw[1]+10,'20 kN/m','s','start')+T(Lw[0]-30,Lw[1]-62,'60 kN/m','s','end')+T(Rw[0]+20,Rw[1]-58,'20 kN/m','s','start');
 s+=T(A[0]-8,A[1]+20,'A','s','end')+T(C[0]+8,C[1]+20,'C','s','start')+T(B[0]-10,B[1]-8,'B','s','end')+L(A[0],372,C[0],372,'dm')+T((A[0]+C[0])/2,386,'6 m','m');
 s+=`<g ${at(2,2)}>${AR(Lw[0]-90,(A[1]+Lw[1])/2,Lw[0]-6,(A[1]+Lw[1])/2,'rx dsh')}${T(Lw[0]-92,(A[1]+Lw[1])/2+18,'180 kN','r','start')}${AR(P(1.5,4.5)[0]-50,P(1.5,4.5)[1]-50,P(1.5,4.5)[0]-4,P(1.5,4.5)[1]-4,'rx dsh')}${T(P(1.5,4.5)[0]-54,P(1.5,4.5)[1]-54,'254.6','r','end')}${AR(Rw[0]+6,(C[1]+Rw[1])/2,Rw[0]+70,(C[1]+Rw[1])/2,'rx dsh')}${T(Rw[0]+74,(C[1]+Rw[1])/2+18,'60 kN','r','end')}${AR(P(4.5,4.5)[0]+4,P(4.5,4.5)[1]-4,P(4.5,4.5)[0]+40,P(4.5,4.5)[1]-40,'rx dsh')}${T(P(4.5,4.5)[0]+44,P(4.5,4.5)[1]-44,'84.9','r','start')}</g>`;
 s+=`<g ${at(3,3)}>${AR(C[0]-14,C[1]+70,C[0]-14,C[1]+24,'rx')}${T(C[0]-20,C[1]+66,'C_y = 240','r','end')}</g>`;
 s+=`<g ${at(4,4)}>${AR(A[0]+14,A[1]+24,A[0]+14,A[1]+70,'rx')}${T(A[0]+20,A[1]+66,'A_y = 120','r','start')}</g>`;
 s+=`<g ${at(5,5)}>${AR(A[0]-14,A[1]+34,A[0]-70,A[1]+34,'rx')}${T(A[0]-16,A[1]+52,'A_x = 285','r','end')}</g>`;
 s+=T(B[0]+12,B[1]-14,'B_x = 75 , B_y = 300','r','start',at(6,6));
 s+=`<g ${at(7,7)}>${AR(C[0]+70,C[1]+34,C[0]+14,C[1]+34,'rx')}${T(C[0]+16,C[1]+52,'C_x = 195','r','start')}</g>`;
 return{vb:'0 0 600 440',svg:s}},
115:()=>BE.draw(BS.e401,{at:{reac:3},cut:{x:2.4,k:4,vk:5,mk:6,lab:'C'},dims:[0,1.2,2.4,10.8,12],wh:30}),
116:()=>BE.draw(BS.e402,{diag:true,at:{reac:1,sfd:6,bmd:6},res:[{x:4,W:135,k:1,lab:'135 kN'}],cut:{x:2,k:2,vk:4,mk:5}}),
117:()=>{const ex=`<g>${R(300,40,120,8,'kf')}${AR(340,0,340,38,'rx')}${T(346,12,'45 kN','r','start')}${PG('300,48 292,62 308,62','kf')}${PG('420,48 412,62 428,62','kf')}${T(296,40,'D','s','end')}${T(424,40,'E','s','start')}${T(320,76,'0.5','m')}${T(380,76,'1 m','m')}</g>`+`<g ${at(1,1)}>${T(300,96,'30','r')}${T(420,96,'15','r')}</g>`;
 return BE.draw(BS.e403,{by:190,loadK:2,at:{reac:3},cut:{x:3.75,k:4,vk:4,mk:5},extra:ex})},
118:()=>BE.draw(BS.e404,{diag:true,at:{reac:1,sfd:3,bmd:4},res:[{x:2,W:15,k:1,lab:'15 kN'}]}),
119:()=>BE.draw(BS.e405,{diag:true,at:{reac:1,sfd:3,bmd:4},dims:[0,2,3]}),
120:()=>BE.draw(BS.e406,{diag:true,at:{reac:1,sfd:3,bmd:4},res:[{x:4.5,k:1,lab:'90',anchor:'end',dx:-4},{x:6,k:1,lab:'90'}]}),
121:()=>BE.draw(BS.e407,{diag:true,at:{reac:1,sfd:2,bmd:3}}),
122:()=>BE.draw(BS.e408,{diag:true,at:{reac:1,sfd:2,bmd:4},res:[{x:6,W:90,k:1,lab:'90 kN'}]}),
123:()=>BE.draw(BS.e409a,{diag:true,at:{reac:1,sfd:2,bmd:3}}),
124:()=>BE.draw(BS.e409b,{diag:true,at:{reac:1,sfd:2,bmd:3}}),
125:()=>BE.draw(BS.e409c,{diag:true,at:{reac:1,sfd:2,bmd:3}}),
126:()=>BE.draw(BS.e410,{diag:true,at:{reac:1,sfd:2,bmd:3}}),
127:()=>BE.draw(BS.e411,{diag:true,at:{reac:{0:1,1:2,2:2},sfd:3,bmd:4},dims:[0,5,6,8,11,14]}),
128:()=>{let s='';const S=50,A=[90,300],C=[120,300-3.3*S],B=[120+4.5*S,C[1]],y15=300-1.8*S;
 s+=ROL(A[0],A[1]+2)+L(A[0],A[1],C[0],C[1],'k thick')+L(C[0],C[1],B[0],B[1],'k thick')+PIN(B[0],B[1]+4);
 s+=AR(C[0],C[1]-56,C[0],C[1]-6,'rx')+T(C[0]+6,C[1]-48,'25 kN','r','start')+AR(A[0]-60,y15,A[0]-6,y15,'rx')+T(A[0]-62,y15-8,'15 kN','r','start');
 s+=T(A[0]-10,A[1]+12,'A','s','end')+T(C[0]-10,C[1]-6,'C','s','end')+T(B[0]+10,B[1]-8,'B','s','start')+L(C[0],C[1]-70,B[0],C[1]-70,'dm')+T((C[0]+B[0])/2,C[1]-76,'4.5 m','m')+L(A[0]-80,A[1],A[0]-80,C[1],'dm')+T(A[0]-86,(A[1]+y15)/2,'1.8 m','m','end')+T(A[0]-86,(y15+C[1])/2,'1.5 m','m','end');
 s+=`<g ${at(1,1)}>${AR(B[0]+60,B[1],B[0]+12,B[1],'rx')}${T(B[0]+64,B[1]+18,'B_x = 15','r','end')}</g>`;
 s+=`<g ${at(2,2)}>${AR(A[0]+16,A[1]+44,A[0]+16,A[1]+6,'rx')}${T(A[0]+22,A[1]+40,'A_y = 30','r','start')}</g>`;
 s+=`<g ${at(3,3)}>${AR(B[0]-14,B[1]+10,B[0]-14,B[1]+52,'rx')}${T(B[0]-20,B[1]+50,'B_y = 5','r','end')}</g>`;
 s+=T(490,70,'M (kN·m)','s big','middle',at(4));
 s+=BE.plot({L:3.3,loads:[{k:'P',x:1.8,py:15}]},{kind:'M',x0:410,x1:570,base:150,amp:40,title:'Member AC (A to C)',a:'A',b:'C',k:4});
 s+=BE.plot({L:4.5,loads:[{k:'M',x:0,M:-22.5},{k:'P',x:0,py:-5}]},{kind:'M',x0:410,x1:570,base:280,amp:40,title:'Member CB (C to B)',a:'C',b:'B',k:5});
 return{vb:'0 0 600 380',svg:s}},
129:()=>{let s='';const S=50,A=[90,300],B=[90+4*S,300-3*S],C=[90+8*S,B[1]];
 s+=PIN(A[0],A[1]+4)+L(A[0],A[1],B[0],B[1],'k thick')+L(B[0],B[1],C[0],C[1],'k thick')+ROL(C[0],C[1]+4);
 for(let y=A[1]-12;y>B[1];y-=18){const x=A[0]+(A[1]-y)*4/3;s+=AR(30,y,x-4,y,'ld')}s+=T(30,B[1]-6,'40 kN/m','s','start');
 s+=AR(90+6*S,B[1]-56,90+6*S,B[1]-6,'rx')+T(90+6*S+6,B[1]-48,'80 kN','r','start');
 s+=T(A[0]-12,A[1]+8,'A','s','end')+T(B[0]-4,B[1]-12,'B','s','end')+T(C[0]+12,C[1]-6,'C','s','start')+L(A[0],322,B[0],322,'dm')+L(B[0],322,C[0],322,'dm')+T((A[0]+B[0])/2,336,'4 m','m')+T((B[0]+C[0])/2,336,'4 m','m')+L(C[0]+30,B[1],C[0]+30,A[1],'dm')+T(C[0]+36,(A[1]+B[1])/2,'3 m','m','start');
 s+=`<g ${at(1,1)}>${AR(10,A[1]-75,60,A[1]-75,'rx dsh')}${T(10,A[1]-83,'120 kN','r','start')}</g>`;
 s+=`<g ${at(2,2)}>${AR(C[0]-14,C[1]+60,C[0]-14,C[1]+20,'rx')}${T(C[0]-20,C[1]+58,'C_y = 82.5','r','end')}</g>`;
 s+=`<g ${at(3,3)}>${AR(A[0]-14,A[1]+14,A[0]-64,A[1]+14,'rx')}${T(A[0]-66,A[1]+30,'A_x = 120','r','start')}${AR(A[0]+16,A[1]+10,A[0]+16,A[1]+48,'rx')}${T(A[0]+22,A[1]+46,'A_y = 2.5','r','start')}</g>`;
 const bc={L:4,loads:[{k:'P',x:0,py:2.5},{k:'M',x:0,M:170},{k:'P',x:2,py:80}]},ab={L:5,loads:[{k:'P',x:0,py:-70},{k:'w',a:0,b:5,w1:14.4,w2:14.4}]};
 s+=BE.plot(bc,{kind:'V',x0:330,x1:560,base:430,amp:36,title:'V — member BC',a:'B',b:'C',k:4});
 s+=BE.plot(bc,{kind:'M',x0:330,x1:560,base:575,amp:40,title:'M — member BC',a:'B',b:'C',k:4});
 s+=BE.plot(ab,{kind:'V',x0:50,x1:280,base:430,amp:36,title:'V — member AB (s)',a:'A',b:'B',k:6});
 s+=BE.plot(ab,{kind:'M',x0:50,x1:280,base:575,amp:40,title:'M — member AB (s)',a:'A',b:'B',k:7});
 s+=T(300,24,'⊥ AB: 14.4 kN/m   ∥ AB: 19.2 kN/m','s big','middle',at(null,null,5));
 return{vb:'0 0 600 640',svg:s}},
130:()=>{const H=x=>x>1.5?1:0;
 return BE.draw(BS.e415,{diag:true,onlyM:true,at:{reac:1,bmd:5},extraM:[{f:x=>-90,k:2,cls:'k dsh',lab:'M₁'},{f:x=>57.5*(x-1.5)*H(x),k:3,cls:'ld',lab:'M₂'},{f:x=>-(50/4.5)*Math.pow(Math.max(0,x-1.5),3)/6,k:4,cls:'rx dsh',lab:'M₃'}]})}
});

function exNo(e){return e.no||('EX '+String(e.id).padStart(2,'0'))}
const LVL={1:'سهل',2:'متوسط',3:'صعب'};
const lvlTag=e=>e.lvl?`<span class="lvl l${e.lvl}">${LVL[e.lvl]}</span>`:'';
const CLV={1:1,2:2,3:2,4:1,5:2,6:1,7:2,8:2,9:2,10:2,11:1,12:1,13:1,14:2,15:2,16:2,17:2,18:3};EX.forEach(e=>{if(!e.lvl&&CLV[e.id])e.lvl=CLV[e.id]});

/* ================= شرح كل خطوة (ليش سوينا كذا) ================= */
const WHY={
1:[
 'كل الأحمال لازم تكون بنفس الوحدة عشان نجمعها. الـ beam طوله يمتد، فنبي الحمل على كل متر منه: kN/m. القاعدة: الحمل الحجمي (kN/m³) نضربه في مساحة مقطع (m²)، والسطحي (kN/m²) نضربه في عرض (m).',
 'وزن الكمرة الحديد معطى أصلاً بوحدة kN/m، فما يحتاج أي تحويل وندخله مثل ما هو.',
 'الـ slab جسم له حجم: سمكه 0.12 m وعرضه اللي تحمله الكمرة 1 + 1 = 2 m (نص المسافة من كل جهة). مساحة المقطع × وزن الخرسانة الحجمي يعطي الوزن لكل متر طول.',
 'السقف المعلق حمل موزع على مساحة (kN/m²)، فنضربه في نفس العرض 2 m اللي تحمله الكمرة.',
 'نفس منطق السقف المعلق: حمل سطحي × العرض 2 m.',
 'الجدار فوق الكمرة مباشرة، ومقطعه 0.3 m عرض × 4 m ارتفاع. نضرب مساحة المقطع في وزن الطوب الحجمي.',
 'اللياسة على وجهين للجدار، وكل وجه مساحته لكل متر طول = ارتفاع الجدار 4 m. فنضرب 0.24 × 4 × 2. الغلط الشائع إنك تنسى الـ 2.',
 'بعد ما صارت كل الأحمال kN/m نجمعها مباشرة. لاحظ إن الجدار وحده أكثر من 70% من المجموع.'],
2:[
 'العمود الوسطي يشيل نص المسافة لكل عمود جاره في الاتجاهين: (4 + 4) × (3 + 3) = 8 × 6. هذي هي المساحة اللي حملها ينزل على العمود.',
 'الكود ما يسمح بتخفيض حمل الـ garage، لأن السيارات ممكن تكون كلها موجودة بنفس الوقت. فنضرب الحمل الكامل في المساحة.',
 'شرط التخفيض على الـ influence area وهي K_LL × A_T، مو A_T لحالها. K_LL = 4 لأن العمود داخلي. 192 أكبر من 37.2 فالتخفيض مسموح.',
 'نعوّض في المعادلة. الفكرة إن احتمال يكون الحمل الكامل على كل المساحة الكبيرة بنفس الوقت قليل، فكل ما كبرت المساحة قلّ الحمل.',
 'الكود يحدد حد أدنى: ما نخفض أكثر من 50% لعنصر يحمل دور واحد. 1.39 أكبر من 1.2 فنعتمد 1.39.',
 'الحمل المخفّض × المساحة يعطي القوة اللي ينقلها دور المكاتب للعمود.',
 'السطح ما ينخفض حمله هنا، فنحسبه كامل.',
 'العمود في الأرضي يشيل كل الأدوار اللي فوقه، فنجمع القوى الثلاث.'],
3:[
 'الكودين يختلفون في المكان اللي نحسب عنده ضغط الرياح: القديم عند منتصف اللوحة (10 − 1/2)، والجديد عند أعلاها لأنه أعلى ضغط.',
 'Kz يكبر مع الارتفاع، فنقراه من الجدول عند الارتفاع اللي حددناه لكل كود.',
 'نعوّض في معادلة q. بما إن الأرض مستوية Kzt = 1، و Kd و I = 1.',
 'نفس المعادلة بقيمة Kz الجديدة، والفرق صغير لأن الارتفاع تقريباً نفسه.',
 'Cf يعتمد على شكل اللوحة. الكود القديم يشوف B/s بس، والجديد يشوف كمان قربها من الأرض s/h، فطلع أكبر بكثير.',
 'القوة = الضغط × معامل الهبّة G × معامل القوة Cf × المساحة.',
 'نفس المعادلة بقيم الكود الجديد. الفرق الكبير سببه Cf.'],
4:[
 'نقرأ المعاملات من الوصف: "open terrain" يعني مكشوف Ce = 0.8، "unheated" يعني Ct = 1.2، "storage" يعني I = 0.8.',
 'السقف مستوٍ (ميله أقل من 5%) فنستخدم معادلة 1.5 مباشرة.',
 'الكود يقول: لو pg ≤ 0.96 نحسب كمان I × pg ونقارن، عشان ما يطلع الحمل أقل من اللازم.',
 'ناخذ الأكبر للأمان، فالجواب 0.58 مو 0.39.',
 'غيّرنا وصف الموقع بس: sheltered في وسط مدينة يعني Ce = 1.3 بدل 0.8. pg ما تغيّر (0.72 ≤ 0.96) فالحد الأدنى نفسه I × pg = 0.58، لكن المعادلة الحين أكبر (0.63)، فهي اللي تحكم.',
 'لما pg يصير أكبر من 0.96 ما نضرب I في pg، نضربه في 0.96 بس. المعادلة طلعت 0.65 وهي أقل من 0.77، فالحد الأدنى هو اللي يحكم.',
 'نفس pg = 1.2 بس كل المعاملات كبرت: مدفّأ Ct = 1.0، محمي Ce = 1.3، ومستشفى I = 1.2. المعادلة 1.31 أكبر من الحد الأدنى 1.15، فناخذ المعادلة. الخلاصة: احسب الاثنين دايماً وخذ الأكبر.'],
5:[
 'في الـ one-way الحمل يمشي للكمرات الأقرب. كل كمرة تاخذ نص المسافة بينها وبين اللي جنبها من الجهتين: 0.75 + 0.75.',
 'الحمل السطحي × عرض الشريحة اللي تحمله الكمرة يعطي حمل منتظم على طولها.',
 'كمرة بسيطة تحت حمل منتظم ومتماثل، فكل ركيزة تاخذ نص الحمل الكلي wL/2.',
 'الكمرات الطرفية ما لها جار من جهة، فتاخذ نص الشريحة بس (0.75 m)، وحملها نص الوسطى.',
 'ردود أفعال الكمرات تصير أحمال مركزة على الـ girder في أماكن تلاقيها معه. هذا هو الـ load path.'],
6:[
 'لما L2/L1 أقل من 2 الحمل يتوزع في الاتجاهين، فنستخدم طريقة خطوط 45°.',
 'التجارب تبين إن الشقوق تطلع من الأركان بزاوية 45°، فنرسم الخطوط ونشوف كل كمرة وش المنطقة اللي جنبها.',
 'أكبر عمق للمثلث في النص = L1/2 = 1.5 m، فالشدة القصوى = الحمل السطحي × 1.5.',
 'الحمل الكلي = مساحة مثلث الحمل على الكمرة.',
 'الحمل متماثل حول المنتصف، فالركيزتين يتقاسمونه بالتساوي.'],
7:[
 'L2/L1 = 1.5 أقل من 2، فالـ slab two-way ونرسم خطوط 45°.',
 'الخطوط من الأركان تلتقي على بعد L1/2 من الطرفين، ويبقى خط في النص طوله L2 − L1.',
 'العمق الأقصى L1/2 نفسه للكمرة الطويلة والقصيرة، فالشدة القصوى واحدة.',
 'الكمرة الطويلة تاخذ trapezoid: مساحته = الشدة × (القاعدة الكبيرة + الصغيرة) / 2.',
 'الكمرة القصيرة تاخذ مثلث كامل.',
 'نتأكد إن مجموع اللي أخذته الكمرات الأربع يساوي الحمل الكلي على الـ slab.'],
8:[
 'لو امتدت خطوط ردود الأفعال كلها وتلاقت في نقطة، أي قوة ما تمر بالنقطة تعمل عزم ما فيه شي يقاومه، فالمنشأ يدور.',
 'لو كل ردود الأفعال رأسية، ما فيه أي قوة أفقية تقاوم الحركة الجانبية.',
 'نعدّ: b + r = 15 وهي أقل من 2j = 16، يعني المجاهيل أقل من المعادلات، فالمنشأ ناقص تثبيت.',
 'b + r = 19 أكبر من 18 بواحد، فعندنا مجهول زيادة عن المعادلات: indeterminate من الدرجة الأولى.',
 'b + r = 2j بالضبط، والـ reactions مو متلاقية ولا متوازية، فهو determinate ومستقر.'],
9:[
 'نبدأ بالعزوم حول A لأن A فيها مجهول، فيختفي من المعادلة ويبقى B_y لحاله. نعتبر عكس عقارب الساعة موجب: B_y لفوق على يمين A يعطي عزم موجب، والـ 3 kN لتحت يعطي سالب، والـ 6 kN·m مع عقارب الساعة يعطي سالب.',
 'بعد ما عرفنا B_y، مجموع القوى الرأسية = صفر يعطي A_y مباشرة.',
 'نمشي من اليسار: القص يبدأ بـ A_y = +0.5 ويبقى ثابت لأن ما فيه حمل موزع. عند C الحمل 3 kN لتحت ينزّل القص 3. العزم المركّز عند D ما يغيّر القص أبداً.',
 'نحسب M_C من اليسار: A_y × المسافة 3 m. نعتبره موجب لأن الشد تحت (القوة لفوق على يسار القطع تعمل sagging).',
 'قبل D بشوي: A_y يعطي عزم موجب، والـ 3 kN على بعد 1.5 m يعطي سالب. المجموع −2.25 يعني الشد صار فوق.',
 'الـ couple مع عقارب الساعة يرفع الـ BMD بنفس مقداره، فنضيف 6 لـ −2.25.',
 'نتأكد من اليمين: B_y × 1.5 = 3.75. نفس الجواب، فالحل صحيح.',
 'الركائز البسيطة (pin و roller) ما تقاوم دوران، فالعزم عندها صفر.'],
10:[
 'وزن الكمرة نفسها: مساحة مقطعها × وزن الخرسانة.',
 'الـ slab سمكه 0.15 m والكمرة تحمل 4 m منه. المساحة × الوزن الحجمي.',
 'الـ floor finish حمل سطحي، فنضربه في العرض 4 m.',
 'الجدار فوق الكمرة: مقطعه × وزن الطوب.',
 'كلها dead loads ثابتة، فنجمعها في D.',
 'الـ live load سطحي، فنضربه في نفس العرض.',
 'أول combination للـ dead load لحاله بمعامل 1.4.',
 'الثانية تجمع dead و live بمعاملاتهم. نختار الأكبر لأن التصميم لازم يتحمل أسوأ حالة.'],
11:[
 'Sheltered في وسط مدينة يعني Ce = 1.3، Heated يعني Ct = 1.0، و hospital أهمية عالية I = 1.2.',
 'سقف مستوٍ، فنعوّض في معادلة 1.5.',
 'هنا pg = 1.2 أكبر من 0.96، فالحد الأدنى صار I × 0.96 (مو I × pg).',
 'قيمة المعادلة أكبر من الحد الأدنى، فنعتمدها.'],
12:[
 'Pin فيها مجهولين (أفقي ورأسي) والـ roller واحد: r = 3، جزء واحد n = 1، فالمجاهيل = المعادلات.',
 'الـ fixed فيها 3 مجاهيل (أفقي ورأسي وعزم) + roller = 4، يعني مجهول زيادة.',
 'الـ hinge يقسم الكمرة لجزئين (n = 2) ويضيف قوتين بينهم. المجموع 6 = 3 × 2.',
 'Rollerين بس يعني reactions رأسية فقط ومتوازية، وعددها أقل من 3.'],
13:[
 'L2/L1 أكبر من 2 فالـ slab one-way، والحمل يمشي للكمرات بس.',
 'الكمرة الداخلية تاخذ نص المسافة من كل جهة.',
 'الحمل السطحي × عرض الشريحة يعطي حمل منتظم على الكمرة.',
 'حمل متماثل، كل ركيزة تاخذ النص.',
 'أكبر عزم في كمرة بسيطة تحت UDL يكون في النص لأن V = 0 هناك، وقيمته wL²/8.'],
14:[
 'العزوم حول A تلغي A_y. عكس عقارب الساعة موجب: B_y لفوق يعطي موجب، والأحمال لتحت تعطي سالب. محصلة الـ UDL 24 kN في النص (3 m).',
 'ΣFy: الـ reactions لفوق تساوي مجموع الأحمال لتحت.',
 'القص يبدأ بـ A_y وينزل بميل 4 (شدة الحمل). عند الـ 12 kN ينزل فجأة 12، ثم يكمل ينزل بنفس الميل.',
 'أكبر عزم عند V = 0، وهنا صار عند x = 2 بالضبط (تحت الحمل المركّز).',
 'العزم عند الـ roller لازم يطلع صفر. لو طلع صفر يعني حساباتك صحيحة.'],
15:[
 'الـ fixed support لازم يشيل كل الحمل الرأسي لحاله: الموزع 12 + المركّز 5.',
 'العزم عند الـ fixed = مجموع عزوم الأحمال حوله. نكتبه سالب لأن الـ cantilever ينحني لتحت والشد يصير فوق (hogging).',
 'القص يبدأ 17 وينزل بميل 3 لين 5 عند الطرف، ثم الـ 5 kN ترجعه صفر.',
 'نحسب M في النص بالـ section: نبدأ من −44 ونضيف عزم A_y وننقص عزم الحمل الموزع.',
 'الطرف حر، ما فيه شي يمسكه، فالعزم صفر.'],
16:[
 'القوة المائلة لازم نحللها لمركبتين قبل أي معادلة. المركبة الرأسية = P sin60 والأفقية = P cos60.',
 'نستبدل الـ UDL بمحصلة واحدة في منتصفه، عشان نحسب العزم بسهولة.',
 'العزوم حول A تلغي A_x و A_y مع بعض. B_y لفوق موجب، والأحمال لتحت سالب.',
 'ΣFx: الحمل الأفقي 10 kN لليمين، فلازم A_x يكون 10 kN لليسار. الإشارة السالبة تعني الاتجاه عكس اللي فرضناه.',
 'بدل ما نستخدم B_y المحسوب، ناخذ العزوم حول B عشان نحصل A_y بشكل مستقل. A_y على يسار B لفوق فعزمه سالب.',
 'ΣFy ما استخدمناها في الحل، فنخليها للتحقق. لو طلعت صفر يعني الحل صحيح.'],
17:[
 'محصلة المثلث = نص القاعدة × الارتفاع، ومكانها على ثلث الطول من الطرف الكبير (يعني 2L/3 من الطرف الصفري).',
 'ما فيه أي حمل أفقي، فـ A_x = 0.',
 'الـ fixed يشيل كل الحمل الرأسي.',
 'العزم عند A يعاكس عزوم الأحمال. الأحمال تحاول تدوّر الكمرة مع عقارب الساعة، فـ M_A عكسها (موجب).',
 'نتحقق بالعزوم حول B: لو المجموع صفر يعني الحل صحيح.'],
18:[
 'الـ hinge ما يقاوم عزم، فالعزم عنده صفر. هذي معادلة إضافية تخلينا نقسم الكمرة لجزئين.',
 'نبدأ بالجزء CB لأنه فيه مجهولين بس (C_y و B_y). العزوم حول C تلغي C_y فيطلع B_y.',
 'ΣFy على CB يعطي C_y. هذي القوة اللي ينقلها الـ hinge.',
 'الـ hinge force على AC بعكس اتجاهها على CB (لتحت). مع الحمل 10 kN، A_y لازم يشيلهم.',
 'العزوم حول A: الـ 10 kN والـ 6 kN (اللي من الـ hinge) كلها لتحت، فـ M_A لازم يعاكسهم.',
 'مجموع الـ reactions لازم يساوي مجموع الأحمال على الكمرة كلها.'],
101:[
 'كل الأحمال نحولها لـ kN/m عشان نجمعها. وزن الـ slab في الجدول بوحدة غريبة: kN/m² لكل mm من السماكة.',
 'نضرب في السماكة 100 mm فيصير 1.5 kN/m²، ثم في العرض اللي تحمله الكمرة 1.8 m.',
 'اللياسة تحت الـ slab بنفس العرض، فنضرب الحمل السطحي في 1.8 m.',
 'الجدار فوق الكمرة: الوزن الحجمي × ارتفاعه × سماكته.',
 'بعد التوحيد نجمع.'],
102:[
 'الأعمدة كل 6 m في الاتجاهين، فالعمود الداخلي يشيل مربع 6 × 6 (نص المسافة من كل جهة).',
 'الشرط على K_LL × A_T. العمود داخلي فـ K_LL = 4، والناتج أكبر من 37.2 فالتخفيض مسموح.',
 'نعوّض في Eq. 1–1.',
 'العمود يشيل دور واحد بس، فالحد الأدنى 50%. نسبتنا 63% فما وصلنا للحد.',
 'الحمل المخفّض × المساحة.'],
103:[
 'نعوّض كل المعاملات = 1 (أرض مستوية، رياح بس)، فيبقى q_z يعتمد على Kz اللي يتغير مع الارتفاع.',
 'الـ roof مائل، فناخذ ارتفاع متوسط: ارتفاع الجدار + نص ارتفاع المثلث فوقه.',
 'Kz عند 9.48 m مو موجود في الجدول، فنسوي interpolation بين القيمتين اللي حوله.',
 'Eq. 1–3 فيها جزئين: ضغط خارجي يتغير لكل سطح، وضغط داخلي ثابت. الداخلي ممكن يكون موجب أو سالب، فنطلع حالتين.',
 'الجدار المواجه للرياح الوحيد اللي يتغير ضغطه مع الارتفاع، فنحسب عند كل مستوى بـ q_z حقه. Cp = 0.8 موجب يعني ضغط للداخل.',
 'الجدار الخلفي Cp سالب يعني suction (سحب للخارج)، ونستخدم q_h الثابت.',
 'الجدران الجانبية Cp = −0.7 ونستخدم q_h.',
 'نسبة h/L صغيرة (أقل من 0.25)، فالجدول يعطي Cp = −0.7 للسقف المواجه.',
 'السقف الخلفي suction أقل، Cp = −0.3.'],
104:[
 'وزن الـ slab من الجدول: 0.015 kN/m² لكل mm × 100 mm.',
 'الـ joist يشيل dead و live مع بعض.',
 'الطول 4.5 والمسافة 0.75، النسبة أكبر بكثير من 2، فالحمل يمشي في اتجاه واحد للـ joists.',
 'كل joist ياخذ شريحة عرضها = المسافة بين الـ joists.',
 'joist بسيط تحت حمل منتظم، كل طرف ياخذ النص.'],
105:[
 'L₂/L₁ = 7/4 = 1.75 أقل من 2، فالحمل يتوزع في الاتجاهين.',
 'خطوط 45° من الأركان تحدد مين ياخذ وش: الكمرة الطويلة BC تاخذ trapezoid، والقصيرة DC تاخذ مثلث.',
 'الشدة القصوى = الحمل السطحي × L₁/2، ونفسها للكمرتين.',
 'مساحة الـ trapezoid = الشدة × (7 + 3)/2. والحمل متماثل فكل ركيزة تاخذ النص.',
 'مساحة المثلث = ½ × 4 × 4.',
 'مجموع ما أخذته الكمرات = الحمل السطحي × مساحة الـ panel. لو تساووا يعني التوزيع صحيح.'],
106:[
 'الحمل السطحي = وزن الـ slab (γ × السمك) + الـ live load.',
 'النسبة 2 بالضبط. الكتاب يعتبرها two-way، والسلايدات يمكن تعتبرها one-way.',
 'عمق الـ trapezoid من كل panel = L₁/2 = 2.5 m.',
 'الـ girder داخلي: له panel فوق و panel تحت، وكل واحد يعطيه trapezoid. فالشدة تتضاعف.',
 'الحمل الكلي = مساحة الـ trapezoid. ومتماثل، فالركيزتين يتقاسمونه.'],
107:[
 'Pin = مجهولين، roller = مجهول واحد. r = 3 وجزء واحد n = 1، فـ r = 3n.',
 'Fixed = 3 مجاهيل، و rollerين = 2. المجموع 5، يعني 2 زيادة عن المعادلات.',
 'نفك عند الـ pin: جزئين. المجاهيل: fixed 3 + قوتين في الـ pin + roller 1 = 6 = 3 × 2.',
 'Fixed في الطرفين = 6، والـ pinين كل واحد 2 = 4. المجموع 10، و 3 أجزاء تعطي 9 معادلات. يبقى مجهول واحد زيادة.'],
108:[
 'الـ reactions الثلاث ما تمر بنقطة وحدة وما هي متوازية، فتقدر تقاوم أي حمل.',
 'خط رد فعل الـ roller عند A يمر بـ B، وردود فعل الـ pin عند B كمان تمر بـ B. فأي قوة ما تمر بـ B تدوّر المنشأ حولها.',
 'كل الـ rollers تعطي ردود رأسية. أي حمل أفقي ما فيه شي يقاومه.',
 'نعدّ: rollerين (2) + pinين داخليين (4) = 6... مع الأجزاء r = 7 و n = 3. 7 أقل من 9، فالمنشأ ناقص.'],
109:[
 'القوة المائلة نحللها لمركبتين. الأفقية تأشر لليسار لأن القوة نازلة لتحت ولليسار.',
 'الـ couple يعطي نفس العزم حول أي نقطة، فمكانه ما يفرق في حساب الـ reactions.',
 'المركبة الأفقية 125 لليسار، فـ A_x لازم يعاكسها لليمين.',
 'العزوم حول A تلغي A_x و A_y. عكس عقارب الساعة موجب: 216.5 لتحت على يمين A سالب. 125 لليسار فوق المحور بـ 0.3 m تدوّر عكس عقارب الساعة فموجبة. B_y لفوق موجب. والـ couple مع عقارب الساعة سالب.',
 'ΣFy يعطي A_y بعد ما عرفنا B_y.'],
110:[
 'الـ trapezoid صعب نحسب مركزه مباشرة، فنقسمه لشكلين سهلين: مثلث (10 → 0) ومستطيل (5 ثابت).',
 'محصلة المثلث على ثلث الطول من الطرف الكبير (4 m)، والمستطيل في النص (6 m).',
 'ما فيه أحمال أفقية.',
 'الـ fixed يشيل كل الحمل الرأسي.',
 'العزوم حول A: الأحمال تدوّر الكمرة مع عقارب الساعة، فـ M_A لازم عكس عقارب الساعة عشان يوازنها.'],
111:[
 'نستبدل الحمل الموزع بمحصلة في منتصفه.',
 'الـ roller على سطح أملس يدفع عمودي على السطح فقط. نحلل N_B لمركبتين بنسب المثلث 3-4-5.',
 'A فيها مجهولين، فالعزوم حولها تخليها تختفي ويبقى N_B لحاله. كل مركبة لها ذراعها: الأفقية ذراعها 1.2 m والرأسية 2.9 m.',
 'المركبة الأفقية من N_B تأشر لليسار، فـ A_x لازم لليمين.',
 'ΣFy: A_y + المركبة الرأسية من N_B = الحمل 15.'],
112:[
 'نتأكد أول إن المنشأ determinate: كل pin داخلي يزيد قوتين وجزء.',
 'نبدأ بـ BC لأنه فيه مجاهيل أقل. العزوم حول C: الـ couple مع عقارب الساعة يعطي −8، و B_y (لتحت على BC) على يسار C يعطي +2B_y.',
 'ΣFy على BC: C_y يوازن B_y.',
 'ما فيه أي حمل أفقي في المسألة.',
 'على AB، قوة B تنعكس لفوق. العزوم حول A: M_A موجب، والـ 18 kN لتحت سالب، و B_y لفوق على يمين A موجب.',
 'ΣFy على AB: A_y + B_y = 18.',
 'القص يبدأ بـ A_y = 14 وينزل بميل 6 (شدة الحمل). يصير صفر عند 14/6. بعد B ما فيه حمل فيبقى ثابت.',
 'العزم يبدأ −15 (عزم الـ fixed يخلي الشد فوق)، يطلع لأقصى قيمة عند V = 0، ويرجع صفر عند الـ hinge. بعدها ينزل لين −8، والـ couple مع عقارب الساعة يرفعه 8 فيصير صفر عند C.'],
113:[
 'نفك الـ frame عند B. القوة اللي يعطيها AB لـ BC تساوي اللي يعطيها BC لـ AB بالعكس.',
 'نبدأ بـ BC: العزوم حول C تلغي C_x و C_y، وتعطي B_y مباشرة.',
 'على AB، B_y ينعكس لتحت. العزوم حول A: الـ 8 kN عمودية على AB فذراعها 2 m بالضبط. B_x ذراعها الارتفاع 1.5 m.',
 'مركبة الـ 8 kN الأفقية = (3/5)8 = 4.8 لليمين. B_x على AB لليسار، فـ A_x يكمل الفرق.',
 'المركبة الرأسية من الـ 8 kN لتحت، و B_y لتحت كمان، فـ A_y يشيلهم.',
 'نرجع لـ BC ونكمل ΣFx و ΣFy: الحمل 6 kN يتقاسمه B_y و C_y.'],
114:[
 'الـ frame في النص يشيل 4 m من الجدار (نص المسافة لكل frame جاره). الضغط × 4 يعطي حمل لكل متر.',
 'كل حمل موزع نستبدله بمحصلة في منتصفه. على السقف المحصلة عمودية على السقف، يعني بزاوية 45°.',
 'العزوم حول A للـ frame كله تلغي A_x و A_y ويبقى C_y. القوى المائلة نحللها sin45 و cos45.',
 'ΣFy للـ frame كله يعطي A_y. طلع لتحت لأن الرياح تحاول ترفع الجهة اليسار.',
 'ناخذ AB لحاله: العزوم حول B تلغي B_x و B_y فيطلع A_x.',
 'ΣFx و ΣFy على AB تعطي قوى الـ pin عند B.',
 'نكمل ΣFx على CB ويطلع C_x.'],
115:[
 'المسافة بين الـ beams 1 m وطولها 8 m، فالحمل يمشي في اتجاه واحد للـ beams.',
 'كل beam بسيط ينقل نص حمله لكل girder. الطرفي ياخذ نص شريحة فحمله النص.',
 'الـ girder متماثل، فكل عمود ياخذ نص مجموع الأحمال.',
 'نقطع عند C وناخذ الجزء اليسار لأنه أقل قوى.',
 'ΣFy على الجزء: القوى لفوق ناقص اللي لتحت = V_C.',
 'العزوم حول C: كل حمل لتحت يسار C يعطي عزم، والعمود لفوق يعطي عكسه.'],
116:[
 'الـ reactions من المحصلة الكاملة: 135 kN عند ثلثين الطول.',
 'الحمل مثلثي، فشدته عند C بالتناسب مع المسافة.',
 'بعد القطع، الجزء AC عليه مثلث صغير. محصلته ومركزه على ثلثين المسافة من A، يعني ثلث المسافة من C.',
 'ΣFy على AC: A_y لفوق ناقص المثلث الصغير.',
 'العزوم حول C: A_y على يسار C لفوق يعطي عزم (يحسب سالب في المعادلة)، والمثلث يعطي العكس.',
 'نرسم الصورة الكاملة. أقصى عزم عند V = 0.'],
117:[
 'الـ panel كمرة بسيطة بين الـ floor beams. نحسب ردود أفعالها بالعزوم.',
 'الـ floor beams تنقل نفس القوى للـ girder.',
 'العزوم حول A على الـ girder تعطي B_y، ثم ΣFy يعطي A_y.',
 'ΣFy على الجزء AC: القوة 30 kN يسار C. النتيجة سالبة يعني V بعكس الاتجاه المفروض.',
 'العزوم حول C على AC.'],
118:[
 'الـ fixed يشيل كل الحمل. والعزم = المحصلة × بعدها عن A.',
 'نقطع عند x. الحمل مثلثي فشدته عند القطع 10x/3، ومحصلة الجزء = ½ × الشدة × x، ومكانها على x/3 من القطع.',
 'ΣFy على الجزء اليسار يعطي V كدالة في x.',
 'العزوم حول نقطة القطع S. عزم A_y و M_A والمحصلة يعطون M كدالة.',
 'الطرف حر، فلازم V و M يطلعون صفر عند x = 3.'],
119:[
 'الـ fixed يشيل كل الحمل الرأسي، والعزم = عزوم كل الأحمال حوله + الـ couple.',
 'الحمل الموزع يوقف عند 2 m، فالدالة تتغير هناك. لازم منطقتين.',
 'في المنطقة الأولى الحمل الموزع يزيد مع x، فالقص ينقص بميل 50.',
 'العزوم حول القطع.',
 'في المنطقة الثانية الحمل الموزع كله (100 kN) صار يسار القطع، فالقص ثابت.',
 'العزوم حول القطع. محصلة الـ 100 kN على بعد x₂ − 1.',
 'العزم قبل الـ couple −50، والـ couple مع عقارب الساعة يرفعه 50 فيصير صفر. ممتاز لأن الطرف حر.'],
120:[
 'نقسم الـ trapezoid لمستطيل (10) ومثلث (20). كل واحد محصلته عند مركزه.',
 'عند القطع: مستطيل كامل 10x، ومثلث شدته عند القطع 20x/9.',
 'ΣFy على الجزء اليسار.',
 'العزوم حول القطع.',
 'أكبر عزم عند V = 0، فنحل المعادلة التربيعية.',
 'نعوّض x في دالة M.'],
121:[
 'الأحمال متماثلة حول النص، فالعمودين يتقاسمون الحمل الكلي 12 kN.',
 'نتبع الأحمال من اليسار: كل قوة لتحت تنزّل القص، وكل reaction لفوق ترفعه. وبين القوى القص ثابت.',
 'التغير في العزم = مساحة الـ SFD. من A لـ B المساحة −4 × 1.5 = −6.'],
122:[
 'المحصلة 90 kN عند ثلثين الطول (6 m)، فـ B ياخذ أكثر.',
 'عند A الحمل صفر، فميل الـ SFD صفر. عند B الحمل 20، فالميل −20.',
 'نساوي القص بصفر ونحل.',
 'نعوّض في الـ section عند x = 5.20.'],
123:[
 'الـ fixed يشيل كل الحمل: المثلث 6 + المستطيل 24.',
 'عند A ما فيه قوة، فالقص يبدأ صفر. وينزل منحني في الجزء المثلثي ثم خطي.',
 'الـ couple مع عقارب الساعة عند A يخلي العزم يبدأ +15. وبعدها ينزل مع مساحة الـ SFD السالبة.'],
124:[
 'الحمل متماثل، كل ركيزة تاخذ نصه.',
 'القص ينزل من 9 ويوصل صفر في النص لأن نص الحمل يكون يسار النص.',
 'أقصى عزم في النص: A_y × 3 ناقص عزم نص الحمل (9 kN على بعد 1 m من النص).'],
125:[
 'نحسب بالعزوم: C_y طلع سالب يعني الركيزة تسحب الكمرة لتحت.',
 'القص يبدأ −20 (الحمل عند A)، يقفز +85 عند B، وينزل بميل 30.',
 'الـ couple عكس عقارب الساعة عند A يخلي العزم يبدأ −30. ينزل مع مساحة القص السالبة، ثم يرجع صفر عند C.'],
126:[
 'العزوم حول C تعطي B_y. الـ overhang يخلي B ياخذ أغلب الحمل.',
 'القص ينزل من صفر لين B، يقفز بـ B_y، وينزل ثاني. V = 0 بنسبة المثلثات.',
 'العزم عند B سالب (الـ overhang يسبب hogging). وأقصى موجب عند V = 0، وهو صغير.'],
127:[
 'عند الـ hinge B العزم صفر. فالعزوم للجزء AB حول B تعطي A_y مباشرة. الـ couple مع عقارب الساعة موجب في هذي المعادلة.',
 'القوة عند B تنتقل لـ BE لتحت. العزوم حول C على BE تعطي E_y (طلع سالب)، ثم ΣFy يعطي C_y.',
 'نتبع الأحمال: القص ينزل بميل 20، يقفز −30 عند الحمل المركّز، و +205 عند C.',
 'العزم يبدأ 150 من الـ couple، أقصاه عند V = 0، صفر عند الـ hinge، وأقل قيمة عند C.'],
128:[
 'الحمل الأفقي الوحيد 15 kN، و A roller ما يقاوم أفقي، فـ B لازم يشيله كله.',
 'العزوم حول B تلغي B_x و B_y فيطلع A_y.',
 'ΣFy: B_y طلع لتحت.',
 'في العمود تحت الـ 15 kN ما فيه قوة عمودية على العمود، فالعزم صفر. فوقها يزيد خطياً.',
 'الـ rigid joint ينقل العزم كامل من العمود للكمرة. والـ pin عند B عزمه صفر.'],
129:[
 'الرياح أفقية على ارتفاع 3 m. المحصلة في منتصف الارتفاع.',
 'العزوم حول A تلغي A_x و A_y فيطلع C_y.',
 'ΣFx يعطي A_x. و A_y طلع سالب يعني لتحت.',
 'BC كمرة عادية: القص من اليسار −2.5 ثم ينزل 80. العزم عند B من اليمين.',
 'الحمل الأفقي على العضو المائل لازم نحلله: عمودي على العضو (يعمل shear و moment) وموازي له (يعمل axial).',
 'القص عند A = مجموع مركبات الـ reactions العمودية على العضو.',
 'العزم دالة تربيعية في s، وأقصاه عند V = 0. وعند B لازم يطلع نفس عزم BC (170).'],
130:[
 'بدل ما نرسم الـ BMD مرة وحدة، نقسم الأحمال ونرسم كل واحد لحاله ونجمع.',
 'الـ couple عكس عقارب الساعة يعطي عزم ثابت −90 على الطول كله.',
 'A_y لفوق يعطي عزم يزيد خطياً من A.',
 'الحمل المثلثي يعطي منحنى من الدرجة الثالثة (cubic) سالب.',
 'نجمع الثلاثة. عند B المجموع صفر، وهذا يأكد صحة الحل.']
};

/* ================= شرح مفصّل لخطوات الفصل الرابع (داخل مساحة الحل) =================
   كل خطوة = قائمة نقاط. النقطة اللي تبدأ بـ = معادلة. */
const DET={
9:[
 ['نختار نقطة العزوم A، لأن A pin فيها مجهولين (A_x و A_y) وكلهم يمرون بـ A، فعزمهم حولها صفر. يبقى مجهول واحد بس: B_y.',
  'اتفاقية الإشارة: الدوران عكس عقارب الساعة (↺) موجب.',
  'B_y لفوق وعلى يمين A بمسافة 6 m: يدوّر الكمرة حول A عكس عقارب الساعة، فهو موجب: +B_y(6).',
  'الـ 3 kN لتحت وعلى يمين A بمسافة 3 m: يدوّر مع عقارب الساعة، فهو سالب: −3(3).',
  'الـ couple 6 kN·m مع عقارب الساعة، فهو سالب: −6. والـ couple ما له ذراع، قيمته نفسها حول أي نقطة.',
  '=ΣM_A = 0:   +B_y(6) − 3(3) − 6 = 0   →   B_y = 15/6 = 2.5 kN',
  'الجواب طلع موجب، يعني الاتجاه اللي فرضناه (لفوق ↑) صحيح.'],
 ['نجمع القوى الرأسية ونعتبر اللي لفوق موجب.',
  '=ΣFy = 0:   A_y + 2.5 − 3 = 0   →   A_y = 0.5 kN ↑',
  'الـ couple ما يدخل في مجموع القوى لأنه عزم مو قوة.',
  'وما فيه أحمال أفقية، فـ A_x = 0.'],
 ['نرسم الـ SFD من اليسار لليمين، ونبدأ من صفر.',
  'عند A: قوة لفوق 0.5، فالـ V يقفز لفوق بنفس المقدار ويصير +0.5.',
  'من A إلى C ما فيه حمل موزع (w = 0)، وميل الـ SFD = −w = 0، يعني خط أفقي.',
  'عند C: قوة 3 kN لتحت، فالـ V ينزل 3:',
  '=V = 0.5 − 3 = −2.5 kN',
  'عند D: الـ couple ما يغيّر الـ V أبداً، لأنه عزم وما يدخل في ΣFy. فيكمل −2.5.',
  'عند B: الـ B_y = 2.5 لفوق يرجّعه صفر: −2.5 + 2.5 = 0 ✓. لو ما رجع صفر يكون فيه غلط في الـ reactions.'],
 ['القاعدة: قيمة M عند أي نقطة = قيمتها عند النقطة اللي قبلها + المساحة تحت الـ SFD بينهم (لأن dM/dx = V).',
  'M_A = 0 لأن A pin ما يقاوم دوران.',
  'المساحة تحت الـ SFD من A إلى C مستطيل:',
  '=M_C = 0 + (0.5)(3) = +1.5 kN·m',
  'تأكيد بالقطع: نقطع عند C وناخذ الجزء اليسار، ما عليه إلا A_y على بعد 3 m: M_C = 0.5 × 3 = 1.5 ✓.',
  'موجب يعني الشد تحت (sagging). ولأن V ثابت، الـ BMD من A إلى C خط مستقيم طالع.'],
 ['من C إلى D الـ V = −2.5 على طول 1.5 m، فالمساحة سالبة:',
  '=M_D(before) = 1.5 + (−2.5)(1.5) = 1.5 − 3.75 = −2.25 kN·m',
  'تأكيد بالقطع قبل D مباشرة (الجزء اليسار): A_y لفوق على بعد 4.5 m يعطي موجب، والـ 3 kN لتحت على بعد 1.5 m يعطي سالب:',
  '=M = 0.5(4.5) − 3(1.5) = −2.25 ✓',
  'سالب يعني الشد فوق (hogging). والخط نازل لأن V سالب.'],
 ['عند D فيه couple مركّز، فالـ BMD يصير فيه قفزة (jump) بمقدار الـ couple.',
  'القاعدة: couple مع عقارب الساعة (↻) يخلي الـ BMD يقفز لفوق (+)، وcouple عكس عقارب الساعة (↺) يخليه ينزل (−). هذا لما نمشي من اليسار لليمين.',
  'ليش؟ لو قطعنا بعد D وأخذنا الجزء اليسار، الـ couple صار داخل الجزء، ومعادلة العزوم حول القطع تعطي M = 0.5x − 3(x − 3) + 6، يعني +6 زيادة.',
  '=M_D(after) = −2.25 + 6 = +3.75 kN·m'],
 ['نتأكد من الجهة الثانية: نقطع بعد D مباشرة وناخذ الجزء اليمين، لأن ما عليه إلا قوة وحدة.',
  'B_y = 2.5 لفوق على بعد 1.5 m من القطع، والقوة لفوق تسبب sagging، يعني موجب:',
  '=M_D(after) = 2.5 × 1.5 = +3.75 kN·m ✓',
  'ومن D إلى B المساحة تحت الـ SFD = (−2.5)(1.5) = −3.75، فـ M_B = 3.75 − 3.75 = 0 ✓.'],
 ['A (pin) و B (roller) ما يقاومون دوران، فالـ M عندهم صفر.',
  '=M_A = M_B = 0',
  'الـ BMD كله خطوط مستقيمة لأن V ثابت في كل جزء: يطلع لـ +1.5، ينزل لـ −2.25، يقفز لـ +3.75، وينزل لصفر.']
],
14:[
 ['أول شي نحوّل الحمل الموزع لقوة مركّزة (المحصلة): W = w × L = 4 × 6 = 24 kN، ومكانها في نص الحمل عند x = 3 m.',
  'نأخذ العزوم حول A عشان A_x و A_y يختفون. ↺ موجب.',
  'B_y لفوق على يمين A بـ 6 m يعطي موجب. الـ 24 kN لتحت على بعد 3 m يعطي سالب، والـ 12 kN على بعد 2 m يعطي سالب.',
  '=ΣM_A = 0:   6B_y − 24(3) − 12(2) = 0   →   B_y = 96/6 = 16 kN ↑'],
 ['=ΣFy = 0:   A_y + 16 − 24 − 12 = 0   →   A_y = 20 kN ↑',
  'تأكيد بالعزوم حول B: −20(6) + 24(3) + 12(4) = −120 + 72 + 48 = 0 ✓.'],
 ['عند A: الـ V يقفز لفوق بمقدار A_y، يعني +20.',
  'بين A و C فيه w = 4 لتحت، فالـ SFD خط مائل ميله −4 (ينزل 4 كل متر).',
  '=V(2⁻) = 20 − 4(2) = 12 kN',
  'عند C قوة 12 kN لتحت، فالـ V ينزل 12:',
  '=V(2⁺) = 12 − 12 = 0',
  'من C إلى B نفس الميل −4 على طول 4 m:',
  '=V(6⁻) = 0 − 4(4) = −16 kN',
  'عند B: B_y = 16 لفوق يرجّعه صفر ✓.'],
 ['أكبر M يكون في المكان اللي V فيه صفر أو يغيّر إشارته، لأن dM/dx = V. هنا V يتحول من موجب إلى صفر وسالب عند x = 2 m.',
  'بالمساحات: المساحة تحت الـ SFD من 0 إلى 2 شبه منحرف:',
  '=M(2) = ½(20 + 12)(2) = 32 kN·m',
  'تأكيد بالقطع عند x = 2: الحمل الموزع على أول 2 m = 8 kN ومحصلته على بعد 1 m من القطع:',
  '=M(2) = 20(2) − 8(1) = 32 kN·m ✓',
  'الـ BMD منحنى (parabola) لأن V خطي، وشكله مقوّس لتحت لأن الحمل لتحت.'],
 ['من C إلى B المساحة تحت الـ SFD مثلث سالب:',
  '=M_B = 32 + ½(−16)(4) = 32 − 32 = 0 ✓',
  'ولازم يطلع صفر لأن B roller، وهذا يأكد إن كل الحل صحيح.']
],
15:[
 ['الـ fixed support فيه 3 مجاهيل: A_x و A_y و M_A. وما فيه أحمال أفقية، فـ A_x = 0.',
  'محصلة الحمل الموزع: 3 × 4 = 12 kN عند x = 2 m.',
  '=ΣFy = 0:   A_y − 12 − 5 = 0   →   A_y = 17 kN ↑'],
 ['نأخذ العزوم حول A (↺ موجب). الحملين لتحت على يمين A، فكلهم يدورون مع عقارب الساعة ويعطون سالب، والـ M_A لازم يعادلهم:',
  '=ΣM_A = 0:   M_A − 12(2) − 5(4) = 0   →   M_A = 44 kN·m ↺',
  'في الـ BMD نكتبه −44: الـ cantilever ينحني لتحت، فالألياف اللي فوق مشدودة (tension top)، وهذا سالب في اتفاقية الـ BMD.'],
 ['عند A: الـ V يقفز لفوق بمقدار A_y، يعني +17.',
  'بعدها ينزل بميل −3 على طول 4 m:',
  '=V(4⁻) = 17 − 3(4) = 5 kN',
  'عند B القوة 5 kN لتحت ترجّعه صفر ✓.',
  'الـ V موجب في كل الطول، يعني الـ M يزيد باستمرار من −44 لين يوصل صفر.'],
 ['الـ V عند النص: V(2) = 17 − 3(2) = 11.',
  'المساحة تحت الـ SFD من 0 إلى 2 شبه منحرف:',
  '=M(2) = −44 + ½(17 + 11)(2) = −44 + 28 = −16 kN·m',
  'تأكيد بالقطع: −44 + 17(2) − 3(2)(1) = −16 ✓.'],
 ['المساحة من 2 إلى 4: ½(11 + 5)(2) = 16.',
  '=M_B = −16 + 16 = 0 ✓',
  'B طرف حر ما عليه couple، فالـ M عنده صفر. والـ BMD منحنى، وأكبر قيمة عددية له عند الـ fixed support.']
],
115:[
 ['نشيك نوع البلاطة: L₂/L₁ = 8/1 = 8 أكبر من 2، يعني one-way: الحمل يمشي بالاتجاه القصير (1 m) للـ beams.',
  'كل beam داخلي ياخذ عرض 1 m (نص المسافة من كل جهة: 0.5 + 0.5):',
  '=w = 1.8 × 1 = 1.8 kN/m',
  'الـ beam اللي على الطرف ياخذ نص متر بس، فـ w = 0.9 kN/m.'],
 ['كل beam هو simply supported على 8 m، ويعطي نص حمله لكل طرف، يعني للـ girder الأمامي:',
  '=interior: 1.8 × 8 / 2 = 7.2 kN      edge: 0.9 × 8 / 2 = 3.6 kN',
  'هذي القوى تنزل على الـ girder كقوى مركّزة كل 1 m.'],
 ['عدد الـ beams = 13 (11 داخلي + 2 طرفي)، ومجموع الحمل: 2(3.6) + 11(7.2) = 86.4 kN.',
  'الحمل متماثل والعمودين متماثلين، فكل عمود ياخذ النص:',
  '=R = 86.4 / 2 = 43.2 kN ↑'],
 ['نقطع الـ girder عند C (x = 2.4 m) وناخذ الجزء اليسار، لأنه أقصر وقواه أقل.',
  'القوى على الجزء اليسار: 3.6 عند x = 0، و 7.2 عند x = 1، و 7.2 عند x = 2، والعمود 43.2 لفوق عند x = 1.2.',
  'نفرض V_C و M_C بالاتجاه الموجب: V_C لتحت على الوجه اليمين، و M_C عكس عقارب الساعة على الوجه اليمين (sagging).'],
 ['=ΣFy = 0:   43.2 − 3.6 − 7.2 − 7.2 − V_C = 0   →   V_C = 25.2 kN',
  'موجب، يعني اتجاهه مثل ما فرضنا.'],
 ['ناخذ العزوم حول C عشان V_C يختفي (يمر بالنقطة).',
  'المسافات من C: الـ 3.6 على 2.4 m، والـ 7.2 الأولى على 1.4 m، والثانية على 0.4 m، والعمود على 1.2 m.',
  'القوة لتحت على يسار C تدوّر الجزء حول C عكس عقارب الساعة، فهي موجبة. والعمود لفوق يدوّر مع عقارب الساعة، فهو سالب.',
  '=M_C + 7.2(0.4) + 7.2(1.4) + 3.6(2.4) − 43.2(1.2) = 0',
  '=M_C = 51.84 − 2.88 − 10.08 − 8.64 = 30.2 kN·m']
],
116:[
 ['محصلة المثلث = ½ × 45 × 6 = 135 kN. مكانها على ثلث الطول من الطرف الكبير (B)، يعني على x = 4 m من A.',
  '=ΣM_A = 0:   6B_y − 135(4) = 0   →   B_y = 90 kN ↑',
  '=ΣFy = 0:   A_y = 135 − 90 = 45 kN ↑'],
 ['شدة الحمل تزيد خطياً من 0 عند A، فنستخدم تشابه المثلثات:',
  '=w(x) = 45x / 6 = 7.5x   →   w_C = 7.5(2) = 15 kN/m'],
 ['على الجزء AC فيه مثلث صغير: قاعدته 2 m وارتفاعه 15 kN/m.',
  '=W_AC = ½(15)(2) = 15 kN',
  'مكانه على ثلثين المسافة من رأس المثلث (A)، يعني 1.333 m من A، و 0.667 m من C.'],
 ['ناخذ الجزء اليسار (A إلى C) ونفرض V_C لتحت.',
  '=ΣFy = 0:   45 − 15 − V_C = 0   →   V_C = 30 kN'],
 ['العزوم حول C: A_y لفوق على يسار C بـ 2 m يدور مع عقارب الساعة (سالب)، والـ 15 kN لتحت على يسار C بـ 0.667 m يدور عكسها (موجب).',
  '=−45(2) + 15(0.667) + M_C = 0   →   M_C = 90 − 10 = 80 kN·m'],
 ['للرسم الكامل: V(x) = 45 − 3.75x²، وأكبر M حيث V = 0:',
  '=3.75x² = 45   →   x = √12 = 3.46 m',
  '=M_max = 45(3.46) − 1.25(3.46)³ = 103.9 kN·m']
],
117:[
 ['الـ panel DE كأنه beam بسيط طوله 1.5 m. الـ 45 kN على بعد 0.5 m من D، يعني 1 m من E.',
  '=ΣM_E = 0:   D(1.5) − 45(1) = 0   →   D = 30 kN',
  '=ΣM_D = 0:   E(1.5) − 45(0.5) = 0   →   E = 15 kN',
  'تأكيد: 30 + 15 = 45 ✓. الطرف القريب من الحمل ياخذ أكثر.'],
 ['الـ floor beams ينقلون هالقوى للـ girder بنفس القيمة، بس اتجاهها لتحت على الـ girder (الفعل ورد الفعل).',
  '=30 kN @ x = 3 m      15 kN @ x = 4.5 m'],
 ['الـ girder AB طوله 6 m. العزوم حول A:',
  '=6B_y − 30(3) − 15(4.5) = 0   →   B_y = 157.5/6 = 26.25 kN ↑',
  '=A_y = 45 − 26.25 = 18.75 kN ↑'],
 ['نقطع عند C (x = 3.75) وناخذ الجزء AC. عليه A_y والـ 30 kN بس، لأن الـ 15 kN عند x = 4.5 يمين القطع.',
  '=ΣFy = 0:   18.75 − 30 − V_C = 0   →   V_C = −11.25 kN',
  'الإشارة سالبة يعني V_C اتجاهه عكس اللي فرضناه.'],
 ['العزوم حول C: A_y على يسار C بـ 3.75 m لفوق (سالب)، والـ 30 kN على يسار C بـ 0.75 m لتحت (موجب).',
  '=−18.75(3.75) + 30(0.75) + M_C = 0   →   M_C = 70.31 − 22.5 = 47.8 kN·m']
],
118:[
 ['محصلة المثلث = ½(10)(3) = 15 kN، ومكانها على ثلثين الطول من A (عند الطرف الكبير)، يعني x = 2 m.',
  '=ΣFy:   A_y = 15 kN ↑',
  '=ΣM_A:   M_A − 15(2) = 0   →   M_A = 30 kN·m ↺'],
 ['نقطع على مسافة x من A وناخذ الجزء اليسار، لأن قواه معروفة.',
  'الشدة عند القطع بتشابه المثلثات: w = 10x/3.',
  'المثلث اللي على الجزء: محصلته ½(10x/3)(x) = 5x²/3، ومكانها على x/3 من القطع.'],
 ['=ΣFy = 0:   15 − 5x²/3 − V = 0   →   V = 15 − 1.667x²'],
 ['العزوم حول القطع (↺ موجب):',
  'M_A عكس عقارب الساعة: +30. A_y لفوق على يسار القطع بـ x: مع عقارب الساعة: −15x. المثلث لتحت على يسار القطع بـ x/3: عكس عقارب الساعة: +(5x²/3)(x/3).',
  '=30 − 15x + 0.556x³ + M = 0   →   M = −30 + 15x − 0.556x³'],
 ['عند الطرف الحر (x = 3) لازم V و M يطلعون صفر:',
  '=V = 15 − 1.667(9) = 0 ✓      M = −30 + 45 − 0.556(27) = 0 ✓']
],
119:[
 ['محصلة الحمل الموزع = 50 × 2 = 100 kN عند x = 1 m.',
  '=ΣFy:   A_y = 100 + 50 = 150 kN ↑',
  'العزوم حول A (↺ موجب): الحملين لتحت (سالب)، والـ couple مع عقارب الساعة (سالب):',
  '=M_A − 100(1) − 50(3) − 50 = 0   →   M_A = 300 kN·m ↺'],
 ['نقسم الكمرة لمنطقتين، لأن الحمل الموزع يوقف عند x = 2 m. وأي تغيّر في الحمل (بداية أو نهاية حمل موزع، قوة مركّزة، couple) يحتاج معادلة جديدة.',
  '=Region 1: 0 ≤ x₁ < 2      Region 2: 2 < x₂ ≤ 3'],
 ['قطع في المنطقة 1، والجزء اليسار عليه: A_y، و M_A، وحمل موزع 50x₁.',
  '=ΣFy:   150 − 50x₁ − V = 0   →   V = 150 − 50x₁'],
 ['العزوم حول القطع: +300 (M_A) و −150x₁ (A_y) و +50x₁(x₁/2) (الحمل، محصلته في نصه) و +M = 0:',
  '=M = 150x₁ − 25x₁² − 300'],
 ['قطع في المنطقة 2: الحمل الموزع كله (100 kN) صار يسار القطع:',
  '=V = 150 − 100 = 50 kN   (constant)'],
 ['العزوم: +300 − 150x₂ + 100(x₂ − 1) + M = 0:',
  '=M = 50x₂ − 200'],
 ['عند x = 3: M = 50(3) − 200 = −50 قبل الـ couple مباشرة.',
  'الـ couple مع عقارب الساعة يقفّز الـ BMD لفوق بمقدار 50، فيصير −50 + 50 = 0 ✓، ولازم يكون صفر لأنه طرف حر.']
],
120:[
 ['نقسم شبه المنحرف لمستطيل ومثلث:',
  '=Rectangle: 10 × 9 = 90 kN @ 4.5 m      Triangle: ½(20)(9) = 90 kN @ 6 m',
  '=ΣM_A:   9B_y − 90(4.5) − 90(6) = 0   →   B_y = 105 kN ↑',
  '=ΣFy:   A_y = 180 − 105 = 75 kN ↑'],
 ['نقطع على مسافة x. الجزء اليسار عليه: مستطيل 10x محصلته على x/2 من القطع، ومثلث شدته عند القطع 20x/9.',
  '=W_triangle = ½(20x/9)(x) = 1.11x²   @ x/3 from the cut'],
 ['=ΣFy:   75 − 10x − 1.11x² − V = 0   →   V = 75 − 10x − 1.11x²'],
 ['العزوم حول القطع:',
  '=−75x + 10x(x/2) + 1.11x²(x/3) + M = 0   →   M = 75x − 5x² − 0.370x³'],
 ['أكبر M حيث V = 0. نحل المعادلة التربيعية وناخذ الجذر الموجب:',
  '=1.11x² + 10x − 75 = 0   →   x = [−10 + √(100 + 333)] / 2.22 = 4.87 m'],
 ['نعوّض x = 4.87 في معادلة M:',
  '=M_max = 365.3 − 118.6 − 42.7 ≈ 204 kN·m']
],
121:[
 ['مجموع الأحمال = 3 × 4 = 12 kN، والأحمال والـ supports متماثلة، فكل عمود ياخذ النص:',
  '=B_y = D_y = 12 / 2 = 6 kN ↑'],
 ['ما فيه حمل موزع، فالـ SFD كله خطوط أفقية، ويقفز عند كل قوة. نمشي من اليسار:',
  '=A: −4      B: −4 + 6 = 2      C: 2 − 4 = −2      D: −2 + 6 = 4      E: 4 − 4 = 0 ✓'],
 ['M_A = 0 لأنه طرف حر. نجمع المساحات تحت الـ SFD (كل جزء طوله 1.5 m):',
  '=M_B = 0 + (−4)(1.5) = −6      M_C = −6 + (2)(1.5) = −3',
  '=M_D = −3 + (−2)(1.5) = −6      M_E = −6 + (4)(1.5) = 0 ✓',
  'الـ BMD خطوط مستقيمة لأن V ثابت، وكله سالب، يعني الشد فوق على الطول كله.']
],
122:[
 ['محصلة المثلث = ½(20)(9) = 90 kN على ثلثين الطول من A، يعني x = 6 m.',
  '=ΣM_A:   9B_y − 90(6) = 0   →   B_y = 60 kN ↑      A_y = 30 kN ↑'],
 ['الـ V عند أي x: V = 30 − ½(20x/9)(x) = 30 − 1.11x².',
  'ميل الـ SFD = −w. عند A الحمل صفر، فالميل صفر (يبدأ أفقي). وعند B الحمل 20، فالميل كبير. لذلك الـ SFD منحنى.',
  '=V(0) = 30      V(9) = 30 − 90 = −60   + B_y → 0'],
 ['=30 − 1.11x² = 0   →   x² = 27   →   x = 5.20 m'],
 ['M(x) = 30x − 1.11x²(x/3) = 30x − 0.370x³. نعوّض x = 5.20:',
  '=M_max = 30(5.20) − 0.370(5.20)³ = 156 − 52 = 104 kN·m',
  'و M_A = M_B = 0 لأنهم supports بسيطة. والـ BMD منحنى من الدرجة الثالثة.']
],
123:[
 ['المثلث: ½(8)(1.5) = 6 kN، مكانه على 1 m من A. المستطيل: 8 × 3 = 24 kN في نصه (x = 3).',
  '=ΣFy:   B_y = 6 + 24 = 30 kN ↑',
  'العزوم حول B (↺ موجب): الأحمال لتحت على يسار B موجبة، والـ couple مع عقارب الساعة سالب:',
  '=6(3.5) + 24(1.5) − 15 + M_B = 0   →   M_B = −42   →   42 kN·m ↻',
  'في الـ BMD قيمته −42 (الشد فوق عند الـ fixed support).'],
 ['عند A ما فيه قوة، فالـ V يبدأ صفر (والـ couple ما يأثر على V).',
  'أول 1.5 m الحمل مثلثي، فالـ V منحنى: V = −2.667x²، يعني V(1.5) = −6.',
  'بعدها الحمل ثابت 8، فالـ V خط بميل −8:',
  '=V(4.5) = −6 − 8(3) = −30   + B_y → 0 ✓'],
 ['عند A فيه couple مع عقارب الساعة، فالـ BMD يبدأ بقفزة لفوق: M(0) = +15.',
  'المساحة تحت الـ SFD أول 1.5 m = −3، والمساحة بعدها شبه منحرف ½(−6 − 30)(3) = −54:',
  '=M(1.5) = 15 − 3 = 12      M(4.5) = 12 − 54 = −42 ✓',
  'طلع نفس الـ M_B اللي حسبناه، وهذا تأكيد إن الحل صحيح.']
],
124:[
 ['محصلة المثلث = ½(6)(6) = 18 kN في النص، والكمرة متماثلة، فكل support ياخذ النص:',
  '=A_y = B_y = 9 kN ↑'],
 ['أول نص: الحمل w = 2x، فالـ V = 9 − x². عند النص (x = 3):',
  '=V(3) = 9 − ½(6)(3) = 0',
  'النص الثاني صورة معكوسة، فالـ V ينزل لين −9 عند B.'],
 ['أكبر M في النص لأن V = 0 هناك. نقطع عند النص: المثلث اليسار محصلته 9 kN على بعد 1 m من القطع (ثلث 3 m من الطرف الكبير):',
  '=M_max = 9(3) − 9(1) = 18 kN·m',
  'أو بالمساحة تحت الـ SFD من 0 إلى 3: 27 − 9 = 18 ✓.']
],
125:[
 ['العزوم حول C (↺ موجب):',
  'الـ 20 kN لتحت على يسار C بـ 4 m: موجب. الـ couple عكس عقارب الساعة: موجب. الحمل الموزع 30 × 2 = 60 kN على يسار C بـ 1 m: موجب. B_y لفوق على يسار C بـ 2 m: سالب.',
  '=20(4) + 30 + 60(1) − 2B_y = 0   →   B_y = 85 kN ↑',
  '=ΣFy:   85 + C_y − 20 − 60 = 0   →   C_y = −5   →   5 kN ↓',
  'الإشارة السالبة تعني إن C_y اتجاهه لتحت، مو لفوق مثل ما فرضنا.'],
 ['عند A: القوة 20 لتحت، فالـ V = −20 ويبقى ثابت لين B (ما فيه حمل موزع).',
  'عند B يقفز +85:',
  '=V = −20 + 85 = 65',
  'من B إلى C ينزل بميل −30 على 2 m:',
  '=V(C) = 65 − 60 = 5   − 5 → 0 ✓'],
 ['عند A فيه couple عكس عقارب الساعة، فالـ BMD يبدأ بقفزة لتحت: M(0) = −30.',
  'المساحة من A إلى B: (−20)(2) = −40:',
  '=M_B = −30 − 40 = −70',
  'المساحة من B إلى C شبه منحرف: ½(65 + 5)(2) = 70:',
  '=M_C = −70 + 70 = 0 ✓'],
],
126:[
 ['محصلة الحمل = 10 × 1.75 = 17.5 kN في النص، يعني على 0.875 m من C.',
  'العزوم حول C: B_y على يسار C بـ 1 m لفوق (سالب)، والحمل لتحت على يسار C (موجب):',
  '=−B_y(1) + 17.5(0.875) = 0   →   B_y = 15.31 kN ↑',
  '=C_y = 17.5 − 15.31 = 2.19 kN ↑'],
 ['من A (طرف حر) الـ V يبدأ صفر وينزل بميل −10:',
  '=V(B⁻) = −10(0.75) = −7.5',
  'عند B يقفز +15.31: V = 7.81. وبعدها ينزل بميل −10 على 1 m لين −2.19، والـ C_y يرجّعه صفر.',
  'مكان V = 0: 7.81 − 10x = 0:',
  '=x = 0.781 m after B   (x = 1.531 m from A)'],
 ['M_A = 0 لأنه طرف حر. المساحة من A إلى B مثلث سالب:',
  '=M_B = ½(−7.5)(0.75) = −2.81 kN·m',
  'المساحة من B لين V = 0 مثلث موجب:',
  '=M_max = −2.81 + ½(7.81)(0.781) = 0.239 kN·m',
  'وبعدها المثلث السالب الصغير ½(−2.19)(0.219) يرجّع M صفر عند C ✓.']
],
127:[
 ['عند الـ hinge B الـ M = 0، فنفك الكمرة عنده وناخذ الجزء AB لحاله.',
  'محصلة الحمل على AB = 20 × 5 = 100 kN عند 2.5 m. العزوم حول B (↺ موجب):',
  '=−A_y(5) − 150 + 100(2.5) = 0   →   A_y = 20 kN ↑',
  '=ΣFy:   20 + B_y − 100 = 0   →   B_y = 80 kN ↑ على AB',
  'نفس القوة تنتقل للجزء BE بالعكس، يعني 80 kN لتحت عند B.'],
 ['الجزء BE: عليه 80 لتحت عند B (x = 5)، و 30 kN عند x = 6، والمثلث ½(30)(6) = 90 kN في نصه عند D (x = 11).',
  'العزوم حول C (x = 8): الـ 80 و الـ 30 على يسار C (موجب)، والـ 90 على يمين C (سالب)، و E_y على يمين C لفوق (موجب):',
  '=80(3) + 30(2) − 90(3) + 6E_y = 0   →   E_y = −5   →   5 kN ↓',
  '=ΣFy:   C_y − 5 − 80 − 30 − 90 = 0   →   C_y = 205 kN ↑'],
 ['نرسم الـ SFD للكمرة كلها من اليسار:',
  '=A: +20      B: 20 − 100 = −80      x = 6: −80 − 30 = −110',
  '=C: −110 + 205 = 95      D: 95 − 45 = 50      E: 50 − 45 = 5   − 5 → 0',
  'الـ hinge ما يغيّر V. ومن C إلى D ينقص بمساحة نص المثلث = ½(30)(3) = 45.',
  'V = 0 على AB: 20 − 20x = 0، يعني x = 1 m.'],
 ['عند A couple مع عقارب الساعة، فالـ BMD يبدأ بقفزة لفوق: M(0) = +150.',
  '=M(1) = 150 + ½(20)(1) = 160   (M_max)',
  '=M(5) = 160 + ½(−80)(4) = 0 ✓   (hinge → M = 0)',
  '=M(6) = 0 − 80(1) = −80      M_C = −80 − 110(2) = −300',
  '=M_D = −300 + 240 = −60      M_E = −60 + 60 = 0 ✓']
],
128:[
 ['A roller يعطي قوة رأسية بس، فالوحيد اللي يقاوم الـ 15 kN الأفقية هو B_x:',
  '=ΣFx = 0:   B_x = 15 kN ←'],
 ['العزوم حول B (↺ موجب). الـ 15 kN على بعد 1.5 m تحت مستوى B (3.3 − 1.8).',
  'A_y لفوق على يسار B بـ 4.5 m: سالب. الـ 25 kN لتحت عند C على يسار B بـ 4.5 m: موجب. الـ 15 kN لليمين تحت B: تدوّر عكس عقارب الساعة: موجب.',
  '=−A_y(4.5) + 25(4.5) + 15(1.5) = 0   →   A_y = 135/4.5 = 30 kN ↑'],
 ['=ΣFy = 0:   30 − 25 + B_y = 0   →   B_y = −5   →   5 kN ↓'],
 ['العمود AC: نمشي من A لفوق. الـ A_y على محور العمود، فهي قوة محورية وما تسوي shear.',
  'تحت الـ 15 kN ما فيه shear، فالـ M = 0 من A لين 1.8 m.',
  'فوق الـ 15 kN الـ shear = 15، والـ M يزيد خطياً على 1.5 m:',
  '=M_C = 15 × 1.5 = 22.5 kN·m   →   −22.5',
  'نكتبه −22.5 لأن الشد على الوجه الخارجي للزاوية (يسار العمود وفوق الكمرة).'],
 ['الـ joint عند C rigid، فينقل نفس الـ moment للكمرة CB.',
  'الكمرة CB ما عليها أحمال بين C و B، فالـ V ثابت = B_y = 5 kN، والـ M خط مستقيم من −22.5 لين صفر عند الـ pin B.',
  '=Check: 5 × 4.5 = 22.5 ✓']
],
129:[
 ['حمل الرياح 40 kN/m أفقي على ارتفاع AB (3 m):',
  '=W = 40 × 3 = 120 kN →   @ 1.5 m height'],
 ['العزوم حول A (↺ موجب): C_y لفوق على يمين A بـ 8 m: موجب. الـ 120 kN لليمين فوق A بـ 1.5 m: مع عقارب الساعة: سالب. الـ 80 kN لتحت على يمين A بـ 6 m: سالب.',
  '=8C_y − 120(1.5) − 80(6) = 0   →   C_y = 660/8 = 82.5 kN ↑'],
 ['=ΣFx:   A_x + 120 = 0   →   A_x = 120 kN ←',
  '=ΣFy:   A_y + 82.5 − 80 = 0   →   A_y = −2.5   →   2.5 kN ↓'],
 ['العضو BC: من C نمشي لليسار. يمين أي قطع بين النص و C ما فيه إلا C_y = 82.5، فالـ V = −82.5. وبعد ما نعدّي الـ 80 يصير الصافي 2.5، فالـ V = −2.5.',
  '=M(mid) = 82.5 × 2 = 165      M_B = 82.5(4) − 80(2) = 170 kN·m'],
 ['العضو AB مائل: طوله 5 m، و sinθ = 3/5 = 0.6، و cosθ = 4/5 = 0.8.',
  'الـ 120 kN موزعة على طول العضو: 120 / 5 = 24 kN/m. نحللها:',
  '=⊥ member: 24(0.6) = 14.4 kN/m      ∥ member: 24(0.8) = 19.2 kN/m',
  'العمودي يسوي shear و moment، والموازي قوة محورية بس.'],
 ['الـ V عند A = مجموع مركبات الـ reactions العمودية على AB: الـ 120 تعطي 120(0.6) = 72، والـ 2.5 تعطي 2.5(0.8) = 2 بالعكس:',
  '=V_A = 72 − 2 = 70 kN      V(s) = 70 − 14.4s',
  '=V = 0   →   s = 70/14.4 = 4.86 m'],
 ['=M(s) = 70s − 14.4s²/2 = 70s − 7.2s²',
  '=M_max = M(4.86) = 170.1 kN·m      M(5) = 350 − 180 = 170 kN·m',
  'طلع M_B نفسه من العضوين (170)، وهذا تأكيد لأن الـ joint عند B rigid.']
],
130:[
 ['فكرة الـ superposition: نعتبر الكمرة cantilever مثبتة عند B، ونحط عليها كل حمل لحاله، ونعامل A_y = 57.5 كأنه حمل لفوق.',
  'كل حمل لحاله يعطي BMD بسيط، وبعدين نجمعهم.'],
 ['الـ couple 90 kN·m عكس عقارب الساعة عند الطرف الحر: يعطي moment ثابت على الطول كله.',
  '=M₁ = −90 kN·m'],
 ['A_y = 57.5 لفوق عند x = 1.5: القوة لفوق على يسار القطع تسبب sagging، يعني موجب:',
  '=M₂ = 57.5(x − 1.5)   →   at B: 57.5 × 4.5 = 258.75'],
 ['المثلث يبدأ من A: شدته w = (50/4.5)(x − 1.5). محصلته ½w(x − 1.5) على ثلث المسافة من القطع:',
  '=M₃ = −(50/4.5)(x − 1.5)³ / 6   →   at B: −168.75'],
 ['نجمع الثلاثة:',
  '=M_B = −90 + 258.75 − 168.75 = 0 ✓   (pin)',
  'أكبر M حيث dM/dx = 0:',
  '=57.5 = (50/4.5)(x − 1.5)²/2   →   x = 4.72 m      M_max = 33.3 kN·m']
]
};

function detHTML(e){const D=DET[e.id];return `<div class="wb-det">${e.steps.map(([t],k)=>`<div class="dstep"><div class="dh"><span class="wn">${k+1}</span><b>${t}</b></div><div class="dl">${(()=>{let n=0;return (D[k]||[]).map(x=>x[0]==='='?`<span class="wq">${x.slice(1)}</span>`:`<div class="di"><span class="dn">${++n}</span><p>${x}</p></div>`).join('')})()}</div></div>`).join('')}</div>`}
function whyHTML(e){if(DET[e.id])return '';const W=WHY[e.id]||[],L=e.cases||e.steps;if(!W.length)return '';return `<section class="whys" id="whys"><h3 class="sec-title">شرح الخطوات — ليش سوينا كذا؟</h3><ol class="wylist">${L.map((s,k)=>W[k]?`<li class="wy"><span class="wn">${k+1}</span><div><b>${s[e.cases?1:0]}</b><p>${W[k]}</p>${!e.cases&&s[2]?`<span class="wq">${s[2]}</span>`:''}</div></li>`:'').join('')}</ol></section>`}
function qHTML(e){const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="شكل ${e.title}">`:drawHTML(e,0);return `<section class="qcard0"><div class="qh"><b>السؤال</b><span class="mono">${exNo(e)}</span></div><div class="qbody"><div class="qfig">${fig}</div><div class="qtxt"><h2 dir="auto">${e.title}</h2><p dir="auto">${e.q}</p><h4>المعطيات</h4><table class="gtab">${e.given.map((g,k)=>`<tr><td>${k+1}</td><td>${g}</td></tr>`).join('')}</table></div></div></section>`}
function simSteps(e){
  const s=[{t:'المسألة',d:e.q}];
  if(e.cases)e.cases.forEach(([im,t,d,r])=>s.push({t,d,q:r}));
  else e.steps.forEach(([t,d,q])=>s.push({t,d,q}));
  s.push({t:'الجواب النهائي',d:e.ans,fin:true});
  return s;
}
function simHTML(e){
  const g=SIMS[e.id]();const n=simSteps(e).length;
  return `<section class="sim drw" id="sim" data-n="${n}">
   <div class="sim-head"><b>المحاكاة</b><span class="mono" id="sim-n"></span></div>
   <div class="sim-stage"><svg viewBox="${g.vb}" direction="ltr" role="img" aria-label="محاكاة ${e.title}">${DEFS}${g.svg}</svg></div>
   <div class="sim-cap"><h4 id="sim-t"></h4><p id="sim-d"></p><div class="q" id="sim-q"></div></div>
   <div class="sim-dots" id="sim-dots">${Array.from({length:n},(_,i)=>`<button data-sk="${i}" aria-label="خطوة ${i}"></button>`).join('')}</div>
   <div class="sim-ctl"><button data-sim="prev">→ السابق</button><button data-sim="play" id="sim-play">▶ تشغيل</button><button data-sim="next" class="pri">التالي ←</button></div>
  </section>`;
}
let SK=0,SE=null,ST=null;
function applyState(root,k,hl){
  root.querySelectorAll('[data-from]').forEach(el=>el.classList.toggle('off',+el.dataset.from>k));
  root.querySelectorAll('[data-only]').forEach(el=>el.classList.toggle('off',!el.dataset.only.split(',').map(Number).includes(k)));
  root.querySelectorAll('[data-hl]').forEach(el=>el.classList.toggle('hl',!!hl&&el.dataset.hl.split(',').map(Number).includes(k)));
}
function drawHTML(e,k,cls='b-draw'){const g=SIMS[e.id]();return `<div class="drw ${cls}" data-state="${k}"><svg viewBox="${g.vb}" direction="ltr" role="img" aria-label="${e.title}">${DEFS}${g.svg}</svg></div>`}
function openSol(){const e=SE;if(!e)return;simStop();const d=document.createElement('div');d.className='wpage';d.id='wpage';d.setAttribute('role','dialog');
  d.innerHTML=`<div class="wpage-in"><div class="wpage-h"><h2>رسمة الحل — ${e.title}</h2><button id="wclose">إغلاق ✕</button></div>${drawHTML(e,simSteps(e).length-1,'wdraw')}<div class="b-ans">${e.ans}</div></div>`;
  document.body.appendChild(d);applyStatics();d.querySelector('#wclose').addEventListener('click',closeSol)}
function closeSol(){const d=document.getElementById('wpage');if(d)d.remove()}
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeSol()});
function applyStatics(){document.querySelectorAll('[data-state]').forEach(el=>applyState(el,+el.dataset.state,!!el.dataset.sh))}
function simSet(k){
  const st=simSteps(SE),root=document.getElementById('sim');if(!root)return;
  SK=Math.max(0,Math.min(st.length-1,k));
  const fin=st[SK].fin, last=st.length-1;
  applyState(root,SK,true);segAnim(root,SK);
  const s=st[SK];
  document.getElementById('sim-n').textContent=`${SK===0?'start':SK===last?'answer':'step '+SK} · ${SK+1}/${st.length}`;
  document.getElementById('sim-t').textContent=s.t;
  const d=document.getElementById('sim-d');fin?d.innerHTML=s.d:d.textContent=s.d||'';
  const q=document.getElementById('sim-q');q.textContent=s.q||'';q.hidden=!s.q;
  root.querySelectorAll('[data-sk]').forEach(b=>b.classList.toggle('on',+b.dataset.sk<=SK));
  root.querySelector('[data-sim="prev"]').disabled=SK===0;root.querySelector('[data-sim="next"]').disabled=SK===last;
  if(SK===last)simStop();
}
function simStop(){clearInterval(ST);ST=null;const p=document.getElementById('sim-play');if(p)p.textContent='▶ تشغيل'}
function simPlay(){if(ST){simStop();return}if(SK>=simSteps(SE).length-1)simSet(0);document.getElementById('sim-play').textContent='❚❚ إيقاف';ST=setInterval(()=>simSet(SK+1),3800)}

const app=document.getElementById('app');
/* ================= SITE EXTRAS: nav, tools, formulas, quiz, glossary, progress ================= */
const NAV=[['','الأمثلة'],['exams','اختبارات سابقة'],['tools','الحاسبات'],['formulas','القوانين'],['quiz','اختبر نفسك'],['glossary','المصطلحات']];
function header(){
  const cur=(location.hash||'#').slice(1);const on=k=>k===''?(cur===''||/^ex\d+$/.test(cur)):cur===k;
  return `<header class="top"><div><div class="course">CE 360 · STRUCTURAL ANALYSIS 1</div><h1>التحليل الإنشائي ١</h1></div><div class="titleblock">KSU · ${EX.length} EXAMPLES</div></header>
  <nav class="snav">${NAV.map(([k,v])=>`<a href="#${k}" class="${on(k)?'on':''}">${v}</a>`).join('')}</nav>`;
}
/* ---------- progress ---------- */
function getDone(){try{return JSON.parse(localStorage.getItem('ce360-done')||'[]')}catch(_){return[]}}
function setDone(id,v){let d=getDone().filter(x=>x!==id);if(v)d.push(id);try{localStorage.setItem('ce360-done',JSON.stringify(d))}catch(_){} }

/* ---------- helpers ---------- */
const num=(id,d)=>{const el=document.getElementById(id);const v=parseFloat(el&&el.value);return isFinite(v)?v:d};
const f2=(v,n=2)=>{if(!isFinite(v))return'—';const r=Math.round(v*10**n)/10**n;return (Object.is(r,-0)?0:r).toString().replace('-','−')};
const field=(id,label,val,unit='',step='any')=>`<label class="fld"><span>${label}</span><div class="iw"><input id="${id}" type="number" inputmode="decimal" step="${step}" value="${val}">${unit?`<em>${unit}</em>`:''}</div></label>`;
const sel=(id,label,opts)=>`<label class="fld"><span>${label}</span><select id="${id}">${opts.map(([v,t,s])=>`<option value="${v}" ${s?'selected':''}>${t}</option>`).join('')}</select><em></em></label>`;
const outRow=(k,v,cls='')=>`<div class="orow ${cls}"><span>${k}</span><b>${v}</b></div>`;

/* ---------- TOOLS ---------- */
const LINE=L;
const TOOLS=[
{id:'beam',ch:'c4',name:'Beam Solver — SFD & BMD',desc:'Simply supported beam: UDL + point load + point moment. يطلع لك الـ reactions والمخططات و M_max.',
 ui:()=>`<div class="presets"><span>أمثلة جاهزة:</span><button data-pre='{"L":6,"w":0,"P":3,"a":3,"M":6,"b":4.5}'>Example 4-9</button><button data-pre='{"L":6,"w":4,"P":12,"a":2,"M":0,"b":3}'>EX 14</button><button data-pre='{"L":8,"w":15,"P":0,"a":4,"M":0,"b":4}'>EX 13</button></div>
 <div class="fgrid">${field('bL','L (span)',6,'m')}${field('bw','w (UDL, full span)',4,'kN/m')}${field('bP','P ↓',12,'kN')}${field('ba','a (P from A)',2,'m')}${field('bM','M₀ (clockwise +)',0,'kN·m')}${field('bb','b (M₀ from A)',3,'m')}</div>`,
 run:()=>{
  const L=Math.max(0.1,num('bL',6)),w=num('bw',0),P=num('bP',0),a=Math.min(L,Math.max(0,num('ba',0))),M0=num('bM',0),b=Math.min(L,Math.max(0,num('bb',0)));
  const By=(w*L*L/2+P*a+M0)/L,Ay=w*L+P-By;
  const V=x=>Ay-w*x-(x>a?P:0), M=x=>Ay*x-w*x*x/2-(x>a?P*(x-a):0)+(x>b?M0:0);
  const xs=[];for(let i=0;i<=240;i++)xs.push(L*i/240);[a,b].forEach(p=>{xs.push(p-1e-9,p+1e-9)});xs.sort((u,v)=>u-v);
  const keys=new Set([0,L,a,b]);if(w>0){const z=Ay/w;if(z>0&&z<a)keys.add(z);const z2=(Ay-P)/w;if(z2>a&&z2<L)keys.add(z2)}
  let mmax=0,xmax=0,mmin=0,xmin=0;xs.forEach(x=>{const m=M(x);if(m>mmax){mmax=m;xmax=x}if(m<mmin){mmin=m;xmin=x}});
  const Vs=xs.map(V),Ms=xs.map(M),vmax=Math.max(1e-6,...Vs.map(Math.abs)),mabs=Math.max(1e-6,...Ms.map(Math.abs));
  const X=x=>50+500*x/L, Vy=v=>210-v/vmax*55, My=m=>370-m/mabs*65;
  let s=`<rect x="50" y="62" width="500" height="8" class="kf"/>${PIN(50,70)}${ROL(550,70)}`;
  if(w)s+=`${LINE(50,30,550,30,'ld')}${LOADAR(50,550,20,()=>30,60)}${T(300,22,'w = '+f2(w)+' kN/m','s')}`;
  if(P)s+=`${AR(X(a),P>0?0:60,X(a),P>0?58:2,'rx')}${T(X(a)+6,12,'P = '+f2(P),'r','start')}`;
  if(M0)s+=`<path d="M${X(b)-20},56 A20,20 0 1,1 ${X(b)+20},56" class="rx" marker-${M0>0?'end':'start'}="url(#m-rx)"/>${T(X(b),18,'M₀ = '+f2(M0),'r')}`;
  s+=`${AR(50,128,50,92,'rx')}${T(58,126,'A_y = '+f2(Ay),'r','start')}${AR(550,128,550,92,'rx')}${T(542,126,'B_y = '+f2(By),'r','end')}`;
  s+=`${LINE(50,210,550,210,'dm')}${T(42,214,'V','m','end')}<path d="M${X(0)},210 ${xs.map((x,i)=>`L${X(x)},${Vy(Vs[i])}`).join(' ')} L${X(L)},210 Z" class="ldf"/>`;
  s+=`${LINE(50,370,550,370,'dm')}${T(42,374,'M','m','end')}<path d="M${X(0)},370 ${xs.map((x,i)=>`L${X(x)},${My(Ms[i])}`).join(' ')} L${X(L)},370 Z" class="mfill"/>`;
  [...keys].sort((u,v)=>u-v).forEach(x=>{const m=M(x+ (x===L?-1e-9:0));s+=`<circle cx="${X(x)}" cy="${My(m)}" r="3.5" class="dot"/>`});
  if(mmax>1e-6)s+=T(X(xmax),My(mmax)-8,'M_max = '+f2(mmax),'r big');
  if(mmin<-1e-6)s+=T(X(xmin),My(mmin)+20,'M_min = '+f2(mmin),'r');
  s+=T(X(0)+4,Vy(Vs[0])-6,f2(Vs[0]),'s','start')+T(X(L)-4,Vy(Vs[Vs.length-1])+(Vs[Vs.length-1]<0?16:-6),f2(Vs[Vs.length-1]),'s','end');
  const rows=[...keys].sort((u,v)=>u-v).map(x=>`<tr><td>${f2(x)}</td><td>${f2(V(Math.max(0,x-1e-9)))}</td><td>${f2(V(Math.min(L,x+1e-9)))}</td><td>${x>0&&Math.abs(x-b)<1e-9&&M0?f2(M(x-1e-9))+' → '+f2(M(x+1e-9)):f2(M(x===L?L-1e-9:x))}</td></tr>`).join('');
  return `<div class="drw out-draw"><svg viewBox="0 0 600 450" direction="ltr">${DEFS}${s}</svg></div>
   <div class="ogrid">${outRow('ΣM_A = 0 → B_y',f2(By)+' kN')}${outRow('ΣF_y = 0 → A_y',f2(Ay)+' kN')}${outRow('M_max (+)',f2(mmax)+' kN·m at x = '+f2(xmax)+' m','hi')}${mmin<-1e-6?outRow('M_min (−)',f2(mmin)+' kN·m at x = '+f2(xmin)+' m'):''}</div>
   <div class="tw"><table class="t mono"><tr><th>x (m)</th><th>V⁻</th><th>V⁺</th><th>M (kN·m)</th></tr>${rows}</table></div>
   <p class="note">B_y = (wL²/2 + P·a + M₀)/L ، الـ moment عند النقاط المهمة: بداية ونهاية، تحت P، عند M₀ (قبل/بعد)، وعند V = 0.</p>`}},

{id:'llr',ch:'c1',name:'Live Load Reduction',desc:'L = Lo (0.25 + 4.57/√(K_LL·A_T)) مع كل الشروط.',
 ui:()=>`<div class="fgrid">${field('lLo','Lo',2.4,'kN/m²')}${field('lA','A_T',48,'m²')}${sel('lK','K_LL',[[4,'4 — interior column',1],[2,'2 — exterior column / interior beam'],[1,'1 — others']])}${field('lF','عدد الأدوار المخفّضة',1,'',1)}</div>`,
 run:()=>{const Lo=num('lLo',2.4),A=num('lA',48),K=num('lK',4),n=Math.max(1,num('lF',1));const KA=K*A;
  if(KA<37.2)return `<div class="ogrid">${outRow('K_LL·A_T',f2(KA)+' m²')}${outRow('النتيجة','< 37.2 m² → no reduction, L = Lo = '+f2(Lo),'hi')}${outRow('F = Lo·A_T',f2(Lo*A)+' kN')}</div>`;
  const Lr=Lo*(0.25+4.57/Math.sqrt(KA)),lim=(n>1?0.4:0.5)*Lo,Lf=Math.max(Lr,lim);
  return `<div class="ogrid">${outRow('K_LL·A_T',f2(KA)+' m² ≥ 37.2 ✓')}${outRow('L (Eq. 1.1)',f2(Lr,3)+' kN/m²')}${outRow('Limit '+(n>1?'0.4':'0.5')+'·Lo',f2(lim)+' kN/m²')}${outRow('L design',f2(Lf,3)+' kN/m²','hi')}${outRow('F = L·A_T',f2(Lf*A)+' kN')}</div>
   <p class="note">الحد الأدنى 0.5Lo لعنصر يحمل دور واحد، و 0.4Lo لعنصر يحمل أكثر من دور. لا تخفّض garage أو roof أو أحمال أكبر من 4.79 kN/m².</p>`}},

{id:'snow',ch:'c1',name:'Snow Load (Flat Roof)',desc:'pf = 0.7 Ce Ct I pg مع شرط 0.96 kN/m².',
 ui:()=>`<div class="fgrid">${field('sg','pg',0.72,'kN/m²')}${sel('sCe','Ce',[[0.8,'0.8 — fully exposed',1],[1.0,'1.0 — partially exposed'],[1.3,'1.3 — sheltered, city center']])}${sel('sCt','Ct',[[1.2,'1.2 — unheated',1],[1.0,'1.0 — heated'],[1.1,'1.1 — kept just above freezing']])}${sel('sI','I',[[0.8,'0.8 — storage / agriculture',1],[1.0,'1.0 — normal'],[1.1,'1.1 — high occupancy'],[1.2,'1.2 — hospital / essential']])}</div>`,
 run:()=>{const pg=num('sg',0.72),Ce=num('sCe',.8),Ct=num('sCt',1.2),I=num('sI',.8);const p1=0.7*Ce*Ct*I*pg;
  let p2,lab;if(pg<=0.96){p2=I*pg;lab='pg ≤ 0.96 → I·pg'}else{p2=I*0.96;lab='pg > 0.96 → I(0.96)'};const pf=Math.max(p1,p2);
  return `<div class="ogrid">${outRow('0.7·Ce·Ct·I·pg',f2(p1,3)+' kN/m²')}${outRow(lab,f2(p2,3)+' kN/m²')}${outRow('pf (الأكبر)',f2(pf,3)+' kN/m²','hi')}</div>`}},

{id:'wind',ch:'c1',name:'Wind on Sign',desc:'q = 0.613 Kz Kzt Kd V² ثم F = q G Cf As.',
 ui:()=>`<div class="fgrid">${field('wV','V',46,'m/s')}${field('wKz','Kz',1.0)}${field('wKzt','Kzt',1.0)}${field('wKd','Kd',1.0)}${field('wG','G',0.85)}${field('wCf','Cf',1.85)}${field('wB','B',4,'m')}${field('ws','s',1,'m')}</div>`,
 run:()=>{const q=0.613*num('wKz',1)*num('wKzt',1)*num('wKd',1)*num('wV',46)**2,A=num('wB',4)*num('ws',1),F=q*num('wG',.85)*num('wCf',1.85)*A;
  return `<div class="ogrid">${outRow('q',f2(q,1)+' N/m²')}${outRow('As = B·s',f2(A)+' m²')}${outRow('F',f2(F,1)+' N = '+f2(F/1000,2)+' kN','hi')}${outRow('B/s',f2(num('wB',4)/num('ws',1)))}</div><p class="note">Cf من الجدول حسب B/s (و s/h في ASCE 7-10).</p>`}},

{id:'slab',ch:'c2',name:'Tributary Load (Slab → Beams)',desc:'يقرر one-way أو two-way ويوزّع الحمل على الـ beams مع الرسمة.',
 ui:()=>`<div class="fgrid">${field('tL1','L1 (short)',3,'m')}${field('tL2','L2 (long)',4.5,'m')}${field('tq','q',4.8,'kN/m²')}${sel('tP','الـ panel',[['one','panel واحد (beam طرفي)',1],['two','بين panelين (beam داخلي)']])}</div>`,
 run:()=>{let L1=num('tL1',3),L2=num('tL2',4.5);if(L1>L2)[L1,L2]=[L2,L1];const q=num('tq',4.8),k=document.getElementById('tP').value==='two'?2:1,r=L2/L1;
  const sc=Math.min(260/L2,170/L1),W=L2*sc,H=L1*sc,x0=60,y0=24,d=L1/2*sc;let s=`<rect x="${x0}" y="${y0}" width="${W}" height="${H}" class="k"/>`;
  let out;
  if(r>=2){const w=q*L1/2*k;s=`<rect x="${x0}" y="${y0}" width="${W}" height="${H/2}" class="ldf"/>`+s+T(x0+W/2,y0+H/2-6,'L1/2','s')+T(x0+W/2,y0-6,'long beam','m');
   out=outRow('L2/L1',f2(r)+' ≥ 2 → one-way','hi')+outRow('w on long beam',f2(w)+' kN/m (uniform)')+outRow('R = wL2/2',f2(w*L2/2)+' kN')+outRow('M_max = wL2²/8',f2(w*L2*L2/8)+' kN·m')+outRow('short beams','≈ 0 (one-way)');}
  else{const wm=q*L1/2,Wl=wm*(L2+(L2-L1))/2,Ws=wm*L1/2;
   s=`<polygon points="${x0},${y0} ${x0+W},${y0} ${x0+W-d},${y0+d} ${x0+d},${y0+d}" class="ldf"/><polygon points="${x0},${y0} ${x0+d},${y0+d} ${x0},${y0+H}" class="mfill"/>`+s+
    `${L(x0,y0,x0+d,y0+d,'ld')}${L(x0+W,y0,x0+W-d,y0+d,'ld')}${L(x0,y0+H,x0+d,y0+d,'ld')}${L(x0+W,y0+H,x0+W-d,y0+d,'ld')}${L(x0+d,y0+d,x0+W-d,y0+d,'ld')}${T(x0+W/2,y0-6,'long: trapezoid','s')}${T(x0-4,y0+H/2,'short','r','end')}`;
   out=outRow('L2/L1',f2(r)+' < 2 → two-way','hi')+outRow('w_max = q·L1/2',f2(wm)+' kN/m (لكل panel)')+outRow('Long beam W',f2(Wl)+' kN (trapezoid)')+outRow('Short beam W',f2(Ws)+' kN (triangle)')+outRow('Check 2W_l + 2W_s',f2(2*Wl+2*Ws)+' = q·L1·L2 = '+f2(q*L1*L2))+(k===2?outRow('beam داخلي','ضاعف القيم (panelين)'):'');}
  s+=T(x0+W/2,y0+H+18,'L2 = '+f2(L2)+' m','m')+T(x0+W+8,y0+H/2,'L1 = '+f2(L1)+' m','m','start');
  return `<div class="drw out-draw small"><svg viewBox="0 0 ${Math.max(400,W+160)} ${H+54}" direction="ltr">${DEFS}${s}</svg></div><div class="ogrid">${out}</div>`}},

{id:'det',ch:'c2',name:'Determinacy & Stability',desc:'Beams/frames: r مقابل 3n. Trusses: b + r مقابل 2j.',
 ui:()=>`<div class="fgrid">${sel('dT','النوع',[['beam','Beam / Frame',1],['truss','Truss']])}${field('dr','r (unknowns / reactions)',4,'',1)}${field('dn','n (parts)',1,'',1)}${field('db','b (members — truss)',9,'',1)}${field('dj','j (joints — truss)',6,'',1)}</div>
 <div class="mini"><b>عدّ r:</b> Roller = 1 · Pin = 2 · Fixed = 3 · Internal hinge = 2 (لكل hinge)</div>`,
 run:()=>{const tp=document.getElementById('dT').value,r=num('dr',0);let lhs,rhs,txt;
  if(tp==='beam'){const n=num('dn',1);lhs=r;rhs=3*n;txt=`r = ${r}   3n = ${rhs}`}else{const b=num('db',0),j=num('dj',0);lhs=b+r;rhs=2*j;txt=`b + r = ${lhs}   2j = ${rhs}`}
  const res=lhs===rhs?'Statically determinate':lhs>rhs?`Statically indeterminate — degree ${lhs-rhs}`:'Unstable';
  return `<div class="ogrid">${outRow('العدّ',txt)}${outRow('النتيجة',res,'hi')}</div><p class="note">حتى لو العدد كافي: إذا الـ reactions كلها <b>concurrent</b> أو <b>parallel</b> فالمنشأ unstable.</p>`}},

{id:'combo',ch:'c1',name:'Load Combinations',desc:'يحسب كل combinations ويحدد اللي يتحكم.',
 ui:()=>`<div class="fgrid">${field('cD','D',33.52)}${field('cL','L',8)}${field('cS','S',0)}${field('cW','W',0)}${field('cE','E',0)}</div><div class="mini">أي وحدة (kN/m أو kN أو kN/m²)، المهم نفس الوحدة للكل.</div>`,
 run:()=>{const D=num('cD',0),L_=num('cL',0),S=num('cS',0),W=num('cW',0),E=num('cE',0);
  const u=[['1.4D',1.4*D],['1.2D + 1.6L + 0.5S',1.2*D+1.6*L_+0.5*S],['0.9D + 1.0W',0.9*D+W],['0.9D + 1.0E',0.9*D+E]];const mx=Math.max(...u.map(x=>x[1]));
  const ws=[['D',D],['0.6D + 0.6W',0.6*D+0.6*W],['0.6D + 0.7E',0.6*D+0.7*E]];const mw=Math.max(...ws.map(x=>x[1]));
  return `<h4 class="osub">Ultimate strength</h4><div class="ogrid">${u.map(([k,v])=>outRow(k,f2(v),v===mx?'hi':'')).join('')}</div><h4 class="osub">Working stress</h4><div class="ogrid">${ws.map(([k,v])=>outRow(k,f2(v),v===mw?'hi':'')).join('')}</div>`}},

{id:'unit',ch:'c1',name:'تحويل الوحدات',desc:'kN ↔ ton ↔ kg (g ≈ 10 m/s² كما في المحاضرة).',
 ui:()=>`<div class="fgrid">${field('uv',' القيمة',10)}${sel('uf','من',[['kN','kN',1],['t','ton'],['kg','kg'],['N','N']])}</div>`,
 run:()=>{const v=num('uv',0),f={kN:1,t:10,kg:0.01,N:0.001}[document.getElementById('uf').value],kN=v*f;
  return `<div class="ogrid">${outRow('kN',f2(kN,4))}${outRow('ton',f2(kN/10,4))}${outRow('kg',f2(kN*100,2))}${outRow('N',f2(kN*1000,1))}</div><p class="note">1 ton = 10 kN · 1 kg weight ≈ 10 N · 1 kN/m² ≈ 100 kg/m²</p>`}}
];
function toolsPage(){
  let h=header()+`<p class="lead">حاسبات تدخل فيها أرقامك وتعطيك الحل مع الخطوات. استخدمها تتأكد من حلك بعد ما تحل بنفسك.</p><div class="tool-nav">${TOOLS.map(t=>`<a href="#tools" data-jump="tool-${t.id}">${t.name}</a>`).join('')}</div>`;
  h+=TOOLS.map(t=>`<section class="tool" id="tool-${t.id}"><div class="tool-h"><h2>${t.name}</h2><span class="src">${CH.find(c=>c.id===t.ch).name.split(' — ')[0]}</span></div><p class="src">${t.desc}</p><form class="tool-in" data-tool="${t.id}" onsubmit="return false">${t.ui()}</form><div class="tool-out" id="out-${t.id}"></div></section>`).join('');
  app.classList.remove('wide');app.innerHTML=h;TOOLS.forEach(runTool);
}
function runTool(t){const o=document.getElementById('out-'+t.id);if(!o)return;try{o.innerHTML=t.run()}catch(err){o.innerHTML='<p class="note">تأكد من القيم المدخلة.</p>'}}

/* ---------- FORMULAS + mistakes ---------- */
const MISTAKES={c1:['نسيان أن الـ plaster على وجهين (×2).','ضرب kN/m³ في عرض بدل مساحة مقطع.','تطبيق live load reduction على garage أو roof.','نسيان شرط 0.5Lo بعد التخفيض.','في الـ snow: الاكتفاء بـ Eq. 1.5 بدون شرط pg ≤ 0.96.','استخدام ارتفاع منتصف اللوحة في ASCE 7-10 (الصحيح أعلاها).'],
 c2:['عدّ الـ internal hinge كأنه 1 بدل 2، أو نسيان أنه يزيد n.','اعتبار b + r ≥ 2j يكفي للاستقرار بدون فحص concurrent / parallel.','في two-way: أخذ w_max = q·L2/2 بدل q·L1/2.','حساب ردود الأفعال باستخدام رد فعل محسوب قبل (ΣFy خلّها للـ check).'],
 c4:['نسيان jump الـ concentrated moment في الـ BMD.','وضع jump في الـ SFD عند concentrated moment (غلط، ما يأثر).','عدم حساب M عند نقطة V = 0 (فيها M_max).','خلط إشارة الـ moment: tension bottom = موجب.']};
function formulasPage(){
  let h=header()+`<div class="fsearch"><input id="fq" type="search" placeholder="ابحث: wind, snow, L2/L1, shear ..." aria-label="بحث في القوانين"></div>`;
  for(const c of CH){h+=`<section class="fsec" data-ch="${c.id}"><h2>${c.name}</h2><div class="fcards">${CONCEPTS[c.id].map(([t,b])=>`<div class="fcard"><h4>${t}</h4><div class="in">${b}</div></div>`).join('')}
   <div class="fcard warn"><h4>أخطاء شائعة</h4><ul>${MISTAKES[c.id].map(m=>`<li>${m}</li>`).join('')}</ul></div></div></section>`}
  app.classList.remove('wide');app.innerHTML=h;
  document.getElementById('fq').addEventListener('input',ev=>{const q=ev.target.value.trim().toLowerCase();document.querySelectorAll('.fcard').forEach(c=>c.hidden=q&&!c.textContent.toLowerCase().includes(q))});
}

/* ---------- QUIZ ---------- */
const QUIZ=[
 ['c1','1 ton تساوي تقريباً:',['1 kN','10 kN','100 kN','0.1 kN'],1,'1 kg weight ≈ 10 N، فـ 1000 kg ≈ 10 kN.'],
 ['c1','عنصر يتعرض لـ tension فقط:',['Column','Beam','Cable','Arch'],2,'الـ cables والـ tie rods والـ hangers شد فقط.'],
 ['c1','Wall: 0.25 m × 3 m، γ = 20 kN/m³. الحمل لكل متر:',['15 kN/m','6 kN/m','60 kN/m','7.5 kN/m'],0,'0.25 × 3 × 20 = 15 kN/m.'],
 ['c1','Interior column: A_T = 30 m². هل نطبّق live load reduction؟',['لا، 30 < 37.2','نعم، K_LL·A_T = 120 ≥ 37.2','لا، للـ beams بس','نعم دائماً'],1,'الشرط على K_LL·A_T = 4 × 30 = 120 m² وليس A_T لحاله.'],
 ['c1','pg = 0.5 kN/m²، I = 1.0، والمعادلة أعطت 0.3. pf =',['0.3','0.5','0.96','0.35'],1,'pg ≤ 0.96 → ناخذ الأكبر من 0.3 و I·pg = 0.5.'],
 ['c1','أي combination تتحكم غالباً لما يوجد D و L فقط؟',['1.4D','1.2D + 1.6L','0.9D + 1.0W','0.6D'],1,'إلا إذا L صغير جداً مقارنة بـ D.'],
 ['c2','Fixed support فيه كم unknown؟',['1','2','3','4'],2,'Fx و Fy و M.'],
 ['c2','Slab 7 m × 3 m. النوع:',['one-way','two-way','cantilever','flat'],0,'7/3 = 2.33 ≥ 2.'],
 ['c2','Two-way slab، L1 = 4 m، q = 5 kN/m². w_max على الـ beam:',['20 kN/m','10 kN/m','5 kN/m','40 kN/m'],1,'w_max = q·L1/2 = 5 × 2.'],
 ['c2','Beam: fixed + roller. r = 4, n = 1:',['Determinate','Indeterminate 1°','Unstable','Indeterminate 2°'],1,'4 − 3 = 1.'],
 ['c2','Truss: b = 13, r = 3, j = 8:',['Determinate','Indeterminate 1°','Unstable','Indeterminate 2°'],0,'13 + 3 = 16 = 2 × 8.'],
 ['c2','Beam عليه 3 rollers رأسية فقط:',['Determinate','Indeterminate','Unstable (parallel)','Stable'],2,'كل الـ reactions متوازية، ما فيه مقاومة أفقية.'],
 ['c4','Concentrated moment يسبب jump في:',['SFD','BMD','الاثنين','ولا واحد'],1,'الـ moment ما يغيّر الـ shear.'],
 ['c4','M_max في beam تحت UDL يكون عند:',['أي support','V = 0','أقصى shear','نهاية الـ beam'],1,'dM/dx = V، فأقصى M لما V = 0.'],
 ['c4','Simply supported، UDL w على L. M_max =',['wL²/2','wL²/8','wL/2','wL²/4'],1,'في المنتصف.'],
 ['c4','Cantilever طوله 2 m وعليه P = 10 kN بالطرف. M عند الـ fixed support:',['−20 kN·m','+20 kN·m','−10 kN·m','0'],0,'P × L، والـ tension فوق فالإشارة سالبة.']
];
QUIZ.push(
 ['c2','Pin عند A و roller عند B، والأحمال رأسية فقط. A_x =',['0','نص الحمل','يساوي B_y','ما نقدر نحدده'],0,'ΣF_x = 0 وما فيه أحمال أفقية.'],
 ['c2','أفضل نقطة لأخذ العزوم عشان نحسب B_y مباشرة:',['عند B','عند A','منتصف الـ beam','أي نقطة'],1,'العزوم حول A تلغي A_x و A_y، فيبقى B_y مجهول وحيد.'],
 ['c2','Inclined load P = 20 kN بزاوية 30° مع الأفقي. المركبة الرأسية:',['17.32 kN','10 kN','20 kN','11.55 kN'],1,'Py = P sin30 = 10 kN.'],
 ['c2','Triangular load: 0 → 9 kN/m على 6 m. المحصلة ومكانها من الطرف الصفري:',['27 kN عند 4 m','54 kN عند 3 m','27 kN عند 2 m','54 kN عند 4 m'],0,'W = ½·6·9 = 27، على بعد 2L/3 = 4 m.']
);
let qState={};
function quizPage(){
  let h=header()+`<p class="lead">اختر الإجابة وتطلع لك النتيجة مع الشرح فوراً.</p><div class="qscore" id="qscore"></div>`;
  for(const c of CH){h+=`<h2 class="qh">${c.name}</h2>`+QUIZ.map((q,i)=>[q,i]).filter(([q])=>q[0]===c.id).map(([[,qq,opts,ans,why],i])=>`<div class="qcard" data-q="${i}"><p class="qq"><span class="mono">Q${i+1}</span> ${qq}</p><div class="qopts">${opts.map((o,k)=>`<button dir="auto" data-qi="${i}" data-k="${k}" class="${qState[i]!=null?(k===ans?'right':k===qState[i]?'wrong':''):''}" ${qState[i]!=null?'disabled':''}>${o}</button>`).join('')}</div><p class="qwhy" ${qState[i]==null?'hidden':''}>${why}</p></div>`).join('')}
  h+=`<button class="back" data-qreset>إعادة الاختبار</button>`;
  app.classList.remove('wide');app.innerHTML=h;updScore();
}
function updScore(){const n=Object.keys(qState).length,r=Object.entries(qState).filter(([i,k])=>QUIZ[i][3]===k).length;const el=document.getElementById('qscore');if(el)el.innerHTML=`<b>${r}</b> / ${n} صحيحة · باقي ${QUIZ.length-n} سؤال`}

/* ---------- GLOSSARY ---------- */
const GLOSS=[['Dead load','أحمال ثابتة: وزن العناصر وكل ما هو مثبت بشكل دائم'],['Live load','أحمال متغيرة: ناس، أثاث، مركبات'],['Tributary area / width','المساحة أو العرض اللي يحمله العنصر'],['Concrete slab','بلاطة خرسانية'],['Masonry wall','جدار طوب'],['Plaster','لياسة'],['Beam','كمرة: shear + moment'],['Girder','كمرة رئيسية تحمل الـ beams'],['Column','عمود: axial force أساساً'],['Truss','جملون: عناصر pinned والأحمال على الـ joints'],['Frame','إطار'],['Arch','قوس: compression غالباً'],['Cable / Tie rod / Hanger','عناصر شد فقط'],['Roller','ركيزة متدحرجة: 1 unknown'],['Pin / Hinge','ركيزة مفصلية: 2 unknowns'],['Fixed support','ركيزة مثبتة: 3 unknowns'],['Internal hinge','مفصل داخلي: M = 0 عنده'],['Reaction','رد فعل الركيزة'],['UDL','Uniformly distributed load: حمل منتظم'],['Concentrated load','حمل مركّز'],['Concentrated moment','عزم مركّز'],['One-way slab','L2/L1 ≥ 2: الحمل يمشي في اتجاه واحد'],['Two-way slab','L2/L1 < 2: الحمل يتوزع بخطوط 45°'],['Superposition','جمع تأثير كل حمل لحاله'],['Statically determinate','المجاهيل = معادلات الاتزان'],['Statically indeterminate','المجاهيل أكثر من المعادلات'],['Unstable','غير مستقر: مجاهيل أقل أو reactions concurrent/parallel'],['Free-body diagram (FBD)','مخطط الجسم الحر'],['Shear force (V)','قوة القص'],['Bending moment (M)','عزم الانحناء'],['Normal force (N)','القوة المحورية'],['SFD / BMD','Shear Force Diagram / Bending Moment Diagram'],['Tension bottom','شد في الألياف السفلية → moment موجب'],['Impact factor (I)','زيادة الحمل الحي بسبب حركة المركبات'],['Velocity pressure (q)','ضغط سرعة الرياح'],['Gust factor (G)','معامل الهبّة'],['Force coefficient (Cf)','معامل القوة للوحات'],['Exposure factor (Ce)','معامل التعرض للثلج'],['Thermal factor (Ct)','المعامل الحراري'],['Importance factor (I)','معامل الأهمية'],['Ground snow load (pg)','حمل الثلج الأرضي'],['Load combination','توافيق الأحمال'],['Working stress design','تصميم بإجهادات التشغيل'],['Ultimate strength design','تصميم بالمقاومة القصوى']];
function glossaryPage(){
  let h=header()+`<div class="fsearch"><input id="gq" type="search" placeholder="ابحث عن مصطلح ..." aria-label="بحث في المصطلحات"></div><div class="gl">${GLOSS.map(([e,a])=>`<div class="gi"><b dir="ltr">${e}</b><span>${a}</span></div>`).join('')}</div>`;
  app.classList.remove('wide');app.innerHTML=h;
  document.getElementById('gq').addEventListener('input',ev=>{const q=ev.target.value.trim().toLowerCase();document.querySelectorAll('.gi').forEach(c=>c.hidden=q&&!c.textContent.toLowerCase().includes(q))});
}

let tab='all',lv='all';
function h(s){return s}
function oldHeader(){return `<header class="top"><div><div class="course">CE 360 · STRUCTURAL ANALYSIS 1</div><h1>التحليل الإنشائي ١</h1></div><div class="titleblock">KSU · ${EX.length} EXAMPLES</div></header>`}

function home(){
  const tabs=[['all','الكل'],...CH.map(c=>[c.id,c.name.split(' — ')[0]])];
  let html=header()+`<p style="margin:0 0 14px;color:var(--muted)">اضغط على أي مثال يفتح لك صفحته: الشكل، السؤال، المعطيات، وخطوات الحل بالترتيب. وتحت كل فصل ملخص القوانين.</p>`;
  {const d=getDone().length;html+=`<div class="prog"><span>تقدّمك: ${d} / ${EX.length}</span><div class="bar"><i style="width:${d/EX.length*100}%"></i></div></div>`;}
  html+=`<div class="tabs" role="group">${tabs.map(([k,v])=>`<button class="tab" data-tab="${k}" aria-pressed="${tab===k}">${v}</button>`).join('')}</div>`;
  html+=`<div class="tabs lvtabs" role="group"><span class="lvlab">المستوى:</span>${[['all','الكل'],['1','سهل'],['2','متوسط'],['3','صعب']].map(([k,v])=>`<button class="tab lt${k}" data-lv="${k}" aria-pressed="${lv===k}">${v}</button>`).join('')}</div>`;
  const card=e=>`<button class="card" data-ex="${e.id}">
      ${e.img?`<div class="thumb" style="background-image:url('${IMG[e.img]}')"></div>`:`<div class="thumb svgt">${drawHTML(e,simSteps(e).length-1,'')}</div>`}
      <div class="body"><span class="no">${exNo(e)} · ${e.src}</span><h3>${e.title}${e.extra?'<span class="tag">مثال إضافي</span>':''}${getDone().includes(e.id)?'<span class="done">✓</span>':''}</h3><p>${e.short}</p>${lvlTag(e)}</div></button>`;
  for(const c of CH){
    if(tab!=='all'&&tab!==c.id)continue;
    const okL=e=>lv==='all'||String(e.lvl)===lv;
    const bk=EX.filter(e=>e.ch===c.id&&e.book&&okL(e)).sort((a,b)=>a.lvl-b.lvl||a.id-b.id);
    const ex=EX.filter(e=>e.ch===c.id&&!e.book&&okL(e));
    html+=`<section><h2 style="font-size:1.25rem;margin-top:22px">${c.name}</h2><div class="src">${c.files}</div>
    <div class="sec-label">أمثلة السلايدات والإضافية</div><div class="grid">${ex.map(card).join('')}${ex.length?'':'<p class="note">ما فيه أمثلة بهذا المستوى.</p>'}</div>
    ${bk.length?`<div class="sec-label">أمثلة الكتاب — Hibbeler (${bk.length})</div><div class="grid">${bk.map(card).join('')}</div>`:''}
    <div class="sec-label">ملخص المفاهيم والقوانين</div><div class="concepts">${CONCEPTS[c.id].map(([t,b])=>`<details class="cpt"><summary>${t}</summary><div class="in">${b}</div></details>`).join('')}</div></section>`;
  }
  html+=`<p class="foot">مبني من ملفات المقرر CE 360 — جامعة الملك سعود</p>`;
  app.classList.remove('wide');
  applyStatics();
  app.innerHTML=html;
}

function bmd(){
  // scale: 6 m → 300px, x0=40
  const X=x=>40+x*50;
  const Vy=v=>60-v*12, My=m=>70-m*12;
  return `<div class="tw"><svg direction="ltr" viewBox="0 0 380 300" width="100%" style="max-width:520px;display:block;margin:auto" role="img" aria-label="مخطط القص والعزم">
  <text x="4" y="18" font-size="11" fill="var(--muted)">V (kN)</text>
  <line x1="40" y1="60" x2="340" y2="60" stroke="var(--muted)" stroke-width="1"/>
  <path d="M${X(0)},60 V${Vy(.5)} H${X(3)} V${Vy(-2.5)} H${X(6)} V60 Z" fill="var(--steel-soft)" stroke="var(--steel)" stroke-width="2"/>
  <text x="${X(1.5)}" y="${Vy(.5)-5}" font-size="11" text-anchor="middle" fill="var(--ink)">+0.5</text>
  <text x="${X(4.5)}" y="${Vy(-2.5)+14}" font-size="11" text-anchor="middle" fill="var(--ink)">−2.5</text>
  <text x="4" y="138" font-size="11" fill="var(--muted)">M (kN·m)</text>
  <g transform="translate(0,140)">
  <line x1="40" y1="70" x2="340" y2="70" stroke="var(--muted)"/>
  <path d="M${X(0)},70 L${X(3)},${My(1.5)} L${X(4.5)},${My(-2.25)} L${X(4.5)},${My(3.75)} L${X(6)},70 Z" fill="var(--dim-soft)" stroke="var(--dim)" stroke-width="2"/>
  <text x="${X(3)}" y="${My(1.5)-6}" font-size="11" text-anchor="middle" fill="var(--ink)">+1.5</text>
  <text x="${X(4.5)-6}" y="${My(-2.25)+14}" font-size="11" text-anchor="end" fill="var(--ink)">−2.25</text>
  <text x="${X(4.5)+6}" y="${My(3.75)-4}" font-size="11" fill="var(--ink)">+3.75</text>
  ${[['A',0],['C',3],['D',4.5],['B',6]].map(([n,x])=>`<text x="${X(x)}" y="150" font-size="12" text-anchor="middle" fill="var(--steel)">${n}</text><line x1="${X(x)}" y1="-140" x2="${X(x)}" y2="138" stroke="var(--line)" stroke-dasharray="3 3"/>`).join('')}
  </g></svg></div><p class="figcap">مرسوم بالمقياس من القيم المحسوبة (القص فوق، العزم تحت)</p>`;
}

function exPageOld(id){
  const e=EX.find(x=>x.id===id); if(!e){location.hash='';return}
  const i=EX.indexOf(e), prev=EX[i-1], next=EX[i+1], last=simSteps(e).length-1;
  const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="شكل ${e.title}">`:drawHTML(e,0);
  const steps=e.cases
    ?`<div class="wb-cases">${e.cases.map(([im,t,d,r],k)=>`<div class="wb-step"><span class="wn">${k+1}</span><div><b>${t}</b>${CASE[im]?`<svg class="drw" viewBox="0 0 300 140" direction="ltr">${DEFS}${CASE[im]}</svg>`:`<img src="${IMG[im]}" alt="${t}">`}<span class="wq">${d}</span><span class="wr">${r}</span></div></div>`).join('')}</div>`
    :`<div class="wb-grid2">${e.steps.map(([t,d,q],k)=>`<div class="wb-step"><span class="wn">${k+1}</span><div><b>${t}</b>${d?`<p>${d}</p>`:''}${q?`<span class="wq">${q}</span>`:''}</div></div>`).join('')}</div>`;
  const tile=(key,num,title,base,body)=>`<section class="zt" data-t="${key}"><header class="zh" title="اسحب من هنا لتحريك الجزء"><b><span class="grip" aria-hidden="true">⠿</span>${num?`<span class="wt">${num}</span>`:''}${title}</b><div class="zc"><button data-zt="out" aria-label="تصغير الجزء">−</button><span class="zp">100%</span><button data-zt="in" aria-label="تكبير الجزء">+</button><button data-zt="reset" aria-label="المقاس الأصلي">↺</button></div></header><div class="zi" style="width:${base}px" data-base="${base}">${body}</div><span class="rz" title="اسحب لفوق: شريط بالعرض — لتحت: بالطول" aria-label="تغيير الشكل"></span></section>`;
  app.classList.add('wide');
  app.innerHTML=`<div class="bar"><button class="back" data-home>→ كل الأمثلة</button>
     <button class="back" id="try">إخفاء الحل</button>
     <button class="back" id="solpage">رسمة الحل (صفحة بيضاء)</button>
     <button class="back ${getDone().includes(e.id)?'isdone':''}" data-done="${e.id}">${getDone().includes(e.id)?'✓ فهمته':'علّم: فهمته'}</button></div>
   ${qHTML(e)}
   ${simHTML(e)}
   <h3 class="sec-title">الحل الكامل</h3>
   <div class="wb wb4" id="wb">
    <div class="wb-canvas" id="bd">
     <div class="zhead"><b>${e.title} ${lvlTag(e)}</b><span class="mono">${exNo(e)} · ${e.src.replace('ملف','File').replace('صفحات','pp.').replace('صفحة','p.')}</span></div>
     <div class="zrow">
      ${tile('q',1,'السؤال والمعطيات',560,`<p class="wb-qt">${e.q}</p>${fig}<table class="gtab">${e.given.map((g,k)=>`<tr><td>${k+1}</td><td>${g}</td></tr>`).join('')}</table>`)}
      ${tile('steps',2,e.cases?'الحل — تصنيف كل حالة':'خطوات الحل',880,steps)}
      ${tile('draw',3,'رسمة الحل',760,drawHTML(e,last))}
      ${tile('ans',4,'الجواب والفكرة',520,`<div class="b-ans">${e.ans}</div><div class="wb-idea2"><b>الفكرة المهمة:</b> ${e.idea}</div>`)}
     </div>
    </div>
    <div class="wb-ui wb-zoom"><button data-wb="out" aria-label="تصغير الصفحة">−</button><span id="wbp">100%</span><button data-wb="in" aria-label="تكبير الصفحة">+</button><button data-wb="fit" aria-label="الصفحة كاملة">⊡</button><button data-wb="arrange" class="arr" aria-label="رجّع الترتيب">ترتيب</button><button data-wb="full" id="wbfull" aria-label="ملء الشاشة">⤢</button></div>
   </div>
   ${whyHTML(e)}
   <nav class="nav"><button ${prev?`data-ex="${prev.id}"`:'disabled'}>→ ${prev?prev.title:'السابق'}</button><button ${next?`data-ex="${next.id}"`:'disabled'}>${next?next.title:'التالي'} ←</button></nav>`;
  window.scrollTo(0,0);
  SE=e;simStop();simSet(0);applyStatics();
  WB.init();
}
function exPage(id){
  const e=EX.find(x=>x.id===id); if(!e){location.hash='';return}
  const i=EX.indexOf(e), prev=EX[i-1], next=EX[i+1];xsStop();
  app.classList.add('wide');
  app.innerHTML=`<div class="bar"><button class="back" data-home>→ كل الأمثلة</button>
     <button class="back" id="ftry">إخفاء الحل</button>
     <button class="back" id="solpage">رسمة الحل (صفحة بيضاء)</button>
     <button class="back ${getDone().includes(e.id)?'isdone':''}" data-done="${e.id}">${getDone().includes(e.id)?'✓ فهمته':'علّم: فهمته'}</button></div>
   ${qHTML(e)}
   ${simHTML(e)}
   <h3 class="sec-title">الحل</h3>${SOLHINT}${solCanvas(exBands(e))}
   <nav class="nav"><button ${prev?`data-ex="${prev.id}"`:'disabled'}>→ ${prev?prev.title:'السابق'}</button><button ${next?`data-ex="${next.id}"`:'disabled'}>${next?next.title:'التالي'} ←</button></nav>`;
  window.scrollTo(0,0);
  SE=e;simStop();simSet(0);applyStatics();
  FC.init('ex'+id);
}
const WB={x:0,y:0,s:1,tz:{},off:{},zc:5,rs:null,
 el(){return document.getElementById('wb')},cv(){return document.getElementById('bd')},
 apply(anim){const c=this.cv();if(!c)return;c.classList.toggle('anim',!!anim);c.style.transform=`translate(${this.x}px,${this.y}px) scale(${this.s})`;const p=document.getElementById('wbp');if(p)p.textContent=Math.round(this.s*100)+'%'},
 fitRect(r,anim=true){const v=this.el(),W=v.clientWidth,H=v.clientHeight,pad=16;let s=Math.min((W-pad*2)/r.w,(H-pad*2)/r.h);s=Math.max(.08,Math.min(3,s));this.s=s;this.x=W/2-(r.x+r.w/2)*s;this.y=H/2-(r.y+r.h/2)*s;this.apply(anim)},
 fitAll(anim=true){const c=this.cv(),cr=c.getBoundingClientRect();let x1=1e9,y1=1e9,x2=-1e9,y2=-1e9;c.querySelectorAll('.zhead,.zt').forEach(el=>{const r=el.getBoundingClientRect();x1=Math.min(x1,(r.left-cr.left)/this.s);y1=Math.min(y1,(r.top-cr.top)/this.s);x2=Math.max(x2,(r.right-cr.left)/this.s);y2=Math.max(y2,(r.bottom-cr.top)/this.s)});this.fitRect({x:x1-20,y:y1-20,w:x2-x1+40,h:y2-y1+40},anim)},
 row(){return this.cv().querySelector('.zrow')},
 sizeRow(){const row=this.row();if(!row||!row.classList.contains('abs'))return;let w=0,h=0;row.querySelectorAll('.zt').forEach(z=>{w=Math.max(w,z.offsetLeft+z.offsetWidth);h=Math.max(h,z.offsetTop+z.offsetHeight)});row.style.width=w+'px';row.style.height=h+'px'},
 absolutize(){const row=this.row(),rr=row.getBoundingClientRect();const it=[...row.querySelectorAll('.zt')].map(z=>{const q=z.getBoundingClientRect();return[z,(q.left-rr.left)/this.s,(q.top-rr.top)/this.s]});
  row.style.width=(rr.width/this.s)+'px';row.style.height=(rr.height/this.s)+'px';row.classList.add('abs');it.forEach(([z,x,y])=>{z.style.left=x+'px';z.style.top=y+'px';this.off[z.dataset.t]={x,y}});this.sizeRow()},
 moveTile(t,x,y){this.off[t.dataset.t]={x,y};t.style.left=x+'px';t.style.top=y+'px';this.sizeRow()},
 fitTile(t){const c=this.cv(),cr=c.getBoundingClientRect(),r=t.getBoundingClientRect();this.fitRect({x:(r.left-cr.left)/this.s,y:(r.top-cr.top)/this.s,w:r.width/this.s,h:r.height/this.s})},
 zoomAt(f,cx,cy,anim){const ns=Math.max(.08,Math.min(4,this.s*f)),k=ns/this.s;this.x=cx-(cx-this.x)*k;this.y=cy-(cy-this.y)*k;this.s=ns;this.apply(anim)},
 sync(t){const zi=t.querySelector('.zi'),zw=t.querySelector('.zw'),u=this.tz[t.dataset.t]||1;if(!zw)return;zi.style.zoom='';zi.style.transform=u===1?'':`scale(${u})`;zw.style.width=(zi.offsetWidth*u)+'px';zw.style.height=(zi.offsetHeight*u)+'px'},
 setTile(t,u){u=Math.max(.2,Math.min(3,u));const zw=t.querySelector('.zw'),zi=t.querySelector('.zi'),W=zw.offsetWidth;this.tz[t.dataset.t]=u;zi.style.width=Math.max(200,W/u)+'px';this.sync(t);t.querySelector('.zp').textContent=Math.round(u*100)+'%';this.sizeRow()},
 init(){const v=this.el();if(!v)return;this.tz={};this.off={};this.s=1;this.x=0;this.y=0;this.cv().querySelectorAll('.zt').forEach(z=>{const zi=z.querySelector('.zi'),zw=document.createElement('div');zw.className='zw';zi.parentNode.insertBefore(zw,zi);zw.appendChild(zi);
   [...zi.children].forEach(el=>{if(el.matches('.wb-grid2,.wb-cases,.wb-det'))return;let it=el;if(el.tagName==='TABLE'){it=document.createElement('div');el.parentNode.insertBefore(it,el);it.appendChild(el)}it.classList.add('ritem');const h=document.createElement('span');h.className='irz';h.title='اسحب لتكبير أو تصغير هذا العنصر — ضغطتين ترجّعه';it.appendChild(h)});
   this.sync(z)});let drag=null;const pts=new Map();let last=null,pinch=null,tapT=0,moved=false,downT=null;
  const loc=ev=>{const r=v.getBoundingClientRect();return{x:ev.clientX-r.left,y:ev.clientY-r.top}};
  v.addEventListener('pointerdown',ev=>{if(ev.target.closest('button'))return;downT=ev.target;v.setPointerCapture(ev.pointerId);pts.set(ev.pointerId,loc(ev));moved=false;const irh=ev.target.closest('.irz');if(irh&&pts.size===1){const it=irh.parentElement,tt=it.closest('.zt');this.ir={it,tt,p:loc(ev),w:it.getBoundingClientRect().width/(this.s*(this.tz[tt.dataset.t]||1)),k:this.s*(this.tz[tt.dataset.t]||1)};it.classList.add('isz');return}const rzh=ev.target.closest('.rz');if(rzh&&pts.size===1){const tt=rzh.closest('.zt'),zi=tt.querySelector('.zi');this.rs={t:tt,zi,p:loc(ev),w:parseFloat(zi.style.width),ih:zi.offsetHeight,h:tt.offsetHeight,u:this.tz[tt.dataset.t]||1,L:tt.offsetLeft,T:tt.offsetTop,W:tt.offsetWidth,H:tt.offsetHeight,o:[...this.row().querySelectorAll('.zt')].filter(z=>z!==tt).map(z=>({z,x:z.offsetLeft,y:z.offsetTop,w:z.offsetWidth,h:z.offsetHeight}))};tt.style.zIndex=++this.zc;tt.classList.add('dragging');return}const hd=ev.target.closest('.zh');if(hd&&pts.size===1){const tt=hd.closest('.zt'),o=this.off[tt.dataset.t]||{x:0,y:0};drag={t:tt,p:loc(ev),o:{...o}};tt.style.zIndex=++this.zc;tt.classList.add('dragging');return}if(drag){drag.t.classList.remove('dragging');drag=null}
   if(pts.size===2){const[a,b]=[...pts.values()];pinch={d:Math.hypot(a.x-b.x,a.y-b.y)||1,s:this.s,m:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},x:this.x,y:this.y}}else last=loc(ev)});
  v.addEventListener('pointermove',ev=>{if(!pts.has(ev.pointerId))return;pts.set(ev.pointerId,loc(ev));if(this.ir&&pts.size===1){const q=this.ir,p=loc(ev),dx=(p.x-q.p.x)/q.k;q.it.style.flex='0 0 auto';q.it.style.maxWidth='none';const nw=Math.max(120,q.w+dx);q.it.style.width=nw+'px';const zi=q.tt.querySelector('.zi');if(nw+40>parseFloat(zi.style.width))zi.style.width=(nw+40)+'px';this.sync(q.tt);this.sizeRow();moved=true;return}if(this.rs&&pts.size===1){const r=this.rs,p=loc(ev),dx=(p.x-r.p.x)/this.s,dy=(p.y-r.p.y)/this.s;if(Math.abs(dx)>Math.abs(dy)*1.5){r.zi.style.width=Math.max(360,r.w+dx/r.u)+'px'}else{const target=Math.max(40,r.ih+dy/r.u);let lo=360,hi=9000;r.zi.style.width=hi+'px';const tg=Math.max(target,r.zi.offsetHeight+1);for(let k=0;k<16;k++){const mid=(lo+hi)/2;r.zi.style.width=mid+'px';if(r.zi.offsetHeight<=tg)hi=mid;else lo=mid}r.zi.style.width=Math.ceil(hi)+'px'}this.sync(r.t);const dW=r.t.offsetWidth-r.W,dH=r.t.offsetHeight-r.H;r.o.forEach(o=>{let x=o.x,y=o.y;const vOv=o.y<r.T+r.H&&o.y+o.h>r.T,hOv=o.x<r.L+r.W&&o.x+o.w>r.L;if(vOv&&o.x>=r.L+r.W-6)x=o.x+dW;if(hOv&&o.y>=r.T+r.H-6)y=o.y+dH;this.moveTile(o.z,x,y)});this.sizeRow();moved=true;return}if(drag&&pts.size===1){const p=loc(ev);this.moveTile(drag.t,drag.o.x+(p.x-drag.p.x)/this.s,drag.o.y+(p.y-drag.p.y)/this.s);moved=true;return}
   if(pts.size>=2&&pinch){const[a,b]=[...pts.values()];const d=Math.hypot(a.x-b.x,a.y-b.y),m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
    const ns=Math.max(.08,Math.min(4,pinch.s*d/pinch.d)),k=ns/pinch.s;this.s=ns;this.x=m.x-(pinch.m.x-pinch.x)*k;this.y=m.y-(pinch.m.y-pinch.y)*k;moved=true;this.apply(false)}
   else if(last){const p=loc(ev);if(Math.abs(p.x-last.x)+Math.abs(p.y-last.y)>2)moved=true;this.x+=p.x-last.x;this.y+=p.y-last.y;last=p;this.apply(false)}});
  const up=ev=>{pts.delete(ev.pointerId);if(this.ir){const q=this.ir;q.it.classList.remove('isz');this.ir=null;const now=Date.now();if(!moved&&now-(this.irT||0)<320){q.it.style.width='';q.it.style.flex='';q.it.style.maxWidth='';this.sync(q.tt);this.sizeRow()}this.irT=now;if(!pts.size){last=null;return}}if(this.rs){this.rs.t.classList.remove('dragging');this.rs=null;if(!pts.size){last=null;return}}if(drag){drag.t.classList.remove('dragging');drag=null;if(!pts.size){last=null;return}}if(pts.size<2)pinch=null;if(pts.size===1)last=[...pts.values()][0];else if(!pts.size){last=null;
    if(!moved){const now=Date.now();if(now-tapT<320){const t=downT&&downT.closest('.zt');t?this.fitTile(t):this.fitAll();tapT=0}else tapT=now}}};
  v.addEventListener('pointerup',up);v.addEventListener('pointercancel',up);
  v.addEventListener('wheel',ev=>{ev.preventDefault();const p=loc(ev);if(ev.ctrlKey||ev.metaKey)this.zoomAt(Math.exp(-ev.deltaY*0.01),p.x,p.y,false);else{this.x-=ev.deltaX;this.y-=ev.deltaY;this.apply(false)}},{passive:false});
  v.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;ev.stopPropagation();
   if(b.dataset.zt){const t=b.closest('.zt'),u=this.tz[t.dataset.t]||1,a=b.dataset.zt;if(a==='reset'){t.querySelectorAll('.ritem').forEach(it=>{it.style.width='';it.style.flex='';it.style.maxWidth=''});const zi=t.querySelector('.zi');zi.style.width=zi.dataset.base+'px';t.style.minHeight='';this.tz[t.dataset.t]=1;this.sync(t);t.querySelector('.zp').textContent='100%';this.sizeRow();return}this.setTile(t,a==='in'?u*1.2:u/1.2);return}
   const a=b.dataset.wb;if(a==='in'||a==='out')this.zoomAt(a==='in'?1.25:0.8,v.clientWidth/2,v.clientHeight/2,true);
   else if(a==='fit')this.fitAll();
   else if(a==='arrange'){this.off={};const row=this.row();row.classList.remove('abs');row.style.width='';row.style.height='';this.cv().querySelectorAll('.zt').forEach(z=>{z.style.left='';z.style.top='';z.style.zIndex='';z.style.minHeight='';z.querySelectorAll('.ritem').forEach(it=>{it.style.width='';it.style.flex='';it.style.maxWidth=''});const zi=z.querySelector('.zi');zi.style.width=zi.dataset.base+'px';z.querySelector('.zp').textContent='100%'});this.tz={};this.cv().querySelectorAll('.zt').forEach(z=>this.sync(z));requestAnimationFrame(()=>{this.absolutize();this.fitAll()})}
   else if(a==='full'){const on=!v.classList.contains('full');v.classList.toggle('full',on);document.body.style.overflow=on?'hidden':'';b.textContent=on?'✕':'⤢';setTimeout(()=>this.fitAll(false),30)}});
  requestAnimationFrame(()=>{this.absolutize();this.fitAll(false)});
  this.cv().querySelectorAll('img').forEach(im=>{if(!im.complete)im.addEventListener('load',()=>{this.cv().querySelectorAll('.zt').forEach(z=>this.sync(z));this.sizeRow();this.fitAll(false)})});
 }};
window.addEventListener('resize',()=>{if(document.getElementById('wb'))WB.fitAll(false)});
document.addEventListener('keydown',ev=>{const v=document.getElementById('wb');if(ev.key==='Escape'&&v&&v.classList.contains('full'))document.getElementById('wbfull').click()});




let Z=0;
const bd=()=>document.getElementById('bd');
function fitZ(){const v=document.getElementById('vw');return v?Math.min(1,(v.clientWidth-2)/1180):1}
function applyZoom(z){
  const b=bd(),sc=document.getElementById('sc'),v=document.getElementById('vw');if(!b||!sc||!v)return;
  if(z==='fit')z=fitZ();
  Z=Math.max(0.2,Math.min(2.5,z));
  b.style.transform=`scale(${Z})`;
  sc.style.width=1180*Z+'px';sc.style.height=b.offsetHeight*Z+'px';
  v.style.height=Math.min(b.offsetHeight*Z+2, Math.max(320,window.innerHeight-150))+'px';
  if(Z<=fitZ()+0.001)v.style.height=(b.offsetHeight*Z+2)+'px';
  document.getElementById('pct').textContent=Math.round(Z*100)+'%';
}
window.addEventListener('resize',()=>{if(bd())applyZoom(Z<=fitZ()?'fit':Z)});
// pinch zoom on the viewer
let pinch=null;
document.addEventListener('touchstart',ev=>{const v=ev.target.closest&&ev.target.closest('#vw');if(v&&ev.touches.length===2){const[a,b]=ev.touches;pinch={d:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY),z:Z}}},{passive:true});
document.addEventListener('touchmove',ev=>{if(pinch&&ev.touches.length===2){ev.preventDefault();const[a,b]=ev.touches;applyZoom(pinch.z*Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)/pinch.d)}},{passive:false});
document.addEventListener('touchend',ev=>{if(ev.touches.length<2)pinch=null});

function printAll(){
  document.documentElement.setAttribute('data-theme','light');document.documentElement.classList.add('printing');
  let h=`<div class="pbook"><section class="pcover"><div class="course">CE 360 · STRUCTURAL ANALYSIS 1 · KSU</div><h1>التحليل الإنشائي ١</h1><p>ملخص القوانين وأمثلة محلولة خطوة بخطوة مع رسمة الحل</p>
   <div class="ptoc">${CH.map(c=>`<b style="display:block;margin-top:10px">${c.name}</b>`+EX.filter(e=>e.ch===c.id).map(e=>`<div><span>${exNo(e)} — ${e.title}${e.extra?' (مثال إضافي)':''}</span></div>`).join('')).join('')}</div></section>`;
  for(const c of CH){
    h+=`<section class="pch"><h2>${c.name}</h2><div class="src">${c.files} — ملخص المفاهيم والقوانين</div></section>`+CONCEPTS[c.id].map(([t,b])=>`<div class="pcpt"><h4>${t}</h4><div class="in">${b}</div></div>`).join('');
    for(const e of EX.filter(x=>x.ch===c.id)){
      const last=simSteps(e).length-1;
      const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="">`:drawHTML(e,0);
      let sol;
      if(e.cases) sol=`<div class="b-sec"><h3>الحل — تصنيف كل حالة</h3><div class="cases">${e.cases.map(([im,t,d,r])=>`<div class="case"><b>${t}</b>${CASE[im]?`<svg class="drw" viewBox="0 0 300 140" direction="ltr">${DEFS}${CASE[im]}</svg>`:`<img src="${IMG[im]}" alt="">`}<span>${d.includes('→')?`<span class="q">${d}</span>`:d}</span><span class="r">${r}</span></div>`).join('')}</div></div>`;
      else if(DET[e.id]) sol=`<div class="b-sec"><h3>خطوات الحل مع الشرح</h3>${detHTML(e)}</div>`;
  else sol=`<div class="b-sec"><h3>خطوات الحل</h3><table class="calc">${e.steps.map(([t,d,q],k)=>`<tr><td class="n"><span>${k+1}</span></td><td><span class="t">${t}</span>${d?`<span class="d">${d}</span>`:''}${q?`<span class="q">${q}</span>`:''}</td></tr>`).join('')}</table></div>`;
      h+=`<section class="pex"><div class="pex-h"><h2>${e.title}</h2><div class="meta">${exNo(e)}<br>${e.src.replace('ملف','File').replace('صفحات','pp.').replace('صفحة','p.')}</div></div>
       <div class="prow"><div>${fig}</div><div><div class="b-sec"><h3>السؤال</h3><p>${e.q}</p></div><div class="b-sec"><h3>المعطيات</h3><table class="gtab">${e.given.map((g,k)=>`<tr><td>${k+1}</td><td>${g}</td></tr>`).join('')}</table></div></div></div>
       ${sol}
       <div class="b-sec pkeep" style="margin-top:12px"><h3>رسمة الحل</h3>${drawHTML(e,last)}</div>
       <div class="pkeep"><div class="b-sec" style="margin-top:12px"><h3>الجواب النهائي</h3><div class="b-ans">${e.ans}</div></div>
       <div class="b-idea" style="margin-top:10px"><b>الفكرة المهمة:</b> ${e.idea}</div></div></section>`;
    }
  }
  app.classList.add('wide');app.innerHTML=h+'</div>';applyStatics();
}
function exBody(e){
  const last=simSteps(e).length-1;
  const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="">`:drawHTML(e,0);
  let sol;
  if(e.cases) sol=`<div class="b-sec"><h3>الحل — تصنيف كل حالة</h3><div class="cases">${e.cases.map(([im,t,d,r])=>`<div class="case"><b>${t}</b>${CASE[im]?`<svg class="drw" viewBox="0 0 300 140" direction="ltr">${DEFS}${CASE[im]}</svg>`:`<img src="${IMG[im]}" alt="">`}<span>${d.includes('→')?`<span class="q">${d}</span>`:d}</span><span class="r">${r}</span></div>`).join('')}</div></div>`;
  else if(DET[e.id]) sol=`<div class="b-sec"><h3>خطوات الحل مع الشرح</h3>${detHTML(e)}</div>`;
  else sol=`<div class="b-sec"><h3>خطوات الحل</h3><table class="calc">${e.steps.map(([t,d,q],k)=>`<tr><td class="n"><span>${k+1}</span></td><td><span class="t">${t}</span>${d?`<span class="d">${d}</span>`:''}${q?`<span class="q">${q}</span>`:''}</td></tr>`).join('')}</table></div>`;
  return exQ(e)+exRest(e,sol,last)}
function exQ(e){const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="">`:drawHTML(e,0);
  return `<div class="prow"><div>${fig}</div><div><div class="b-sec" style="margin-top:0"><h3>السؤال</h3><p>${e.q}</p></div><div class="b-sec"><h3>المعطيات</h3><table class="gtab">${e.given.map((g,k)=>`<tr><td>${k+1}</td><td>${g}</td></tr>`).join('')}</table></div></div></div>`}
function exRest(e,sol,last){if(sol===undefined){const b=exBody(e);return b.slice(exQ(e).length)}
  return `${sol}${whyHTML(e)}<div class="b-sec"><h3>رسمة الحل</h3>${drawHTML(e,last)}</div>
   <div class="b-sec"><h3>الجواب النهائي</h3><div class="b-ans">${e.ans}</div></div><div class="b-idea" style="margin-top:10px"><b>الفكرة المهمة:</b> ${e.idea}</div>`;
}
function staticSim(e){
  const g=SIMS[e.id](),st=simSteps(e);
  return `<section class="sim drw" data-ex="${e.id}"><div class="sim-head"><b>المحاكاة</b><span class="mono sn">start · 1/${st.length}</span></div>
   <div class="sim-stage"><svg viewBox="${g.vb}" direction="ltr" role="img" aria-label="محاكاة">${DEFS}${g.svg}</svg></div>
   <div class="sim-cap"><h4 class="st">${st[0].t}</h4><p class="sd">${st[0].d}</p><div class="q sq" hidden></div></div>
   <div class="sim-dots">${st.map((_,i)=>`<button data-k="${i}" class="${i===0?'on':''}"></button>`).join('')}</div>
   <div class="sim-ctl"><button data-a="prev" disabled>→ السابق</button><button data-a="play">▶ تشغيل</button><button data-a="next" class="pri">التالي ←</button></div></section>`;
}
function staticAll(){
  document.documentElement.setAttribute('data-theme','light');
  let h=header()+`<div class="sx-top"><p style="margin:0 0 6px">اضغط على أي مثال ينقلك له. كل مثال فيه: المحاكاة، السؤال، المعطيات، خطوات الحل، رسمة الحل، والجواب.</p><div class="sx-toc">${CH.map(c=>`<h3>${c.name}</h3>`+EX.filter(e=>e.ch===c.id).map(e=>`<a href="#ex${e.id}"><span class="no">${exNo(e)}</span>${e.title}${e.extra?'<span class="tag">مثال إضافي</span>':''}</a>`).join('')+`<a href="#sum-${c.id}"><span class="no">∑</span>ملخص القوانين</a>`).join('')}</div></div>`;
  for(const c of CH){
    h+=`<h2 style="margin-top:28px;font-size:1.4rem">${c.name}</h2><div class="src">${c.files}</div>`;
    for(const e of EX.filter(x=>x.ch===c.id)) h+=`<section class="sx" id="ex${e.id}"><div class="pex-h"><h2>${e.title}${e.extra?'<span class="tag">مثال إضافي</span>':''}</h2><div class="meta">${exNo(e)} · <a class="uptoc" href="#top">↑ الفهرس</a></div></div>${exQ(e)}${staticSim(e)}${exRest(e)}</section>`;
    h+=`<section class="sx" id="sum-${c.id}"><div class="pex-h"><h2>ملخص القوانين — ${c.name.split(' — ')[0]}</h2></div><div class="concepts">${CONCEPTS[c.id].map(([t,b])=>`<details class="cpt" open><summary>${t}</summary><div class="in">${b}</div></details>`).join('')}</div></section>`;
  }
  app.innerHTML=h;app.id='app';document.querySelector('.top').id='top';
  applyStatics();
  document.querySelectorAll('.sim[data-ex]').forEach(r=>applyState(r,0,true));
}
function initStaticSims(){
  document.documentElement.classList.remove('nojs');
  document.querySelectorAll('.sim[data-ex]').forEach(root=>{
    const e=EX.find(x=>x.id==root.dataset.ex),st=simSteps(e);let k=0,tm=null;
    const set=n=>{k=Math.max(0,Math.min(st.length-1,n));applyState(root,k,true);segAnim(root,k);const s=st[k],last=st.length-1;
      root.querySelector('.sn').textContent=`${k===0?'start':k===last?'answer':'step '+k} · ${k+1}/${st.length}`;
      root.querySelector('.st').textContent=s.t;const d=root.querySelector('.sd');s.fin?d.innerHTML=s.d:d.textContent=s.d||'';
      const q=root.querySelector('.sq');q.textContent=s.q||'';q.hidden=!s.q;
      root.querySelectorAll('[data-k]').forEach(b=>b.classList.toggle('on',+b.dataset.k<=k));
      root.querySelector('[data-a=prev]').disabled=k===0;root.querySelector('[data-a=next]').disabled=k===last;
      if(k===last&&tm){clearInterval(tm);tm=null;root.querySelector('[data-a=play]').textContent='▶ تشغيل'}};
    root.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;
      if(b.dataset.k!=null){set(+b.dataset.k);return}
      if(b.dataset.a==='play'){if(tm){clearInterval(tm);tm=null;b.textContent='▶ تشغيل';return}if(k>=st.length-1)set(0);b.textContent='❚❚ إيقاف';tm=setInterval(()=>set(k+1),3800);return}
      if(tm){clearInterval(tm);tm=null;root.querySelector('[data-a=play]').textContent='▶ تشغيل'}
      set(k+(b.dataset.a==='next'?1:-1))});
  });
}
function frameHTML(e,k,s,n){const g=SIMS[e.id]();return `<div class="frame"><div class="drw" data-state="${k}" data-hlstate="1"><svg viewBox="${g.vb}" direction="ltr">${DEFS}${g.svg}</svg></div><div class="fc"><span class="fn">${k===0?'START':k===n-1?'ANSWER':'STEP '+k} · ${k+1}/${n}</span><b>${s.t}</b>${s.fin?s.d:(s.d||'')}${s.q?`<span class="q">${s.q}</span>`:''}</div></div>`}
function offlineAll(){
  document.documentElement.setAttribute('data-theme','light');
  const nav=`<nav class="off-nav"><a href="#examples">الأمثلة</a><a href="#formulas-o">القوانين والأخطاء الشائعة</a><a href="#quiz-o">اختبر نفسك</a><a href="#glossary-o">المصطلحات</a></nav>`;
  let h=oldHeader().replace('<header class="top"','<header class="top" id="top"')+nav;
  h+=`<section class="sx-top" id="examples"><h2 style="font-size:1.2rem;margin-bottom:6px">فهرس الأمثلة</h2><div class="sx-toc">${CH.map(c=>`<h3>${c.name}</h3>`+EX.filter(e=>e.ch===c.id).map(e=>`<a href="#ex${e.id}"><span class="no">${exNo(e)}</span>${e.title}${e.extra?'<span class="tag">مثال إضافي</span>':''}</a>`).join('')).join('')}</div></section>`;
  for(const c of CH){
    h+=`<h2 style="margin-top:28px;font-size:1.4rem">${c.name}</h2><div class="src">${c.files}</div>`;
    for(const e of EX.filter(x=>x.ch===c.id)){const st=simSteps(e);
      h+=`<section class="sx" id="ex${e.id}"><div class="pex-h"><h2>${e.title}${e.extra?'<span class="tag">مثال إضافي</span>':''}</h2><div class="meta">${exNo(e)} · <a class="uptoc" href="#examples">↑ الفهرس</a></div></div>${exQ(e)}
      <details class="simd"><summary>▶ المحاكاة خطوة بخطوة (${st.length} لقطات)</summary><div class="frames">${st.map((s,k)=>frameHTML(e,k,s,st.length)).join('')}</div></details>${exRest(e)}</section>`;}
  }
  h+=`<section class="sx" id="formulas-o"><div class="pex-h"><h2>القوانين والأخطاء الشائعة</h2><a class="uptoc" href="#top">↑ أعلى</a></div>`+CH.map(c=>`<h3 style="margin:14px 0 8px">${c.name}</h3><div class="fcards">${CONCEPTS[c.id].map(([t,b])=>`<div class="fcard"><h4>${t}</h4><div class="in">${b}</div></div>`).join('')}<div class="fcard warn"><h4>أخطاء شائعة</h4><ul>${MISTAKES[c.id].map(m=>`<li>${m}</li>`).join('')}</ul></div></div>`).join('')+`</section>`;
  h+=`<section class="sx" id="quiz-o"><div class="pex-h"><h2>اختبر نفسك</h2><a class="uptoc" href="#top">↑ أعلى</a></div><p class="lead">فكّر في الجواب، بعدين اضغط "اعرض الإجابة".</p>`+QUIZ.map(([ch,q,opts,ans,why],i)=>`<div class="qcard"><p class="qq"><span class="mono">Q${i+1}</span> ${q}</p><ol class="qlist" type="a">${opts.map(o=>`<li><bdi>${o}</bdi></li>`).join('')}</ol><details class="qd"><summary>اعرض الإجابة</summary><p class="qwhy"><b>(${'abcd'[ans]}) ${opts[ans]}</b> — ${why}</p></details></div>`).join('')+`</section>`;
  h+=`<section class="sx" id="glossary-o"><div class="pex-h"><h2>المصطلحات</h2><a class="uptoc" href="#top">↑ أعلى</a></div><div class="gl">${GLOSS.map(([en,a])=>`<div class="gi"><b dir="ltr">${en}</b><span>${a}</span></div>`).join('')}</div></section>`;
  h+=examsStatic();
  app.classList.remove('wide');app.innerHTML=h;
  document.querySelectorAll('[data-state]').forEach(el=>applyState(el,+el.dataset.state,el.hasAttribute('data-hlstate')));
}
/*__EXAMS_BEGIN__*/
/* ================= الاختبارات السابقة: أدوات الرسم بأسلوب دفتر الملاحظات ================= */
const NBC={nr:'#c0262d',nb:'#1f4fb5',nk:'#1d1d1d',ng:'#2f8f3a',no:'#d9822b'};
const NBDEFS=`<defs>${Object.entries(NBC).map(([c,f])=>`<marker id="m-${c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${f}"/></marker>`).join('')}</defs>`;
const HT=(x,y,s,c='nk',a='middle',ex='')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="h ${c}" ${ex}>${s}</text>`;
const HA=(x1,y1,x2,y2,c='nk',ex='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="han ${c}" marker-end="url(#m-${c})" ${ex}/>`;
const HL=(x1,y1,x2,y2,c='nk',ex='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="hln ${c}" ${ex}/>`;
const HP=(d,c='nk',ex='')=>`<path d="${d}" class="hln ${c}" fill="none" ${ex}/>`;
const SGc=(x,y,plus)=>`<g class="sgn"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y+6}" text-anchor="middle">${plus?'+':'−'}</text></g>`;
const nbsvg=(vb,body,mw)=>`<svg class="nbs drw" viewBox="${vb}" direction="ltr" ${mw?`style="max-width:${mw}px"`:''}>${DEFS}${NBDEFS}${body}</svg>`;
const ARR=/[\u0600-\u06FF](?:[\u0600-\u06FF\s\u0640]*[\u0600-\u06FF])?/g;
const ltrRuns=s=>s.replace(/[^؀-ۿ،]+/g,m=>{const t=m.trim();if(!/[=\d]/.test(t)||t.length<3)return m;const bal=k=>(t.match(new RegExp('<'+k+'\\b','g'))||[]).length===(t.match(new RegExp('</'+k+'>','g'))||[]).length;if(!bal('mark')||!bal('sub')||!bal('bdi')||/<[^>]*$/.test(t)||/^[^<]*>/.test(t))return m;const i=m.indexOf(t);return m.slice(0,i)+`<bdi dir="ltr">${t}</bdi>`+m.slice(i+t.length)});
const E0=(s,c='')=>/^\s*[؀-ۿ]/.test(s)?`<div class="nq ar ${c}">${ltrRuns(s)}</div>`:`<div class="nq ${c}">${s.replace(ARR,m=>`<bdi>${m}</bdi>`)}</div>`;
/* one step per line: split a chained equation at top-level " = " and " ⇒ " (never inside <mark>, tags or brackets) */
function topSplit(s,tok){const out=[];let d=0,tag=false,last=0;for(let i=0;i<s.length;i++){const ch=s[i];
 if(ch==='<'){tag=true;if(/^<(mark|bdi)\b/.test(s.slice(i,i+6)))d++;else if(/^<\/(mark|bdi)>/.test(s.slice(i,i+7)))d--;continue}
 if(tag){if(ch==='>')tag=false;continue}
 if(ch==='('||ch==='[')d++;else if(ch===')'||ch===']')d--;
 else if(d===0&&s.startsWith(tok,i)){out.push(s.slice(last,i));last=i+tok.length;i+=tok.length-1}}
 out.push(s.slice(last));return out}
function eqSplit(p){let pre='',rest=p;const c=topSplit(p,': ');if(c.length>1&&c[0].length<60){pre=c[0]+':';rest=c.slice(1).join(': ')}
 let out;if(/^\s*=\s/.test(rest)){out=topSplit(rest.replace(/^\s*=\s/,''),' = ').map(x=>'= '+x)}
 else{const g=topSplit(rest,' = ');if(g.length<=2)return [p];out=/ [+−×\/] /.test(g[0].replace(/<[^>]*>/g,''))?[g[0],...g.slice(1).map(x=>'= '+x)]:[g[0]+' = '+g[1],...g.slice(2).map(x=>'= '+x)]}
 if(pre)out[0]=pre+' '+out[0];return out}
function eqLines(s){const SEP='\u0001';s=s.replace(/\s*&nbsp;\s*و\s*&nbsp;\s*/g,SEP).replace(/\s*&nbsp;\s*&nbsp;\s*/g,SEP).replace(/ ، /g,SEP);
 return s.split(SEP).filter(x=>x.trim()).flatMap(line=>{const a=topSplit(line,' ⇒ ');return a.flatMap((q,i)=>eqSplit(q).map((l,j)=>i>0&&j===0?'⇒ '+l:l))})}
const E=(s,c='')=>{const L=eqLines(s);if(L.length<=1)return E0(s,c);const ar=/^\s*[؀-ۿ]/.test(L[0]);return L.map((l,k)=>k&&ar&&!/^\s*[؀-ۿ]/.test(l)?E0(l,c+' arc'):E0(l,c)).join('')};
const NT=s=>`<div class="nt">${s}</div>`;
const MK=s=>`<mark>${s}</mark>`;
const EH=s=>`<div class="eh">${s}</div>`;
const nbPage=(left,right,bottom='')=>`<div class="nbp"><div class="nbg"><div class="nbl">${left}</div>${right?`<div class="nbr">${right}</div>`:''}</div>${bottom}</div>`;
const nbOne=(body)=>`<div class="nbp"><div class="nb1">${body}</div></div>`;
/* curved moment arrow: ccw or cw around (x,y) */
const MARC=(x,y,r,ccw,c='nb')=>ccw?HP(`M${x+r*0.7},${y+r*0.7} A${r},${r} 0 1,0 ${x+r*0.7},${y-r*0.7}`,c,`marker-end="url(#m-${c})"`):HP(`M${x-r*0.7},${y+r*0.7} A${r},${r} 0 1,1 ${x-r*0.7},${y-r*0.7}`,c,`marker-end="url(#m-${c})"`);
/* free-body sketch for the method of sections
   o.side 'L' = left part (cut at right end) | 'R' = right part (cut at left end)
   o.end: {v:'130', m:'720', mccw:true} reaction at the outer end; o.w:{t:'u'|'t', lab}; o.P:[[frac,lab]]; o.x:'x' */
function fbd(o){const L=o.len||230,x0=110,x1=x0+L,y=78;let s='';
 s+=HL(x0,y,x1,y,'nk','stroke-width="3"');
 if(o.w){const top=o.w.t==='t'?(x=>y-8-40*(o.side==='R'?(x1-x)/L:(x-x0)/L)):(x=>y-34);
  s+=HP(`M${x0},${y-6} L${x0},${top(x0)} L${x1},${top(x1)} L${x1},${y-6}`,'nk','stroke-width="1.4"');
  for(let i=0;i<=8;i++){const xx=x0+L*i/8,yt=top(xx);if(y-6-yt>6)s+=HA(xx,yt,xx,y-5,'nk','stroke-width="1.2"')}
  if(o.w.lab)s+=HT(o.side==='R'?x0+6:x1-6,Math.min(top(x0),top(x1))-8,o.w.lab,'nk',o.side==='R'?'start':'end')}
 (o.P||[]).forEach(([f,lab])=>{const xx=x0+L*f;s+=HA(xx,y-58,xx,y-4,'nk','stroke-width="2"')+HT(xx+4,y-62,lab,'nk','start')});
 const ox=o.side==='R'?x1:x0,cx=o.side==='R'?x0:x1;
 if(o.end){if(o.end.v)s+=HA(ox,y+46,ox,y+4,'nr','stroke-width="2.2"')+HT(ox,y+64,o.end.v,'nr');
  if(o.end.m)s+=MARC(o.side==='R'?ox+18:ox-18,y,16,o.end.mccw,'nr')+HT(o.side==='R'?ox+30:ox-30,y-26,o.end.m,'nr',o.side==='R'?'start':'end');
  if(o.end.h)s+=HA(o.side==='R'?ox+46:ox-46,y,o.side==='R'?ox+4:ox-4,y,'nr','stroke-width="2"')+HT(o.side==='R'?ox+48:ox-48,y-6,o.end.h,'nr',o.side==='R'?'start':'end')}
 // internal V and M at the cut (positive directions)
 if(o.side==='R'){s+=HA(cx,y+44,cx,y+4,'nb','stroke-width="2.2"')+HT(cx-6,y+60,'V','nb','end')+MARC(cx-2,y,16,false,'nb')+HT(cx-22,y-22,'M','nb','end')}
 else{s+=HA(cx,y+4,cx,y+44,'nb','stroke-width="2.2"')+HT(cx+6,y+60,'V','nb','start')+MARC(cx+2,y,16,true,'nb')+HT(cx+22,y-22,'M','nb','start')}
 if(o.N)s+=o.side==='R'?HA(cx-4,y,cx-40,y,'nb','stroke-width="2"')+HT(cx-42,y+18,'N','nb','end'):HA(cx+4,y,cx+40,y,'nb','stroke-width="2"')+HT(cx+42,y+18,'N','nb','start');
 s+=HA((x0+x1)/2-8,y+30,x0+2,y+30,'ng','stroke-width="1.4"')+HA((x0+x1)/2+8,y+30,x1-2,y+30,'ng','stroke-width="1.4"')+HT((x0+x1)/2,y+36,o.x||'x','ng');
 return nbsvg(`0 0 ${x1+(o.side==='R'?110:80)} 150`,s,o.mw||380)}
/* beam + SFD + BMD (aligned, dashed lines) */
function nbBeam(sp,o={}){const by=o.by??110,vg=o.vgap??190,mg=o.mgap??170,VY=by+vg,MY=VY+mg;
 const g=BE.draw(sp,Object.assign({diag:true,signs:true,vlines:true,x1:470,av:52,am:60,by,vgap:vg,mgap:mg},o,{extra:(o.extra||'')+HT(500,VY+5,'S.F.D','nk','start')+HT(500,VY+26,'(kN)','nk','start')+HT(500,MY+5,'B.M.D','nk','start')+HT(500,MY+26,'(kN.m)','nk','start')}));
 return `<div class="nbfig">${nbsvg(g.vb.replace(/^0 0 600/,'0 0 600'),g.svg,o.mw||620)}</div>`}
/* frame diagrams: F = {S,ox,oy,P:{A:[x,y]},M:[{a,b,N,V,M,keys}],sup:[[pt,'pin'|'roller'|'pinR']],nl:{A:[dx,dy]}} */
function frm(F,kind,o={}){const S=F.S,X=x=>F.ox+x*S,Y=y=>F.oy-y*S;let s='';const eps=1e-6,placed=[];const lab=(x,y,t)=>{if(placed.some(p=>p.t===t&&Math.hypot(p.x-x,p.y-y)<46))return '';let yy=y;for(let k=0;k<5&&placed.some(p=>Math.abs(p.x-x)<(p.t.length+t.length)*5+4&&Math.abs(p.y-yy)<17);k++)yy-=18;placed.push({x,y:yy,t});return HT(x.toFixed(1),yy.toFixed(1),t,'nr')};
 const geo=m=>{const A=F.P[m.a],B=F.P[m.b],dx=B[0]-A[0],dy=B[1]-A[1],len=Math.hypot(dx,dy),t=[dx/len,dy/len],n=[-t[1],t[0]];return{A,B,len,t,n}};
 if(kind){const all=[];F.M.forEach(m=>{const G=geo(m);for(let i=0;i<=60;i++)all.push(Math.abs(m[kind](Math.min(G.len-eps,Math.max(eps,G.len*i/60)))))});
  const mx=Math.max(1e-9,...all),k=(o.amp||42)/S/mx;
  F.M.forEach(m=>{const G=geo(m),f=m[kind],ks=(m.keys||[0,G.len]).slice().sort((a,b)=>a-b);
   const P=u=>[G.A[0]+G.t[0]*u,G.A[1]+G.t[1]*u],Q=u=>{const p=P(u),v=f(u)*k;return[p[0]+G.n[0]*v,p[1]+G.n[1]*v]},sc=p=>`${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`;
   for(let j=0;j<ks.length-1;j++){const a=ks[j],b=ks[j+1];if(b-a<1e-9)continue;const us=[];for(let i=0;i<=40;i++)us.push(a+(b-a)*i/40);us[0]=a+eps;us[40]=b-eps;
    const q=us.map(u=>sc(Q(u)));
    s+=`<polygon points="${sc(P(a))} ${q.join(' ')} ${sc(P(b))}" class="dgf"/>`;
    s+=`<polyline points="${sc(P(a))} ${q.join(' ')} ${sc(P(b))}" class="dgl"/>`;
    const nh=Math.max(2,Math.round((b-a)*S/16));for(let i=1;i<nh;i++){const u=a+(b-a)*i/nh;if(Math.abs(f(u)*k*S)>4)s+=`<line x1="${X(P(u)[0])}" y1="${Y(P(u)[1])}" x2="${X(Q(u)[0])}" y2="${Y(Q(u)[1])}" class="dgh"/>`}
    const um=(a+b)/2,vm=f(um);if(Math.abs(vm)>1e-6&&(b-a)*S>40){const p=P(um),off=vm*k/2;let c=[p[0]+G.n[0]*off,p[1]+G.n[1]*off];if(Math.abs(vm*k*S)<26)c=[p[0]-G.n[0]*Math.sign(vm)*18/S,p[1]-G.n[1]*Math.sign(vm)*18/S];s+=SGc(X(c[0]).toFixed(1),Y(c[1]).toFixed(1),vm>0)}
    [[a+eps,1],[b-eps,-1]].forEach(([u,d])=>{const v=f(u);if(Math.abs(v)<1e-3)return;const key=m.a+m.b+j+d;if(o.skip&&o.skip.includes(key))return;const p=Q(u),ex=Math.sign(v)*16/S,tx=d*14/S;const pp=[p[0]+G.n[0]*ex+G.t[0]*tx,p[1]+G.n[1]*ex+G.t[1]*tx];
     s+=lab(X(pp[0]),Y(pp[1])+5,BF(Math.abs(v)))})}
   ((m.mk||{})[kind]||[]).forEach(u=>{const p=Q(u),v=f(u),pp=[p[0]+G.n[0]*Math.sign(v||1)*18/S,p[1]+G.n[1]*Math.sign(v||1)*18/S];s+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3.5" fill="#c0262d"/>`+HT(X(pp[0]).toFixed(1),(Y(pp[1])+5).toFixed(1),(kind==='V'?'x = 6.975':BF(Math.abs(v))),'nr')});
   (m.extra||{})[kind]&&(s+=m.extra[kind](X,Y))})}
 F.M.forEach(m=>{const G=geo(m);s+=`<line x1="${X(G.A[0])}" y1="${Y(G.A[1])}" x2="${X(G.B[0])}" y2="${Y(G.B[1])}" class="fm"/>`});
 (F.sup||[]).forEach(([pt,t])=>{const p=F.P[pt],x=X(p[0]),y=Y(p[1]);if(t==='pin')s+=PIN(x,y);else if(t==='roller')s+=ROL(x,y);else if(t==='pinT')s+=PG(`${x},${y} ${x-10},${y-16} ${x+10},${y-16}`,'kf')+L(x-14,y-18,x+14,y-18,'k')});
 Object.entries(F.nl||{}).forEach(([n,[dx,dy]])=>{const p=F.P[n];s+=HT(X(p[0])+dx,Y(p[1])+dy,n,'nk')});
 if(o.title)s+=HT(o.tx??X(F.P[F.M[0].a][0]),o.ty??(F.oy+40),o.title,'nb','start','font-size="20"');
 return s}

/* ---------- stability sketches ---------- */
function stk(items,vb='0 0 300 220',mw=360){let s='';
 const hatch=(x1,y1,x2,y2,n=6,dx=-6,dy=6)=>{let h=HL(x1,y1,x2,y2,'nk','stroke-width="1.6"');for(let i=0;i<=n;i++){const x=x1+(x2-x1)*i/n,y=y1+(y2-y1)*i/n;h+=HL(x,y,x+dx,y+dy,'nk','stroke-width="1"')}return h};
 items.forEach(it=>{const [k,...a]=it;
  if(k==='l')s+=HL(a[0],a[1],a[2],a[3],'nk','stroke-width="3"');
  else if(k==='lr')s+=HL(a[0],a[1],a[2],a[3],'nr','stroke-width="3" stroke-dasharray="6 5"');
  else if(k==='h')s+=`<circle cx="${a[0]}" cy="${a[1]}" r="5.5" fill="#fffef8" stroke="#1d1d1d" stroke-width="2"/>`;
  else if(k==='hn')s+=`<circle cx="${a[0]}" cy="${a[1]}" r="6" fill="#fffef8" stroke="#2f8f3a" stroke-width="2.6"/>`;
  else if(k==='pin'){const[x,y]=a;s+=PG(`${x},${y} ${x-10},${y+16} ${x+10},${y+16}`,'kf')+hatch(x-15,y+17,x+15,y+17,6,-5,6)}
  else if(k==='roll'){const[x,y]=a;s+=PG(`${x},${y} ${x-9},${y+12} ${x+9},${y+12}`,'kf')+`<circle cx="${x-5}" cy="${y+16}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/><circle cx="${x+5}" cy="${y+16}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/>`+HL(x-14,y+20,x+14,y+20,'nk','stroke-width="1.6"')}
  else if(k==='rollT'){const[x,y]=a;s+=PG(`${x},${y} ${x-9},${y-12} ${x+9},${y-12}`,'kf')+`<circle cx="${x-5}" cy="${y-16}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/><circle cx="${x+5}" cy="${y-16}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/>`+hatch(x-14,y-20,x+14,y-20,5,-5,-6)}
  else if(k==='pinT'){const[x,y]=a;s+=PG(`${x},${y} ${x-10},${y-16} ${x+10},${y-16}`,'kf')+hatch(x-15,y-17,x+15,y-17,6,-5,-6)}
  else if(k==='rollW'){const[x,y]=a;s+=PG(`${x},${y} ${x-12},${y-9} ${x-12},${y+9}`,'kf')+`<circle cx="${x-16}" cy="${y-5}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/><circle cx="${x-16}" cy="${y+5}" r="3.5" fill="none" stroke="#1d1d1d" stroke-width="1.4"/>`+hatch(x-20,y-14,x-20,y+14,5,-6,-5)}
  else if(k==='fixL'){const[x,y]=a;s+=hatch(x,y-22,x,y+22,7,-7,-6)}
  else if(k==='fixR'){const[x,y]=a;s+=hatch(x,y-22,x,y+22,7,7,-6)}
  else if(k==='fixD'){const[x,y]=a;s+=hatch(x-18,y,x+18,y,7,-6,7)}
  else if(k==='t')s+=HT(a[0],a[1],a[2],a[3]||'nk',a[4]||'middle');
  else if(k==='x'){const[x,y]=a;s+=HL(x-9,y-9,x+9,y+9,'nr','stroke-width="3"')+HL(x-9,y+9,x+9,y-9,'nr','stroke-width="3"')}
  else if(k==='ra')s+=HA(a[0],a[1],a[2],a[3],'nr','stroke-width="1.8" stroke-dasharray="5 4"')});
 return nbsvg(vb,s,mw)}
const stPair=(a,b,ca='الأصلي',cb='بعد التحويل')=>`<div class="stp"><figure>${a}<figcaption>${ca}</figcaption></figure><figure>${b}<figcaption>${cb}</figcaption></figure></div>`;
/* ---------- generic frame figure (A roller, B corner, C pin) for 471 Q4 & 462 P4 ---------- */
function fABC(H,w,P){const S=40,ox=80,oy=280,X=x=>ox+x*S,Y=y=>oy-y*S;let s='';
 s+=HL(X(0),Y(0),X(3),Y(4),'nk','stroke-width="3.4"')+HL(X(3),Y(4),X(9),Y(4),'nk','stroke-width="3.4"');
 s+=ROL(X(0),Y(0))+PG(`${X(9)},${Y(4)} ${X(9)-10},${Y(4)+16} ${X(9)+10},${Y(4)+16}`,'kf');
 for(let i=0;i<=12;i++){const x=X(3)+i*S*6/12;s+=HA(x,Y(4)-28,x,Y(4)-4,'nk','stroke-width="1.3"')}s+=HL(X(3),Y(4)-28,X(9),Y(4)-28,'nk','stroke-width="1.3"')+HT(X(4.6),Y(4)-36,w+' kN/m','nk');
 s+=HA(X(6),Y(4)-90,X(6),Y(4)-4,'nk','stroke-width="2.6"')+HT(X(6)+6,Y(4)-94,P+' kN','nk','start');
 s+=HA(X(1.5)-70,Y(2),X(1.5)-4,Y(2),'nk','stroke-width="2.6"')+HT(X(1.5)-72,Y(2)-8,H+' kN','nk','start');
 s+=HT(X(0)-14,Y(0)+4,'A','nk','end')+HT(X(3)-8,Y(4)-8,'B','nk','end')+HT(X(9)+12,Y(4)-6,'C','nk','start')+HT(X(1.5)+14,Y(2)+6,'D','ng','start')+HT(X(6)+10,Y(4)+20,'E','ng','start');
 s+=HL(X(-1),Y(0),X(-1),Y(4),'ng','stroke-width="1.2"')+HT(X(-1)-6,Y(1)+5,'2','ng','end')+HT(X(-1)-6,Y(3)+5,'2','ng','end')+HL(X(-1.2),Y(2),X(-0.8),Y(2),'ng');
 [0,3,6,9].forEach(x=>s+=HL(X(x),Y(0)+30,X(x),Y(0)+40,'ng'));s+=HL(X(0),Y(0)+36,X(9),Y(0)+36,'ng','stroke-width="1.2"');[1.5,4.5,7.5].forEach(x=>s+=HT(X(x),Y(0)+56,'3 m','ng'));
 return {s,X,Y,S}}
function fABCframe(H,w,P,Ay,Cy){// member functions (s along member from A→B and from B→C)
 const NA=-Ay*0.8,VA=Ay*0.6,N2=-(H*0.6+Ay*0.8),V2=-H*0.8+Ay*0.6,MD=VA*2.5,MB=MD+V2*2.5;
 return {S:30,ox:50,oy:178,P:{A:[0,0],B:[3,4],C:[9,4]},sup:[['A','roller'],['C','pin']],nl:{A:[-14,8],B:[-10,-10],C:[12,-8]},
  M:[{a:'A',b:'B',keys:[0,2.5,5],N:s=>s<2.5?NA:N2,V:s=>s<2.5?VA:V2,M:s=>s<2.5?VA*s:MD+V2*(s-2.5)},
     {a:'B',b:'C',keys:[0,3,6],N:s=>-H,V:s=>Ay-w*s-(s>3?P:0),M:s=>MB+Ay*s-w*s*s/2-(s>3?P*(s-3):0)}]}}
function fDiags(F,o={}){return ['N','V','M'].map(k=>`<div class="fd"><div class="fdt">${k==='N'?'N.F.D (kN)':k==='V'?'S.F.D (kN)':'B.M.D (kN.m)'}</div>${nbsvg(o.vb||'0 0 380 225',frm(F,k,{amp:o.amp||34}),o.mw||520)}</div>`).join('')}
/* ---------- beam load diagrams for floor questions ---------- */
function ldBeam(o){// o:{L,u:[{lab,w}], shapes:[{t:'tri'|'trap',a,b,c,d,w,lab}], P:[[x,lab]], R:[[x,lab]], dims:[...], names:[[x,'A']]}
 const x0=60,x1=520,S=(x1-x0)/o.L,X=x=>x0+x*S,by=200;let s='';let top=by-6;
 (o.u||[]).forEach((u,i)=>{const h=16;s+=R(x0,top-h,x1-x0,h,'',`fill="rgba(31,79,181,.10)" stroke="#1f4fb5" stroke-width="1.4"`);for(let k=0;k<=24;k++){const x=x0+(x1-x0)*k/24;s+=HL(x,top-h,x,top,'nb','stroke-width=".8"')}s+=HT(x0-6,top-3,u.lab,'nb','end');top-=h+4});
 (o.shapes||[]).forEach(sh=>{const H=sh.h||46,tp=top-(sh.lift||0);let pts;if(sh.t==='tri')pts=`${X(sh.a)},${tp} ${X(sh.c)},${tp-H} ${X(sh.b)},${tp}`;else pts=`${X(sh.a)},${tp} ${X(sh.c)},${tp-H} ${X(sh.d)},${tp-H} ${X(sh.b)},${tp}`;
  s+=`<polygon points="${pts}" fill="rgba(192,38,45,.08)" stroke="#c0262d" stroke-width="2"/>`;const xm=sh.t==='tri'?X(sh.c):(X(sh.c)+X(sh.d))/2;s+=HT(xm,tp-H-8,sh.lab,'nr');for(let k=1;k<10;k++){const x=X(sh.a)+(X(sh.b)-X(sh.a))*k/10;s+=HA(x,tp-4-(H*0.15),x,tp-1,'nr','stroke-width="1"')}if(sh.lift)s+=HL(X(sh.a),tp,X(sh.b),tp,'nr','stroke-width="1" stroke-dasharray="3 3"')});
 s+=HL(x0,by,x1,by,'nk','stroke-width="4"');
 (o.P||[]).forEach(([x,lab])=>{const pt=o.ptop||90;s+=HA(X(x),top-pt,X(x),by-2,'nk','stroke-width="2.8"')+HT(X(x)+6,top-pt-4,lab,'nk','start')});
 (o.sup||[]).forEach(([x,t])=>{s+=t==='roll'?ROL(X(x),by+2):PIN(X(x),by+2)});
 (o.R||[]).forEach(([x,lab])=>{s+=HA(X(x),by+80,X(x),by+26,'nr','stroke-width="2.6"')+HT(X(x),by+98,lab,'nr')});
 (o.names||[]).forEach(([x,n])=>s+=HT(X(x)+(x===0?-14:x===o.L?14:0),by+(x===0||x===o.L?6:44),n,'nk'));
 const ds=o.dims||[0,o.L];s+=HL(X(ds[0]),by+118,X(ds[ds.length-1]),by+118,'ng','stroke-width="1.2"');ds.forEach(d=>s+=HL(X(d),by+112,X(d),by+124,'ng'));for(let i=0;i<ds.length-1;i++)s+=HT((X(ds[i])+X(ds[i+1]))/2,by+138,(ds[i+1]-ds[i])+' m','ng');
 return nbsvg('0 0 580 350',s,600)}

/* ---------- 472 Q1: beams ---------- */
const XS={
b1:{L:9,sup:[{x:0,t:'pin',lab:'A'},{x:9,t:'roller',lab:'D'}],loads:[{k:'w',a:0,b:9,w1:20,w2:20},{k:'P',x:3,py:40},{k:'P',x:6,py:40}],pts:[{x:0,t:'A',dx:-6},{x:3,t:'B'},{x:6,t:'C'},{x:9,t:'D',dx:8}]},
b2:{L:6,sup:[{x:0,t:'fixed',lab:'A'}],loads:[{k:'w',a:0,b:6,w1:20,w2:20},{k:'P',x:3,py:40},{k:'P',x:6,py:40}],pts:[{x:0,t:'A',dx:-20,dy:-34},{x:3,t:'B'},{x:6,t:'C',dx:8}]},
b3:{L:7,sup:[{x:0,t:'pin',lab:'A'},{x:5,t:'roller',lab:'B'}],loads:[{k:'w',a:0,b:7,w1:20,w2:20},{k:'P',x:7,py:30}],pts:[{x:0,t:'A',dx:-6},{x:5,t:'B'},{x:7,t:'C',dx:8}]}
};
const sub=s=>`<sub>${s}</sub>`;
const XM=[
{id:1,ex:'472',no:'Q1 (1)',title:'Beam: UDL + نقطتين — Simply supported',short:'Reactions، SFD و BMD بالـ sections، و M الموجب الأكبر.',q:['q472_1t','q472_11'],tip:'beam',parts:[
 {t:'(a) Reactions',w:1150,h:nbPage(
   EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
   E(`−20(9)(4.5) − 40(3) − 40(6) + D${sub('y')}(9) = 0`)+
   E(`⇒ ${MK(`D${sub('y')} = 130 kN ↑`)}`)+
   EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
   E(`A${sub('y')} − 20(9) − 40 − 40 + 130 = 0`)+
   E(`⇒ ${MK(`A${sub('y')} = 130 kN ↑`)}`)+
   E(`ΣF${sub('x')} = 0 ⇒ A${sub('x')} = 0`)+
   NT('ليش العزوم حول A؟ لأن A فيها مجهولين (A<sub>x</sub> و A<sub>y</sub>) يختفون، ويبقى D<sub>y</sub> بس.')+
   NT('الـ 20 kN/m نحوّلها لقوة: 20 × 9 = 180 kN في النص (4.5 m من A).')+
   NT('الكمرة والأحمال متماثلة، فكان نقدر نقول من البداية: A<sub>y</sub> = D<sub>y</sub> = (180 + 80)/2 = 130.'),
   `<div class="nbfig">${(()=>{const g=BE.draw(XS.b1,{x1:470,res:[{x:4.5,W:180,lab:'20 × 9 = 180 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
 {t:'(b) S.F.D & B.M.D — method of sections',w:1250,h:nbPage(
   EH('Section 1: &nbsp;0 ≤ x &lt; 3')+fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20 kN/m'}})+
   E(`ΣF${sub('y')}: 130 − 20x − V = 0 ⇒ ${MK('V = 130 − 20x')}`)+
   E(`ΣM: −130x + 20x(x/2) + M = 0 ⇒ ${MK('M = 130x − 10x²')}`)+
   E('x = 0 → V = 130, M = 0 &nbsp;&nbsp; x = 3 → V = 70, M = 300','r')+
   EH('Section 2: &nbsp;3 &lt; x &lt; 6')+fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20 kN/m'},P:[[0.5,'40']]})+
   E(`V = 130 − 20x − 40 = ${MK('90 − 20x')}`)+
   E(`M = 130x − 10x² − 40(x − 3)`)+
   E('x = 3 → V = 30, M = 300 &nbsp;&nbsp; x = 6 → V = −30, M = 300','r')+
   EH('Section 3: &nbsp;6 &lt; x ≤ 9')+fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20 kN/m'},P:[[0.33,'40'],[0.67,'40']]})+
   E(`V = 130 − 20x − 80 = ${MK('50 − 20x')}`)+
   E(`M = 130x − 10x² − 40(x − 3) − 40(x − 6)`)+
   E('x = 6 → V = −70, M = 300 &nbsp;&nbsp; x = 9 → V = −130, M = 0 ✓','r')+
   NT('عند B و C الـ V ينزل 40 (قوة مركّزة لتحت). وبين النقاط خط مائل بميل −20 لأن الحمل uniform.')+
   NT('الـ M منحنى 2nd degree، ويرجع صفر عند D لأنه roller ✓.'),
   nbBeam(XS.b1,{mw:640}))},
 {t:'(c) Maximum positive moment',w:1100,h:nbPage(
   NT('أكبر M يكون حيث V = 0، لأن dM/dx = V. الـ V يتحول من + لـ − في Section 2:')+
   E(`V = 90 − 20x = 0 ⇒ ${MK('x = 4.5 m')}`)+
   fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20 kN/m'},P:[[0.667,'40']],x:'4.5 m'})+
   E('M = 130(4.5) − 10(4.5)² − 40(4.5 − 3)')+
   E(`= 585 − 202.5 − 60 = ${MK('322.5 kN.m')}`)+
   NT('وصلنا للنص بالضبط لأن الكمرة متماثلة. والمساحة تحت الـ SFD من A لين النص = ½(130+70)(3) + ½(30)(1.5) = 300 + 22.5 = 322.5 ✓.'),
   nbBeam(XS.b1,{mw:600}))}]},
{id:2,ex:'472',no:'Q1 (2)',title:'Cantilever: UDL + نقطتين',short:'Fixed support، والـ sections من الطرف الحر بدون reactions.',q:['q472_1t','q472_12'],tip:'beam',parts:[
 {t:'(a) Reactions',w:1150,h:nbPage(
   E(`ΣF${sub('x')} = 0 ⇒ A${sub('x')} = 0`)+
   EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
   E(`A${sub('y')} − 20(6) − 40 − 40 = 0 ⇒ ${MK(`A${sub('y')} = 200 kN ↑`)}`)+
   EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
   E(`M${sub('A')} − 20(6)(3) − 40(3) − 40(6) = 0`)+
   E(`⇒ ${MK(`M${sub('A')} = 720 kN.m ↺`)}`)+
   NT('الـ fixed support فيه 3 مجاهيل: A<sub>x</sub> و A<sub>y</sub> و M<sub>A</sub>.')+
   NT('كل الأحمال لتحت على يمين A فتدوّر الكمرة مع عقارب الساعة، فالـ M<sub>A</sub> لازم يكون عكسها ↺ عشان يوازنها.')+
   NT('في الـ BMD نكتبه −720 لأن الشد فوق عند الـ fixed support.'),
   `<div class="nbfig">${(()=>{const g=BE.draw(XS.b2,{x1:470,res:[{x:3,W:120,lab:'20 × 6 = 120 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
 {t:'(b) S.F.D & B.M.D — sections من الطرف الحر',w:1250,h:nbPage(
   NT('أسهل طريقة: نقطع وناخذ الجزء اليمين (من C)، لأنه ما فيه reactions. نقيس x من C لليسار.')+
   EH('Section 1: &nbsp;0 ≤ x &lt; 3 &nbsp;(from C)')+fbd({side:'R',w:{t:'u',lab:'20 kN/m'},P:[[1,'40']]})+
   E(`ΣF${sub('y')}: V − 40 − 20x = 0 ⇒ ${MK('V = 40 + 20x')}`)+
   E(`ΣM: −M − 40x − 20x(x/2) = 0 ⇒ ${MK('M = −40x − 10x²')}`)+
   E('x = 0 → V = 40, M = 0 &nbsp;&nbsp; x = 3 → V = 100, M = −210','r')+
   EH('Section 2: &nbsp;3 &lt; x ≤ 6')+fbd({side:'R',w:{t:'u',lab:'20 kN/m'},P:[[0.5,'40'],[1,'40']]})+
   E(`V = 40 + 40 + 20x = ${MK('80 + 20x')}`)+
   E(`M = −40x − 40(x − 3) − 10x²`)+
   E('x = 3 → V = 140, M = −210 &nbsp;&nbsp; x = 6 → V = 200, M = −720 ✓','r')+
   NT('عند x = 6 (يعني عند A) طلع V = 200 = A<sub>y</sub> و M = −720 = M<sub>A</sub>، فالحل صحيح.')+
   NT('الـ M كله سالب (الشد فوق) لأن الـ cantilever ينحني لتحت.'),
   nbBeam(XS.b2,{mw:640}))},
 {t:'(c) Maximum moment',w:900,h:nbOne(
   NT('الـ V موجب في كل الطول (من 200 لين 40)، يعني ما يصير صفر، والـ M سالب في كل مكان.')+
   NT('يعني ما فيه maximum positive moment. أكبر قيمة عددية للعزم عند الـ fixed support:')+
   E(MK(`M${sub('max')} = −720 kN.m &nbsp;at A (x = 0)`)))}]},
{id:3,ex:'472',no:'Q1 (3)',title:'Overhang Beam: UDL + 30 kN بالطرف',short:'Reaction عند B أكبر من الحمل، و M سالب فوق الـ support.',q:['q472_1t','q472_13'],tip:'beam',parts:[
 {t:'(a) Reactions',w:1150,h:nbPage(
   EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
   E(`−20(7)(3.5) − 30(7) + B${sub('y')}(5) = 0`)+
   E(`⇒ B${sub('y')} = 700/5 = ${MK('140 kN ↑')}`)+
   EH(`ΣF${sub('y')} = 0`)+
   E(`A${sub('y')} + 140 − 20(7) − 30 = 0 ⇒ ${MK(`A${sub('y')} = 30 kN ↑`)}`)+
   EH(`Check: ΣM${sub('B')} = 0`)+
   E('−30(5) + 140(1.5) − 30(2) = −150 + 210 − 60 = 0 ✓','g')+
   NT('الحمل الموزع على 7 m كامل: 20 × 7 = 140 kN في نصه (3.5 m من A).'),
   `<div class="nbfig">${(()=>{const g=BE.draw(XS.b3,{x1:470,res:[{x:3.5,W:140,lab:'20 × 7 = 140 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
 {t:'(b) S.F.D & B.M.D — method of sections',w:1250,h:nbPage(
   EH('Section AB: &nbsp;0 ≤ x &lt; 5 &nbsp;(from A)')+fbd({side:'L',end:{v:'30'},w:{t:'u',lab:'20 kN/m'}})+
   E(`V = 30 − 20x ⇒ ${MK('V = 30 − 20x')}`)+
   E(`M = 30x − 20x(x/2) ⇒ ${MK('M = 30x − 10x²')}`)+
   E('x = 0 → V = 30, M = 0 &nbsp;&nbsp; x = 5 → V = −70, M = −100','r')+
   EH('Section BC: &nbsp;0 ≤ x ≤ 2 &nbsp;(from C)')+fbd({side:'R',w:{t:'u',lab:'20 kN/m'},P:[[1,'30']],len:170})+
   E(`V = 30 + 20x ⇒ ${MK('V = 30 + 20x')}`)+
   E(`M = −30x − 10x² ⇒ ${MK('M = −30x − 10x²')}`)+
   E('x = 0 → V = 30, M = 0 &nbsp;&nbsp; x = 2 → V = 70, M = −100 ✓','r')+
   NT('عند B الـ V يقفز لفوق 140: من −70 إلى +70.')+
   NT('والـ M عند B من الجهتين نفس القيمة (−100)، وهذا تأكيد.'),
   nbBeam(XS.b3,{mw:640}))},
 {t:'(c) Maximum positive moment',w:1000,h:nbPage(
   E(`V = 30 − 20x = 0 ⇒ ${MK('x = 1.5 m')} from A`)+
   E(`M = 30(1.5) − 10(1.5)² = 45 − 22.5 = ${MK('22.5 kN.m')}`)+
   NT('والـ M يرجع صفر عند x = 3 m (30x − 10x² = 0)، وبعدها يصير سالب لين −100 عند B. هذي النقطة اسمها inflection point.')+
   NT('الـ overhang هو اللي سبب العزم السالب الكبير عند B.'),
   fbd({side:'L',end:{v:'30'},w:{t:'u',lab:'20 kN/m'},x:'1.5 m',len:160}))}]}
];

/* ---------- 472 Q2 frame ---------- */
const F472={S:32,ox:40,oy:165,P:{A:[0,0],B:[2,0],C:[10,0],D:[12,0],E:[16,3],F:[17,3]},sup:[['B','roller'],['E','pin']],nl:{A:[-10,-8],B:[0,-10],C:[0,-10],D:[0,-10],E:[-8,-12],F:[8,-10]},
 M:[{a:'A',b:'B',N:s=>0,V:s=>0,M:s=>-40},
    {a:'B',b:'C',N:s=>0,V:s=>697.5-100*s,M:s=>-40+697.5*s-50*s*s,mk:{M:[6.975],V:[6.975]}},
    {a:'C',b:'D',N:s=>0,V:s=>-302.5,M:s=>2340-302.5*s},
    {a:'D',b:'E',N:s=>181.5,V:s=>-242-50*s,M:s=>1735-242*s-25*s*s},
    {a:'E',b:'F',N:s=>0,V:s=>100,M:s=>-100+100*s}]};
function f472fig(){const S=26,ox=50,oy=190,X=x=>ox+x*S,Y=y=>oy-y*S;let s='';
 s+=HL(X(0),Y(0),X(12),Y(0),'nk','stroke-width="3.4"')+HL(X(12),Y(0),X(16),Y(3),'nk','stroke-width="3.4"')+HL(X(16),Y(3),X(17),Y(3),'nk','stroke-width="3.4"');
 s+=ROL(X(2),Y(0))+PIN(X(16),Y(3));
 s+=MARC(X(0)+4,Y(0)-2,16,true,'nk')+HT(X(0)-6,Y(0)-28,'40 kN.m','nk','start');
 for(let i=0;i<=16;i++){const x=X(2)+i*S*8/16;s+=HA(x,Y(0)-30,x,Y(0)-4,'nk','stroke-width="1.2"')}s+=HL(X(2),Y(0)-30,X(10),Y(0)-30,'nk','stroke-width="1.2"')+HT(X(6),Y(0)-38,'100 kN/m','nk');
 s+=HA(X(10),Y(0)-80,X(10),Y(0)-4,'nk','stroke-width="2.6"')+HT(X(10),Y(0)-86,'200 kN','nk');
 for(let i=0;i<=10;i++){const u=i/10*5,px=12+0.8*u,py=0.6*u;s+=HA(X(px-0.6*1.1),Y(py+0.8*1.1),X(px)-2,Y(py)+2,'nk','stroke-width="1.2"')}
 s+=HL(X(12-0.66),Y(0.88),X(16-0.66),Y(3.88),'nk','stroke-width="1.2"')+HT(X(13),Y(2.6),'50 kN/m','nk','end');
 s+=HA(X(17),Y(3)-60,X(17),Y(3)-4,'nk','stroke-width="2.6"')+HT(X(17)+4,Y(3)-64,'100 kN','nk','start');
 s+='<g data-k="res">'; s+=HA(X(14),Y(1.5),X(14)+0.6*70,Y(1.5)+0.8*70,'no','stroke-width="2" stroke-dasharray="5 4"')+HT(X(14)+48,Y(1.5)+78,'250 kN','no','start');
 s+=HA(X(14),Y(1.5),X(14)+48,Y(1.5),'no','stroke-width="1.6"')+HT(X(14)+52,Y(1.5)+4,'150','no','start')+HA(X(14),Y(1.5),X(14),Y(1.5)+60,'no','stroke-width="1.6"')+HT(X(14)-4,Y(1.5)+72,'200','no','end');s+='</g>';
 s+='<g data-k="reac">'; s+=HA(X(2),Y(0)+80,X(2),Y(0)+24,'nr','stroke-width="2.6"')+HT(X(2),Y(0)+98,'B<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 697.5 kN</tspan>','nr');
 s+=HA(X(16)+60,Y(3)-12,X(16)+8,Y(3)-12,'nr','stroke-width="2.4"')+HT(X(16)+64,Y(3)-8,'E<tspan font-size="70%" dy="4">x</tspan><tspan dy="-4"> = 150</tspan>','nr','start');
 s+=HA(X(16)+16,Y(3)+70,X(16)+16,Y(3)+22,'nr','stroke-width="2.4"')+HT(X(16)+22,Y(3)+70,'E<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 602.5</tspan>','nr','start');s+='</g>';
 s+=HA(X(2),Y(0)-54,X(5),Y(0)-54,'ng','stroke-width="1.6"')+HT(X(5)+6,Y(0)-50,'x','ng','start');
 [[0,'A'],[2,'B'],[10,'C'],[12,'D']].forEach(([x,n])=>s+=HT(X(x)+(x===2?-12:0),Y(0)+(x===2?6:20),n,'nk'));s+=HT(X(16)-12,Y(3)-6,'E','nk','end')+HT(X(17)+10,Y(3)+18,'F','nk','start');
 const dy=Y(0)+120;s+=HL(X(0),dy,X(17),dy,'ng','stroke-width="1.2"');[0,2,10,12,16,17].forEach(x=>s+=HL(X(x),dy-6,X(x),dy+6,'ng'));[[1,'2'],[6,'8'],[11,'2'],[14,'4'],[16.5,'1']].forEach(([x,t])=>s+=HT(X(x),dy+20,t+' m','ng'));
 s+=HL(X(17)+40,Y(0),X(17)+40,Y(3),'ng','stroke-width="1.2"')+HT(X(17)+46,Y(1.5)+5,'3 m','ng','start');
 return nbsvg('0 0 660 340',s,700)}
function frmMarks(F,kind){// labels at marked points (e.g. M_max)
 return ''}
/* ---------- wind figures ---------- */
function windFig(c){const S=20,ex=130,ey=230,X=x=>ex+x*S,Y=y=>ey-y*S;let s='';
 s+=R(X(0),Y(6.1),15*S,6.1*S,'',`fill="none" stroke="#1d1d1d" stroke-width="2.6"`)+HL(X(-2),Y(0),X(17),Y(0),'nk','stroke-width="1.4"');
 s+=HT(X(7.5),Y(6.1)-30,'Elevation','nk')+HA(X(-2),Y(6.1)-24,X(2),Y(6.1)-24,'nk','stroke-width="2"')+HT(X(-2),Y(6.1)-30,'Wind','nk','start');
 const arr=(x,y,len,c)=>HA(x,y,x+len,y,c,'stroke-width="1.6"');
 s+='<g data-k="ww">'; const nv=v=>Math.abs(parseFloat(String(v).replace('−','-')));const l1=nv(c.w1)/1124*50,l2=nv(c.w2)/1124*50;for(let z=0.3;z<4.6;z+=0.85)s+=arr(X(0)-l1-2,Y(z),l1,'nb');for(let z=4.8;z<6.1;z+=0.6)s+=arr(X(0)-l2-2,Y(z),l2,'nb');
 s+=HL(X(0)-l1-2,Y(0),X(0)-l1-2,Y(4.6),'nb','stroke-width="1.2"')+HL(X(0)-l2-2,Y(4.6),X(0)-l2-2,Y(6.1),'nb','stroke-width="1.2"');
 s+=HT(X(0)-l1-8,Y(2.3),c.w1,'nb','end')+HT(X(0)-l2-8,Y(5.6),c.w2,'nb','end');s+='</g>';
 s+='<g data-k="lw">'; const ll=nv(c.lw)/1124*50;for(let z=0.3;z<6.1;z+=0.85)s+=arr(X(15)+2,Y(z),ll,'nr');s+=HL(X(15)+2+ll,Y(0),X(15)+2+ll,Y(6.1),'nr','stroke-width="1.2"')+HT(X(15)+ll+8,Y(3),c.lw,'nr','start');s+='</g>';
 s+=HT(X(-0.2)-60,Y(-1.2),'windward','nb','start')+HT(X(15)+4,Y(-1.2),'leeward','nr','start');
 const px=500,py=70,PS=7,W=15*PS,Hh=30*PS;s+=R(px,py+14,W,Hh,'',`fill="none" stroke="#1d1d1d" stroke-width="2.6"`)+HT(px+W/2,24,'Plan (side walls)','nk');
 s+='<g data-k="sw">'; const sl=nv(c.sw)/1124*40;for(let i=0;i<=6;i++){const x=px+W*i/6;s+=HA(x,py+14,x,py+14-sl,'ng','stroke-width="1.4"')+HA(x,py+14+Hh,x,py+14+Hh+sl,'ng','stroke-width="1.4"')}
 s+=HT(px+W+6,py+22,c.sw,'ng','start')+HT(px+W+6,py+14+Hh+4,c.sw,'ng','start');s+='</g>';
 s+=HT(X(7.5),Y(0)+40,c.t,'nk');
 return nbsvg('0 0 690 380',s,700)}
function signFig(o){const S=o.S||18,ox=70,oy=300,X=x=>ox+x*S,Y=y=>oy-y*S;let s='';
 s+=HL(X(-1),Y(0),X(8),Y(0),'nk','stroke-width="1.4"')+HL(X(0),Y(0),X(0),Y(o.top+0.3),'nb','stroke-width="6"');
 s+=R(X(0),Y(o.top),6*S,1.5*S,'',`fill="rgba(47,143,58,.18)" stroke="#2f8f3a" stroke-width="2"`);
 (o.holes||[]).forEach(h=>s+=h.c?`<circle cx="${X(h.x)}" cy="${Y(h.y)}" r="${h.r*S}" fill="#fffef8" stroke="#1d1d1d" stroke-width="1.6"/>`:R(X(h.x),Y(h.y+h.h),h.w*S,h.h*S,'',`fill="#fffef8" stroke="#1d1d1d" stroke-width="1.6"`));
 s+='<g data-k="F">'; const cy=o.top-0.75;s+=`<circle cx="${X(3)}" cy="${Y(cy)}" r="9" fill="none" stroke="#c0262d" stroke-width="2.4"/>`+HL(X(3)-6,Y(cy)-6,X(3)+6,Y(cy)+6,'nr','stroke-width="2.4"')+HL(X(3)-6,Y(cy)+6,X(3)+6,Y(cy)-6,'nr','stroke-width="2.4"')+HT(X(3)+14,Y(cy)+28,'F','nr','start');
 s+=HA(X(1.4),Y(o.top)-16,X(0)+2,Y(o.top)-16,'ng','stroke-width="1.4"')+HA(X(1.6),Y(o.top)-16,X(3)-2,Y(o.top)-16,'ng','stroke-width="1.4"')+HT(X(1.5),Y(o.top)-22,'3 m','ng');s+='</g>';
 s+='<g data-k="h">'; s+=HL(X(7),Y(0),X(7),Y(o.top),'ng','stroke-width="1.2"')+HT(X(7)+6,Y(o.top/2),'h = '+o.top+' m','ng','start');s+='</g>';
 if(o.zc)s+='<g data-k="z">'+HL(X(6.6),Y(0),X(6.6),Y(cy),'no','stroke-width="1.2" stroke-dasharray="4 4"')+HT(X(6.6)-6,Y(cy/2),'z = '+o.zc+' m','no','end');if(o.zc)s+='</g>';
 s+=HT(X(0)-8,Y(o.top/2),'column','nb','end');
 return nbsvg('0 0 360 330',s,380)}
/* ---------- floor plans ---------- */
function plan471(o={}){const S=28,ox=40,oy=330,X=x=>ox+x*S,Y=y=>oy-y*S;let s='';
 s+='<g data-k="be">'; s+=`<polygon points="${X(2.5)},${Y(7.5)} ${X(5)},${Y(10)} ${X(7.5)},${Y(7.5)} ${X(7.5)},${Y(5.5)} ${X(5)},${Y(3)} ${X(2.5)},${Y(5.5)}" fill="rgba(192,38,45,.10)"/>`;s+='</g>';
 s+='<g data-k="abc">'; s+=`<polygon points="${X(0)},${Y(10)} ${X(2.5)},${Y(7.5)} ${X(5)},${Y(10)}" fill="rgba(31,79,181,.12)"/><polygon points="${X(5)},${Y(10)} ${X(7.5)},${Y(7.5)} ${X(10)},${Y(10)}" fill="rgba(31,79,181,.12)"/>`;s+='</g>';
 [[0,10,10,10],[0,3,10,3],[0,0,10,0],[0,0,0,10],[10,0,10,10],[5,3,5,10]].forEach(([a,b,c,d])=>s+=HL(X(a),Y(b),X(c),Y(d),'nk','stroke-width="3.6"'));
 s+='<g data-k="two">'; [[0,3,5,10],[5,3,10,10]].forEach(([x0,y0,x1,y1])=>{const m=(x0+x1)/2;s+=HL(X(x0),Y(y1),X(m),Y(y1-2.5),'nb','stroke-width="1.6"')+HL(X(x1),Y(y1),X(m),Y(y1-2.5),'nb','stroke-width="1.6"')+HL(X(x0),Y(y0),X(m),Y(y0+2.5),'nb','stroke-width="1.6"')+HL(X(x1),Y(y0),X(m),Y(y0+2.5),'nb','stroke-width="1.6"')+HL(X(m),Y(y1-2.5),X(m),Y(y0+2.5),'nb','stroke-width="1.6"')});
 s+=HL(X(0),Y(1.5),X(10),Y(1.5),'nb','stroke-width="1.4" stroke-dasharray="6 5"');[1.5,3.5,6.5,8.5].forEach(x=>s+=HA(X(x),Y(1.6),X(x),Y(2.85),'nb','stroke-width="1.4"')+HA(X(x),Y(1.4),X(x),Y(0.15),'nb','stroke-width="1.4"'));s+='</g>';
 [[0,10],[10,10],[5,3],[0,0],[10,0]].forEach(([x,y])=>s+=R(X(x)-6,Y(y)-6,12,12,'',`fill="#1d1d1d"`));
 [['A',0,10,-12,-8],['B',5,10,0,-12],['C',10,10,12,-8],['D',0,3,-14,4],['E',5,3,12,16],['F',10,3,14,4],['G',0,0,-12,14],['H',10,0,12,14]].forEach(([n,x,y,dx,dy])=>s+=HT(X(x)+dx,Y(y)+dy,n,'nk'));
 s+=HT(X(2.5),Y(6.5)+6,'two-way','nb')+HT(X(7.5),Y(6.5)+6,'two-way','nb')+HT(X(5),Y(0.75)+16,'one-way (10/3 > 2)','nb');
 s+=HT(X(10)+16,Y(6.5),'7 m','ng','start')+HT(X(10)+16,Y(1.5),'3 m','ng','start')+HT(X(2.5),Y(10)-14,'5 m','ng')+HT(X(7.5),Y(10)-14,'5 m','ng');
 if(o.trib){const[x0,y0,x1,y1]=o.trib;s+=`<rect x="${X(x0)}" y="${Y(y1)}" width="${(x1-x0)*S}" height="${(y1-y0)*S}" fill="rgba(230,140,20,.22)" stroke="#d9822b" stroke-width="2.4" stroke-dasharray="7 5"/>`+HT(X((x0+x1)/2),Y((y0+y1)/2)+5,o.lab||'','no')}
 return nbsvg('0 0 380 370',s,420)}
function plan462(o={}){const S=30,ox=40,oy=320,X=x=>ox+x*S,Y=y=>oy-y*S;let s='';
 s+='<g data-k="efg">'; s+=`<polygon points="${X(0)},${Y(5)} ${X(2)},${Y(7)} ${X(5)},${Y(7)} ${X(7)},${Y(5)} ${X(5)},${Y(5)} ${X(2.5)},${Y(2.5)}" fill="rgba(192,38,45,.10)"/>`;s+='</g>';
 s+='<g data-k="bf">'; s+=`<polygon points="${X(5)},${Y(0)} ${X(2.5)},${Y(2.5)} ${X(5)},${Y(5)} ${X(6)},${Y(5)} ${X(6)},${Y(0)}" fill="rgba(31,79,181,.12)"/>`;s+='</g>';
 [[0,9,9,9],[0,5,7,5],[0,0,9,0],[0,0,0,9],[7,0,7,9],[9,0,9,9],[5,0,5,5]].forEach(([a,b,c,d])=>s+=HL(X(a),Y(b),X(c),Y(d),'nk','stroke-width="3.6"'));
 s+='<g data-k="two">'; s+=HL(X(0),Y(9),X(2),Y(7),'nb','stroke-width="1.6"')+HL(X(7),Y(9),X(5),Y(7),'nb','stroke-width="1.6"')+HL(X(0),Y(5),X(2),Y(7),'nb','stroke-width="1.6"')+HL(X(7),Y(5),X(5),Y(7),'nb','stroke-width="1.6"')+HL(X(2),Y(7),X(5),Y(7),'nb','stroke-width="1.6"');
 s+=HL(X(0),Y(0),X(5),Y(5),'nb','stroke-width="1.6"')+HL(X(5),Y(0),X(0),Y(5),'nb','stroke-width="1.6"');
 s+=HL(X(6),Y(0),X(6),Y(5),'nb','stroke-width="1.4" stroke-dasharray="6 5"')+HL(X(8),Y(0),X(8),Y(9),'nb','stroke-width="1.4" stroke-dasharray="6 5"');
 [1.2,2.5,3.8].forEach(y=>s+=HA(X(6.05),Y(y),X(6.85),Y(y),'nb','stroke-width="1.3"')+HA(X(5.95),Y(y),X(5.15),Y(y),'nb','stroke-width="1.3"'));[1.5,4.5,7.5].forEach(y=>s+=HA(X(8.05),Y(y),X(8.85),Y(y),'nb','stroke-width="1.3"')+HA(X(7.95),Y(y),X(7.15),Y(y),'nb','stroke-width="1.3"'));s+='</g>';
 [[0,9],[7,9],[9,9],[0,5],[7,5],[0,0],[7,0],[9,0]].forEach(([x,y])=>s+=R(X(x)-6,Y(y)-6,12,12,'',`fill="#1d1d1d"`));
 [['H',0,9,-12,-8],['I',7,9,0,-12],['J',9,9,12,-8],['E',0,5,-14,4],['F',5,5,0,-10],['G',7,5,14,16],['A',0,0,-12,14],['B',5,0,0,18],['C',7,0,0,18],['D',9,0,12,14]].forEach(([n,x,y,dx,dy])=>s+=HT(X(x)+dx,Y(y)+dy,n,'nk'));
 s+=HT(X(3.5),Y(8.3)+6,'two-way','nb')+HT(X(2.5),Y(1)+6,'two-way','nb');
 s+=HT(X(3.5),Y(9)-14,'7 m','ng')+HT(X(8),Y(9)-14,'2 m','ng')+HT(X(9)+14,Y(7),'4 m','ng','start')+HT(X(9)+14,Y(2.5),'5 m','ng','start');
 if(o.trib){const[x0,y0,x1,y1]=o.trib;s+=`<rect x="${X(x0)}" y="${Y(y1)}" width="${(x1-x0)*S}" height="${(y1-y0)*S}" fill="rgba(230,140,20,.22)" stroke="#d9822b" stroke-width="2.4" stroke-dasharray="7 5"/>`+HT(X((x0+x1)/2),Y((y0+y1)/2)+5,o.lab||'','no')}
 return nbsvg('0 0 380 360',s,420)}
/* ---------- stability sketches (shared) ---------- */
const STK={
 f2h:()=>stk([['l',50,190,90,50],['l',90,50,240,50],['l',240,50,240,190],['h',90,50],['h',240,50],['pin',50,190],['pin',240,190]]),
 f2hC:()=>stk([['l',50,190,90,50],['l',90,50,240,50],['l',240,50,240,190],['h',90,50],['pin',50,190],['pin',240,190],['t',236,40,'rigid','ng','end']]),
 bf:()=>stk([['l',40,160,270,160],['l',110,160,175,90],['l',175,90,270,90],['rollW',40,160],['roll',270,160],['roll',270,92],['ra',270,40,270,205],['t',150,205,'reactions → كلها تمر بـ O','nr'],['t',282,175,'O','nr','start']]),
 bfC:()=>stk([['l',40,160,270,160],['l',110,160,175,90],['l',175,90,270,90],['pin',40,160],['roll',270,160]]),
 tf:()=>stk([['l',20,40,280,40],['h',150,40],['l',60,190,80,40],['l',240,190,220,40],['l',73,110,227,110],['pin',60,190],['pin',240,190]]),
 tfC:()=>stk([['l',20,40,280,40],['h',150,40],['l',60,190,80,40],['l',240,190,220,40],['lr',73,110,227,110],['x',150,110],['pin',60,190],['pin',240,190]]),
 tr472:c=>{const J={TL:[40,50],TM:[150,50],TR:[260,50],BL:[40,110],BM:[150,110],BR:[260,110],P:[150,190]};const ms=[['TL','TM'],['TM','TR'],['BL','BM'],['BM','BR'],['TL','BL'],['TM','BM'],['TR','BR'],['TL','BM'],['BL','TM'],['TM','BR'],['BM','TR'],['BL','P'],['BR','P']];
  const rm=c?[['BL','TM'],['BM','TR']]:[];const it=ms.map(([a,b])=>[rm.some(r=>r[0]===a&&r[1]===b)?'lr':'l',...J[a],...J[b]]);if(c)it.push(['x',95,80],['x',205,80]);
  it.push(c?['rollT',40,50]:['rollW',40,50],['pinT',260,50]);if(!c)it.push(['ra',20,50,290,50],['t',262,30,'O','nr','end']);return stk(it)},
 tr471:c=>{const J={TL:[40,40],TM:[150,40],TR:[260,40],IL:[95,105],IR:[205,105],BL:[40,180],BR:[260,180]};const ms=[['TL','TM'],['TM','TR'],['TL','IL'],['TM','IL'],['TM','IR'],['TR','IR'],['IL','IR'],['IL','BL'],['IR','BR'],['BL','BR'],['TL','BL'],['TR','BR']];
  const it=ms.map(([a,b])=>[(c&&a==='IL'&&b==='IR')?'lr':'l',...J[a],...J[b]]);if(c)it.push(['x',150,105]);it.push(['pin',40,180],c?['roll',260,180]:['pin',260,180]);return stk(it)},
 bm:c=>stk(c?[['l',30,110,270,110],['fixL',30,110],['h',110,110],['roll',190,110],['t',272,96,'free','ng','end']]:[['l',30,110,270,110],['fixL',30,110],['h',110,110],['roll',190,110],['fixR',270,110]],'0 0 300 170'),
 box:c=>stk([['l',110,40,200,40],['l',110,40,110,110],['l',200,40,200,110],['l',110,110,200,110],['h',155,40],['h',155,110],['l',110,110,50,192],['l',200,110,260,192],['pin',50,192],c?['roll',260,192]:['pin',260,192]].concat(c?[['hn',110,75],['t',104,79,'new hinge','ng','end']]:[])),
 fr3:c=>stk([['l',50,192,110,50],['l',110,50,250,50],['l',250,50,250,192],['h',110,50],['h',250,50],['fixD',50,192],c?['pin',250,192]:['roll',250,192]]),
 tr462:c=>{const J={BL:[40,170],BM:[150,170],BR:[260,170],TL:[40,100],TM:[150,100],TR:[260,100],A:[150,30]};const ms=[['TL','TM'],['TM','TR'],['BL','BM'],['BM','BR'],['TL','BL'],['TM','BM'],['TR','BR'],['TL','BM'],['BL','TM'],['TM','BR'],['BM','TR'],['TL','A'],['TR','A']];
  const rm=c?[['TL','BM'],['BM','TR']]:[];const it=ms.map(([a,b])=>[rm.some(r=>r[0]===a&&r[1]===b)?'lr':'l',...J[a],...J[b]]);if(c)it.push(['x',95,135],['x',205,135]);
  it.push(c?['roll',40,170]:['rollW',40,170],['pin',260,170]);if(!c)it.push(['ra',20,170,290,170],['t',268,160,'O','nr','start']);return stk(it)}
};
const stTile=(t,left,a,b)=>({t,w:1150,h:nbPage(left,stPair(a,b))});
const stS1=()=>stTile('(1) Frame بـ 2 hinges',
  E('n = 3 members &nbsp;⇒ 3n = 9')+E('r = 2 + 2 (pins) + 2 + 2 (hinges) = 8')+E(MK('r = 8 &lt; 3n = 9 ⇒ Unstable'),'r')+
  NT('كل hinge داخلي يعطي قوتين، وكل pin يعطي قوتين. المجاهيل أقل من المعادلات، فالإطار يتحرك (mechanism) يمين ويسار.')+
  EH('Convert:')+E('نخلي الزاوية اليمين rigid (نشيل hinge واحد):')+E('n = 2, r = 4 + 2 = 6 = 3n ⇒ '+MK('Stable &amp; determinate'),'g'),STK.f2h(),STK.f2hC());
const stS2=()=>stTile('(2) Beam + frame على 3 rollers',
  E('r = 3 (roller أفقي + 2 rollers رأسية), n = 1 ⇒ r = 3n')+E('بس: الـ reaction الأفقي يمر بخط الكمرة، والرأسيتين على نفس الخط عند x = O')+E(MK('All reactions are concurrent ⇒ Unstable'),'r')+
  NT('الثلاث reactions تتلاقى في نقطة وحدة O، فما فيه شي يمنع الدوران حول O، حتى لو العدد كافي.')+
  EH('Convert:')+E('اليسار pin (2) واليمين roller واحد (1)، ونشيل الـ roller الفوقي:')+E('r = 3 = 3n، ومو concurrent ⇒ '+MK('Stable &amp; determinate'),'g'),STK.bf(),STK.bfC());
const stS3=()=>stTile('(3) Frame مقفل + hinge',
  E('n = 2 parts (يمين ويسار الـ hinge)')+E('r = 4 (pins) + 2 (hinge) + 3 (الكمرة الوسطى rigid) = 9')+E(MK('r = 9 &gt; 3n = 6 ⇒ Stable &amp; indeterminate, 3rd degree'),'r')+
  NT('الكمرة الوسطى مربوطة rigid بالجهتين، فتنقل 3 قوى (N و V و M)، وهي سبب الـ 3 درجات.')+
  EH('Convert:')+E('نشيل الكمرة الوسطى ⇒ three-hinged frame:')+E('r = 4 + 2 = 6 = 3n ⇒ '+MK('Stable &amp; determinate'),'g'),STK.tf(),STK.tfC());
/* ---------- XM pages (rest) ---------- */
XM.push(
{id:4,ex:'472',no:'Q2',title:'Frame ABCDEF: عضو مائل + حمل عمودي عليه',short:'B_y بالعزوم حول E، دوال BC، و N و V و M للإطار.',q:['q472_2'],tip:'frame',parts:[
 {t:'(a) B<sub>y</sub> و check',w:1250,h:nbPage(
   NT('الحمل على DE عمودي عليه: 50 × 5 = 250 kN في نص DE. نحلله: sinθ = 3/5 و cosθ = 4/5:')+
   E('250(3/5) = 150 kN → &nbsp;&nbsp; 250(4/5) = 200 kN ↓','no')+
   NT('مكانه: نص DE يعني 2 m يسار E أفقياً و 1.5 m تحت E.')+
   EH(`ΣM${sub('E')} = 0 &nbsp;(↺ +)`)+
   E(`+40 − B${sub('y')}(14) + 100(8)(10) + 200(6) + 200(2) + 150(1.5) − 100(1) = 0`)+
   E(`14 B${sub('y')} = 9765 ⇒ ${MK(`B${sub('y')} = 697.5 kN ↑`)}`)+
   NT('ليش حول E؟ لأن E فيها E<sub>x</sub> و E<sub>y</sub> فيختفون. والـ couple 40 عكس عقارب الساعة فهو موجب ومالها ذراع.')+
   NT('الـ 150 → تحت E بـ 1.5 m: القوة لليمين تحت النقطة تدوّر عكس عقارب الساعة (+).')+
   EH('Check:')+
   E(`ΣF${sub('y')}: 697.5 − 800 − 200 − 200 − 100 + 602.5 = 0 ✓`,'g')+
   E(`ΣF${sub('x')}: 150 − 150 = 0 ✓`,'g'),
   f472fig())},
 {t:'(b) Shear &amp; moment functions — BC',w:1150,h:nbPage(
   NT('x من B (مثل ما في السؤال). نقطع في BC وناخذ الجزء اليسار: فيه الـ couple عند A، و B<sub>y</sub>، والحمل 100x.')+
   nbsvg('0 0 420 160',(()=>{let s=HL(40,80,360,80,'nk','stroke-width="3"');s+=MARC(44,78,16,true,'nk')+HT(30,50,'40','nk','end');s+=HA(110,140,110,84,'nr','stroke-width="2.4"')+HT(110,156,'697.5','nr');for(let i=0;i<=8;i++){const x=110+250*i/8;s+=HA(x,46,x,76,'nk','stroke-width="1.2"')}s+=HL(110,46,360,46,'nk','stroke-width="1.2"')+HT(235,38,'100 kN/m','nk');s+=HA(360,84,360,128,'nb','stroke-width="2.2"')+HT(368,138,'V','nb','start')+MARC(362,80,16,true,'nb')+HT(384,58,'M','nb','start');s+=HA(230,110,112,110,'ng','stroke-width="1.4"')+HA(240,110,358,110,'ng','stroke-width="1.4"')+HT(235,116,'x','ng')+HT(75,110,'2 m','ng');return s})(),440)+
   E(`ΣF${sub('y')}: 697.5 − 100x − V = 0 ⇒ ${MK('V = 697.5 − 100x')}`)+
   E(`ΣM: −40 − 697.5x + 100x(x/2) + M = 0`)+
   E(`⇒ ${MK('M = −40 + 697.5x − 50x²')}`)+
   EH('Zero shear:')+
   E(`697.5 − 100x = 0 ⇒ ${MK('x = 6.975 m')}`)+
   E(`M${sub('max')} = −40 + 697.5(6.975) − 50(6.975)²`)+
   E(`= ${MK('2392.5 kN.m')}`)+
   NT('الـ couple عند A عكس عقارب الساعة، فيخلي الـ M عند A و B = −40 (ينزل الـ BMD).')+
   NT('عند x = 8 (C): V = −102.5 و M = 2340.'),'')},
 {t:'(c) N.F.D, S.F.D, B.M.D',w:1350,h:nbPage(
   EH('AB:')+E('ما عليه إلا الـ couple ⇒ N = 0, V = 0, M = −40')+
   EH('CD:')+E('V = −102.5 − 200 = −302.5 (ثابت)')+E('M<sub>D</sub> = 2340 − 302.5(2) = 1735')+
   EH('DE (مائل):')+NT('قبل D القوة الصافية يسار القطع = 302.5 لتحت (697.5 − 800 − 200). نحللها على العضو:')+
   E(`N${sub('D')} = +302.5 sinθ = +181.5 (tension)`)+E(`V${sub('D')} = −302.5 cosθ = −242`)+
   NT('الحمل 50 kN/m عمودي على DE، فـ N ثابت، و V ينقص 50 كل متر:')+
   E(`V${sub('E')} = −242 − 50(5) = −492`)+E(`M${sub('E')} = 1735 − ½(242 + 492)(5) = −100`)+
   EH('EF:')+E('V = +100, M: −100 → 0, N = 0')+
   NT('M<sub>E</sub> من DE (−100) يساوي M<sub>E</sub> من EF (−100) ✓.'),
   fDiags(F472,{vb:'0 0 640 250',mw:680,amp:50}))}]},
{id:5,ex:'472',no:'Q3',title:'Stability & Determinacy (4 structures)',short:'r و n، concurrent reactions، والتحويل لـ stable determinate.',q:['q472_3'],tip:'stab',parts:[stS1(),stS2(),stS3(),
 stTile('(4) Truss',E('b = 13, j = 7, r = 3')+E('b + r = 16 &gt; 2j = 14 (العدد زايد)')+E('لكن: الـ roller الأفقي عند اليسار يمر خطه بالـ pin اليمين O')+E(MK('All reactions concurrent ⇒ Unstable'),'r')+
  NT('حتى لو b + r أكبر من 2j، الـ reactions الثلاث تمر بنقطة وحدة فالـ truss يدور حولها.')+
  EH('Convert:')+E('الـ roller اليسار نخليه رأسي، ونشيل diagonal من كل X:')+E('b = 11, r = 3 ⇒ b + r = 14 = 2j ⇒ '+MK('Stable &amp; determinate'),'g'),STK.tr472(false),STK.tr472(true))]},
{id:6,ex:'472',no:'Q4',title:'Wind على مصنع: windward, leeward, side walls',short:'q_z و q_h، و P = qGC_p − q_h(±0.18) لكل جدار.',q:['q472_4'],tip:'wind',parts:[
 {t:'(a) V و q<sub>z</sub>',w:1000,h:nbOne(
   E(`V = 190 × 1000 / 3600 = ${MK('52.8 m/s')}`)+
   E(`q${sub('z')} = 0.613 K${sub('z')} (1.0)(0.85)(52.8)² = ${MK(`1452.6 K${sub('z')}`)} &nbsp;N/m²`)+
   E(`z = 0 – 4.6 m: K${sub('z')} = 0.85 ⇒ q = 1452.6 × 0.85 = ${MK('1234.7 N/m²')}`)+
   E(`z = 6.1 m = h: K${sub('z')} = 0.90 ⇒ q${sub('h')} = 1452.6 × 0.90 = ${MK('1307.3 N/m²')}`)+
   NT('ارتفاع المبنى 6.1 m، فنقسم الـ windward لمنطقتين: من 0 لين 4.6، ومن 4.6 لين 6.1.')+
   E(`Internal: q${sub('h')} (±0.18) = 1307.3 × 0.18 = ${MK('±235.3 N/m²')}`))},
 {t:'(b) Pressures',w:1150,h:nbOne(
   EH(`Windward: C${sub('p')} = 0.8 (q${sub('z')})`)+
   E('0–4.6: 1234.7(0.85)(0.8) = 839.6 ∓ 235.3 ⇒ '+MK('604.3')+' &amp; '+MK('1075 N/m²'))+
   E('4.6–6.1: 1307.3(0.85)(0.8) = 889.0 ∓ 235.3 ⇒ '+MK('653.7')+' &amp; '+MK('1124.3 N/m²'))+
   EH(`Leeward: L/B = 15/30 = 0.5 ⇒ C${sub('p')} = −0.5 (q${sub('h')})`)+
   E('1307.3(0.85)(−0.5) = −555.6 ∓ 235.3 ⇒ '+MK('−791')+' &amp; '+MK('−320.3 N/m²'))+
   EH(`Side walls: C${sub('p')} = −0.7 (q${sub('h')})`)+
   E('1307.3(0.85)(−0.7) = −777.8 ∓ 235.3 ⇒ '+MK('−1013')+' &amp; '+MK('−542.5 N/m²'))+
   NT('L في اتجاه الرياح (15 m) و B عمودي عليه (30 m). والسالب يعني suction (سحب للخارج).')+
   NT('الحالتين: +0.18 (ضغط داخلي) يعطي القيم الأولى، و −0.18 (سحب داخلي) يعطي الثانية.'))},
 {t:'(c) Drawing',w:1300,h:nbPage(
   windFig({w1:'604.3',w2:'653.7',lw:'−791',sw:'−1013',t:'Case 1: +0.18 (internal pressure)'}),
   windFig({w1:'1075',w2:'1124.3',lw:'−320.3',sw:'−542.5',t:'Case 2: −0.18 (internal suction)'}))}]},
{id:7,ex:'471',no:'Q1',title:'Road Sign: أقل قطر للفتحات',short:'F = M_z/3، ثم A_f من F = q_hGC_fA_f، والفتحات = الفرق.',q:['q471_1'],tip:'wind',parts:[
 {t:'الحل',w:1250,h:nbPage(
   E(`ذراع القوة عن العمود = 6/2 = 3 m`)+
   E(`F${sub('max')} = M${sub('z')} / 3 = 60 / 3 = ${MK('20 kN')}`)+
   E(`h = 10.7 + 1.5 = 12.2 m ⇒ K${sub('h')} = 1.04`)+
   E(`V = 180 / 3.6 = 50 m/s`)+
   E(`q${sub('h')} = 0.613(1.04)(1)(1)(50)² = ${MK('1593.8 N/m²')}`)+
   E(`s/h = 1.5/12.2 = 0.123 ≤ 0.16 ⇒ C${sub('f')} = 1.85`)+
   EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
   E(`20000 = 1593.8(0.85)(1.85) A${sub('f')} ⇒ ${MK(`A${sub('f')} = 7.98 m²`)}`)+
   E(`A${sub('openings')} = 1.5 × 6 − 7.98 = 1.02 m²`)+
   E(`2 × πD²/4 = 1.02 ⇒ ${MK('D = 0.81 m')}`)+
   NT('كل ما كبرت الفتحات قلّت المساحة والقوة. فأقل قطر يخلي العزم 60 kN.m بالضبط: D = 0.806 ≈ 0.81 m (الحل النموذجي قرّبه 0.80).')+
   NT('القوة في مركز اللوحة، والعزم حول العمود (torsion) = F × 3.'),
   signFig({top:12.2,holes:[{c:1,x:2,y:11.45,r:0.4},{c:1,x:4,y:11.45,r:0.4}],S:20}))}]},
{id:8,ex:'471',no:'Q2',title:'Floor Plan: BE و ABC و Column E',short:'Two-way و one-way، وزن الكمرة والجدار، و live load reduction.',q:['q471_2'],tip:'floor',parts:[
 {t:'(a) Floor load distribution',w:1100,h:nbPage(
   E('Top panels: 7/5 = 1.4 ≤ 2 ⇒ two-way')+E('Bottom panel: 10/3 = 3.3 &gt; 2 ⇒ one-way')+
   NT('في الـ two-way نرسم خطوط 45° من الزوايا. الكمرة القصيرة (5 m) تاخذ مثلث، والطويلة (7 m) شبه منحرف.')+
   NT('اللون الأحمر = الحمل على BE (شبه منحرف من البانلين). والأزرق = المثلثات على ABC.')+
   NT('البانل التحتي one-way: الحمل يروح لـ DEF و GH بس.'),plan471())},
 {t:'(b) Beam BE',w:1200,h:nbPage(
   E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
   E('Slab (trapezoid, 2 sides) = 2 × 5 × 2.5 = '+MK('25 kN/m'))+
   NT('شبه المنحرف: يطلع على 2.5 m، ثابت 2 m في النص، وينزل على 2.5 m (7 = 2.5 + 2 + 2.5).')+
   EH('Reactions (symmetric):')+
   E('R = [4.32(7) + 25(7 + 2)/2] / 2')+
   E('= (30.24 + 112.5)/2 = '+MK('71.37 kN')),
   ldBeam({L:7,u:[{lab:'4.32'}],shapes:[{t:'trap',a:0,b:7,c:2.5,d:4.5,lab:'25 kN/m'}],sup:[[0,'pin'],[7,'roll']],R:[[0,'71.37'],[7,'71.37']],names:[[0,'B'],[7,'E']],dims:[0,2.5,4.5,7]}))},
 {t:'(b) Beam ABC',w:1200,h:nbPage(
   E('Own weight = '+MK('4.32 kN/m'))+
   E('Wall = 0.3 × 2 × 18 = '+MK('10.8 kN/m'))+
   E('Slab (triangle on AB and BC) = 5 × 2.5 = '+MK('12.5 kN/m'))+
   E('Point load at B = reaction of BE = '+MK('71.37 kN'))+
   EH('Reactions (symmetric):')+
   E('R = [(4.32 + 10.8)(10) + 2 × ½(12.5)(5) + 71.37] / 2')+
   E('= (151.2 + 62.5 + 71.37)/2 = '+MK('142.54 kN'))+
   NT('ABC هي الطرف القصير للبانلين (5 m)، فتاخذ مثلث من كل بانل. وB مو عمود، فالـ BE ينزل عليها كقوة مركّزة.'),
   ldBeam({L:10,u:[{lab:'10.8'},{lab:'4.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'},{t:'tri',a:5,b:10,c:7.5,lab:'12.5'}],P:[[5,'71.37 kN']],sup:[[0,'pin'],[10,'roll']],R:[[0,'142.54'],[10,'142.54']],names:[[0,'A'],[5,'B'],[10,'C']],dims:[0,5,10]}))},
 {t:'(c) Live load على Column E',w:1000,h:nbOne(
   E(`A${sub('T')} = 5 × (3.5 + 1.5) = ${MK('25 m²')}`)+
   NT('نص المسافة لكل جهة: يمين ويسار 2.5 + 2.5، وفوق 3.5 (نص 7) وتحت 1.5 (نص 3).')+
   E(`K${sub('LL')} A${sub('T')} = 4 × 25 = 100 &gt; 37.2 ⇒ reduction ✓`)+
   E(`L = 2.5 [0.25 + 4.57/√100] = 2.5(0.707) = ${MK('1.767 kN/m²')}`)+
   E('1.767 &gt; 0.4 × 2.5 = 1.0 ✓ (أكثر من طابق ⇒ 40%)','g')+
   E('Roof: 1.0 kN/m² (no reduction)')+
   E(`Total = (3 × 1.767 + 1.0) × 25 = ${MK('157.5 kN')}`))}]},
{id:9,ex:'471',no:'Q3',title:'Stability & Determinacy (4 structures)',short:'نفس فكرة 472 مع truss فيه pins.',q:['q471_3'],tip:'stab',parts:[stS1(),stS2(),stS3(),
 stTile('(4) Truss',E('b = 12, j = 7, r = 4 (2 pins)')+E(MK('b + r = 16 &gt; 2j = 14 ⇒ Stable, indeterminate 2nd degree'),'r')+
  NT('الـ reactions مو concurrent ولا متوازية، والـ truss مكوّن من مثلثات، فهو stable. وفيه 2 زيادة.')+
  EH('Convert:')+E('الـ pin اليمين ⇒ roller (−1)، ونشيل العضو الأفقي الداخلي (−1):')+E('b = 11, r = 3 ⇒ 14 = 2j ⇒ '+MK('Stable &amp; determinate'),'g'),STK.tr471(false),STK.tr471(true))]},
{id:10,ex:'471',no:'Q4',title:'Frame مائل: 45 kN و 30 kN/m و 60 kN',short:'Reactions، وتحليل القوى على العضو المائل، ورسم N و V و M.',q:['q471_4'],tip:'frame',parts:[
 {t:'(a) Reactions',w:1250,h:nbPage(
   E(`ΣF${sub('x')}: C${sub('x')} + 45 = 0 ⇒ ${MK(`C${sub('x')} = 45 kN ←`)}`)+
   EH(`ΣM${sub('C')} = 0 &nbsp;(↺ +)`)+
   E(`−A${sub('y')}(9) + 45(2) + 30(6)(3) + 60(3) = 0`)+
   E(`⇒ ${MK(`A${sub('y')} = 90 kN ↑`)}`)+
   EH(`ΣF${sub('y')} = 0`)+
   E(`90 + C${sub('y')} − 180 − 60 = 0 ⇒ ${MK(`C${sub('y')} = 150 kN ↑`)}`)+
   EH('Check: ΣM<sub>A</sub> = 0')+E('45(2) + 180(6) + 60(6) − 45(4) − 150(9) = 90 + 1080 + 360 − 180 − 1350 = 0 ✓','g')+
   NT('الـ 45 kN على ارتفاع 2 m، و C على ارتفاع 4 m، فذراعها حول C = 4 − 2 = 2 m (تحت C فتدوّر عكس عقارب الساعة +).')+
   NT('A roller يعطي قوة رأسية بس، فالقوة الأفقية كلها عند C.'),
   nbsvg('0 0 580 390',fABC(45,30,60).s+(()=>{const g=fABC(45,30,60),X=g.X,Y=g.Y;return HA(X(0),Y(0)+80,X(0),Y(0)+26,'nr','stroke-width="2.4"')+HT(X(0)+8,Y(0)+80,'A<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 90</tspan>','nr','start')+HA(X(9)+60,Y(4),X(9)+6,Y(4),'nr','stroke-width="2.4"')+HT(X(9)+20,Y(4)-12,'45','nr','start')+HA(X(9),Y(4)+80,X(9),Y(4)+24,'nr','stroke-width="2.4"')+HT(X(9)+8,Y(4)+84,'C<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 150</tspan>','nr','start')+HA(X(6),Y(4)+8,X(6),Y(4)+72,'no','stroke-width="1.6" stroke-dasharray="5 4"')+HT(X(6)-6,Y(4)+70,'180','no','end')})(),600))},
 {t:'(b) القوى على العضو المائل AB',w:1150,h:nbPage(
   NT('العضو AB مائل: طوله 5 m، و cosθ = 3/5 = 0.6 و sinθ = 4/5 = 0.8 (θ = 53.13°).')+
   EH('At A:')+NT('A<sub>y</sub> = 90 نحللها: موازية للعضو (N) وعمودية عليه (V):')+
   E(`N${sub('A')} = −90 sinθ = −90(0.8) = ${MK('−72 (compression)')}`)+
   E(`V${sub('A')} = 90 cosθ = 90(0.6) = ${MK('54')}`)+
   EH('After D (45 kN →):')+
   E(`N = −(90(0.8) + 45(0.6)) = ${MK('−99')}`)+
   E(`V = 54 − 45(0.8) = ${MK('18')}`)+
   EH('Moments:')+
   E(`M${sub('D')} = 90(1.5) = ${MK('135 kN.m')}`)+
   E(`M${sub('B')} = 90(3) − 45(2) = ${MK('180 kN.m')}`)+
   NT('تأكيد بالمساحات: 54 × 2.5 = 135، و 135 + 18 × 2.5 = 180 ✓.'),
   '')},
 {t:'(b) العضو BC والرسومات',w:1400,h:nbPage(
   E('N = −45 (compression) على طول BC')+
   E(`V${sub('B')} = 90 &nbsp;⇒ V${sub('E⁻')} = 90 − 30(3) = 0 &nbsp;⇒ V${sub('E⁺')} = −60 &nbsp;⇒ V${sub('C')} = −60 − 90 = −150`)+
   E(`M${sub('E')} = 180 + ½(90)(3) = ${MK('315 kN.m')} (max, V = 0)`)+
   E(`M${sub('C')} = 315 − ½(60 + 150)(3) = 0 ✓`,'g')+
   NT('الـ rigid joint B ينقل نفس الـ moment (180) من AB لـ BC.')+
   NT('أكبر moment عند E لأن الـ V صار صفر هناك بالضبط تحت الـ 60 kN.'),
   fDiags(fABCframe(45,30,60,90,150)))}]},
{id:11,ex:'462',no:'P1',title:'Road Sign: أقصى سرعة رياح',short:'F = M_y/z، ثم q_h، ثم V من q_h = 0.613K_hV².',q:['q462_1','q462_aid'],tip:'wind',parts:[
 {t:'الحل',w:1250,h:nbPage(
   E(`z (مركز اللوحة) = 8 + 1.5/2 = 8.75 m`)+
   E(`h (أعلى اللوحة) = 8 + 1.5 = 9.5 m`)+
   E(`F = M${sub('y')} / z = 133 / 8.75 = ${MK('15.2 kN')}`)+
   E(`s/h = 1.5/9.5 = 0.158 ≤ 0.16 ⇒ C${sub('f')} = 1.85`)+
   E(`A${sub('f')} = 6 × 1.5 − 3 × 0.5 = ${MK('7.5 m²')}`)+
   EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
   E(`15200 = q${sub('h')}(0.85)(1.85)(7.5) ⇒ ${MK(`q${sub('h')} = 1288.8 N/m²`)}`)+
   E(`K${sub('h')} at 9.5 m: 0.98 + (1.04 − 0.98)(9.5 − 9.1)/(12.2 − 9.1) = 0.988`)+
   E(`1288.8 = 0.613(0.988)(1)(1)V² ⇒ ${MK('V = 46.1 m/s')}`)+
   E(`V = 46.1 × 3.6 = ${MK('166 km/h')}`)+
   NT('العزم هنا عند القاعدة (My)، فالذراع هو ارتفاع مركز اللوحة z = 8.75 m.')+
   NT('9.5 m بين 9.1 و 12.2 في الجدول، فنعمل interpolation.'),
   signFig({top:9.5,holes:[{x:1.5,y:8.5,w:3,h:0.5}],zc:8.75,S:24}))}]},
{id:12,ex:'462',no:'P2',title:'Stability & Determinacy (4 structures)',short:'Beam بـ fixed، box frame، frame بـ roller، و truss.',q:['q462_2'],tip:'stab',parts:[
 stTile('(1) Beam',E('r = 3 (fixed) + 2 (hinge) + 1 (roller) + 3 (fixed) = 9')+E('n = 2 ⇒ 3n = 6')+E(MK('r = 9 &gt; 6 ⇒ Stable, indeterminate 3rd degree'),'r')+
  EH('Convert:')+E('نشيل الـ fixed اليمين (−3):')+E('r = 3 + 2 + 1 = 6 = 3n ⇒ '+MK('Stable &amp; determinate'),'g')+NT('الجزء اليسار cantilever، واليمين معلّق على الـ hinge والـ roller.'),STK.bm(false),STK.bm(true)),
 stTile('(2) Box frame',E('n = 2 parts (يمين ويسار الـ hinges)')+E('r = 4 (pins) + 2 + 2 (hinges) = 8')+E(MK('r = 8 &gt; 6 ⇒ Stable, indeterminate 2nd degree'),'r')+
  EH('Convert:')+E('الـ pin اليمين ⇒ roller، ونضيف hinge في جنب الصندوق:')+E('n = 3, r = 3 + 2 × 3 = 9 = 3n ⇒ '+MK('Stable &amp; determinate'),'g')+NT('الصندوق صار فيه 3 hinges مو على خط واحد، فيبقى ثابت.'),STK.box(false),STK.box(true)),
 stTile('(3) Frame',E('r = 3 (fixed) + 1 (roller) + 2 + 2 (hinges) = 8')+E('n = 3 ⇒ 3n = 9')+E(MK('r = 8 &lt; 9 ⇒ Unstable'),'r')+
  NT('العمود اليمين على roller وفيه hinge فوق، فما يمنع الحركة الأفقية.')+
  EH('Convert:')+E('الـ roller ⇒ pin (+1): r = 9 = 3n ⇒ '+MK('Stable &amp; determinate'),'g'),STK.fr3(false),STK.fr3(true)),
 stTile('(4) Truss',E('b = 13, j = 7, r = 3 ⇒ b + r = 16 &gt; 14')+E('لكن الـ roller الأفقي على نفس خط الـ pin')+E(MK('All reactions concurrent ⇒ Unstable'),'r')+
  EH('Convert:')+E('الـ roller رأسي، ونشيل diagonal من كل X:')+E('b = 11 ⇒ 11 + 3 = 14 = 2j ⇒ '+MK('Stable &amp; determinate'),'g'),STK.tr462(false),STK.tr462(true))]},
{id:13,ex:'462',no:'P3',title:'Floor Plan: BF و EFG و Column G',short:'Bar الـ one-way والـ two-way، و reactions، و live load مع public assembly.',q:['q462_3','q462_3c'],tip:'floor',parts:[
 {t:'(a) Floor load distribution',w:1100,h:nbPage(
   E('HIGE: 7/4 = 1.75 ≤ 2 ⇒ two-way')+E('EFBA: 5/5 = 1 ⇒ two-way')+E('FGCB: 5/2 = 2.5 &gt; 2 ⇒ one-way')+E('IJDC: 9/2 = 4.5 &gt; 2 ⇒ one-way')+
   NT('الأحمر = الحمل على EFG (شبه منحرف من فوق + مثلث من تحت). والأزرق = الحمل على BF (مثلث + نص البانل الـ one-way).'),plan462())},
 {t:'(b) Beam BF',w:1200,h:nbPage(
   E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
   E('One-way slab (FGCB) = 5 × 2/2 = '+MK('5 kN/m'))+
   E('Uniform = 4.32 + 5 = '+MK('9.32 kN/m'))+
   E('Triangle (EFBA) = 5 × 2.5 = '+MK('12.5 kN/m'))+
   EH('Reactions:')+
   E('R = [9.32(5) + ½(12.5)(5)] / 2 = (46.6 + 31.25)/2 = '+MK('38.93 kN')),
   ldBeam({L:5,u:[{lab:'9.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'}],sup:[[0,'pin'],[5,'roll']],R:[[0,'38.93'],[5,'38.93']],names:[[0,'B'],[5,'F']],dims:[0,2.5,5]}))},
 {t:'(b) Beam EFG',w:1250,h:nbPage(
   E('Wall = 0.3 × 4 × 20 = 24 ⇒ uniform = 4.32 + 24 = '+MK('28.32 kN/m'))+
   E('Triangle on EF (from EFBA) = 5 × 2.5 = '+MK('12.5 kN/m'))+
   E('Trapezoid (from HIGE) = 5 × 4/2 = '+MK('10 kN/m')+' (2, 3, 2 m)')+
   E('Point load at F = BF reaction = '+MK('38.93 kN'))+
   EH(`ΣM${sub('E')} = 0:`)+
   E('7G = 28.32(7)(3.5) + 31.25(2.5) + 50(3.5) + 38.93(5)')+
   E('7G = 693.8 + 78.1 + 175 + 194.7 ⇒ '+MK('G = 163.1 kN'))+
   E('E = 198.2 + 31.25 + 50 + 38.93 − 163.1 = '+MK('155.3 kN'))+
   NT('شبه المنحرف مساحته 10(7 + 3)/2 = 50 في نصه، والمثلث ½(12.5)(5) = 31.25 عند 2.5 m.'),
   ldBeam({L:7,u:[{lab:'28.32'}],shapes:[{t:'trap',a:0,b:7,c:2,d:5,lab:'10 kN/m',h:34},{t:'tri',a:0,b:5,c:2.5,lab:'12.5 kN/m',h:40,lift:56}],P:[[5,'38.93 kN']],sup:[[0,'pin'],[7,'roll']],R:[[0,'155.3'],[7,'163.1']],ptop:150,names:[[0,'E'],[5,'F'],[7,'G']],dims:[0,2,2.5,5,7]}))},
 {t:'(c) Live load على Column G',w:1050,h:nbOne(
   E(`A${sub('T')} = (3.5 + 1)(2 + 2.5) = ${MK('20.25 m²')}`)+
   NT('يسار G نص 7 = 3.5، ويمينه نص 2 = 1. وفوقه نص 4 = 2، وتحته نص 5 = 2.5.')+
   E(`K${sub('LL')} A${sub('T')} = 4 × 20.25 = 81 &gt; 37.2 ✓`)+
   NT('ما فيه reduction للـ public assembly ولا للـ roof. بس الـ office:')+
   E(`L = 2.0 [0.25 + 4.57/√81] = 2(0.758) = ${MK('1.52 kN/m²')}`)+
   E('1.52 &gt; 0.4 × 2 = 0.8 ✓','g')+
   E(`Total = (3 + 1.52 + 1.52 + 1) × 20.25 = ${MK('142.6 kN')}`))}]},
{id:14,ex:'462',no:'P4',title:'Frame مائل: 30 kN و 20 kN/m و 40 kN',short:'نفس شكل 471 Q4 بأرقام مختلفة.',q:['q462_4'],tip:'frame',parts:[
 {t:'(a) Reactions',w:1250,h:nbPage(
   E(`ΣF${sub('x')}: C${sub('x')} + 30 = 0 ⇒ ${MK(`C${sub('x')} = 30 kN ←`)}`)+
   EH(`ΣM${sub('C')} = 0 &nbsp;(↺ +)`)+
   E(`−A${sub('y')}(9) + 30(2) + 20(6)(3) + 40(3) = 0`)+
   E(`⇒ ${MK(`A${sub('y')} = 60 kN ↑`)}`)+
   EH(`ΣF${sub('y')} = 0`)+
   E(`60 + C${sub('y')} − 120 − 40 = 0 ⇒ ${MK(`C${sub('y')} = 100 kN ↑`)}`)+
   EH('Check: ΣM<sub>A</sub> = 0')+E('30(2) + 120(6) + 40(6) − 30(4) − 100(9) = 0 ✓','g'),
   nbsvg('0 0 580 390',fABC(30,20,40).s+(()=>{const g=fABC(30,20,40),X=g.X,Y=g.Y;return HA(X(0),Y(0)+80,X(0),Y(0)+26,'nr','stroke-width="2.4"')+HT(X(0)+8,Y(0)+80,'A<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 60</tspan>','nr','start')+HA(X(9)+60,Y(4),X(9)+6,Y(4),'nr','stroke-width="2.4"')+HT(X(9)+20,Y(4)-12,'30','nr','start')+HA(X(9),Y(4)+80,X(9),Y(4)+24,'nr','stroke-width="2.4"')+HT(X(9)+8,Y(4)+84,'C<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = 100</tspan>','nr','start')})(),600))},
 {t:'(b) العضو المائل AB',w:1150,h:nbPage(
   NT('cosθ = 0.6 و sinθ = 0.8 مثل قبل.')+
   E(`N${sub('A')} = −60(0.8) = ${MK('−48')} &nbsp;&nbsp; V${sub('A')} = 60(0.6) = ${MK('36')}`)+
   E(`After D: N = −(60(0.8) + 30(0.6)) = ${MK('−66')}`)+
   E(`V = 36 − 30(0.8) = ${MK('12')}`)+
   E(`M${sub('D')} = 60(1.5) = ${MK('90')} &nbsp;&nbsp; M${sub('B')} = 60(3) − 30(2) = ${MK('120 kN.m')}`),'')},
 {t:'(b) BC والرسومات',w:1400,h:nbPage(
   E('N = −30 على BC')+
   E('V: 60 → 60 − 20(3) = 0 → −40 → −40 − 60 = −100')+
   E(`M${sub('E')} = 120 + ½(60)(3) = ${MK('210 kN.m')}`)+
   E(`M${sub('C')} = 210 − ½(40 + 100)(3) = 0 ✓`,'g')+
   NT('نفس أسلوب 471 Q4 بالضبط، تغيّرت الأرقام بس.'),
   fDiags(fABCframe(30,20,40,60,100)))}]}
);

/* ---------- exam simulations (same style as the course simulation) ---------- */
const kset=(svg,map)=>{let s=svg;for(const k in map)s=s.split(`data-k="${k}"`).join(map[k]);return s};
const emb=(svg,x,y,w,h,attr='')=>`<g ${attr}>`+svg.replace(/^<svg class="nbs drw" viewBox="([^"]+)" direction="ltr"[^>]*>/,(m,vb)=>`<svg class="nbs" x="${x}" y="${y}" width="${w}" height="${h}" style="width:${w}px;height:${h}px;max-width:none" viewBox="${vb}" preserveAspectRatio="xMidYMid meet">`)+'</g>';
const raw=(body,vb)=>`<svg class="nbs drw" viewBox="${vb}" direction="ltr">${body}</svg>`;
const only=a=>`data-only="${a}"`;
function stSim(list){// list: [orig(), conv()] x4
 const n=list.length,last=2*n+1;let s='';
 list.forEach(([o,c],k)=>{s+=emb(o,(k%2)*320,(k>>1)*240,300,220,only('0'));s+=emb(c,(k%2)*320,(k>>1)*240,300,220,only(String(last)));
  s+=emb(o,0,0,320,240,only(`${2*k+1},${2*k+2}`))+emb(c,320,0,320,240,only(String(2*k+2)));
  s+=`<g ${only(`${2*k+1},${2*k+2}`)}>${HT(160,262,'الأصلي','nk')}</g><g ${only(String(2*k+2))}>${HT(480,262,'بعد التحويل','ng')}</g>`});
 return {vb:'0 0 640 480',svg:s}}
function frameSim(main,mainVb,F,dvb,n0){// main svg body (with states), diagrams N,V,M at steps n0..n0+2 (M stays for answer)
 const [vw,vh]=mainVb.split(' ').slice(2).map(Number),dh=vw*(+dvb.split(' ')[3])/(+dvb.split(' ')[2]);
 let s=emb(raw(main,mainVb),0,0,vw,vh);
 ['N','V','M'].forEach((k,i)=>{s+=emb(raw(frm(F,k,{amp:k==='N'?34:42}),dvb),0,vh,vw,dh,only(i===2?`${n0+2},${n0+3}`:String(n0+i)))+`<g ${only(i===2?`${n0+2},${n0+3}`:String(n0+i))}>${HT(14,vh+22,k==='N'?'N.F.D (kN)':k==='V'?'S.F.D (kN)':'B.M.D (kN.m)','nb','start')}</g>`});
 return {vb:`0 0 ${vw} ${vh+dh}`,svg:s}}
/* forces on the inclined member AB resolved along it (N) and across it (V), drawn on the main frame */
function abcAxis(H,w,P,Ay,Cy){const g=fABC(H,w,P),X=g.X,Y=g.Y,L=78;
 // o = sideways shift so an arrow along the member does not sit on top of it
 const ar=(p0,d,o,c,lab,dx,dy)=>{const p=[p0[0]+o[0],p0[1]+o[1]];return HA(p[0]-d[0]*L,p[1]-d[1]*L,p[0]-d[0]*5,p[1]-d[1]*5,c,'stroke-width="2.6" stroke-dasharray="7 5"')+HT(p[0]-d[0]*L+dx,p[1]-d[1]*L+dy,lab,c,'middle','font-size="17"')};
 const A=[X(0),Y(0)],D=[X(1.5),Y(2)],u=[0.6,-0.8],n=[-0.8,-0.6],nm=[0.8,0.6],side=[12*0.8,12*0.6];
 let s=abcMain(H,w,P,Ay,Cy).replace(/data-from="\d+"/g,'');
 s+=ar(A,u,[-side[0],-side[1]],'nr',`${Ay*0.8} (∥)`,-30,6)+ar(A,n,[0,0],'nb',`${Ay*0.6} (⊥)`,44,-16);
 s+=ar(D,u,side,'nr',`${H*0.6} (∥)`,50,10)+ar(D,nm,[0,0],'nb',`${H*0.8} (⊥)`,20,-14);
 s+=HP(`M${A[0]+46},${A[1]} A46,46 0 0,0 ${A[0]+46*0.6},${A[1]-46*0.8}`,'ng')+HT(A[0]+54,A[1]-14,'θ','ng','start');
 return nbsvg('-60 0 640 420',s,640)}
function axisPage(H,w,P,Ay,Cy){const NA=Ay*0.8,VA=Ay*0.6,ND=H*0.6,VD=H*0.8;
 return nbPage(EH('نعدّل القوى على المحور المائل AB')+
  NT('AB مائل: 3 m أفقي و 4 m رأسي، فطوله 5 m و sinθ = 4/5 = 0.8 و cosθ = 3/5 = 0.6. نحلل كل قوة على AB لمركبة على طول العضو (∥ تعطي N) ومركبة عمودية عليه (⊥ تعطي V):')+
  EH(`عند A: A${sub('y')} = ${Ay} ↑`)+
  E(`∥ = ${Ay} sinθ = ${Ay} × 0.8 = ${MK(`${NA} kN`)} (تدف العضو: ضغط)`)+
  E(`⊥ = ${Ay} cosθ = ${Ay} × 0.6 = ${MK(`${VA} kN`)}`)+
  EH(`عند D: ${H} kN →`)+
  E(`∥ = ${H} cosθ = ${H} × 0.6 = ${MK(`${ND} kN`)}`)+
  E(`⊥ = ${H} sinθ = ${H} × 0.8 = ${MK(`${VD} kN`)} (عكس ${VA})`)+
  EH('النتيجة على AB:')+
  E(`A → D: N = −${NA} ، V = ${VA}`)+
  E(`D → B: N = −(${NA} + ${ND}) = −${NA+ND} ، V = ${VA} − ${VD} = ${VA-VD}`),
  abcAxis(H,w,P,Ay,Cy))}
function abcMain(H,w,P,Ay,Cy){const g=fABC(H,w,P),X=g.X,Y=g.Y;
 return g.s+`<g ${at(1)}>${HA(X(9)+60,Y(4),X(9)+6,Y(4),'nr','stroke-width="2.4"')+HT(X(9)+20,Y(4)-12,`C<tspan font-size="70%" dy="4">x</tspan><tspan dy="-4"> = ${H}</tspan>`,'nr','start')}</g>`
  +`<g ${at(2)}>${HA(X(0),Y(0)+80,X(0),Y(0)+26,'nr','stroke-width="2.4"')+HT(X(0)+8,Y(0)+80,`A<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = ${Ay}</tspan>`,'nr','start')}</g>`
  +`<g ${at(3)}>${HA(X(9),Y(4)+80,X(9),Y(4)+24,'nr','stroke-width="2.4"')+HT(X(9)+8,Y(4)+84,`C<tspan font-size="70%" dy="4">y</tspan><tspan dy="-4"> = ${Cy}</tspan>`,'nr','start')}</g>`}
function floorSim(plan,trib,b1,b2,txt){let s=emb(plan.replace(/<\/svg>$/,`<g ${at(4)}>${trib}</g></svg>`),0,30,460,450);
 s+=emb(b1,480,0,500,300,at(2))+emb(b2,480,330,500,300,at(3))+`<g ${at(4)}>${HT(20,520,txt,'nr','start','font-size="22"')}</g>`;
 return {vb:'0 0 990 560',svg:s}}
const XSIM={
1:{q:'Simply supported beam: 20 kN/m على 9 m و 40 kN عند B و C.',draw:()=>{const g=BE.draw(XS.b1,{diag:true,signs:true,at:{reac:{0:2,1:1},sfd:3,bmd:4},x1:540});return {vb:g.vb,svg:g.svg}},
 steps:[['ΣM_A = 0 → D_y','العزوم حول A تحذف A_x و A_y. الحمل الموزع = 20 × 9 = 180 kN في النص.','−20(9)(4.5) − 40(3) − 40(6) + 9 D_y = 0 → D_y = 130 kN ↑'],
  ['ΣF_y = 0 → A_y','نجمع القوى الرأسية.','A_y = 180 + 80 − 130 = 130 kN ↑'],
  ['S.F.D','يقفز 130 عند A، ينزل بميل 20، وينزل 40 عند B و C.','130 → 70 | 30 → −30 | −70 → −130'],
  ['B.M.D','من الـ sections: M = 130x − 10x² ثم نطرح 40(x − 3) و 40(x − 6).','M_B = M_C = 300 kN.m ، M_D = 0']],ans:'M<sub>max</sub> = <b>322.5 kN.m</b> عند x = 4.5 m (حيث V = 0)'},
2:{q:'Cantilever مثبت عند A: 20 kN/m على 6 m و 40 kN عند B و C.',draw:()=>{const g=BE.draw(XS.b2,{diag:true,signs:true,at:{reac:{0:1,m0:2},sfd:3,bmd:4},x1:540});return {vb:g.vb,svg:g.svg}},
 steps:[['A_y','الـ fixed support يشيل كل الأحمال الرأسية.','A_y = 20(6) + 40 + 40 = 200 kN ↑'],
  ['M_A','الأحمال كلها تدوّر مع عقارب الساعة، فالـ M_A عكسها.','M_A = 20(6)(3) + 40(3) + 40(6) = 720 kN.m ↺'],
  ['S.F.D','من الطرف الحر: V = 40 + 20x ثم 80 + 20x.','200 → 140 | 100 → 40'],
  ['B.M.D','M = −40x − 10x² ثم −40x − 40(x − 3) − 10x².','M_A = −720 ، M_B = −210 ، M_C = 0']],ans:'الـ M كله سالب، وأكبر قيمة <b>−720 kN.m</b> عند A.'},
3:{q:'Overhang beam: 20 kN/m على 7 m و 30 kN عند الطرف C.',draw:()=>{const g=BE.draw(XS.b3,{diag:true,signs:true,at:{reac:{0:2,1:1},sfd:3,bmd:4},x1:540});return {vb:g.vb,svg:g.svg}},
 steps:[['ΣM_A = 0 → B_y','الحمل 20 × 7 = 140 kN عند 3.5 m.','−140(3.5) − 30(7) + 5 B_y = 0 → B_y = 140 kN ↑'],
  ['ΣF_y = 0 → A_y','','A_y = 140 + 30 − 140 = 30 kN ↑'],
  ['S.F.D','30 ثم ينزل لين −70 عند B، يقفز 140 إلى 70، وينزل لين 30.','30 → −70 | 70 → 30'],
  ['B.M.D','M = 30x − 10x² في AB، و −30x − 10x² من C.','M_B = −100 kN.m']],ans:'M<sub>max(+)</sub> = <b>22.5 kN.m</b> عند x = 1.5 m'},
4:{q:'Frame ABCDEF: roller عند B و pin عند E.',draw:()=>{const m=kset(f472fig(),{res:at(1),reac:at(2)});return frameSim(m.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,''),'0 0 660 340',F472,'0 0 640 250',4)},
 steps:[['الحمل على DE','50 × 5 = 250 kN عمودي على DE، نحلله.','150 kN → ، 200 kN ↓ (في نص DE)'],
  ['ΣM_E = 0 → B_y','العزوم حول E تحذف E_x و E_y.','+40 − 14B_y + 8000 + 1200 + 400 + 225 − 100 = 0 → B_y = 697.5 kN'],
  ['BC: V و M','x من B.','V = 697.5 − 100x ، M = −40 + 697.5x − 50x² → x = 6.975 m'],
  ['N.F.D','DE في شد (tension) والباقي صفر.','N_DE = 302.5 sinθ = 181.5 kN'],
  ['S.F.D','697.5 ينزل لين −102.5 ثم −302.5، وعلى DE من −242 لين −492، و EF = 100.','V_D = −302.5 cosθ = −242'],
  ['B.M.D','الـ M من −40 يطلع لين 2392.5 وينزل لـ 1735 عند D و −100 عند E.','M_max = 2392.5 kN.m']],ans:'B<sub>y</sub> = <b>697.5 kN</b> ، M<sub>max</sub> = <b>2392.5 kN.m</b> عند x = 6.975 m'},
5:{q:'لكل منشأ: stable أو unstable، و determinate أو لا، ونحوّله.',draw:()=>stSim([[STK.f2h(),STK.f2hC()],[STK.bf(),STK.bfC()],[STK.tf(),STK.tfC()],[STK.tr472(false),STK.tr472(true)]]),
 steps:[['(1) Frame','r = 4 + 2 + 2 = 8 ، n = 3','r = 8 < 9 → Unstable'],['(1) التحويل','نخلي زاوية rigid.','r = 6 = 3n → Stable & determinate'],
  ['(2) Beam + frame','الـ reactions كلها تمر بنقطة O.','concurrent → Unstable'],['(2) التحويل','pin يسار + roller يمين.','r = 3 → Stable & determinate'],
  ['(3) Frame مقفل','r = 4 + 2 + 3 = 9 ، n = 2','r = 9 > 6 → indeterminate 3rd degree'],['(3) التحويل','نشيل الكمرة الوسطى.','r = 6 = 3n'],
  ['(4) Truss','b + r = 16 > 14 بس الـ reactions concurrent.','Unstable'],['(4) التحويل','roller رأسي ونشيل diagonal من كل X.','b + r = 14 = 2j']],ans:'1، 2، 4 unstable، و 3 indeterminate بدرجة 3.'},
6:{q:'Wind على مصنع 15 × 30 m وارتفاعه 6.1 m، V = 190 km/h.',draw:()=>{const a=kset(windFig({w1:'604.3',w2:'653.7',lw:'−791',sw:'−1013',t:'Case 1: +0.18'}),{ww:at(2),lw:at(3),sw:at(4)}),b=windFig({w1:'1075',w2:'1124.3',lw:'−320.3',sw:'−542.5',t:'Case 2: −0.18'});return {vb:'0 0 690 780',svg:emb(a,0,0,690,380)+emb(b,0,400,690,380,at(5))}},
 steps:[['V و q','V = 52.8 m/s','q_z = 1452.6 K_z → q_4.6 = 1234.7 ، q_h = 1307.3 N/m²'],
  ['Windward (C_p = 0.8)','بـ q_z لكل منطقة، ± 0.18 q_h = ±235.3','604.3 / 1075 (0–4.6) ، 653.7 / 1124.3 (4.6–6.1)'],
  ['Leeward (C_p = −0.5)','L/B = 15/30 = 0.5','−791 / −320.3 N/m²'],
  ['Side walls (C_p = −0.7)','','−1013 / −542.5 N/m²'],
  ['الحالة الثانية','نفس الشي بـ −0.18.','windward 1075 & 1124.3 ، leeward −320.3 ، side −542.5']],ans:'الرسمتين فيها الضغط على كل جدار للحالتين.'},
7:{q:'لوحة 6 × 1.5 m أعلاها على 12.2 m، M_z ≤ 60 kN.m، V = 180 km/h.',draw:()=>{const s=kset(signFig({top:12.2,holes:[{c:1,x:2,y:11.45,r:0.4},{c:1,x:4,y:11.45,r:0.4}],S:20}),{F:at(1),h:at(2)});return {vb:'0 0 360 330',svg:emb(s,0,0,360,330)}},
 steps:[['F المسموح','الذراع عن العمود 3 m.','F = 60/3 = 20 kN'],['q_h','h = 12.2 m → K_h = 1.04 ، V = 50 m/s','q_h = 0.613(1.04)(50)² = 1593.8 N/m²'],
  ['C_f','s/h = 1.5/12.2 = 0.123 ≤ 0.16','C_f = 1.85'],['A_f','F = q_h G C_f A_f','A_f = 20000/(1593.8 × 0.85 × 1.85) = 7.98 m²'],['D','الفتحات = 9 − 7.98 = 1.02 m²','2πD²/4 = 1.02 → D = 0.81 m']],ans:'أقل قطر <b>D ≈ 0.81 m</b>'},
8:{q:'بلاطة 5 kN/m²، كمرات 30 × 60 cm، جدار على ABC و GH.',draw:()=>floorSim(kset(plan471(),{two:at(1),be:at(2),abc:at(3)}),`<rect x="110" y="148" width="140" height="140" fill="rgba(47,143,58,.18)" stroke="#2f8f3a" stroke-width="2" stroke-dasharray="6 4"/>`,
  ldBeam({L:7,u:[{lab:'4.32'}],shapes:[{t:'trap',a:0,b:7,c:2.5,d:4.5,lab:'25 kN/m'}],sup:[[0,'pin'],[7,'roll']],R:[[0,'71.37'],[7,'71.37']],names:[[0,'B'],[7,'E']],dims:[0,2.5,4.5,7]}),
  ldBeam({L:10,u:[{lab:'10.8'},{lab:'4.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'},{t:'tri',a:5,b:10,c:7.5,lab:'12.5'}],P:[[5,'71.37 kN']],sup:[[0,'pin'],[10,'roll']],R:[[0,'142.54'],[10,'142.54']],names:[[0,'A'],[5,'B'],[10,'C']],dims:[0,5,10]}),'Column E: A_T = 25 m² → 157.5 kN'),
 steps:[['توزيع الحمل','7/5 = 1.4 → two-way ، 10/3 → one-way',''],['Beam BE','4.32 + شبه منحرف 25 kN/m','R = 71.37 kN'],['Beam ABC','15.12 uniform + مثلثين 12.5 + 71.37 عند B','R = 142.54 kN'],['Column E','A_T = 25 m² ، L = 1.767 kN/m²','(3 × 1.767 + 1)(25) = 157.5 kN']],ans:'BE: <b>71.37</b> ، ABC: <b>142.54</b> ، Column E: <b>157.5 kN</b>'},
9:{q:'لكل منشأ: stable أو unstable، و determinate أو لا، ونحوّله.',draw:()=>stSim([[STK.f2h(),STK.f2hC()],[STK.bf(),STK.bfC()],[STK.tf(),STK.tfC()],[STK.tr471(false),STK.tr471(true)]]),
 steps:[['(1) Frame','r = 8 ، n = 3','Unstable'],['(1) التحويل','زاوية rigid','r = 6 = 3n'],['(2) Beam + frame','reactions concurrent','Unstable'],['(2) التحويل','pin + roller','Stable & determinate'],
  ['(3) Frame مقفل','r = 9 ، n = 2','indeterminate 3rd degree'],['(3) التحويل','نشيل الكمرة الوسطى','r = 6'],['(4) Truss','b = 12 ، r = 4 ، j = 7','16 > 14 → indeterminate 2nd degree'],['(4) التحويل','roller + نشيل العضو الداخلي','b + r = 14']],ans:'1 و 2 unstable، 3 indeterminate (3)، 4 indeterminate (2).'},
10:{q:'Frame: roller عند A و pin عند C، 45 kN و 30 kN/m و 60 kN.',draw:()=>frameSim(abcMain(45,30,60,90,150),'0 0 580 390',fABCframe(45,30,60,90,150),'0 0 380 225',4),
 steps:[['ΣF_x → C_x','A roller ما يشيل أفقي.','C_x = 45 kN ←'],['ΣM_C → A_y','الـ 45 تحت C بـ 2 m.','−9A_y + 90 + 540 + 180 = 0 → A_y = 90 kN'],['ΣF_y → C_y','','C_y = 240 − 90 = 150 kN'],
  ['N.F.D','AB: −72 ثم −99 ، BC: −45','compression'],['S.F.D','AB: 54 ثم 18 ، BC: 90 → 0 → −60 → −150',''],['B.M.D','M_D = 135 ، M_B = 180 ، M_E = 315','M_C = 0 ✓']],ans:'A<sub>y</sub> = <b>90</b> ، C<sub>x</sub> = <b>45</b> ، C<sub>y</sub> = <b>150 kN</b> ، M<sub>max</sub> = <b>315 kN.m</b>'},
11:{q:'لوحة 6 × 1.5 m أعلاها على 9.5 m، فيها فراغ 3 × 0.5، M_y = 133 kN.m.',draw:()=>{const s=kset(signFig({top:9.5,holes:[{x:1.5,y:8.5,w:3,h:0.5}],zc:8.75,S:24}),{F:at(1),z:at(1),h:at(3)});return {vb:'0 0 360 330',svg:emb(s,0,0,360,330)}},
 steps:[['F','z = 8.75 m (مركز اللوحة)','F = 133/8.75 = 15.2 kN'],['C_f و A_f','s/h = 1.5/9.5 = 0.158','C_f = 1.85 ، A_f = 9 − 1.5 = 7.5 m²'],['q_h','F = q_h G C_f A_f','q_h = 15200/(0.85 × 1.85 × 7.5) = 1288.8 N/m²'],['K_h','interpolation عند 9.5 m','K_h = 0.988'],['V','1288.8 = 0.613(0.988)V²','V = 46.1 m/s = 166 km/h']],ans:'أقصى سرعة <b>166 km/h</b>'},
12:{q:'لكل منشأ: stable أو unstable، و determinate أو لا، ونحوّله.',draw:()=>stSim([[STK.bm(false),STK.bm(true)],[STK.box(false),STK.box(true)],[STK.fr3(false),STK.fr3(true)],[STK.tr462(false),STK.tr462(true)]]),
 steps:[['(1) Beam','r = 9 ، n = 2','indeterminate 3rd degree'],['(1) التحويل','نشيل الـ fixed اليمين','r = 6'],['(2) Box frame','r = 8 ، n = 2','indeterminate 2nd degree'],['(2) التحويل','roller + hinge جديد','r = 9 = 3n'],
  ['(3) Frame','r = 8 ، n = 3','Unstable'],['(3) التحويل','roller → pin','r = 9'],['(4) Truss','reactions concurrent','Unstable'],['(4) التحويل','roller رأسي ونشيل diagonals','b + r = 14']],ans:'1 indeterminate (3)، 2 indeterminate (2)، 3 و 4 unstable.'},
13:{q:'بلاطة 5 kN/m²، جدار 4 m على EFG، كمرات 30 × 60 cm.',draw:()=>floorSim(kset(plan462(),{two:at(1),bf:at(2),efg:at(3)}),`<rect x="145" y="110" width="135" height="135" fill="rgba(47,143,58,.18)" stroke="#2f8f3a" stroke-width="2" stroke-dasharray="6 4"/>`,
  ldBeam({L:5,u:[{lab:'9.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'}],sup:[[0,'pin'],[5,'roll']],R:[[0,'38.93'],[5,'38.93']],names:[[0,'B'],[5,'F']],dims:[0,2.5,5]}),
  ldBeam({L:7,u:[{lab:'28.32'}],shapes:[{t:'trap',a:0,b:7,c:2,d:5,lab:'10 kN/m',h:34},{t:'tri',a:0,b:5,c:2.5,lab:'12.5 kN/m',h:40,lift:56}],P:[[5,'38.93 kN']],sup:[[0,'pin'],[7,'roll']],R:[[0,'155.3'],[7,'163.1']],ptop:150,names:[[0,'E'],[5,'F'],[7,'G']],dims:[0,2,2.5,5,7]}),'Column G: A_T = 20.25 m² → 142.6 kN'),
 steps:[['توزيع الحمل','HIGE و EFBA two-way ، FGCB و IJDC one-way',''],['Beam BF','9.32 uniform + مثلث 12.5','R = 38.93 kN'],['Beam EFG','28.32 + مثلث 12.5 + شبه منحرف 10 + 38.93','E = 155.3 ، G = 163.1 kN'],['Column G','A_T = 20.25 m² ، office L = 1.52','(3 + 1.52 + 1.52 + 1)(20.25) = 142.6 kN']],ans:'BF: <b>38.93</b> ، Column G: <b>142.6 kN</b>'},
14:{q:'Frame: roller عند A و pin عند C، 30 kN و 20 kN/m و 40 kN.',draw:()=>frameSim(abcMain(30,20,40,60,100),'0 0 580 390',fABCframe(30,20,40,60,100),'0 0 380 225',4),
 steps:[['ΣF_x → C_x','','C_x = 30 kN ←'],['ΣM_C → A_y','','−9A_y + 60 + 360 + 120 = 0 → A_y = 60 kN'],['ΣF_y → C_y','','C_y = 160 − 60 = 100 kN'],
  ['N.F.D','AB: −48 ثم −66 ، BC: −30',''],['S.F.D','AB: 36 ثم 12 ، BC: 60 → 0 → −40 → −100',''],['B.M.D','M_D = 90 ، M_B = 120 ، M_E = 210','M_C = 0 ✓']],ans:'A<sub>y</sub> = <b>60</b> ، C<sub>x</sub> = <b>30</b> ، C<sub>y</sub> = <b>100 kN</b> ، M<sub>max</sub> = <b>210 kN.m</b>'}
};
Object.keys(XSIM).forEach(k=>{SIMS[1000+(+k)]=XSIM[k].draw});
const xPseudo=x=>{const S=XSIM[x.id];return {id:1000+x.id,title:x.title,q:S.q,steps:S.steps,ans:S.ans}};

/* ================= الحلول الكاملة — بدون أي اختصار ================= */
const ar=s=>NT(s);
const sv=(v)=>E(v,'r');
const XFULL={
/* ---------- 472 Q1 (1) ---------- */
1:[
{t:'(a) Reactions',h:nbPage(
 NT('نرسم الكمرة ونحط الـ reactions: A pin فيها A<sub>x</sub> و A<sub>y</sub>، و D roller فيها D<sub>y</sub> بس.')+
 NT('أول شي نحوّل الحمل الموزع لقوة مركّزة (محصلة):')+
 E(`W = w × L = 20 × 9 = ${MK('180 kN')}`)+
 E('مكانها = L/2 = 9/2 = 4.5 m من A')+
 EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
 NT('نأخذ العزوم حول A عشان A<sub>x</sub> و A<sub>y</sub> يمرون فيها وعزمهم صفر. كل قوة لتحت على يمين A تدوّر مع عقارب الساعة (−)، والقوة لفوق تدوّر عكسها (+).')+
 E(`−(180)(4.5) − (40)(3) − (40)(6) + D${sub('y')}(9) = 0`)+
 E(`−810 − 120 − 240 + 9D${sub('y')} = 0`)+
 E(`−1170 + 9D${sub('y')} = 0`)+
 E(`9D${sub('y')} = 1170`)+
 E(`D${sub('y')} = 1170 / 9 ⇒ ${MK(`D${sub('y')} = 130 kN ↑`)}`)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E(`A${sub('y')} − 180 − 40 − 40 + D${sub('y')} = 0`)+
 E(`A${sub('y')} − 260 + 130 = 0`)+
 E(`⇒ ${MK(`A${sub('y')} = 130 kN ↑`)}`)+
 EH(`ΣF${sub('x')} = 0`)+
 E(`A${sub('x')} = 0 &nbsp;(ما فيه أحمال أفقية)`)+
 EH(`Check: ΣM${sub('D')} = 0`)+
 E(`−A${sub('y')}(9) + 180(4.5) + 40(6) + 40(3)`,'g')+
 E('= −1170 + 810 + 240 + 120 = 0 ✓','g'),
 `<div class="nbfig">${(()=>{const g=BE.draw(XS.b1,{x1:470,res:[{x:4.5,W:180,lab:'20 × 9 = 180 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
{t:'(b) Section 1: 0 ≤ x < 3',h:nbPage(
 NT('نقطع على مسافة x من A (قبل B) وناخذ الجزء اليسار. نفرض V لتحت و M عكس عقارب الساعة على وجه القطع (الاتجاه الموجب).')+
 fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20'}})+
 NT('الحمل الموزع على الجزء = 20 × x = 20x، ومكانه في نص الجزء: x/2 من القطع.')+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('130 − 20x − V = 0')+
 E(`⇒ ${MK('V = 130 − 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 NT('العزوم حول نقطة القطع، عشان V يمر فيها وعزمه صفر.')+
 E('−130(x) + (20x)(x/2) + M = 0')+
 E('−130x + 10x² + M = 0')+
 E(`⇒ ${MK('M = 130x − 10x²')}`)+
 EH('نعوّض:')+
 sv('x = 0: V = 130 − 20(0) = 130 kN')+
 sv('x = 0: M = 130(0) − 10(0)² = 0')+
 sv('x = 3: V = 130 − 20(3) = 130 − 60 = 70 kN')+
 sv('x = 3: M = 130(3) − 10(3)² = 390 − 90 = 300 kN.m'),
 nbBeam(XS.b1,{mw:640}))},
{t:'(b) Section 2: 3 < x < 6',h:nbPage(
 NT('نقطع بين B و C. الجزء اليسار صار فيه الـ 40 kN اللي عند B (على بعد x − 3 من القطع).')+
 fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20'},P:[[0.5,'40']]})+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('130 − 20x − 40 − V = 0')+
 E('90 − 20x − V = 0')+
 E(`⇒ ${MK('V = 90 − 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 E('−130(x) + (20x)(x/2) + 40(x − 3) + M = 0')+
 E('−130x + 10x² + 40x − 120 + M = 0')+
 E('−90x + 10x² − 120 + M = 0')+
 E(`⇒ ${MK('M = 90x − 10x² + 120')}`)+
 EH('نعوّض:')+
 sv('x = 3: V = 90 − 20(3) = 90 − 60 = 30 kN')+
 sv('x = 3: M = 90(3) − 10(3)² + 120 = 270 − 90 + 120 = 300 kN.m')+
 sv('x = 6: V = 90 − 20(6) = 90 − 120 = −30 kN')+
 sv('x = 6: M = 90(6) − 10(6)² + 120 = 540 − 360 + 120 = 300 kN.m')+
 NT('عند B الـ V نزل من 70 إلى 30، يعني نزل 40 = قيمة القوة المركّزة ✓. والـ M نفسه (300) من الجهتين ✓.'),
 '')},
{t:'(b) Section 3: 6 < x ≤ 9',h:nbPage(
 NT('نقطع بين C و D. الجزء اليسار فيه الـ 40 عند B (على بعد x − 3) والـ 40 عند C (على بعد x − 6).')+
 fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20'},P:[[0.33,'40'],[0.67,'40']]})+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('130 − 20x − 40 − 40 − V = 0')+
 E('50 − 20x − V = 0')+
 E(`⇒ ${MK('V = 50 − 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 E('−130(x) + (20x)(x/2) + 40(x − 3) + 40(x − 6) + M = 0')+
 E('−130x + 10x² + 40x − 120 + 40x − 240 + M = 0')+
 E('−50x + 10x² − 360 + M = 0')+
 E(`⇒ ${MK('M = 50x − 10x² + 360')}`)+
 EH('نعوّض:')+
 sv('x = 6: V = 50 − 20(6) = 50 − 120 = −70 kN')+
 sv('x = 6: M = 50(6) − 10(6)² + 360 = 300 − 360 + 360 = 300 kN.m')+
 sv('x = 9: V = 50 − 20(9) = 50 − 180 = −130 kN')+
 sv('x = 9: M = 50(9) − 10(9)² + 360 = 450 − 810 + 360 = 0 ✓')+
 NT('عند D: V = −130 والـ D<sub>y</sub> = 130 لفوق يرجّعه صفر ✓. والـ M = 0 لأن D roller ✓.'),
 nbBeam(XS.b1,{mw:640}))},
{t:'(c) Maximum positive moment',h:nbPage(
 NT('أكبر M يكون حيث V = 0 (لأن dM/dx = V). نشوف وين الـ V يغيّر إشارته:')+
 E('Section 1: V من 130 إلى 70 (موجب كله، ما يصير صفر)')+
 E('Section 3: V من −70 إلى −130 (سالب كله)')+
 E('Section 2: V من 30 إلى −30 ⇒ يصير صفر هنا')+
 EH('V = 0 في Section 2:')+
 E('90 − 20x = 0')+
 E('20x = 90')+
 E(`x = 90 / 20 ⇒ ${MK('x = 4.5 m')}`)+
 EH('نعوّض في M حق Section 2:')+
 E('M = 90(4.5) − 10(4.5)² + 120')+
 E('M = 405 − 10(20.25) + 120')+
 E('M = 405 − 202.5 + 120')+
 E(`⇒ ${MK(`M${sub('max')} = 322.5 kN.m &nbsp;at x = 4.5 m`)}`),
 fbd({side:'L',end:{v:'130'},w:{t:'u',lab:'20'},P:[[0.667,'40']],x:'4.5 m'}))}],
/* ---------- 472 Q1 (2) ---------- */
2:[
{t:'(a) Reactions',h:nbPage(
 NT('A fixed support فيه 3 مجاهيل: A<sub>x</sub> و A<sub>y</sub> و M<sub>A</sub>.')+
 E(`W = 20 × 6 = ${MK('120 kN')} &nbsp;عند 6/2 = 3 m من A`)+
 EH(`ΣF${sub('x')} = 0`)+E(`A${sub('x')} = 0`)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E(`A${sub('y')} − 120 − 40 − 40 = 0`)+
 E(`A${sub('y')} − 200 = 0`)+
 E(`⇒ ${MK(`A${sub('y')} = 200 kN ↑`)}`)+
 EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
 NT('كل الأحمال لتحت على يمين A فتدوّر مع عقارب الساعة (−)، و M<sub>A</sub> نفرضه عكس عقارب الساعة (+).')+
 E(`M${sub('A')} − (120)(3) − (40)(3) − (40)(6) = 0`)+
 E(`M${sub('A')} − 360 − 120 − 240 = 0`)+
 E(`M${sub('A')} − 720 = 0`)+
 E(`⇒ ${MK(`M${sub('A')} = 720 kN.m ↺`)}`)+
 NT('طلع موجب، يعني اتجاهه عكس عقارب الساعة مثل ما فرضنا. وفي الـ BMD نكتبه −720 لأن الشد فوق.'),
 `<div class="nbfig">${(()=>{const g=BE.draw(XS.b2,{x1:470,res:[{x:3,W:120,lab:'20 × 6 = 120 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
{t:'(b) Section 1: 0 ≤ x < 3 (x من C)',h:nbPage(
 NT('أسهل طريقة: نقطع وناخذ الجزء اليمين (من الطرف الحر C)، لأنه ما فيه reactions. x نقيسها من C لليسار.')+
 NT('في الجزء اليمين: V الموجب لفوق، و M الموجب مع عقارب الساعة على وجه القطع.')+
 fbd({side:'R',w:{t:'u',lab:'20'},P:[[1,'40']]})+
 NT('الحمل الموزع على الجزء = 20x، مكانه x/2 من القطع. والـ 40 عند C على بعد x من القطع.')+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('V − 40 − 20x = 0')+
 E(`⇒ ${MK('V = 40 + 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 NT('الـ M الموجب مع عقارب الساعة (−M). والقوى لتحت على يمين القطع تدوّر مع عقارب الساعة (−).')+
 E('−M − 40(x) − (20x)(x/2) = 0')+
 E('−M − 40x − 10x² = 0')+
 E(`⇒ ${MK('M = −40x − 10x²')}`)+
 EH('نعوّض:')+
 sv('x = 0: V = 40 + 20(0) = 40 kN ، M = 0')+
 sv('x = 3: V = 40 + 20(3) = 40 + 60 = 100 kN')+
 sv('x = 3: M = −40(3) − 10(3)² = −120 − 90 = −210 kN.m'),
 nbBeam(XS.b2,{mw:640}))},
{t:'(b) Section 2: 3 < x ≤ 6 (x من C)',h:nbPage(
 NT('نقطع بين A و B. الجزء اليمين فيه الـ 40 عند C (على بعد x) والـ 40 عند B (على بعد x − 3).')+
 fbd({side:'R',w:{t:'u',lab:'20'},P:[[0.5,'40'],[1,'40']]})+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('V − 40 − 40 − 20x = 0')+
 E(`⇒ ${MK('V = 80 + 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 E('−M − 40(x) − 40(x − 3) − (20x)(x/2) = 0')+
 E('−M − 40x − 40x + 120 − 10x² = 0')+
 E('−M − 80x + 120 − 10x² = 0')+
 E(`⇒ ${MK('M = −80x + 120 − 10x²')}`)+
 EH('نعوّض:')+
 sv('x = 3: V = 80 + 20(3) = 140 kN')+
 sv('x = 3: M = −80(3) + 120 − 10(3)² = −240 + 120 − 90 = −210 ✓')+
 sv('x = 6: V = 80 + 20(6) = 80 + 120 = 200 kN')+
 sv('x = 6: M = −80(6) + 120 − 10(6)² = −480 + 120 − 360 = −720 kN.m')+
 NT('عند x = 6 (يعني A): V = 200 = A<sub>y</sub> و M = −720 = M<sub>A</sub> ✓. وعند B الـ V قفز من 100 إلى 140 = قيمة الـ 40 ✓.'),
 '')},
{t:'(c) Maximum moment',h:nbOne(
 NT('نشوف وين V = 0:')+
 E('Section 1: V = 40 + 20x &nbsp;⇒ من 40 إلى 100 (موجب)')+
 E('Section 2: V = 80 + 20x &nbsp;⇒ من 140 إلى 200 (موجب)')+
 NT('الـ V ما يصير صفر أبداً، فالـ M ما له قمة داخل الكمرة. والـ M كله سالب (من 0 إلى −720)، يعني ما فيه maximum positive moment.')+
 E(`أكبر قيمة عددية: ${MK(`M = −720 kN.m &nbsp;at A (x = 6 من C)`)}`))}],
/* ---------- 472 Q1 (3) ---------- */
3:[
{t:'(a) Reactions',h:nbPage(
 E(`W = 20 × 7 = ${MK('140 kN')} &nbsp;عند 7/2 = 3.5 m من A`)+
 EH(`ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
 E(`−(140)(3.5) − (30)(7) + B${sub('y')}(5) = 0`)+
 E(`−490 − 210 + 5B${sub('y')} = 0`)+
 E(`5B${sub('y')} = 700`)+
 E(`B${sub('y')} = 700 / 5 ⇒ ${MK(`B${sub('y')} = 140 kN ↑`)}`)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E(`A${sub('y')} + 140 − 140 − 30 = 0`)+
 E(`⇒ ${MK(`A${sub('y')} = 30 kN ↑`)}`)+
 EH(`ΣF${sub('x')} = 0 ⇒ A${sub('x')} = 0`)+
 EH(`Check: ΣM${sub('B')} = 0`)+
 NT('نقسم الحمل: على AB = 20 × 5 = 100 kN على 2.5 m يسار B، وعلى BC = 20 × 2 = 40 kN على 1 m يمين B.')+
 E('−30(5) + 100(2.5) − 40(1) − 30(2)','g')+
 E('= −150 + 250 − 40 − 60 = 0 ✓','g'),
 `<div class="nbfig">${(()=>{const g=BE.draw(XS.b3,{x1:470,res:[{x:3.5,W:140,lab:'20 × 7 = 140 kN',dy:-4}],wh:30});return nbsvg(g.vb,g.svg,620)})()}</div>`)},
{t:'(b) Section AB: 0 ≤ x < 5 (من A)',h:nbPage(
 fbd({side:'L',end:{v:'30'},w:{t:'u',lab:'20'}})+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('30 − 20x − V = 0')+
 E(`⇒ ${MK('V = 30 − 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 E('−30(x) + (20x)(x/2) + M = 0')+
 E('−30x + 10x² + M = 0')+
 E(`⇒ ${MK('M = 30x − 10x²')}`)+
 EH('نعوّض:')+
 sv('x = 0: V = 30 kN ، M = 0')+
 sv('x = 5: V = 30 − 20(5) = 30 − 100 = −70 kN')+
 sv('x = 5: M = 30(5) − 10(5)² = 150 − 250 = −100 kN.m'),
 nbBeam(XS.b3,{mw:640}))},
{t:'(b) Section BC: 0 ≤ x ≤ 2 (من C)',h:nbPage(
 NT('الـ overhang نقطعه من الطرف الحر C وناخذ الجزء اليمين (ما فيه reactions).')+
 fbd({side:'R',w:{t:'u',lab:'20'},P:[[1,'30']],len:170})+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('V − 30 − 20x = 0')+
 E(`⇒ ${MK('V = 30 + 20x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 E('−M − 30(x) − (20x)(x/2) = 0')+
 E('−M − 30x − 10x² = 0')+
 E(`⇒ ${MK('M = −30x − 10x²')}`)+
 EH('نعوّض:')+
 sv('x = 0: V = 30 kN ، M = 0')+
 sv('x = 2: V = 30 + 20(2) = 30 + 40 = 70 kN')+
 sv('x = 2: M = −30(2) − 10(2)² = −60 − 40 = −100 kN.m ✓')+
 NT('عند B: من اليسار V = −70، ومن اليمين V = +70. الفرق 140 = B<sub>y</sub> ✓. والـ M = −100 من الجهتين ✓.'),
 '')},
{t:'(c) Maximum positive moment',h:nbPage(
 NT('في AB الـ V من 30 إلى −70 فيصير صفر هنا:')+
 E('30 − 20x = 0')+
 E('20x = 30')+
 E(`x = 30 / 20 ⇒ ${MK('x = 1.5 m')}`)+
 E('M = 30(1.5) − 10(1.5)²')+
 E('M = 45 − 10(2.25) = 45 − 22.5')+
 E(`⇒ ${MK(`M${sub('max')} = 22.5 kN.m &nbsp;at x = 1.5 m`)}`)+
 EH('وين الـ M = 0 (inflection point)؟')+
 E('30x − 10x² = 0')+
 E('x(30 − 10x) = 0 ⇒ x = 0 أو x = 3 m')+
 NT('بعد x = 3 m الـ M يصير سالب لين −100 عند B، بسبب الـ overhang.'),
 fbd({side:'L',end:{v:'30'},w:{t:'u',lab:'20'},x:'1.5 m',len:160}))}],
/* ---------- 472 Q2 frame ---------- */
4:[
{t:'(a) الحمل المائل',h:nbPage(
 NT('العضو DE: أفقي 4 m ورأسي 3 m، فطوله:')+
 E('L = √(4² + 3²) = √(16 + 9) = √25 = 5 m')+
 E('tanθ = 3/4 ⇒ θ = tan⁻¹(3/4) = 36.87°')+E('sin(36.87°) = 3/5 = 0.6')+E('cos(36.87°) = 4/5 = 0.8')+
 NT('الحمل 50 kN/m عمودي على DE على طوله كامل:')+
 E(`W = 50 × 5 = ${MK('250 kN')} &nbsp;(في نص DE)`)+
 NT('نحلله لمركبة أفقية ورأسية:')+
 E(`W${sub('x')} = 250 sin(36.87°) = 250 × 0.6 = ${MK('150 kN →')}`)+
 E(`W${sub('y')} = 250 cos(36.87°) = 250 × 0.8 = ${MK('200 kN ↓')}`)+
 NT('نص DE: من D أفقياً 2 m، ورأسياً 1.5 m. يعني من E: 2 m لليسار و 1.5 m لتحت.'),
 f472fig())},
{t:'(a) B<sub>y</sub> و check',h:nbPage(
 EH(`ΣM${sub('E')} = 0 &nbsp;(↺ +)`)+
 NT('حول E عشان E<sub>x</sub> و E<sub>y</sub> يختفون. نحسب كل عزم لحاله:')+
 E('couple عند A (عكس عقارب الساعة): +40')+
 E(`B${sub('y')} لفوق، 14 m يسار E: −14B${sub('y')}`)+
 E('100 × 8 = 800 kN لتحت، 10 m يسار E: +800(10) = +8000')+
 E('200 kN عند C لتحت، 6 m يسار E: +200(6) = +1200')+
 E(`W${sub('y')} = 200 لتحت، 2 m يسار E: +200(2) = +400`)+
 E(`W${sub('x')} = 150 لليمين، 1.5 m تحت E: +150(1.5) = +225`)+
 E('100 kN عند F لتحت، 1 m يمين E: −100(1) = −100')+
 EH('المجموع:')+
 E(`40 − 14B${sub('y')} + 8000 + 1200 + 400 + 225 − 100 = 0`)+
 E(`9765 − 14B${sub('y')} = 0`)+
 E(`B${sub('y')} = 9765 / 14 ⇒ ${MK(`B${sub('y')} = 697.5 kN ↑`)}`)+
 EH(`Check: ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('697.5 − 800 − 200 − 200 − 100 + 602.5','g')+
 E('= 1300 − 1300 = 0 ✓','g')+
 EH(`Check: ΣF${sub('x')} = 0 &nbsp;(→ +)`)+
 E('+150 − 150 = 0 ✓','g'),'')},
{t:'(b) V و M في BC',h:nbPage(
 NT('x من B (مثل السؤال). نقطع في BC وناخذ الجزء اليسار: فيه الـ couple عند A، و B<sub>y</sub> على بعد x من القطع، والحمل 100x مكانه x/2 من القطع.')+
 nbsvg('0 0 460 170',(()=>{let s=HL(40,80,380,80,'nk','stroke-width="3"');s+=MARC(44,78,16,true,'nk')+HT(30,50,'40','nk','end');s+=HA(110,140,110,84,'nr','stroke-width="2.4"')+HT(110,160,'697.5','nr');for(let i=0;i<=8;i++){const x=110+270*i/8;s+=HA(x,46,x,76,'nk','stroke-width="1.2"')}s+=HL(110,46,380,46,'nk','stroke-width="1.2"')+HT(245,38,'100 kN/m','nk');s+=HA(380,84,380,128,'nb','stroke-width="2.2"')+HT(388,140,'V','nb','start')+MARC(382,80,16,true,'nb')+HT(404,58,'M','nb','start');s+=HA(240,110,112,110,'ng','stroke-width="1.4"')+HA(250,110,378,110,'ng','stroke-width="1.4"')+HT(245,116,'x','ng')+HT(75,110,'2 m','ng');return s})(),480)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E('697.5 − 100x − V = 0')+
 E(`⇒ ${MK('V = 697.5 − 100x')}`)+
 EH(`ΣM${sub('cut')} = 0 &nbsp;(↺ +)`)+
 NT('الـ couple عكس عقارب الساعة (+40). B<sub>y</sub> لفوق يسار القطع (مع عقارب الساعة −). الحمل لتحت يسار القطع (عكس عقارب الساعة +).')+
 E('+40 − 697.5(x) + (100x)(x/2) + M = 0')+
 E('40 − 697.5x + 50x² + M = 0')+
 E(`⇒ ${MK('M = −40 + 697.5x − 50x²')}`)+
 EH('Zero shear:')+
 E('697.5 − 100x = 0')+
 E(`x = 697.5 / 100 ⇒ ${MK('x = 6.975 m')}`)+
 EH(`M${sub('max')}:`)+
 E('M = −40 + 697.5(6.975) − 50(6.975)²')+
 E('M = −40 + 4865.06 − 50(48.65)')+
 E('M = −40 + 4865.06 − 2432.53')+
 E(`⇒ ${MK(`M${sub('max')} = 2392.53 kN.m`)}`)+
 EH('عند C (x = 8):')+
 sv('V = 697.5 − 100(8) = 697.5 − 800 = −102.5 kN')+
 sv('M = −40 + 697.5(8) − 50(8)² = −40 + 5580 − 3200 = 2340 kN.m'),'')},
{t:'(c) N.F.D و S.F.D و B.M.D',h:nbPage(NT('بعد ما طلعت الـ reactions بالاتجاهات الصحيحة، نرسم على الإطار مباشرة. القيم المهمة:')+EH('AB')+E('N = 0 · V = 0 · M = −40 kN.m')+EH('BC')+E('V: 697.5 → −102.5 kN')+E('M: −40 → 2392.53 (x = 6.975) → 2340 kN.m')+EH('CD')+E('V = −302.5 kN · M: 2340 → 1735 kN.m')+EH('DE (θ = 36.87°)')+E('N = +181.5 kN (tension)')+E('V: −242 → −492 kN')+E('M: 1735 → −100 kN.m')+EH('EF')+E('V = +100 kN · M: −100 → 0'),fDiags(F472,{vb:'0 0 640 250',mw:560,amp:50}))}],
/* ---------- 471 Q1 sign ---------- */
7:[
{t:'(a) القوة المسموحة',h:nbPage(
 NT('العزم حول العمود (torsion) = القوة × بعد مركز اللوحة عن العمود. اللوحة عرضها 2 + 2 + 2 = 6 m وتبدأ من العمود:')+
 E('الذراع = 6 / 2 = 3 m')+
 E(`M${sub('z')} = F × 3`)+
 E('60 = F × 3')+
 E(`F = 60 / 3 ⇒ ${MK('F = 20 kN = 20000 N')}`),
 signFig({top:12.2,holes:[{c:1,x:2,y:11.45,r:0.4},{c:1,x:4,y:11.45,r:0.4}],S:20}))},
{t:'(b) q<sub>h</sub>',h:nbOne(
 E('h = ارتفاع أعلى اللوحة = 10.7 + 1.5 = 12.2 m')+
 E(`من الجدول: z = 12.2 m ⇒ K${sub('h')} = 1.04`)+
 E('V = 180 km/h = 180 × 1000 / 3600 = 50 m/s')+
 E(`q${sub('h')} = 0.613 K${sub('h')} K${sub('zt')} K${sub('d')} V²`)+
 E(`q${sub('h')} = 0.613 × 1.04 × 1.0 × 1.0 × (50)²`)+
 E(`q${sub('h')} = 0.613 × 1.04 × 2500`)+
 E(`q${sub('h')} = 0.63752 × 2500 ⇒ ${MK(`q${sub('h')} = 1593.8 N/m²`)}`))},
{t:'(c) C<sub>f</sub> و A<sub>f</sub>',h:nbOne(
 E('s/h = 1.5 / 12.2 = 0.123')+
 E(`0.123 ≤ 0.16 ⇒ من الجدول ${MK(`C${sub('f')} = 1.85`)}`)+
 EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
 E(`20000 = 1593.8 × 0.85 × 1.85 × A${sub('f')}`)+
 E(`20000 = 2506.2 × A${sub('f')}`)+
 E(`A${sub('f')} = 20000 / 2506.2 ⇒ ${MK(`A${sub('f')} = 7.98 m²`)}`))},
{t:'(d) القطر D',h:nbOne(
 E('المساحة الكاملة = 6 × 1.5 = 9 m²')+
 E(`مساحة الفتحتين = 9 − 7.98 = ${MK('1.02 m²')}`)+
 E('مساحة الفتحتين = 2 × πD²/4 = πD²/2')+
 E('πD²/2 = 1.02')+
 E('D² = 2 × 1.02 / π = 2.04 / 3.1416 = 0.649')+
 E(`D = √0.649 ⇒ ${MK('D = 0.806 ≈ 0.81 m')}`)+
 NT('كل ما كبرت الفتحات قلّت المساحة والقوة. فأقل قطر يخلي العزم 60 kN.m بالضبط هو 0.806 m (الحل النموذجي قرّبه 0.80).'))}],
/* ---------- 471 Q2 floor ---------- */
8:[
{t:'(a) توزيع الحمل',h:nbPage(
 E('Top panels: L₂/L₁ = 7/5 = 1.4')+E('1.4 ≤ 2 ⇒ two-way')+
 E('Bottom panel: L₂/L₁ = 10/3 = 3.33')+E('3.33 &gt; 2 ⇒ one-way')+
 NT('في الـ two-way نرسم خطوط 45° من كل زاوية. الكمرة القصيرة (5 m) تاخذ مثلث، والطويلة (7 m) تاخذ شبه منحرف.')+
 NT('ارتفاع المثلث وشبه المنحرف = w × (L<sub>short</sub>/2) = 5 × 5/2 = 12.5 kN/m.')+
 NT('البانل التحتي one-way: الحمل يروح للكمرتين الطويلتين DEF و GH بس.'),plan471())},
{t:'(b) Beam BE',h:nbPage(
 EH('الأحمال:')+
 E('Own weight = b × h × γ = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 NT('BE بين بانلين (يمين ويسار)، وهي الضلع الطويل (7 m) لكل واحد، فتاخذ شبه منحرف من كل جهة:')+
 E('من كل بانل: 5 × 2.5 = 12.5 kN/m')+
 E('من البانلين: 2 × 12.5 = '+MK('25 kN/m'))+
 NT('شبه المنحرف: يطلع على 2.5 m، ثابت في النص 7 − 2(2.5) = 2 m، وينزل على 2.5 m.')+
 EH('Reactions (متماثل):')+
 E('وزن الكمرة = 4.32 × 7 = 30.24 kN')+
 E('شبه المنحرف = 25 × (7 + 2)/2 = 25 × 4.5 = 112.5 kN')+
 E('المجموع = 30.24 + 112.5 = 142.74 kN')+
 E('R = 142.74 / 2 = '+MK('71.37 kN')+' (عند B و عند E)'),
 ldBeam({L:7,u:[{lab:'4.32'}],shapes:[{t:'trap',a:0,b:7,c:2.5,d:4.5,lab:'25 kN/m'}],sup:[[0,'pin'],[7,'roll']],R:[[0,'71.37'],[7,'71.37']],names:[[0,'B'],[7,'E']],dims:[0,2.5,4.5,7]}))},
{t:'(b) Beam ABC',h:nbPage(
 EH('الأحمال:')+
 E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 E('Wall = t × h × γ = 0.3 × 2 × 18 = '+MK('10.8 kN/m'))+
 NT('ABC الضلع القصير (5 m) للبانلين، فتاخذ مثلث من كل بانل:')+
 E('Triangle = 5 × 2.5 = '+MK('12.5 kN/m')+' على AB وعلى BC')+
 NT('B مو عمود، فالـ reaction حق BE (71.37) ينزل على ABC كقوة مركّزة عند B.')+
 EH('Reactions (متماثل):')+
 E('uniform = (4.32 + 10.8) × 10 = 15.12 × 10 = 151.2 kN')+
 E('triangles = 2 × ½ × 12.5 × 5 = 62.5 kN')+
 E('point load = 71.37 kN')+
 E('المجموع = 151.2 + 62.5 + 71.37 = 285.07 kN')+
 E('R = 285.07 / 2 = '+MK('142.54 kN')+' (عند A و عند C)'),
 ldBeam({L:10,u:[{lab:'10.8'},{lab:'4.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'},{t:'tri',a:5,b:10,c:7.5,lab:'12.5'}],P:[[5,'71.37 kN']],sup:[[0,'pin'],[10,'roll']],R:[[0,'142.54'],[10,'142.54']],names:[[0,'A'],[5,'B'],[10,'C']],dims:[0,5,10]}))},
{t:'(c) Live load على Column E',h:nbOne(
 EH('Tributary area:')+
 NT('من E نص المسافة لكل جهة: يمين ويسار 5/2 = 2.5، فوق 7/2 = 3.5، وتحت 3/2 = 1.5.')+
 E('A<sub>T</sub> = (2.5 + 2.5) × (3.5 + 1.5) = 5 × 5 = '+MK('25 m²'))+
 EH('هل فيه reduction؟')+
 E('K<sub>LL</sub> A<sub>T</sub> = 4 × 25 = 100 m²')+
 E('100 &gt; 37.2 ⇒ نعمل reduction للـ office')+
 EH('L للـ office:')+
 E('L = L₀ [0.25 + 4.57 / √(K<sub>LL</sub> A<sub>T</sub>)]')+
 E('L = 2.5 [0.25 + 4.57 / √100]')+
 E('L = 2.5 [0.25 + 4.57 / 10]')+
 E('L = 2.5 [0.25 + 0.457] = 2.5 × 0.707')+
 E('L = '+MK('1.767 kN/m²'))+
 NT('الحد الأدنى (أكثر من طابق):')+E('L<sub>min</sub> = 0.4 × 2.5 = 1.0','g')+E('1.767 &gt; 1.0 ✓','g')+
 EH('المجموع على العمود:')+
 E('3 office floors = 3 × 1.767 × 25 = 132.5 kN')+
 E('Roof (ما ينخفض) = 1.0 × 25 = 25 kN')+
 E('Total = 132.5 + 25 = '+MK('157.5 kN')))}],
/* ---------- 471 Q4 frame ---------- */
10:[
{t:'(a) Reactions',h:nbPage(
 NT('A roller يعطي قوة رأسية بس (A<sub>y</sub>). C pin يعطي C<sub>x</sub> و C<sub>y</sub>.')+
 E(`الحمل الموزع: 30 × 6 = ${MK('180 kN')} عند 3 m من B (يعني x = 6)`)+
 EH(`ΣF${sub('x')} = 0 &nbsp;(→ +)`)+
 E(`45 + C${sub('x')} = 0 ⇒ C${sub('x')} = −45`)+
 E(`⇒ ${MK(`C${sub('x')} = 45 kN ←`)}`)+
 EH(`ΣM${sub('C')} = 0 &nbsp;(↺ +)`)+
 NT('C على ارتفاع 4 m. الـ 45 kN على ارتفاع 2 m، يعني 2 m تحت C: القوة لليمين تحت النقطة تدوّر عكس عقارب الساعة (+).')+
 E(`A${sub('y')} لفوق، 9 m يسار C: −9A${sub('y')}`)+
 E('45 لليمين، 2 m تحت C: +45(2) = +90')+
 E('180 لتحت، 3 m يسار C: +180(3) = +540')+
 E('60 لتحت، 3 m يسار C: +60(3) = +180')+
 E(`−9A${sub('y')} + 90 + 540 + 180 = 0`)+
 E(`9A${sub('y')} = 810`)+
 E(`A${sub('y')} = 810 / 9 ⇒ ${MK(`A${sub('y')} = 90 kN ↑`)}`)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E(`90 + C${sub('y')} − 180 − 60 = 0`)+
 E(`C${sub('y')} = 240 − 90 ⇒ ${MK(`C${sub('y')} = 150 kN ↑`)}`)+
 EH(`Check: ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
 E('−45(2) − 180(6) − 60(6) + 150(9) + 45(4)','g')+
 E('= −90 − 1080 − 360 + 1350 + 180 = 0 ✓','g'),
 nbsvg('0 0 580 390',abcMain(45,30,60,90,150).replace(/data-from="\d+"/g,''),600))+axisPage(45,30,60,90,150)},
{t:'(b) العضو المائل AB',h:nbPage(
 E('AB: أفقي 3 m، رأسي 4 m ⇒ L = √(3² + 4²) = 5 m')+
 E('cosθ = 3/5 = 0.6 &nbsp;&nbsp; sinθ = 4/5 = 0.8 &nbsp;(θ = 53.13°)')+
 EH('عند A:')+
 NT('A<sub>y</sub> = 90 لفوق، نحللها: مركبة على طول العضو (تضغطه) ومركبة عمودية عليه:')+
 E('على طول العضو = 90 × sinθ = 90 × 0.8 = 72')+
 E(`⇒ N${sub('A')} = ${MK('−72 kN (compression)')}`)+
 E('عمودي على العضو = 90 × cosθ = 90 × 0.6 = 54')+
 E(`⇒ V${sub('A')} = ${MK('54 kN')}`)+
 EH('الـ 45 kN عند D (نص AB):')+
 E('على طول العضو = 45 × cosθ = 45 × 0.6 = 27')+
 E('عمودي على العضو = 45 × sinθ = 45 × 0.8 = 36')+
 EH('بعد D:')+
 E(`N = −(72 + 27) = ${MK('−99 kN')}`)+
 E(`V = 54 − 36 = ${MK('18 kN')}`)+
 EH('العزوم:')+
 E(`M${sub('D')} = 90 × 1.5 = ${MK('135 kN.m')}`)+
 E(`M${sub('B')} = 90 × 3 − 45 × 2 = 270 − 90 = ${MK('180 kN.m')}`)+
 NT('تأكيد بالمساحات: من A إلى D: 54 × 2.5 = 135 ✓. ومن D إلى B: 135 + 18 × 2.5 = 135 + 45 = 180 ✓.'),'')},
{t:'(b) العضو BC والرسومات',h:nbPage(
 EH('N في BC:')+
 NT('القوة الأفقية الصافية يسار القطع = 45 لليمين، تضغط العضو:')+
 E('N = −45 kN (compression) على طول BC')+
 EH('V في BC:')+
 E(`V${sub('B')} = A${sub('y')} = 90 kN`)+
 E(`V${sub('E⁻')} = 90 − 30(3) = 90 − 90 = 0`)+
 E(`V${sub('E⁺')} = 0 − 60 = −60 kN`)+
 E(`V${sub('C')} = −60 − 30(3) = −60 − 90 = −150 kN`)+
 NT('عند C: C<sub>y</sub> = 150 لفوق يرجّعه صفر ✓.')+
 EH('M في BC:')+
 E(`M${sub('B')} = 180 kN.m (من AB، الـ joint rigid)`)+
 E(`M${sub('E')} = 180 + ½(90)(3) = 180 + 135 = ${MK('315 kN.m')}`)+
 E(`M${sub('C')} = 315 + ½(−60 − 150)(3) = 315 − 315 = 0 ✓`)+
 NT('أكبر moment عند E لأن الـ V صار صفر هناك بالضبط.'),
 fDiags(fABCframe(45,30,60,90,150)))}],
/* ---------- 462 P1 sign ---------- */
11:[
{t:'(a) القوة F',h:nbPage(
 E('أسفل اللوحة = 8 m ، ارتفاع اللوحة s = 1.5 m')+
 E('z (مركز اللوحة) = 8 + 1.5/2 = 8 + 0.75 = 8.75 m')+
 E('h (أعلى اللوحة) = 8 + 1.5 = 9.5 m')+
 NT('العزم عند القاعدة = القوة × ارتفاع مركز اللوحة:')+
 E(`M${sub('y')} = F × z`)+
 E('133 = F × 8.75')+
 E(`F = 133 / 8.75 ⇒ ${MK('F = 15.2 kN = 15200 N')}`),
 signFig({top:9.5,holes:[{x:1.5,y:8.5,w:3,h:0.5}],zc:8.75,S:24}))},
{t:'(b) C<sub>f</sub> و A<sub>f</sub>',h:nbOne(
 E('s/h = 1.5 / 9.5 = 0.158')+
 E(`0.158 ≤ 0.16 ⇒ ${MK(`C${sub('f')} = 1.85`)}`)+
 E('المساحة الكاملة = 6 × 1.5 = 9 m²')+
 E('الفراغ = 3 × 0.5 = 1.5 m²')+
 E(`A${sub('f')} = 9 − 1.5 = ${MK('7.5 m²')}`))},
{t:'(c) q<sub>h</sub>',h:nbOne(
 EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
 E(`15200 = q${sub('h')} × 0.85 × 1.85 × 7.5`)+
 E(`15200 = q${sub('h')} × 11.794`)+
 E(`q${sub('h')} = 15200 / 11.794 ⇒ ${MK(`q${sub('h')} = 1288.8 N/m²`)}`))},
{t:'(d) K<sub>h</sub> و V',h:nbOne(
 NT('h = 9.5 m بين 9.1 (0.98) و 12.2 (1.04) في الجدول، فنعمل interpolation:')+
 E(`K${sub('h')} = 0.98 + (1.04 − 0.98) × (9.5 − 9.1)/(12.2 − 9.1)`)+
 E(`K${sub('h')} = 0.98 + 0.06 × 0.4/3.1`)+
 E(`K${sub('h')} = 0.98 + 0.06 × 0.129 = 0.98 + 0.0077`)+
 E(`⇒ ${MK(`K${sub('h')} = 0.988`)}`)+
 EH(`q${sub('h')} = 0.613 K${sub('h')} K${sub('zt')} K${sub('d')} V²`)+
 E('1288.8 = 0.613 × 0.988 × 1.0 × 1.0 × V²')+
 E('1288.8 = 0.6056 × V²')+
 E('V² = 1288.8 / 0.6056 = 2128.1')+
 E(`V = √2128.1 ⇒ ${MK('V = 46.1 m/s')}`)+
 E(`V = 46.1 × 3600 / 1000 = 46.1 × 3.6 ⇒ ${MK('V = 166 km/h')}`))}],
/* ---------- 462 P3 floor ---------- */
13:[
{t:'(a) توزيع الحمل',h:nbPage(
 E('HIGE: 7/4 = 1.75 ≤ 2 ⇒ two-way')+E('EFBA: 5/5 = 1 ≤ 2 ⇒ two-way')+E('FGCB: 5/2 = 2.5 &gt; 2 ⇒ one-way')+E('IJDC: 9/2 = 4.5 &gt; 2 ⇒ one-way')+
 NT('في الـ one-way الحمل يمشي على الاتجاه القصير (2 m) للكمرتين اللي على جنبه.'),plan462())},
{t:'(b) Beam BF',h:nbPage(
 E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 NT('من البانل FGCB (one-way، عرضه 2 m): BF تاخذ نص العرض = 1 m:')+
 E('One-way = 5 × 2/2 = 5 × 1 = '+MK('5 kN/m'))+
 E('Uniform = 4.32 + 5 = '+MK('9.32 kN/m'))+
 NT('من البانل EFBA (مربع two-way 5 × 5): مثلث:')+
 E('Triangle = 5 × 5/2 = '+MK('12.5 kN/m'))+
 EH('Reactions (متماثل):')+
 E('uniform = 9.32 × 5 = 46.6 kN')+
 E('triangle = ½ × 12.5 × 5 = 31.25 kN')+
 E('المجموع = 46.6 + 31.25 = 77.85 kN')+
 E('R = 77.85 / 2 = '+MK('38.93 kN')+' (عند B و عند F)'),
 ldBeam({L:5,u:[{lab:'9.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'}],sup:[[0,'pin'],[5,'roll']],R:[[0,'38.93'],[5,'38.93']],names:[[0,'B'],[5,'F']],dims:[0,2.5,5]}))},
{t:'(b) Beam EFG',h:nbPage(
 EH('الأحمال:')+
 E('Own weight = 4.32 kN/m')+
 E('Wall = 0.3 × 4 × 20 = 24 kN/m')+
 E('Uniform = 4.32 + 24 = '+MK('28.32 kN/m'))+
 NT('من EFBA (تحت EF، 5 m): مثلث. ومن HIGE (فوق EFG، 7 × 4): شبه منحرف لأن EFG الضلع الطويل:')+
 E('Triangle على EF = 5 × 5/2 = '+MK('12.5 kN/m'))+
 E('Trapezoid = 5 × 4/2 = '+MK('10 kN/m')+' (يطلع 2 m، ثابت 3 m، ينزل 2 m)')+
 E('Point load عند F = reaction حق BF = '+MK('38.93 kN'))+
 EH('القوى ومكانها من E:')+
 E('uniform = 28.32 × 7 = 198.24 kN عند 3.5 m')+
 E('triangle = ½ × 12.5 × 5 = 31.25 kN عند 2.5 m')+
 E('trapezoid = 10 × (7 + 3)/2 = 50 kN عند 3.5 m')+
 E('point = 38.93 kN عند 5 m')+
 EH(`ΣM${sub('E')} = 0:`)+
 E('7G = 198.24(3.5) + 31.25(2.5) + 50(3.5) + 38.93(5)')+
 E('7G = 693.84 + 78.13 + 175 + 194.65 = 1141.62')+
 E('G = 1141.62 / 7 = '+MK('163.1 kN'))+
 EH(`ΣF${sub('y')} = 0:`)+
 E('E = 198.24 + 31.25 + 50 + 38.93 − 163.1')+
 E('E = 318.42 − 163.1 = '+MK('155.3 kN')),
 ldBeam({L:7,u:[{lab:'28.32'}],shapes:[{t:'trap',a:0,b:7,c:2,d:5,lab:'10 kN/m',h:34},{t:'tri',a:0,b:5,c:2.5,lab:'12.5 kN/m',h:40,lift:56}],P:[[5,'38.93 kN']],ptop:150,sup:[[0,'pin'],[7,'roll']],R:[[0,'155.3'],[7,'163.1']],names:[[0,'E'],[5,'F'],[7,'G']],dims:[0,2,2.5,5,7]}))},
{t:'(c) Live load على Column G',h:nbOne(
 EH('Tributary area:')+
 NT('G عند x = 7 و y = 5. يسار G البانل 7 m (نصه 3.5)، ويمينه البانل 2 m (نصه 1). فوقه 4 m (نصه 2)، وتحته 5 m (نصه 2.5).')+
 E('A<sub>T</sub> = (3.5 + 1) × (2 + 2.5) = 4.5 × 4.5 = '+MK('20.25 m²'))+
 E('K<sub>LL</sub> A<sub>T</sub> = 4 × 20.25 = 81 m² &gt; 37.2 ✓')+
 NT('الـ public assembly والـ roof ما ينخفضون. بس الـ office:')+
 E('L = 2.0 [0.25 + 4.57 / √81]')+
 E('L = 2.0 [0.25 + 4.57 / 9]')+
 E('L = 2.0 [0.25 + 0.508] = 2.0 × 0.758')+
 E('L = '+MK('1.52 kN/m²'))+
 NT('الحد الأدنى:')+E('L<sub>min</sub> = 0.4 × 2.0 = 0.8','g')+E('1.52 &gt; 0.8 ✓','g')+
 EH('المجموع:')+
 E('Public assembly = 3.0 × 20.25 = 60.75 kN')+
 E('Office (2 floors) = 2 × 1.52 × 20.25 = 61.56 kN')+
 E('Roof = 1.0 × 20.25 = 20.25 kN')+
 E('Total = 60.75 + 61.56 + 20.25 = '+MK('142.6 kN')))}],
/* ---------- 462 P4 frame ---------- */
14:[
{t:'(a) Reactions',h:nbPage(
 E(`الحمل الموزع: 20 × 6 = ${MK('120 kN')} عند x = 6`)+
 EH(`ΣF${sub('x')} = 0 &nbsp;(→ +)`)+
 E(`30 + C${sub('x')} = 0 ⇒ ${MK(`C${sub('x')} = 30 kN ←`)}`)+
 EH(`ΣM${sub('C')} = 0 &nbsp;(↺ +)`)+
 E(`A${sub('y')} لفوق، 9 m يسار C: −9A${sub('y')}`)+
 E('30 لليمين، 2 m تحت C: +30(2) = +60')+
 E('120 لتحت، 3 m يسار C: +120(3) = +360')+
 E('40 لتحت، 3 m يسار C: +40(3) = +120')+
 E(`−9A${sub('y')} + 60 + 360 + 120 = 0`)+
 E(`9A${sub('y')} = 540`)+
 E(`A${sub('y')} = 540 / 9 ⇒ ${MK(`A${sub('y')} = 60 kN ↑`)}`)+
 EH(`ΣF${sub('y')} = 0`)+
 E(`60 + C${sub('y')} − 120 − 40 = 0`)+
 E(`C${sub('y')} = 160 − 60 ⇒ ${MK(`C${sub('y')} = 100 kN ↑`)}`)+
 EH(`Check: ΣM${sub('A')} = 0 &nbsp;(↺ +)`)+
 E('−30(2) − 120(6) − 40(6) + 100(9) + 30(4)','g')+
 E('= −60 − 720 − 240 + 900 + 120 = 0 ✓','g'),
 nbsvg('0 0 580 390',abcMain(30,20,40,60,100).replace(/data-from="\d+"/g,''),600))+axisPage(30,20,40,60,100)},
{t:'(b) العضو المائل AB',h:nbPage(
 E('cosθ = 0.6 &nbsp;&nbsp; sinθ = 0.8')+
 EH('عند A:')+
 E('على طول العضو = 60 × 0.8 = 48 ⇒ N<sub>A</sub> = '+MK('−48 kN'))+
 E('عمودي = 60 × 0.6 = 36 ⇒ V<sub>A</sub> = '+MK('36 kN'))+
 EH('الـ 30 kN عند D:')+
 E('على طول العضو = 30 × 0.6 = 18')+
 E('عمودي = 30 × 0.8 = 24')+
 EH('بعد D:')+
 E('N = −(48 + 18) = '+MK('−66 kN'))+
 E('V = 36 − 24 = '+MK('12 kN'))+
 EH('العزوم:')+
 E('M<sub>D</sub> = 60 × 1.5 = '+MK('90 kN.m'))+
 E('M<sub>B</sub> = 60 × 3 − 30 × 2 = 180 − 60 = '+MK('120 kN.m'))+
 NT('تأكيد: 36 × 2.5 = 90 ✓ ، و 90 + 12 × 2.5 = 90 + 30 = 120 ✓.'),'')},
{t:'(b) BC والرسومات',h:nbPage(
 E('N = −30 kN (compression) على BC')+
 E('V<sub>B</sub> = 60 kN')+
 E('V<sub>E⁻</sub> = 60 − 20(3) = 60 − 60 = 0')+
 E('V<sub>E⁺</sub> = 0 − 40 = −40 kN')+
 E('V<sub>C</sub> = −40 − 20(3) = −40 − 60 = −100 kN')+
 E('M<sub>B</sub> = 120 kN.m')+
 E('M<sub>E</sub> = 120 + ½(60)(3) = 120 + 90 = '+MK('210 kN.m'))+
 E('M<sub>C</sub> = 210 + ½(−40 − 100)(3) = 210 − 210 = 0 ✓'),
 fDiags(fABCframe(30,20,40,60,100)))}]
};
/* 472 Q4 wind — full arithmetic */
XFULL[6]=[
{t:'(a) V و q<sub>z</sub>',h:nbOne(
 E('V = 190 km/h = 190 × 1000 / 3600 = 52.78 ≈ '+MK('52.8 m/s'))+
 E('V² = (52.8)² = 2787.84')+
 E(`q${sub('z')} = 0.613 K${sub('z')} K${sub('zt')} K${sub('d')} V²`)+
 E(`q${sub('z')} = 0.613 × K${sub('z')} × 1.0 × 0.85 × 2787.84`)+
 E(`q${sub('z')} = ${MK(`1452.6 K${sub('z')}`)} N/m²`)+
 NT('ارتفاع المبنى h = 6.1 m، فنحتاج K<sub>z</sub> عند 4.6 و عند 6.1:')+
 E(`0 – 4.6 m: K${sub('z')} = 0.85 ⇒ q = 1452.6 × 0.85 = ${MK('1234.7 N/m²')}`)+
 E(`6.1 m: K${sub('z')} = 0.90 ⇒ q${sub('h')} = 1452.6 × 0.90 = ${MK('1307.3 N/m²')}`)+
 EH('الجزء الداخلي:')+
 E(`q${sub('h')} (±0.18) = 1307.3 × 0.18 = ${MK('±235.3 N/m²')}`)+
 EH('G C<sub>p</sub>:')+E('G = 0.85'))},
{t:'(b) Windward (C<sub>p</sub> = 0.8)',h:nbOne(
 NT('الـ windward نستخدم فيه q<sub>z</sub> (يتغيّر مع الارتفاع).')+
 EH('0 – 4.6 m:')+
 E('q G C<sub>p</sub> = 1234.7 × 0.85 × 0.8 = 839.6')+
 E('P = 839.6 − (+235.3) = '+MK('604.3 N/m²'))+
 E('P = 839.6 − (−235.3) = '+MK('1074.9 ≈ 1075 N/m²'))+
 EH('4.6 – 6.1 m:')+
 E('q G C<sub>p</sub> = 1307.3 × 0.85 × 0.8 = 889.0')+
 E('P = 889.0 − 235.3 = '+MK('653.7 N/m²'))+
 E('P = 889.0 + 235.3 = '+MK('1124.3 N/m²')))},
{t:'(c) Leeward و Side walls',h:nbOne(
 EH('Leeward:')+
 E('L/B = 15/30 = 0.5 ⇒ من الجدول (0–1) C<sub>p</sub> = −0.5')+
 E('q<sub>h</sub> G C<sub>p</sub> = 1307.3 × 0.85 × (−0.5) = −555.6')+
 E('P = −555.6 − 235.3 = '+MK('−790.9 ≈ −791 N/m²'))+
 E('P = −555.6 + 235.3 = '+MK('−320.3 N/m²'))+
 EH('Side walls (C<sub>p</sub> = −0.7):')+
 E('q<sub>h</sub> G C<sub>p</sub> = 1307.3 × 0.85 × (−0.7) = −777.8')+
 E('P = −777.8 − 235.3 = '+MK('−1013.1 N/m²'))+
 E('P = −777.8 + 235.3 = '+MK('−542.5 N/m²'))+
 NT('السالب = suction (سحب للخارج). الـ leeward والـ side walls ثابتين على الارتفاع كامل لأنها بـ q<sub>h</sub>.'))},
{t:'(d) الرسم',h:nbPage(
 windFig({w1:'604.3',w2:'653.7',lw:'−791',sw:'−1013',t:'Case 1: +0.18 (internal pressure)'}),
 windFig({w1:'1075',w2:'1124.3',lw:'−320.3',sw:'−542.5',t:'Case 2: −0.18 (internal suction)'}))}];
/* stability pages — full counting */
const stFull=(t,lines,conv,a,b)=>({t,h:nbPage(lines.map(l=>l[0]==='!'?NT(l.slice(1)):l[0]==='*'?E(MK(l.slice(1)),'r'):l[0]==='^'?EH(l.slice(1)):E(l)).join('')+conv.map(l=>l[0]==='!'?NT(l.slice(1)):l[0]==='*'?E(MK(l.slice(1)),'g'):l[0]==='^'?EH(l.slice(1)):E(l,'g')).join(''),stPair(a,b))});
const ST1=()=>stFull('(1) Frame بـ 2 hinges',['^العد:','Supports: pin (2) + pin (2) = 4','Internal hinges: 2 × 2 = 4','r = 4 + 4 = 8','Members: العمود اليسار، الكمرة، العمود اليمين ⇒ n = 3','3n = 3 × 3 = 9','*r = 8 < 3n = 9 ⇒ Unstable','!المجاهيل أقل من المعادلات، فالإطار يتحرك يمين ويسار (mechanism).'],['^التحويل:','نخلي الزاوية اليمين rigid (نشيل hinge واحد)','n = 2 ، r = 4 + 2 = 6','3n = 6 ⇒ r = 3n','*Stable & determinate'],STK.f2h(),STK.f2hC());
const ST2=()=>stFull('(2) Beam + frame على 3 rollers',['^العد:','roller على الجدار (أفقي) = 1','roller تحت (رأسي) = 1','roller فوق (رأسي) = 1','r = 3 ، n = 1 ⇒ 3n = 3 ⇒ r = 3n','^لكن:','!خط الـ reaction الأفقي يمر بخط الكمرة، والـ reactions الرأسيتين على نفس الخط الرأسي. الثلاث تتلاقى في نقطة وحدة O، فما فيه شي يمنع الدوران حولها.','*All reactions concurrent ⇒ Unstable'],['^التحويل:','اليسار pin (2) واليمين roller (1)، ونشيل الـ roller الفوقي','r = 3 = 3n ومو concurrent','*Stable & determinate'],STK.bf(),STK.bfC());
const ST3=()=>stFull('(3) Frame مقفل + hinge',['^العد:','Supports: pin (2) + pin (2) = 4','Hinge فوق = 2','الكمرة الوسطى rigid من الجهتين: نقطعها عند طرف = 3 قوى (N, V, M)','r = 4 + 2 + 3 = 9','n = 2 (يمين ويسار) ⇒ 3n = 6','r − 3n = 9 − 6 = 3','*Stable, indeterminate 3rd degree'],['^التحويل:','نشيل الكمرة الوسطى ⇒ three-hinged frame','r = 4 + 2 = 6 = 3n','*Stable & determinate'],STK.tf(),STK.tfC());
XFULL[5]=[ST1(),ST2(),ST3(),stFull('(4) Truss',['^العد:','Joints: j = 7 ⇒ 2j = 14','Members: chords 4 + verticals 3 + diagonals 4 + V 2 ⇒ b = 13','Reactions: roller (1) + pin (2) ⇒ r = 3','b + r = 13 + 3 = 16 > 14','^لكن:','!الـ roller الأفقي فوق يسار خطه يمر بالـ pin اليمين O، فالثلاث reactions تمر بـ O.','*All reactions concurrent ⇒ Unstable'],['^التحويل:','الـ roller نخليه رأسي (ما يمر بـ O)','نشيل diagonal من كل X ⇒ b = 13 − 2 = 11','b + r = 11 + 3 = 14 = 2j','*Stable & determinate'],STK.tr472(false),STK.tr472(true))];
XFULL[9]=[ST1(),ST2(),ST3(),stFull('(4) Truss',['^العد:','Joints: j = 7 ⇒ 2j = 14','Members: b = 12','Reactions: pin (2) + pin (2) ⇒ r = 4','b + r = 12 + 4 = 16 > 14','!الـ reactions مو concurrent ولا متوازية، والـ truss مكوّن من مثلثات.','*Stable, indeterminate 2nd degree (16 − 14 = 2)'],['^التحويل:','الـ pin اليمين ⇒ roller (r = 3)','نشيل العضو الأفقي الداخلي (b = 11)','b + r = 11 + 3 = 14 = 2j','*Stable & determinate'],STK.tr471(false),STK.tr471(true))];
XFULL[12]=[
 stFull('(1) Beam',['^العد:','Fixed يسار = 3','Hinge = 2','Roller = 1','Fixed يمين = 3','r = 3 + 2 + 1 + 3 = 9','n = 2 ⇒ 3n = 6','r − 3n = 9 − 6 = 3','*Stable, indeterminate 3rd degree'],['^التحويل:','نشيل الـ fixed اليمين (−3)','r = 3 + 2 + 1 = 6 = 3n','*Stable & determinate','!الجزء اليسار cantilever، واليمين معلّق على الـ hinge والـ roller.'],STK.bm(false),STK.bm(true)),
 stFull('(2) Box frame',['^العد:','Supports: pin (2) + pin (2) = 4','Hinges: 2 × 2 = 4','r = 4 + 4 = 8','n = 2 (يمين ويسار الـ hinges) ⇒ 3n = 6','r − 3n = 8 − 6 = 2','*Stable, indeterminate 2nd degree'],['^التحويل:','الـ pin اليمين ⇒ roller (r = 2 + 1 = 3 من الـ supports)','نضيف hinge في جنب الصندوق ⇒ n = 3 ، hinges = 3 × 2 = 6','r = 3 + 6 = 9 = 3n','*Stable & determinate','!الصندوق فيه 3 hinges مو على خط واحد، فيبقى ثابت.'],STK.box(false),STK.box(true)),
 stFull('(3) Frame',['^العد:','Fixed = 3','Roller = 1','Hinges: 2 × 2 = 4','r = 3 + 1 + 4 = 8','n = 3 ⇒ 3n = 9','*r = 8 < 9 ⇒ Unstable','!العمود اليمين على roller وفوقه hinge، فما يمنع الحركة الأفقية.'],['^التحويل:','الـ roller ⇒ pin (+1)','r = 9 = 3n','*Stable & determinate'],STK.fr3(false),STK.fr3(true)),
 stFull('(4) Truss',['^العد:','j = 7 ⇒ 2j = 14','b = 13 ، r = 3','b + r = 16 > 14','^لكن:','!الـ roller الأفقي على نفس خط الـ pin، فالـ reactions concurrent.','*Unstable'],['^التحويل:','الـ roller رأسي، ونشيل diagonal من كل X','b = 11 ⇒ b + r = 11 + 3 = 14 = 2j','*Stable & determinate'],STK.tr462(false),STK.tr462(true))];
/* member free-body diagrams for the A-B-C frame (471 Q4 & 462 P4) */
function memAB(H,Ay){const MB=Ay*3-H*2,S=46,ox=110,oy=300,X=x=>ox+x*S,Y=y=>oy-y*S;const A=[X(0),Y(0)],B=[X(3),Y(4)],D=[X(1.5),Y(2)];let s='';
 s+=HL(A[0],A[1],B[0],B[1],'nk','stroke-width="4"');
 s+=HA(A[0],A[1]+70,A[0],A[1]+6,'nr','stroke-width="2.4"')+HT(A[0]+8,A[1]+66,Ay,'nr','start')+HT(A[0]-12,A[1]+4,'A','nk','end');
 s+=HA(D[0]-80,D[1],D[0]-4,D[1],'nk','stroke-width="2.4"')+HT(D[0]-82,D[1]-8,H,'nk','start')+HT(D[0]+10,D[1]+8,'D','ng','start');
 s+=HA(B[0]+80,B[1],B[0]+5,B[1],'nr','stroke-width="2.4"')+HT(B[0]+84,B[1]+6,H,'nr','start');
 s+=HA(B[0],B[1]-76,B[0],B[1]-5,'nr','stroke-width="2.4"')+HT(B[0]+8,B[1]-62,Ay,'nr','start');
 s+=MARC(B[0]-4,B[1]-2,20,true,'nb')+HT(B[0]-30,B[1]-26,MB,'nb','end')+HT(B[0]-12,B[1]+22,'B','nk','end');
 s+=HL(X(-0.6),Y(0),X(-0.6),Y(4),'ng','stroke-width="1"')+HT(X(-0.6)-6,Y(2)+5,'4 m','ng','end')+HL(X(0),Y(0)+40,X(3),Y(0)+40,'ng','stroke-width="1"')+HT(X(1.5),Y(0)+58,'3 m','ng');
 return nbsvg('0 0 420 380',s,460)}
function memABloc(H,Ay){const S=46,ox=150,oy=300,X=x=>ox+x*S,Y=y=>oy-y*S;const A=[X(0),Y(0)],B=[X(3),Y(4)],D=[X(1.5),Y(2)];const u=[0.6,-0.8],n=[-0.8,-0.6],L=62;let s='';
 const ar=(p,d,len,c,lab,dx,dy)=>HA(p[0]-d[0]*len,p[1]-d[1]*len,p[0]-d[0]*4,p[1]-d[1]*4,c,'stroke-width="2.2"')+HT(p[0]-d[0]*len+dx,p[1]-d[1]*len+dy,lab,c,'middle');
 s+=HL(A[0],A[1],B[0],B[1],'nk','stroke-width="4"')+HL(A[0],A[1],A[0]+u[0]*120,A[1]+u[1]*120,'ng','stroke-dasharray="4 4"');
 s+=ar(A,u,L,'nr','N = '+(Ay*4/5),-40,10)+ar(A,n,L,'nb','V = '+(Ay*3/5),44,24);
 s+=ar(D,u,L,'nr',(H*3/5),-16,6)+ar(D,[-n[0],-n[1]],L,'nb',(H*4/5),14,-4);
 const NB=H*3/5+Ay*4/5,VB=Ay*3/5-H*4/5;s+=ar(B,[-u[0],-u[1]],L,'nr','N = '+NB,30,-4)+ar(B,[-n[0],-n[1]],L,'nb','V = '+VB,-30,-6)+MARC(B[0]+2,B[1]+2,18,true,'ng')+HT(B[0]+26,B[1]+30,(Ay*3-H*2),'ng','start');
 s+=HT(A[0]+12,A[1]+6,'A','nk','start')+HT(D[0]+14,D[1]+4,'D','ng','start')+HT(B[0]-14,B[1]+4,'B','nk','end');
 s+=HT(B[0]-20,B[1]+90,'θ = 53.13°','ng','start');
 return nbsvg('0 0 440 410',s,460)}
function memBC(H,w,P,Ay,Cy){const MB=Ay*3-H*2,S=56,x0=90,y=150,X=x=>x0+x*S;let s='';
 s+=HL(X(0),y,X(6),y,'nk','stroke-width="4"');
 for(let i=0;i<=12;i++){const x=X(i*0.5);s+=HA(x,y-30,x,y-5,'nk','stroke-width="1.2"')}s+=HL(X(0),y-30,X(6),y-30,'nk','stroke-width="1.2"')+HT(X(1.4),y-38,w+' kN/m','nk');
 s+=HA(X(3),y-96,X(3),y-5,'nk','stroke-width="2.4"')+HT(X(3)+8,y-90,P+' kN','nk','start')+HT(X(3)+8,y+24,'E','ng','start');
 s+=HA(X(0)-76,y,X(0)-5,y,'nr','stroke-width="2.4"')+HT(X(0)-78,y-8,H,'nr','start');
 s+=HA(X(0),y+72,X(0),y+5,'nr','stroke-width="2.4"')+HT(X(0)+8,y+66,Ay,'nr','start');
 s+=MARC(X(0)+4,y+2,20,false,'nb')+HT(X(0)+28,y+40,MB,'nb','start')+HT(X(0)-12,y+28,'B','nk','end');
 s+=HA(X(6)+76,y,X(6)+5,y,'nr','stroke-width="2.4"')+HT(X(6)+78,y-8,H,'nr','end');
 s+=HA(X(6),y+72,X(6),y+5,'nr','stroke-width="2.4"')+HT(X(6)-8,y+66,Cy,'nr','end')+HT(X(6)+10,y-12,'C','nk','start');
 s+=HL(X(0),y+96,X(6),y+96,'ng','stroke-width="1"')+[X(0),X(3),X(6)].map(x=>HL(x,y+90,x,y+102,'ng')).join('')+HT(X(1.5),y+116,'3 m','ng')+HT(X(4.5),y+116,'3 m','ng');
 return nbsvg('0 0 600 280',s,620)}
const ng=v=>v<0?'−'+(-v):''+v;
/* diagrams of selected members only (same scale as the full frame) */
function memD(F,idx,kind,o={}){const M=F.M.filter((m,i)=>idx.includes(i)),pts=new Set(M.flatMap(m=>[m.a,m.b]));
 const P={};pts.forEach(k=>P[k]=F.P[k]);const nl={};pts.forEach(k=>{if(F.nl&&F.nl[k])nl[k]=F.nl[k]});
 const G=Object.assign({},F,{M,P,nl,sup:(F.sup||[]).filter(s=>pts.has(s[0]))});
 const xs=[...pts].map(k=>F.ox+F.P[k][0]*F.S),ys=[...pts].map(k=>F.oy-F.P[k][1]*F.S),amp=o.amp||34;
 const x0=Math.min(...xs)-amp-50,x1=Math.max(...xs)+amp+50,y0=Math.min(...ys)-amp-62,y1=Math.max(...ys)+amp+46;
 const vb=`${x0.toFixed(0)} ${y0.toFixed(0)} ${(x1-x0).toFixed(0)} ${(y1-y0).toFixed(0)}`,mw=Math.min(o.mw||520,Math.max(240,(x1-x0)*1.5));
 return `<div class="fd"><div class="fdt">${kind==='N'?'N.F.D (kN)':kind==='V'?'S.F.D (kN)':'B.M.D (kN.m)'}</div>${nbsvg(vb,frm(G,kind,{amp}),mw)}</div>`}
function triSk(){let s=HL(60,200,240,200,'nk','stroke-width="3"')+HL(240,200,240,60,'nk','stroke-width="3"')+HL(60,200,240,60,'nr','stroke-width="3.4"');
 s+=HT(150,226,'3 m','ng')+HT(256,136,'4 m','ng','start')+HT(136,118,'L = 5 m','nr','end')+HP('M100,200 A40,40 0 0,0 92,175','nb')+HT(110,190,'θ','nb','start')+HT(52,214,'A','nk','end')+HT(248,54,'B','nk','start');
 return nbsvg('0 0 320 240',s,340)}
function partAB(H,Ay,Fr){const MB=Ay*3-H*2,NA=Ay*4/5,VA=Ay*3/5,ND=H*3/5,VD=H*4/5;
 return nbPage(
 EH('0) هندسة العضو AB')+
 NT('AB مائل: يمشي 3 m أفقي و 4 m رأسي.')+
 E('L = √(3² + 4²) = √(9 + 16) = √25 = 5 m')+
 E('tanθ = 4/3 ⇒ θ = tan⁻¹(4/3) = 53.13°')+
 E('sin(53.13°) = 4/5 = 0.8')+
 E('cos(53.13°) = 3/5 = 0.6'),
 `<div class="nbfig">${triSk()}</div>`)+
 nbPage(
 EH('1) FBD للعضو AB لحاله')+
 NT('نقطع عند B ونطلّع AB لحاله. عند B فيه قوى داخلية مجهولة: B<sub>x</sub> و B<sub>y</sub> و M<sub>B</sub>.')+
 EH(`ΣF${sub('x')} = 0 &nbsp;(→ +)`)+
 E(`${H} + B${sub('x')} = 0`)+E(`B${sub('x')} = −${H}`)+E(`⇒ ${MK(`B${sub('x')} = ${H} kN ←`)}`)+
 EH(`ΣF${sub('y')} = 0 &nbsp;(↑ +)`)+
 E(`${Ay} + B${sub('y')} = 0`)+E(`B${sub('y')} = −${Ay}`)+E(`⇒ ${MK(`B${sub('y')} = ${Ay} kN ↓`)}`)+
 EH(`ΣM${sub('B')} = 0 &nbsp;(↺ +)`)+
 NT('A يبعد عن B: 3 m أفقي. D يبعد عن B: 2 m رأسي (D تحت B).')+
 E(`−${Ay}(3) + ${H}(2) + M${sub('B')} = 0`)+
 E(`−${Ay*3} + ${H*2} + M${sub('B')} = 0`)+
 E(`−${Ay*3-H*2} + M${sub('B')} = 0`)+
 E(`⇒ ${MK(`M${sub('B')} = ${MB} kN.m ↺`)}`),
 `<div class="nbfig">${memAB(H,Ay)}</div>`)+
 nbPage(
 EH('2) نحلل القوى على محور العضو (N و V)')+
 NT('N على طول العضو، V عمودي عليه. القوة الرأسية: على العضو = F sin(53.13°) والعمودية = F cos(53.13°). القوة الأفقية: على العضو = F cos(53.13°) والعمودية = F sin(53.13°).')+
 EH(`عند A (${Ay} لفوق):`)+
 NT('المركبة على طول العضو تدفه باتجاه B، يعني ضغط (−):')+
 E(`N${sub('A')} = −${Ay} sin(53.13°)`)+E(`= −${Ay} × 0.8`)+E(`= ${MK(`−${NA} kN`)}`)+
 NT('المركبة العمودية:')+
 E(`V${sub('A')} = ${Ay} cos(53.13°)`)+E(`= ${Ay} × 0.6`)+E(`= ${MK(`${VA} kN`)}`)+
 EH(`عند D (${H} لليمين):`)+
 NT('على طول العضو (ضغط):')+E(`F${sub('∥')} = ${H} cos(53.13°)`)+E(`= ${H} × 0.6`)+E(`= ${ND} kN`)+
 NT('عمودي على العضو (عكس اتجاه V<sub>A</sub>):')+E(`F${sub('⊥')} = ${H} sin(53.13°)`)+E(`= ${H} × 0.8`)+E(`= ${VD} kN`)+
 EH(`عند B (${H} لليسار و ${Ay} لتحت):`)+
 E(`N${sub('B')} = −[${H} cos(53.13°) + ${Ay} sin(53.13°)]`)+E(`= −[${H} × 0.6 + ${Ay} × 0.8]`)+E(`= −[${ND} + ${NA}]`)+E(`= ${MK(`−${ND+NA} kN`)}`)+
 E(`V${sub('B')} = ${Ay} cos(53.13°) − ${H} sin(53.13°)`)+E(`= ${Ay} × 0.6 − ${H} × 0.8`)+E(`= ${VA} − ${VD}`)+E(`= ${MK(`${VA-VD} kN`)}`)+
 EH('Check على المحاور الجديدة:')+
 E(`ΣF${sub('∥')}: ${NA} + ${ND} − ${NA+ND} = 0 ✓`,'g')+
 E(`ΣF${sub('⊥')}: ${VA} − ${VD} − ${VA-VD} = 0 ✓`,'g'),
 `<div class="nbfig">${memABloc(H,Ay)}</div>`)+
 nbPage(
 EH('3) N في AB')+
 NT('من A إلى D:')+E(`N = ${MK(`−${NA} kN`)}`)+NT('من D إلى B:')+
 E(`N = −${NA} − ${ND}`)+E(`= ${MK(`−${NA+ND} kN`)}`),
 `<div class="nbfig">${memABloc(H,Ay)}</div>`)+
 nbPage(
 EH('4) V في AB')+
 NT('من A إلى D:')+E(`V = ${MK(`${VA} kN`)}`)+NT('من D إلى B:')+
 E(`V = ${VA} − ${VD}`)+E(`= ${MK(`${VA-VD} kN`)}`),
 `<div class="nbfig">${memABloc(H,Ay)}</div>`)+
 nbPage(
 EH('5) M في AB (بالمساحات، طول كل جزء 2.5 m)')+
 E(`M${sub('A')} = 0 (roller)`)+
 E(`M${sub('D')} = 0 + ${VA} × 2.5`)+E(`= ${MK(`${VA*2.5} kN.m`)}`)+
 E(`M${sub('B')} = ${VA*2.5} + ${VA-VD} × 2.5`)+E(`= ${VA*2.5} + ${(VA-VD)*2.5}`)+E(`= ${MK(`${MB} kN.m`)}`)+
 NT('نفس M<sub>B</sub> اللي طلع من ΣM في الخطوة 1 ✓.'),
 `<div class="nbfig">${memABloc(H,Ay)}</div>`)}
function partBC(H,w,P,Ay,Cy,Fr){const MB=Ay*3-H*2,ME=MB+Ay*3/2,VE1=Ay-w*3,VE2=Ay-w*3-P,VC=Ay-w*6-P;
 return nbPage(
 EH('1) FBD للعضو BC لحاله')+
 NT('عند B نحط نفس القوى اللي طلعت على AB بس بالعكس (فعل ورد فعل):')+
 E(`B${sub('x')} = ${H} kN →`)+E(`B${sub('y')} = ${Ay} kN ↑`)+E(`M${sub('B')} = ${MB} kN.m ↻`)+
 EH('Check اتزان BC:')+
 E(`ΣF${sub('x')}: ${H} − ${H} = 0 ✓`,'g')+
 E(`ΣF${sub('y')}: ${Ay} − ${w}(6) − ${P} + ${Cy} = ${Ay} − ${w*6} − ${P} + ${Cy} = 0 ✓`,'g')+
 E(`ΣM${sub('C')}: −${Ay}(6) − ${MB} + ${w*6}(3) + ${P}(3) = −${Ay*6} − ${MB} + ${w*18} + ${P*3} = 0 ✓`,'g'),
 `<div class="nbfig">${memBC(H,w,P,Ay,Cy)}</div>`)+
 nbPage(
 EH('2) N في BC')+
 NT(`العضو أفقي، فالـ N = القوة الأفقية. عند B فيه ${H} لليمين تدف العضو باتجاه C، يعني ضغط:`)+
 E(`N = ${MK(`−${H} kN`)} (ثابت على طول BC)`),
 `<div class="nbfig">${memBC(H,w,P,Ay,Cy)}</div>`)+
 nbPage(
 EH('3) V في BC (نمشي من B لليمين)')+
 E(`V${sub('B')} = ${Ay} kN`)+
 E(`V${sub('E⁻')} = ${Ay} − ${w}(3) = ${Ay} − ${w*3} = ${VE1}`)+
 E(`V${sub('E⁺')} = ${VE1} − ${P} = ${ng(VE2)} kN`)+
 E(`V${sub('C')} = ${ng(VE2)} − ${w}(3) = ${ng(VE2)} − ${w*3} = ${ng(VC)} kN`)+
 NT(`عند C: C<sub>y</sub> = ${Cy} لفوق يرجّعه صفر ✓.`),
 `<div class="nbfig">${memBC(H,w,P,Ay,Cy)}</div>`)+
 nbPage(
 EH('4) M في BC (بالمساحات)')+
 E(`M${sub('B')} = ${MB} kN.m (نفس نهاية AB، الـ joint rigid)`)+
 E(`M${sub('E')} = ${MB} + ½(${Ay})(3) = ${MB} + ${Ay*3/2} = ${MK(`${ME} kN.m`)}`)+
 E(`M${sub('C')} = ${ME} + ½(${ng(VE2)} − ${-VC})(3) = ${ME} + ½(${ng(VE2+VC)})(3) = ${ME} − ${-(VE2+VC)*1.5} = 0 ✓`)+
 NT('أكبر moment عند E لأن الـ V صار صفر هناك بالضبط.'),
 `<div class="nbfig">${memBC(H,w,P,Ay,Cy)}</div>`)+
 nbPage(EH('5) الرسومات كاملة للإطار')+NT('نجمع AB و BC: كل قيمة عند B متساوية من الجهتين لأن الـ joint rigid.'),fDiags(Fr))}
function frDiag(H,w,P,Ay,Cy){const NA=Ay*0.8,VA=Ay*0.6,N2=NA+H*0.6,V2=VA-H*0.8,MD=VA*2.5,MB=MD+V2*2.5,VE=Ay-w*3,ME=MB+Ay*1.5,VC=VE-P-w*3;
 return nbPage(NT('بعد ما طلعت الـ reactions بالاتجاهات الصحيحة، نرسم على الإطار مباشرة. العضو AB مائل (sinθ = 0.8 · cosθ = 0.6). القيم المهمة:')+
  EH('AB')+E(`N: −${NA} → −${N2} kN (compression)`)+E(`V: ${VA} → ${V2} kN`)+E(`M: 0 → ${MD} (D) → ${MB} kN.m (B)`)+
  EH('BC')+E(`N = −${H} kN`)+E(`V: ${Ay} → ${VE} | −${P-VE} → −${-VC} kN`)+E(`M: ${MB} → ${MK(`${ME} kN.m`)} (E) → 0`),
  fDiags(fABCframe(H,w,P,Ay,Cy)))}
XFULL[10].splice(1,2,{t:'(b) N.F.D و S.F.D و B.M.D',h:frDiag(45,30,60,90,150)});
XFULL[14].splice(1,2,{t:'(b) N.F.D و S.F.D و B.M.D',h:frDiag(30,20,40,60,100)});
XM.forEach(x=>{if(XFULL[x.id])x.parts=XFULL[x.id]});
/* ===== wind / sign / floor: every stage with its own figure ===== */
const hideK=(svg,keys)=>keys.reduce((s,k)=>s.split(`<g data-k="${k}">`).join(`<g data-k="${k}" style="display:none">`),svg);
function bldgFig(){const S=24,ex=240,ey=250,X=x=>ex+x*S,Y=y=>ey-y*S;let s='';
 s+=R(X(0),Y(6.1),15*S,6.1*S,'',`fill="rgba(31,79,181,.06)" stroke="#1d1d1d" stroke-width="2.6"`)+HL(X(-4),Y(0),X(17),Y(0),'nk','stroke-width="1.4"');
 s+=HL(X(-0.2),Y(4.6),X(15.2),Y(4.6),'no','stroke-width="1.4" stroke-dasharray="6 5"');
 s+=HL(X(-1),Y(0),X(-1),Y(6.1),'ng','stroke-width="1.2"')+HT(X(-1)-6,Y(2.3)+5,'4.6 m','ng','end')+HT(X(-1)-6,Y(5.35)+5,'1.5 m','ng','end');
 s+=HT(X(7.5),Y(2.3),'K<tspan baseline-shift="sub" font-size="70%">z</tspan> = 0.85 → q<tspan baseline-shift="sub" font-size="70%">z</tspan> = 1234.7','nb')+HT(X(7.5),Y(5.35)+6,'K<tspan baseline-shift="sub" font-size="70%">h</tspan> = 0.90 → q<tspan baseline-shift="sub" font-size="70%">h</tspan> = 1307.3','nr');
 s+=HT(X(15)+8,Y(6.1)+5,'h = 6.1 m','ng','start');
 for(let i=0;i<3;i++)s+=HA(X(-8.5),Y(1+i*2),X(-4.5),Y(1+i*2),'nk','stroke-width="2.2"');s+=HT(X(-8.5),Y(6.1)-14,'V = 52.8 m/s','nk','start');
 s+=HT(X(7.5),Y(0)+28,'L = 15 m (اتجاه الرياح) ، B = 30 m','ng');
 return nbsvg('0 0 700 300',s,700)}
function panelFig(o){const S=56,ox=50,oy=40,W=6*S,H=1.5*S;let s='';
 s+=`<rect x="${ox}" y="${oy}" width="${W}" height="${H}" fill="rgba(47,143,58,.20)" stroke="#2f8f3a" stroke-width="2.4"/>`;
 if(o.c)[2,4].forEach(x=>s+=`<circle cx="${ox+x*S}" cy="${oy+H/2}" r="${0.403*S}" fill="#fffef8" stroke="#c0262d" stroke-width="2.4"/>`+HL(ox+x*S-0.403*S,oy+H/2,ox+x*S+0.403*S,oy+H/2,'nr','stroke-width="1.4"')+HT(ox+x*S,oy+H/2-8,'D','nr'));
 if(o.r)s+=`<rect x="${ox+1.5*S}" y="${oy+0.5*S}" width="${3*S}" height="${0.5*S}" fill="#fffef8" stroke="#c0262d" stroke-width="2.4"/>`+HT(ox+3*S,oy+0.75*S+6,'3 × 0.5','nr');
 s+=HL(ox,oy+H+22,ox+W,oy+H+22,'ng','stroke-width="1.2"')+HT(ox+W/2,oy+H+44,'B = 6 m','ng')+HL(ox+W+18,oy,ox+W+18,oy+H,'ng','stroke-width="1.2"')+HT(ox+W+26,oy+H/2+6,'s = 1.5 m','ng','start');
 s+=HT(ox+W/2,oy+H+78,o.lab||'','nb');
 return nbsvg(`0 0 ${ox+W+130} ${oy+H+96}`,s,560)}
const SG7=()=>signFig({top:12.2,holes:[{c:1,x:2,y:11.45,r:0.4},{c:1,x:4,y:11.45,r:0.4}],S:20}),SG11=()=>signFig({top:9.5,holes:[{x:1.5,y:8.5,w:3,h:0.5}],zc:8.75,S:24});
XFULL[6]=[
{t:'(a) V و q<sub>z</sub>',h:nbPage(
 EH('1) السرعة بـ m/s')+
 E('V = 190 km/h = 190 × 1000 / 3600 = 52.78 ≈ '+MK('52.8 m/s'))+
 E('V² = (52.8)² = 2787.84')+
 EH('2) معادلة q<sub>z</sub>')+
 E(`q${sub('z')} = 0.613 K${sub('z')} K${sub('zt')} K${sub('d')} V²`)+
 E(`q${sub('z')} = 0.613 × K${sub('z')} × 1.0 × 0.85 × 2787.84`)+
 E(`q${sub('z')} = ${MK(`1452.6 K${sub('z')}`)} N/m²`)+
 EH('3) K<sub>z</sub> لكل ارتفاع')+
 NT('ارتفاع المبنى h = 6.1 m، فنحتاج K<sub>z</sub> عند 4.6 و عند 6.1:')+
 E(`0 – 4.6 m: K${sub('z')} = 0.85 ⇒ q = 1452.6 × 0.85 = ${MK('1234.7 N/m²')}`)+
 E(`6.1 m: K${sub('h')} = 0.90 ⇒ q${sub('h')} = 1452.6 × 0.90 = ${MK('1307.3 N/m²')}`)+
 EH('4) الضغط الداخلي')+
 E(`q${sub('h')} (GC${sub('pi')}) = 1307.3 × 0.18 = ${MK('±235.3 N/m²')}`)+
 E('G = 0.85'),
 `<div class="nbfig">${bldgFig()}</div>`)},
{t:'(b) Windward (C<sub>p</sub> = 0.8)',h:nbPage(
 NT('الـ windward نستخدم فيه q<sub>z</sub> (يتغيّر مع الارتفاع).')+
 EH('0 – 4.6 m:')+
 E('q G C<sub>p</sub> = 1234.7 × 0.85 × 0.8 = 839.6')+
 E('P = 839.6 − (+235.3) = '+MK('604.3 N/m²'))+
 E('P = 839.6 − (−235.3) = 839.6 + 235.3 = '+MK('1074.9 ≈ 1075 N/m²'))+
 EH('4.6 – 6.1 m:')+
 E('q G C<sub>p</sub> = 1307.3 × 0.85 × 0.8 = 889.0')+
 E('P = 889.0 − 235.3 = '+MK('653.7 N/m²'))+
 E('P = 889.0 + 235.3 = '+MK('1124.3 N/m²')),
 hideK(windFig({w1:'604.3 | 1075',w2:'653.7 | 1124.3',lw:'0',sw:'0',t:'Windward: (+GCpi) | (−GCpi)'}),['lw','sw']))},
{t:'(c) Leeward',h:nbPage(
 E('L/B = 15/30 = 0.5')+E('0.5 بين 0 و 1 ⇒ من الجدول C<sub>p</sub> = '+MK('−0.5'))+
 NT('الـ leeward نستخدم فيه q<sub>h</sub> (ثابت على الارتفاع كامل):')+
 E('q<sub>h</sub> G C<sub>p</sub> = 1307.3 × 0.85 × (−0.5) = −555.6')+
 E('P = −555.6 − 235.3 = '+MK('−790.9 ≈ −791 N/m²'))+
 E('P = −555.6 + 235.3 = '+MK('−320.3 N/m²'))+
 NT('السالب = suction (سحب للخارج).'),
 hideK(windFig({w1:'0',w2:'0',lw:'−791 | −320.3',sw:'0',t:'Leeward: (+GCpi) | (−GCpi)'}),['ww','sw']))},
{t:'(c) Side walls',h:nbPage(
 E('Side walls: C<sub>p</sub> = '+MK('−0.7')+' (لكل قيم L/B)')+
 E('q<sub>h</sub> G C<sub>p</sub> = 1307.3 × 0.85 × (−0.7) = −777.8')+
 E('P = −777.8 − 235.3 = '+MK('−1013.1 N/m²'))+
 E('P = −777.8 + 235.3 = '+MK('−542.5 N/m²'))+
 NT('الجدارين الجانبيين نفس القيمة، والضغط يسحب للخارج.'),
 hideK(windFig({w1:'0',w2:'0',lw:'0',sw:'−1013 | −542.5',t:'Side walls: (+GCpi) | (−GCpi)'}),['ww','lw']))},
{t:'(d) الرسم',h:nbPage(
 windFig({w1:'604.3',w2:'653.7',lw:'−791',sw:'−1013',t:'Case 1: +0.18 (internal pressure)'}),
 windFig({w1:'1075',w2:'1124.3',lw:'−320.3',sw:'−542.5',t:'Case 2: −0.18 (internal suction)'}))}];
XFULL[7]=[XFULL[7][0],
{t:'(b) q<sub>h</sub>',h:nbPage(
 E('h = ارتفاع أعلى اللوحة = 10.7 + 1.5 = 12.2 m')+
 E(`z = 12.2 m ⇒ من الجدول K${sub('h')} = 1.04`)+
 E('V = 180 km/h = 180 × 1000 / 3600 = 50 m/s')+
 E(`q${sub('h')} = 0.613 K${sub('h')} K${sub('zt')} K${sub('d')} V²`)+
 E(`q${sub('h')} = 0.613 × 1.04 × 1.0 × 1.0 × (50)²`)+
 E(`q${sub('h')} = 0.613 × 1.04 × 2500`)+
 E(`q${sub('h')} = 0.63752 × 2500 ⇒ ${MK(`q${sub('h')} = 1593.8 N/m²`)}`),
 hideK(SG7(),['F']))},
{t:'(c) C<sub>f</sub> و A<sub>f</sub>',h:nbPage(
 E('s/h = 1.5 / 12.2 = 0.123')+
 E(`0.123 ≤ 0.16 ⇒ من الجدول ${MK(`C${sub('f')} = 1.85`)}`)+
 EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
 E(`20000 = 1593.8 × 0.85 × 1.85 × A${sub('f')}`)+
 E(`20000 = 2506.2 × A${sub('f')}`)+
 E(`A${sub('f')} = 20000 / 2506.2 ⇒ ${MK(`A${sub('f')} = 7.98 m²`)}`),
 `<div class="nbfig">${panelFig({c:1,lab:'A<tspan baseline-shift="sub" font-size="70%">f</tspan> = 7.98 m² (green area)'})}</div>`)},
{t:'(d) القطر D',h:nbPage(
 E('المساحة الكاملة = 6 × 1.5 = 9 m²')+
 E(`مساحة الفتحتين = 9 − 7.98 = ${MK('1.02 m²')}`)+
 E('مساحة الفتحتين = 2 × πD²/4 = πD²/2')+
 E('πD²/2 = 1.02')+
 E('D² = 2 × 1.02 / π = 2.04 / 3.1416 = 0.649')+
 E(`D = √0.649 ⇒ ${MK('D = 0.806 ≈ 0.81 m')}`)+
 NT('كل ما كبرت الفتحات قلّت المساحة والقوة. فأقل قطر يخلي العزم 60 kN.m بالضبط هو 0.806 m (الحل النموذجي قرّبه 0.80).'),
 `<div class="nbfig">${panelFig({c:1,lab:'2 × πD²/4 = 1.02 m² ⇒ D = 0.806 m'})}</div>`)}];
XFULL[11]=[XFULL[11][0],
{t:'(b) C<sub>f</sub> و A<sub>f</sub>',h:nbPage(
 E('s/h = 1.5 / 9.5 = 0.158')+
 E(`0.158 ≤ 0.16 ⇒ ${MK(`C${sub('f')} = 1.85`)}`)+
 E('المساحة الكاملة = 6 × 1.5 = 9 m²')+
 E('الفراغ = 3 × 0.5 = 1.5 m²')+
 E(`A${sub('f')} = 9 − 1.5 = ${MK('7.5 m²')}`),
 `<div class="nbfig">${panelFig({r:1,lab:'A<tspan baseline-shift="sub" font-size="70%">f</tspan> = 9 − 1.5 = 7.5 m²'})}</div>`)},
{t:'(c) q<sub>h</sub>',h:nbPage(
 EH(`F = q${sub('h')} G C${sub('f')} A${sub('f')}`)+
 E(`15200 = q${sub('h')} × 0.85 × 1.85 × 7.5`)+
 E(`15200 = q${sub('h')} × 11.794`)+
 E(`q${sub('h')} = 15200 / 11.794 ⇒ ${MK(`q${sub('h')} = 1288.8 N/m²`)}`),
 hideK(SG11(),['h']))},
{t:'(d) K<sub>h</sub> و V',h:nbPage(
 NT('h = 9.5 m بين 9.1 (0.98) و 12.2 (1.04) في الجدول، فنعمل interpolation:')+
 E(`K${sub('h')} = 0.98 + (1.04 − 0.98) × (9.5 − 9.1)/(12.2 − 9.1)`)+
 E(`K${sub('h')} = 0.98 + 0.06 × 0.4/3.1`)+
 E(`K${sub('h')} = 0.98 + 0.06 × 0.129 = 0.98 + 0.0077`)+
 E(`⇒ ${MK(`K${sub('h')} = 0.988`)}`)+
 EH(`q${sub('h')} = 0.613 K${sub('h')} K${sub('zt')} K${sub('d')} V²`)+
 E('1288.8 = 0.613 × 0.988 × 1.0 × 1.0 × V²')+
 E('1288.8 = 0.6056 × V²')+
 E('V² = 1288.8 / 0.6056 = 2128.1')+
 E(`V = √2128.1 ⇒ ${MK('V = 46.1 m/s')}`)+
 E(`V = 46.1 × 3600 / 1000 = 46.1 × 3.6 ⇒ ${MK('V = 166 km/h')}`),
 hideK(SG11(),['F','z']))}];
/* floors: loads stage beside the plan, reactions stage beside the beam */
const BE471=ldBeam({L:7,u:[{lab:'4.32'}],shapes:[{t:'trap',a:0,b:7,c:2.5,d:4.5,lab:'25 kN/m'}],sup:[[0,'pin'],[7,'roll']],R:[[0,'71.37'],[7,'71.37']],names:[[0,'B'],[7,'E']],dims:[0,2.5,4.5,7]});
const ABC471=ldBeam({L:10,u:[{lab:'10.8'},{lab:'4.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'},{t:'tri',a:5,b:10,c:7.5,lab:'12.5'}],P:[[5,'71.37 kN']],sup:[[0,'pin'],[10,'roll']],R:[[0,'142.54'],[10,'142.54']],names:[[0,'A'],[5,'B'],[10,'C']],dims:[0,5,10]});
XFULL[8]=[XFULL[8][0],
{t:'(b) Beam BE',h:nbPage(
 EH('1) الأحمال على BE')+
 E('Own weight = b × h × γ = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 NT('BE بين بانلين (يمين ويسار)، وهي الضلع الطويل (7 m) لكل واحد، فتاخذ شبه منحرف من كل جهة (المنطقة الحمرا):')+
 E('من كل بانل: 5 × 2.5 = 12.5 kN/m')+
 E('من البانلين: 2 × 12.5 = '+MK('25 kN/m')),
 hideK(plan471(),['abc']))+nbPage(
 EH('2) Reactions (متماثل)')+
 NT('شبه المنحرف: يطلع على 2.5 m، ثابت في النص 7 − 2(2.5) = 2 m، وينزل على 2.5 m.')+
 E('وزن الكمرة = 4.32 × 7 = 30.24 kN')+
 E('شبه المنحرف = 25 × (7 + 2)/2 = 25 × 4.5 = 112.5 kN')+
 E('المجموع = 30.24 + 112.5 = 142.74 kN')+
 E('R = 142.74 / 2 = '+MK('71.37 kN')+' (عند B و عند E)'),BE471)},
{t:'(b) Beam ABC',h:nbPage(
 EH('1) الأحمال على ABC')+
 E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 E('Wall = t × h × γ = 0.3 × 2 × 18 = '+MK('10.8 kN/m'))+
 NT('ABC الضلع القصير (5 m) للبانلين، فتاخذ مثلث من كل بانل (المنطقة الزرقا):')+
 E('Triangle = 5 × 2.5 = '+MK('12.5 kN/m')+' على AB وعلى BC')+
 NT('B مو عمود، فالـ reaction حق BE (71.37) ينزل على ABC كقوة مركّزة عند B.'),
 hideK(plan471(),['be']))+nbPage(
 EH('2) Reactions (متماثل)')+
 E('uniform = (4.32 + 10.8) × 10 = 15.12 × 10 = 151.2 kN')+
 E('triangles = 2 × ½ × 12.5 × 5 = 62.5 kN')+
 E('point load = 71.37 kN')+
 E('Total = 151.2 + 62.5 + 71.37 = 285.07 kN')+
 E('R = 285.07 / 2 = '+MK('142.54 kN')+' (عند A و عند C)'),ABC471)},
{t:'(c) Live load على Column E',h:nbPage(XFULL[8][3].h.replace(/^<div class="nbp"><div class="nb1">/,'').replace(/<\/div><\/div>$/,''),hideK(plan471({trib:[2.5,1.5,7.5,6.5],lab:'A<tspan baseline-shift="sub" font-size="70%">T</tspan> = 25 m²'}),['be','abc','two']))}];
const BF462=ldBeam({L:5,u:[{lab:'9.32'}],shapes:[{t:'tri',a:0,b:5,c:2.5,lab:'12.5'}],sup:[[0,'pin'],[5,'roll']],R:[[0,'38.93'],[5,'38.93']],names:[[0,'B'],[5,'F']],dims:[0,2.5,5]});
const EFG462=ldBeam({L:7,u:[{lab:'28.32'}],shapes:[{t:'trap',a:0,b:7,c:2,d:5,lab:'10 kN/m',h:34},{t:'tri',a:0,b:5,c:2.5,lab:'12.5 kN/m',h:40,lift:56}],P:[[5,'38.93 kN']],ptop:150,sup:[[0,'pin'],[7,'roll']],R:[[0,'155.3'],[7,'163.1']],names:[[0,'E'],[5,'F'],[7,'G']],dims:[0,2,2.5,5,7]});
XFULL[13]=[XFULL[13][0],
{t:'(b) Beam BF',h:nbPage(
 EH('1) الأحمال على BF')+
 E('Own weight = 0.3 × 0.6 × 24 = '+MK('4.32 kN/m'))+
 NT('من البانل FGCB (one-way، عرضه 2 m): BF تاخذ نص العرض = 1 m:')+
 E('One-way = 5 × 2/2 = 5 × 1 = '+MK('5 kN/m'))+
 E('Uniform = 4.32 + 5 = '+MK('9.32 kN/m'))+
 NT('من البانل EFBA (مربع two-way 5 × 5): مثلث (المنطقة الزرقا):')+
 E('Triangle = 5 × 5/2 = '+MK('12.5 kN/m')),
 hideK(plan462(),['efg']))+nbPage(
 EH('2) Reactions (متماثل)')+
 E('uniform = 9.32 × 5 = 46.6 kN')+
 E('triangle = ½ × 12.5 × 5 = 31.25 kN')+
 E('Total = 46.6 + 31.25 = 77.85 kN')+
 E('R = 77.85 / 2 = '+MK('38.93 kN')+' (عند B و عند F)'),BF462)},
{t:'(b) Beam EFG',h:nbPage(
 EH('1) الأحمال على EFG')+
 E('Own weight = 4.32 kN/m')+
 E('Wall = 0.3 × 4 × 20 = 24 kN/m')+
 E('Uniform = 4.32 + 24 = '+MK('28.32 kN/m'))+
 NT('من EFBA (تحت EF، 5 m): مثلث. ومن HIGE (فوق EFG، 7 × 4): شبه منحرف لأن EFG الضلع الطويل (المنطقة الحمرا):')+
 E('Triangle على EF = 5 × 5/2 = '+MK('12.5 kN/m'))+
 E('Trapezoid = 5 × 4/2 = '+MK('10 kN/m')+' (يطلع 2 m، ثابت 3 m، ينزل 2 m)')+
 E('Point load عند F = reaction حق BF = '+MK('38.93 kN')),
 hideK(plan462(),['bf']))+nbPage(
 EH('2) القوى ومكانها من E')+
 E('uniform = 28.32 × 7 = 198.24 kN عند 3.5 m')+
 E('triangle = ½ × 12.5 × 5 = 31.25 kN عند 2.5 m')+
 E('trapezoid = 10 × (7 + 3)/2 = 50 kN عند 3.5 m')+
 E('point = 38.93 kN عند 5 m')+
 EH(`3) ΣM${sub('E')} = 0`)+
 E('7G = 198.24(3.5) + 31.25(2.5) + 50(3.5) + 38.93(5)')+
 E('7G = 693.84 + 78.13 + 175 + 194.65 = 1141.62')+
 E('G = 1141.62 / 7 = '+MK('163.1 kN'))+
 EH(`4) ΣF${sub('y')} = 0`)+
 E('E = 198.24 + 31.25 + 50 + 38.93 − 163.1')+
 E('E = 318.42 − 163.1 = '+MK('155.3 kN')),EFG462)},
{t:'(c) Live load على Column G',h:nbPage(XFULL[13][3].h.replace(/^<div class="nbp"><div class="nb1">/,'').replace(/<\/div><\/div>$/,''),hideK(plan462({trib:[3.5,2.5,8,7],lab:'A<tspan baseline-shift="sub" font-size="70%">T</tspan> = 20.25 m²'}),['efg','bf','two']))}];
XM.forEach(x=>{if(XFULL[x.id])x.parts=XFULL[x.id]});

/* ================= صفحات الاختبارات ================= */
const XEX={'472':'الاختبار الأول — الفصل الثاني 1447هـ','471':'الاختبار الأول — الفصل الأول 1447هـ','462':'الاختبار الأول — الفصل الثاني 1446هـ'};
const TIPS={
beam:['الحل دايماً: (1) الـ reactions، (2) نقطع بـ sections ونكتب V و M، (3) نرسم، (4) M<sub>max</sub> عند V = 0.',
 'الانتقال w → V → M يزيد درجة المنحنى: Constant → Linear (x) → Parabolic (x²) → Cubic (x³).',
 'قوة مركّزة = قفزة في الـ SFD بنفس مقدارها واتجاهها، وزاوية (كسرة) في الـ BMD.',
 'Point moment = قفزة في الـ BMD بس: مع عقارب الساعة ↻ يطلع (+)، وعكسها ↺ ينزل (−). وما يغيّر الـ SFD.',
 'لو الـ V موجب الـ M يزيد، ولو سالب ينقص. والـ M الأكبر حيث V = 0.',
 'الجزء اليسار: V لتحت و M عكس عقارب الساعة موجبين. الجزء اليمين: V لفوق و M مع عقارب الساعة موجبين.'],
frame:['نحسب الـ reactions من الإطار كامل، بعدين كل عضو لحاله.',
 'في العضو المائل نحلل كل قوة لمركبتين: موازية للعضو (N) وعمودية عليه (V).',
 'الـ rigid joint ينقل نفس الـ moment من عضو للثاني.',
 'الحمل العمودي على العضو ما يغيّر الـ N، والحمل الموازي ما يغيّر الـ V.'],
stab:['Beams و frames: r = 3n → determinate، r > 3n → indeterminate بدرجة r − 3n، r < 3n → unstable.',
 'Trusses: b + r = 2j → determinate، b + r > 2j → indeterminate، b + r < 2j → unstable.',
 'حتى لو العدد كافي: لو الـ reactions كلها متوازية أو تتلاقى في نقطة وحدة (concurrent) يكون unstable.',
 'الـ internal hinge يضيف 2 للـ r (قوتين) ويقسّم العضو فيزيد n بواحد.',
 'للتحويل: شيل reactions أو أضف hinges لين r = 3n، وتأكد ما صارت concurrent أو parallel.'],
wind:['V لازم بـ m/s: نقسم km/h على 3.6.',
 'q<sub>z</sub> = 0.613 K<sub>z</sub> K<sub>zt</sub> K<sub>d</sub> V² (N/m²)، و K<sub>z</sub> من الجدول حسب الارتفاع (ونعمل interpolation لو بين قيمتين).',
 'الـ windward يتغيّر مع الارتفاع (q<sub>z</sub>)، والـ leeward والـ side walls ثابتين (q<sub>h</sub>).',
 'Road sign: F = q<sub>h</sub> G C<sub>f</sub> A<sub>f</sub>، والقوة في مركز اللوحة، و h = ارتفاع أعلى اللوحة.'],
floor:['L₂/L₁ > 2 → one-way: الحمل للكمرات الطويلة بس. ≤ 2 → two-way: خطوط 45° من الزوايا.',
 'Two-way: الكمرة القصيرة تاخذ مثلث، والطويلة شبه منحرف، وارتفاعهم = w × (L<sub>short</sub>/2).',
 'لا تنسى وزن الكمرة نفسها (b × h × 24) ووزن الجدار (t × h × γ).',
 'Live load reduction: لو K<sub>LL</sub>A<sub>T</sub> > 37.2 m²، و L ≥ 50% (طابق واحد) أو 40% (أكثر من طابق). والسقف والـ public assembly ما ينخفضون.']};
const xmNo=x=>`${x.ex} · ${x.no}`;
function examsHome(){
 let html=header()+`<p style="margin:0 0 14px;color:var(--muted)">حلول 3 اختبارات سابقة، كل سؤال في صفحة لحاله بأسلوب دفتر الملاحظات: السؤال كما هو، وبعدين كل جزئية (a, b, c) في لوحة تقدر تكبّرها وتصغّرها. الحل مكتوب من عندي بأبسط طريقة، والنواتج متطابقة مع الحل النموذجي.</p>`;
 for(const k of ['472','471','462']){const L=XM.filter(x=>x.ex===k);
  html+=`<section><h2 style="font-size:1.25rem;margin-top:22px">${XEX[k]}</h2><div class="grid">${L.map(x=>`<a class="card xcard" href="#xm${x.id}"><div class="thumb" style="background-image:url('${XIMG[x.q[x.q.length-1]]}');background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff"></div><div class="body"><span class="no">${xmNo(x)}</span><h3>${x.title}</h3><p>${x.short}</p></div></a>`).join('')}</div></section>`}
 app.classList.remove('wide');app.innerHTML=html;window.scrollTo(0,0)}
function xTile(key,num,title,base,body){return `<section class="zt" data-t="${key}"><header class="zh" title="اسحب من هنا لتحريك الجزء"><b><span class="grip" aria-hidden="true">⠿</span>${num?`<span class="wt">${num}</span>`:''}${title}</b><div class="zc"><button data-zt="out" aria-label="تصغير الجزء">−</button><span class="zp">100%</span><button data-zt="in" aria-label="تكبير الجزء">+</button><button data-zt="reset" aria-label="المقاس الأصلي">↺</button></div></header><div class="zi" style="width:${base}px" data-base="${base}">${body}</div><span class="rz" title="اسحب لفوق: شريط بالعرض — لتحت: بالطول" aria-label="تغيير الشكل"></span></section>`}
function solCanvas(bands,W=1600){return `<div class="fcv" id="fcv"><div class="fcc nbp" id="fcc"><div class="fflow">${bands.map((b,k)=>`<div class="fband" data-g="${k}"><div class="fpt">${b.n?`<span>${b.n}</span>`:''}${b.t}</div>${b.h.replace(/^<div class="nbp">/,'<div class="nbx">')}</div>`).join('')}</div></div>
   <div class="wb-ui wb-zoom fcbar"><button data-fc="out" aria-label="تصغير">−</button><span id="fcp">100%</span><button data-fc="in" aria-label="تكبير">+</button><button data-fc="fit" aria-label="كل الصفحة">⊡</button><button data-fc="reset" class="arr" aria-label="رجّع الترتيب">ترتيب</button><button data-fc="full" aria-label="ملء الشاشة">⤢</button></div></div>`}
const SOLHINT=`<p class="fchint">اسحب العنوان الأحمر يتحرك الجزء كامل · اسحب أي سطر أو رسمة يتحرك لحاله · النقطة الخضراء تكبّر وتصغّر · إصبعين للتكبير</p>`;
/* exam simulation: the solution is written line by line next to its drawing */
let XSD=[],XST=[],XK=0,XTM=null;
function animAll(root){if(!root)return;root.querySelectorAll('.seg').forEach(g=>{const d=(+g.dataset.d||0)*1000;g.querySelectorAll('.segl,.segf0,.segt').forEach(el=>{(el._an||[]).forEach(a=>{try{a.cancel()}catch(_){}});el._an=[];if(!el.animate)return;
  if(el.classList.contains('segl')){const len=el.getTotalLength?el.getTotalLength():0;if(!len)return;el.style.strokeDasharray=len+' '+len;const an=el.animate([{strokeDashoffset:len},{strokeDashoffset:0}],{duration:750,delay:d,fill:'both',easing:'ease-in-out'});an.onfinish=()=>{an.cancel();el.style.strokeDasharray=''};el._an.push(an)}
  else el._an.push(el.animate([{opacity:0},{opacity:1}],{duration:450,delay:d+(el.classList.contains('segt')?600:200),fill:'both'}))})})}
function xSimHTML(x){XSD=[];XST=[];x.parts.forEach((p,pi)=>{const d=document.createElement('div');d.innerHTML=p.h;const lines=[...d.querySelectorAll('.nbl > *, .nb1 > *')].map(e=>e.outerHTML);const r=d.querySelector('.nbr');XSD.push({t:p.t,lines,fig:r?r.innerHTML:''});lines.forEach((_,li)=>XST.push({pi,li}))});
 return `<section class="sim xsim" id="xsim"><div class="sim-head"><b>المحاكاة — الحل ينكتب خطوة خطوة</b><span class="mono" id="xs-n"></span></div>
  <div class="xsv nbp" id="xsv"><div class="xst" id="xs-t"></div><div class="nbg" id="xs-g"><div class="nbl" id="xs-l"></div><div class="nbr" id="xs-f"></div></div></div>
  <div class="xbar"><i id="xs-bar"></i></div>
  <div class="sim-ctl"><button data-xs="prev">→ السابق</button><button data-xs="play" id="xs-play">▶ تشغيل</button><button data-xs="next" class="pri">التالي ←</button></div></section>`}
function xsStop(){clearInterval(XTM);XTM=null;const b=document.getElementById('xs-play');if(b)b.textContent='▶ تشغيل'}
function xsSet(k,force){if(!XST.length)return;const old=XST[XK];XK=Math.max(0,Math.min(XST.length-1,k));const st=XST[XK],P=XSD[st.pi];
 document.getElementById('xs-n').textContent=`${XK+1} / ${XST.length}`;document.getElementById('xs-bar').style.width=((XK+1)/XST.length*100)+'%';
 const f=document.getElementById('xs-f'),g=document.getElementById('xs-g');
 if(force||!old||old.pi!==st.pi){document.getElementById('xs-t').innerHTML=P.t;f.innerHTML=P.fig;g.classList.toggle('one',!P.fig);applyStatics();animAll(f)}
 const l=document.getElementById('xs-l');l.innerHTML=P.lines.slice(0,st.li+1).map((h,i)=>i===st.li?h.replace(/^<(\w+)( class="([^"]*)")?/,(m,t,c,cl)=>`<${t} class="${cl||''} xcur"`):h).join('');
 const cur=l.querySelector('.xcur');if(cur)animAll(cur);const v=document.getElementById('xsv');if(cur&&v){const top=cur.offsetTop-v.clientHeight*0.55;v.scrollTo({top:Math.max(0,top),behavior:'smooth'})}
 document.querySelector('[data-xs="prev"]').disabled=XK===0;document.querySelector('[data-xs="next"]').disabled=XK===XST.length-1;if(XK===XST.length-1)xsStop()}
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-xs]');if(!b)return;const a=b.dataset.xs;
 if(a==='play'){if(XTM){xsStop();return}if(XK>=XST.length-1)xsSet(0,true);b.textContent='❚❚ إيقاف';XTM=setInterval(()=>xsSet(XK+1),2600);return}
 xsStop();xsSet(XK+(a==='next'?1:-1))});
function examPage(id){const x=XM.find(e=>e.id===id);if(!x){location.hash='#exams';return}
 const i=XM.indexOf(x),prev=XM[i-1],next=XM[i+1];xsStop();
 app.classList.add('wide');
 const bands=[{t:'السؤال',h:nbOne(x.q.map(k=>`<img class="xqi" src="${XIMG[k]}" alt="السؤال" draggable="false">`).join(''))}].concat(x.parts.map((p,k)=>({t:p.t,n:k+1,h:p.h}))).concat([{t:'ملاحظات تساعدك',h:nbOne((TIPS[x.tip]||[]).map(t=>`<div class="nt">• ${t}</div>`).join('')+(x.note?`<div class="nt">• ${x.note}</div>`:''))}]);
 app.innerHTML=`<div class="bar"><a class="back" href="#exams">→ كل الاختبارات</a><button class="back" id="ftry">إخفاء الحل</button></div>
  <section class="qcard0"><div class="qh"><b>السؤال كما هو في الاختبار</b><span class="mono">${xmNo(x)}</span></div><div class="xq">${x.q.map(k=>`<img src="${XIMG[k]}" alt="السؤال">`).join('')}</div></section>
  ${simHTML(xPseudo(x))}
  <h3 class="sec-title">الحل</h3>${SOLHINT}${solCanvas(bands)}
  <nav class="nav"><a class="navb" ${prev?`href="#xm${prev.id}"`:'aria-disabled="true"'}>→ ${prev?prev.title:'السابق'}</a><a class="navb" ${next?`href="#xm${next.id}"`:'aria-disabled="true"'}>${next?next.title:'التالي'} ←</a></nav>`;
 window.scrollTo(0,0);SE=xPseudo(x);simStop();simSet(0);applyStatics();FC.init('xm'+id)}
/* solution layout: every part is cut into boxes of the same width (a long part continues in the next box),
   then the boxes sit in a grid of 3 or 4 columns, read left to right */
function packCells(flow){const CW=1150,MAXH=1700,GAP=34;
 const meas=document.createElement('div');meas.className='fmeas';meas.style.width=CW+'px';flow.appendChild(meas);
 const cells=[];let gi=0;
 const newCell=(title,num,cont)=>{const c=document.createElement('div');c.className='fcell';c.dataset.g='c'+(gi++);
  if(title){const t=document.createElement('div');t.className='fpt';t.innerHTML=(num?`<span>${num}</span>`:'')+title+(cont?' <small>(تابع)</small>':'');c.appendChild(t)}
  meas.appendChild(c);cells.push(c);return c};
 [...flow.querySelectorAll('.fband')].forEach(bd=>{const tEl=bd.querySelector('.fpt'),num=tEl&&tEl.querySelector('span')?tEl.querySelector('span').textContent:'',title=tEl?tEl.innerHTML.replace(/<span>[^<]*<\/span>/,''):'';
  // reading order: each page's figure first, then its lines
  const units=[...bd.querySelectorAll('.nbl > *, .nbr > *, .nb1 > *, .sgrid > *')].filter(u=>u.offsetParent!==null||u.getClientRects().length);
  const key=u=>{const g=u.closest('.nbg');return g?[[...bd.querySelectorAll('.nbg')].indexOf(g),u.parentElement.classList.contains('nbr')?0:1]:[-1,1]};
  const ord=units.map((u,i)=>[u,key(u),i]).sort((a,b)=>{const ga=a[1][0]<0?a[2]:a[1][0],gb=b[1][0]<0?b[2]:b[1][0];return (a[1][0]<0||b[1][0]<0)?a[2]-b[2]:(ga-gb)||(a[1][1]-b[1][1])||(a[2]-b[2])}).map(x=>x[0]);
  let cell=newCell(title,num,false),n=0;
  ord.forEach(u=>{cell.appendChild(u);n++;if(cell.offsetHeight>MAXH&&n>1){cell.removeChild(u);cell=newCell(title,num,true);cell.appendChild(u);n=1}});
  bd.remove()});
 const C=cells.length<=3?Math.max(1,cells.length):cells.length<=6?3:4;
 const grid=document.createElement('div');grid.className='fgrid2';grid.style.gridTemplateColumns=`repeat(${C},${CW}px)`;grid.style.gap=GAP+'px';
 cells.forEach(c=>grid.appendChild(c));flow.innerHTML='';flow.appendChild(grid)}
/* ===== free canvas: every element is draggable, no cards ===== */
const FC={s:1,x:0,y:0,z:10,key:'',
 el:()=>document.getElementById('fcv'),cv:()=>document.getElementById('fcc'),
 apply(){const c=this.cv();if(!c)return;c.style.transform=`translate(${this.x}px,${this.y}px) scale(${this.s})`;const p=document.getElementById('fcp');if(p)p.textContent=Math.round(this.s*100)+'%'},
 zoomAt(f,cx,cy){const ns=Math.min(4,Math.max(0.08,this.s*f));this.x=cx-(cx-this.x)*ns/this.s;this.y=cy-(cy-this.y)*ns/this.s;this.s=ns;this.apply()},
 bounds(){let X0=1e9,Y0=1e9,X1=-1e9,Y1=-1e9;this.cv().querySelectorAll('.fi').forEach(e=>{const x=parseFloat(e.style.left),y=parseFloat(e.style.top),k=+e.dataset.k||1;X0=Math.min(X0,x);Y0=Math.min(Y0,y);X1=Math.max(X1,x+e.offsetWidth*k);Y1=Math.max(Y1,y+e.offsetHeight*k)});return{X0,Y0,X1,Y1}},
 fit(){const v=this.el(),b=this.bounds();if(b.X1<b.X0)return;const s=Math.min(v.clientWidth/(b.X1-b.X0+40),v.clientHeight/(b.Y1-b.Y0+40),1.2);this.s=s;this.x=(v.clientWidth-(b.X1-b.X0)*s)/2-b.X0*s;this.y=(v.clientHeight-(b.Y1-b.Y0)*s)/2-b.Y0*s;this.apply()},
 save(){try{const d={};this.cv().querySelectorAll('.fi').forEach(e=>d[e.dataset.i]=[parseFloat(e.style.left),parseFloat(e.style.top),+e.dataset.k||1]);localStorage.setItem('ce360-fc5-'+this.key,JSON.stringify(d))}catch(_){}},
 load(){try{return JSON.parse(localStorage.getItem('ce360-fc5-'+this.key)||'null')}catch(_){return null}},
 setK(e,k){e.dataset.k=k;e.style.transform=k===1?'':`scale(${k})`},
 explode(saved){const c=this.cv(),flow=c.querySelector('.fflow');const cr=c.getBoundingClientRect();
  flow.querySelectorAll('.nbl > svg, .nbr > svg, .nb1 > svg').forEach(sv=>{const d=document.createElement('div');d.className='fsv';sv.parentNode.insertBefore(d,sv);d.appendChild(sv)});packCells(flow);const sel='.fcell > *';const items=[...flow.querySelectorAll(sel)].filter(e=>!(e.classList.contains('fpt')&&!e.textContent.trim()));
  const pos=items.map(e=>{const r=e.getBoundingClientRect();return[e,(r.left-cr.left)/this.s+60,(r.top-cr.top)/this.s+60,r.width/this.s]});
  pos.forEach(([e,x,y,w],n)=>{const bd=e.closest('.fcell');e.dataset.g=bd?bd.dataset.g:'x';e.classList.add('fi');e.dataset.i=n;e.style.width=w+'px';const sv=saved&&saved[n];e.style.left=(sv?sv[0]:x)+'px';e.style.top=(sv?sv[1]:y)+'px';this.setK(e,sv?sv[2]:1);const d=document.createElement('span');d.className='fz';d.title='اسحب لتكبير أو تصغير — ضغطتين يرجّع المقاس';e.appendChild(d);c.appendChild(e)});
  flow.remove();this.size()},
 size(){const b=this.bounds(),c=this.cv();c.style.width=Math.max(3000,b.X1+1200)+'px';c.style.height=Math.max(2200,b.Y1+1200)+'px'},
 init(key){const v=this.el();if(!v)return;this.key=key;this.orig=this.cv().innerHTML;this.s=1;this.x=0;this.y=0;this.apply();
  const imgs=[...v.querySelectorAll('img')];const go=()=>{this.explode(this.load());this.fit()};
  Promise.all(imgs.map(im=>im.complete?1:new Promise(r=>{im.onload=im.onerror=r}))).then(()=>requestAnimationFrame(go));
  const pts=new Map();let drag=null,pan=null,pinch=null,rs=null;const loc=ev=>{const r=v.getBoundingClientRect();return{x:ev.clientX-r.left,y:ev.clientY-r.top}};
  v.addEventListener('pointerdown',ev=>{if(ev.target.closest('.fcbar'))return;v.setPointerCapture(ev.pointerId);const p=loc(ev);pts.set(ev.pointerId,p);
   if(pts.size===2){drag=null;rs=null;const[a,b]=[...pts.values()];pinch={d:Math.hypot(a.x-b.x,a.y-b.y),s:this.s,m:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},x:this.x,y:this.y};pan=null;return}
   const fz=ev.target.closest('.fz');const it=ev.target.closest('.fi');
   if(fz){const e=fz.parentElement;rs={e,p,k:+e.dataset.k||1,w:e.offsetWidth};e.style.zIndex=++this.z;e.classList.add('act');return}
   if(it&&it.classList.contains('fpt')){const g=it.dataset.g;const els=[...this.cv().querySelectorAll('.fi')].filter(e=>e.dataset.g===g);drag={grp:els.map(e=>[e,parseFloat(e.style.left),parseFloat(e.style.top)]),p,e:it};els.forEach(e=>{e.style.zIndex=++this.z;e.classList.add('act')});return}
   if(it){drag={e:it,p,x:parseFloat(it.style.left),y:parseFloat(it.style.top)};it.style.zIndex=++this.z;it.classList.add('act');return}
   pan={p,x:this.x,y:this.y}});
  v.addEventListener('pointermove',ev=>{if(!pts.has(ev.pointerId))return;const p=loc(ev);pts.set(ev.pointerId,p);
   if(pinch&&pts.size>=2){const[a,b]=[...pts.values()],d=Math.hypot(a.x-b.x,a.y-b.y),m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};const ns=Math.min(4,Math.max(0.08,pinch.s*d/pinch.d));this.x=m.x-(pinch.m.x-pinch.x)*ns/pinch.s;this.y=m.y-(pinch.m.y-pinch.y)*ns/pinch.s;this.s=ns;this.apply();return}
   if(rs){const k=Math.min(4,Math.max(0.25,rs.k*(1+(p.x-rs.p.x)/this.s/rs.w)));this.setK(rs.e,k);return}
   if(drag){const dx=(p.x-drag.p.x)/this.s,dy=(p.y-drag.p.y)/this.s;if(drag.grp)drag.grp.forEach(([e,x,y])=>{e.style.left=(x+dx)+'px';e.style.top=(y+dy)+'px'});else{drag.e.style.left=(drag.x+dx)+'px';drag.e.style.top=(drag.y+dy)+'px'}return}
   if(pan){this.x=pan.x+p.x-pan.p.x;this.y=pan.y+p.y-pan.p.y;this.apply()}});
  const up=ev=>{pts.delete(ev.pointerId);if(drag||rs){(drag||rs).e.classList.remove('act');if(drag&&drag.grp)drag.grp.forEach(([e])=>e.classList.remove('act'));this.size();this.save()}drag=null;rs=null;if(pts.size<2)pinch=null;if(!pts.size)pan=null;else if(pts.size===1){const p=[...pts.values()][0];pan={p,x:this.x,y:this.y}}};
  v.addEventListener('pointerup',up);v.addEventListener('pointercancel',up);
  v.addEventListener('dblclick',ev=>{const fz=ev.target.closest('.fz');if(fz){this.setK(fz.parentElement,1);this.save();return}if(!ev.target.closest('.fi'))this.fit()});
  v.addEventListener('wheel',ev=>{ev.preventDefault();const p=loc(ev);if(ev.ctrlKey||ev.metaKey)this.zoomAt(Math.exp(-ev.deltaY*0.01),p.x,p.y);else{this.x-=ev.deltaX;this.y-=ev.deltaY;this.apply()}},{passive:false});
  v.querySelector('.fcbar').addEventListener('click',ev=>{const b=ev.target.closest('[data-fc]');if(!b)return;const a=b.dataset.fc;
   if(a==='in'||a==='out')this.zoomAt(a==='in'?1.25:0.8,v.clientWidth/2,v.clientHeight/2);
   else if(a==='fit')this.fit();
   else if(a==='reset'){try{localStorage.removeItem('ce360-fc5-'+this.key)}catch(_){}const c=this.cv(),sy=window.scrollY;this.s=1;this.x=0;this.y=0;this.apply();c.innerHTML=this.orig;c.style.width='';c.style.height='';try{c.querySelectorAll('[data-state]').forEach(el=>applyState(el,+el.dataset.state,!!el.dataset.sh))}catch(_){}requestAnimationFrame(()=>{this.explode(null);this.fit();window.scrollTo(0,sy)})}
   else if(a==='full'){v.classList.toggle('full');document.body.classList.toggle('noscroll',v.classList.contains('full'));requestAnimationFrame(()=>this.fit())}});
 }};
function examsStatic(){let h=`<section class="sx-top" id="exams-o"><h2 style="font-size:1.2rem;margin-bottom:6px">الاختبارات السابقة</h2><div class="sx-toc">${['472','471','462'].map(k=>`<h3>${XEX[k]}</h3>`+XM.filter(x=>x.ex===k).map(x=>`<a href="#xmo${x.id}"><span class="no">${x.no}</span>${x.title}</a>`).join('')).join('')}</div></section>`;
 XM.forEach(x=>{h+=`<section class="sx" id="xmo${x.id}"><div class="pex-h"><h2>${x.title}</h2><div class="meta">${xmNo(x)} · <a class="uptoc" href="#exams-o">↑ الفهرس</a></div></div><div class="xq">${x.q.map(k=>`<img src="${XIMG[k]}" alt="">`).join('')}</div>${x.parts.map(p=>`<h3 style="margin:16px 0 8px">${p.t}</h3>${p.h}`).join('')}<div class="nbp tipsp">${(TIPS[x.tip]||[]).map(t=>`<div class="nt">• ${t}</div>`).join('')}</div></section>`});return h}
document.addEventListener('click',ev=>{const b=ev.target.closest('#ftry');if(!b)return;const v=document.getElementById('fcv');if(!v)return;v.classList.toggle('hide');b.textContent=v.classList.contains('hide')?'إظهار الحل':'إخفاء الحل'});
/* course examples: same solution canvas */
const sq=q=>String(q).split('\n').flatMap(l=>l.split(/\s{3,}|،\s+(?=\w)/).join(' \u0002 ').split(/\s+\u0002\s+(?=→)|\s+(?=→\s)/).flatMap(x=>x.split(/\s*\u0002\s*/)).filter(x=>x.trim()).reduce((a,x)=>{if(a.length&&/^→\s*$/.test(a[a.length-1]))a[a.length-1]='→ '+x;else a.push(x);return a},[]).flatMap(x=>{const m=x.match(/^→\s*(.*)$/);if(m){const L=eqLines(m[1]);L[0]='→ '+L[0];return L}return eqLines(x)})).join('\n');
/* frames: after the reactions are found, steps keep showing the frame with its reactions (no per-step diagrams) */
const FIXST={128:3,129:3};
function stFig(e,k){try{return drawHTML(e,FIXST[e.id]?Math.min(k+1,FIXST[e.id]):k+1,'b-draw sfig').replace('<div class="drw','<div data-sh="1" class="drw')}catch(_){return ''}}
function exBands(e){const old=e.ch==='c1',SQ=old?(q=>q):sq,FG=old?(()=>''):stFig,WF=old?'':' wf';const last=simSteps(e).length-1,W=WHY[e.id]||[],D=DET[e.id];
 const fig=e.cases&&e.img?`<img class="b-fig" src="${IMG[e.img]}" alt="" draggable="false">`:drawHTML(e,0);
 const q=nbPage(`<div class="exq" dir="auto">${e.q}</div><table class="gtab">${e.given.map((g,k)=>`<tr><td>${k+1}</td><td>${g}</td></tr>`).join('')}</table>`,fig);
 let items;
 if(e.cases)items=e.cases.map(([im,t,d,r],k)=>`<div class="dstep"><div class="dh"><span class="wn">${k+1}</span><b>${t}</b></div>${CASE[im]?`<svg class="drw" viewBox="0 0 300 140" direction="ltr">${DEFS}${CASE[im]}</svg>`:`<img src="${IMG[im]}" alt="" draggable="false" style="max-width:100%">`}${W[k]?`<div class="di"><p>${W[k]}</p></div>`:''}<div class="di"><p>${d}</p></div><span class="wq">${r}</span></div>`);
 else if(D)items=e.steps.map(([t],k)=>`<div class="dstep${WF}"><div class="dsl"><div class="dh"><span class="wn">${k+1}</span><b>${t}</b></div><div class="dl">${(()=>{let n=0;return (D[k]||[]).map(x=>x[0]==='='?`<span class="wq">${SQ(x.slice(1))}</span>`:`<div class="di"><span class="dn">${++n}</span><p>${x}</p></div>`).join('')})()}</div></div>${old?'':`<div class="dsf">${FG(e,k)}</div>`}</div>`);
 else items=e.steps.map(([t,d,qq],k)=>`<div class="dstep${WF}"><div class="dsl"><div class="dh"><span class="wn">${k+1}</span><b>${t}</b></div>${W[k]?`<div class="di"><p>${W[k]}</p></div>`:''}${d?`<div class="di"><p class="dd">${d}</p></div>`:''}${qq?`<span class="wq">${SQ(qq)}</span>`:''}</div>${old?'':`<div class="dsf">${FG(e,k)}</div>`}</div>`);
 return [{t:'السؤال والمعطيات',h:q},{t:e.cases?'الحل — تصنيف كل حالة':'خطوات الحل مع الشرح',n:1,h:`<div class="nbp"><div class="sgrid">${items.join('')}</div></div>`},{t:'رسمة الحل',n:2,h:nbOne(drawHTML(e,last))},{t:'الجواب والفكرة',n:3,h:nbOne(`<div class="b-ans">${e.ans}</div><div class="wb-idea2"><b>الفكرة المهمة:</b> ${e.idea}</div>`)}]}
/* ===== solutions-only export (HTML / PDF) ===== */
function solStatic(title,meta,bands){return `<section class="solp nbp"><div class="solh"><h2>${title}</h2><span>${meta}</span></div><div class="solg">${[0,1].map(c=>`<div class="fcol">${bands.map((b,k)=>k%2!==c?'':`<div class="fband"><div class="fpt">${b.n?`<span>${b.n}</span>`:''}${b.t}</div>${b.h.replace(/^<div class="nbp">/,'<div class="nbx">')}</div>`).join('')}</div>`).join('')}</div></section>`}
function solutionsAll(){document.documentElement.setAttribute('data-theme','light');document.documentElement.classList.add('solmode');
 let h=`<header class="solcover"><div class="course">CE 360 · STRUCTURAL ANALYSIS 1 · KSU</div><h1>التحليل الإنشائي ١ — صفحات الحل</h1><p>${EX.length} مثال من المادة والكتاب، و ${XM.length} سؤال من 3 اختبارات سابقة.</p>
  <div class="soltoc">${CH.map(c=>`<div><b>${c.name}</b>${EX.filter(e=>e.ch===c.id).map(e=>`<a href="#s-ex${e.id}">${exNo(e)} — ${e.title}</a>`).join('')}</div>`).join('')}<div><b>الاختبارات السابقة</b>${XM.map(x=>`<a href="#s-xm${x.id}">${xmNo(x)} — ${x.title}</a>`).join('')}</div></div></header>`;
 for(const c of CH){for(const e of EX.filter(x=>x.ch===c.id))h+=`<div id="s-ex${e.id}"></div>`+solStatic(e.title,`${exNo(e)} · ${c.name.split(' — ')[0]}`,exBands(e))}
 for(const x of XM){const bands=[{t:'السؤال',h:nbOne(x.q.map(k=>`<img class="xqi" src="${XIMG[k]}" alt="">`).join(''))}].concat(x.parts.map((p,k)=>({t:p.t,n:k+1,h:p.h})));h+=`<div id="s-xm${x.id}"></div>`+solStatic(x.title,`${XEX[x.ex]} · ${x.no}`,bands)}
 app.classList.remove('wide');app.innerHTML=h;applyStatics()}

/*__EXAMS_END__*/
function route(){if(location.hash==='#offline'){offlineAll();return}if(location.hash==='#solutions'){solutionsAll();return}if(document.documentElement.hasAttribute('data-static')){return}if(location.hash==='#static'){staticAll();return}simStop();closeSol();if(location.hash==='#print'){printAll();return}const hs=location.hash.slice(1);if(hs==='tools'){toolsPage();window.scrollTo(0,0);return}if(hs==='formulas'){formulasPage();window.scrollTo(0,0);return}if(hs==='quiz'){quizPage();return}if(hs==='glossary'){glossaryPage();window.scrollTo(0,0);return}if(hs==='exams'){examsHome();return}{const xm=hs.match(/^xm(\d+)$/);if(xm){examPage(+xm[1]);return}}const m=location.hash.match(/^#ex(\d+)$/); m?exPage(+m[1]):home()}
app.addEventListener('click',ev=>{
  const b=ev.target.closest('button'); if(!b)return;
  if(b.dataset.pre){const p=JSON.parse(b.dataset.pre);({L:'bL',w:'bw',P:'bP',a:'ba',M:'bM',b:'bb'});Object.entries({bL:p.L,bw:p.w,bP:p.P,ba:p.a,bM:p.M,bb:p.b}).forEach(([k,v])=>document.getElementById(k).value=v);runTool(TOOLS[0]);return}
  if(b.dataset.qi!=null){const i=+b.dataset.qi;if(qState[i]==null){qState[i]=+b.dataset.k;const y=window.scrollY;quizPage();window.scrollTo(0,y)}return}
  if(b.hasAttribute('data-qreset')){qState={};quizPage();window.scrollTo(0,0);return}
  if(b.dataset.done){const id=+b.dataset.done,v=!getDone().includes(id);setDone(id,v);b.classList.toggle('isdone',v);b.textContent=v?'✓ فهمته':'علّم: فهمته';return}
  if(b.dataset.ex){location.hash='ex'+b.dataset.ex}
  else if(b.hasAttribute('data-home')){location.hash='';}
  else if(b.dataset.tab){tab=b.dataset.tab;home()}
  else if(b.dataset.lv){lv=b.dataset.lv;home()}
  else if(b.dataset.sim){simStop&&b.dataset.sim!=='play'&&simStop();b.dataset.sim==='play'?simPlay():simSet(SK+(b.dataset.sim==='next'?1:-1))}
  else if(b.dataset.sk!=null){simStop();simSet(+b.dataset.sk)}
  else if(b.dataset.z){applyZoom(b.dataset.z==='fit'?'fit':Z*(b.dataset.z==='+'?1.25:0.8))}
  else if(b.id==='solpage'){openSol()}
  else if(b.id==='wclose'){closeSol()}
  else if(b.id==='try'){const w=bd();w.classList.toggle('blurred');document.getElementById('whys')?.classList.toggle('blurred',w.classList.contains('blurred'));b.textContent=w.classList.contains('blurred')?'إظهار الحل':'إخفاء الحل'}
});
document.documentElement.setAttribute('dir','rtl');document.documentElement.lang='ar';
if(document.documentElement.hasAttribute('data-static')){initStaticSims()}else{window.addEventListener('hashchange',route);route();
app.addEventListener('input',ev=>{const f=ev.target.closest('form[data-tool]');if(f)runTool(TOOLS.find(t=>t.id===f.dataset.tool))});
app.addEventListener('change',ev=>{const f=ev.target.closest('form[data-tool]');if(f)runTool(TOOLS.find(t=>t.id===f.dataset.tool))});
app.addEventListener('click',ev=>{const a=ev.target.closest('a[data-jump]');if(a){ev.preventDefault();const s=document.getElementById(a.dataset.jump);if(s)s.scrollIntoView({behavior:'smooth'})}});}
