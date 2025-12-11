
export function generateCouponContent(merchantName: string, discount: string, code: string): string {
    const safeMerchant = merchantName || "المتجر";
    const safeCode = code || "كود خصم حصري";

    return `
    <article class="prose prose-lg prose-athek max-w-none text-right" dir="rtl">
        <p class="lead mb-6 text-lg text-gray-700 leading-relaxed">
            هل تبحث عن أفضل طريقة لتوفير المال عند التسوق من <strong>${safeMerchant}</strong>؟ 
            إليك الحل الأمثل! مع <strong>${safeCode}</strong>، يمكنك الحصول على خصم فوري وحصري يصل إلى <strong>${discount}</strong>.
            في هذا المقال، سنستعرض كل ما تحتاج معرفته عن ${safeMerchant} وكيفية استخدام كود الخصم بفاعلية.
        </p>

        <h2 class="text-2xl font-bold mb-4 mt-8 text-athek-primary">لماذا تتسوق من ${safeMerchant}؟</h2>
        <p class="mb-4 text-gray-600 leading-loose">
            يُعد ${safeMerchant} وجهة رائدة في مجاله، حيث يقدم تشكيلة واسعة من المنتجات عالية الجودة التي تلبي احتياجات جميع المتسوقين. 
            سواء كنت تبحث عن أحدث الصيحات، أو أفضل الأجهزة، أو منتجات العناية الشخصية، فإن ${safeMerchant} يضمن لك الجودة والأصالة في كل قطعة.
            يتميز المتجر بخدمة عملاء ممتازة، وسرعة في الشحن، وسياسات إرجاع مرنة تجعل تجربة التسوق مريحة وموثوقة.
        </p>
        <p class="mb-4 text-gray-600 leading-loose">
            بالإضافة إلى ذلك، يسعى ${safeMerchant} دائمًا لتقديم أفضل قيمة لعملائه من خلال العروض المستمرة والتخفيضات الموسمية. 
            ولكن المفاجأة الأكبر تكمن في استخدامك لـ <strong>كود خصم ${safeMerchant}</strong> عبر تطبيق اثق، الذي يمنحك توفيراً إضافياً على الأسعار المخفضة بالفعل!
        </p>

        <h2 class="text-2xl font-bold mb-4 mt-8 text-athek-primary">كيفية استخدام كود خصم ${safeMerchant} (${safeCode})</h2>
        <p class="mb-4 text-gray-600 leading-loose">
            الاستفادة من الخصم سهلة للغاية ولا تتطلب سوى خطوات بسيطة. اتبع الدليل التالي لضمان تفعيل الكوبون بنجاح:
        </p>
        <ol class="list-decimal list-inside mb-6 space-y-2 text-gray-600 leading-loose pr-4">
            <li>قم بزيارة موقع <strong>${safeMerchant}</strong> الرسمي وتصفح المنتجات التي ترغب في شرائها.</li>
            <li>أضف المنتجات المفضلة لديك إلى عربة التسوق.</li>
            <li>انتقل إلى صفحة الدفع أو ملخص الطلب.</li>
            <li>ابحث عن الخانة المخصصة للرموز الترويجية أو كوبونات الخصم، وعادةً ما تكون بعنوان "هل لديك كود خصم؟" أو "Promo Code".</li>
            <li>انسخ الكود <strong>${safeCode}</strong> من موقع أو تطبيق اثق وألصقه في الخانة المحددة.</li>
            <li>اضغط على زر "تطبيق" أو "Apply" وستلاحظ انخفاض المبلغ الإجمالي فوراً!</li>
        </ol>

        <h2 class="text-2xl font-bold mb-4 mt-8 text-athek-primary">أهم المنتجات التي يمكنك شراؤها باستخدام الكوبون</h2>
        <p class="mb-4 text-gray-600 leading-loose">
            يتيح لك كود الخصم <strong>${safeCode}</strong> التوفير على مجموعة واسعة من فئات المنتجات. 
            من الأزياء العصرية التي تواكب أحدث خطوط الموضة، إلى الإلكترونيات المتطورة، ومستحضرات التجميل الفاخرة، وحتى المستلزمات المنزلية. 
            لا تفوت الفرصة لتجديد خزانة ملابسك أو ترقية أجهزتك المنزلية بأسعار لا تقبل المنافسة.
            تذكر أن الكود قد يكون فعالاً على المنتجات غير المخفضة وأحياناً يوفر خصماً إضافياً على المنتجات التي عليها تخفيضات، مما يضاعف توفيرك.
        </p>

        <h2 class="text-2xl font-bold mb-4 mt-8 text-athek-primary">لماذا تختار تطبيق اثق (Athek) للكوبونات؟</h2>
        <p class="mb-4 text-gray-600 leading-loose">
            نحن في <strong>تطبيق اثق</strong> نؤمن بأن التسوق الذكي هو حق للجميع. فريقنا يعمل على مدار الساعة للتحقق من فعالية الكوبونات وتحديثها باستمرار لضمان حصولك على تجربة خالية من المتاعب.
            نحن لا نقدم مجرد أكواد خصم، بل نبني جسراً من الثقة بين المتسوق وأفضل العلامات التجارية.
            عند استخدامك لموقعنا، أنت تضمن الحصول على:
        </p>
        <ul class="list-disc list-inside mb-6 space-y-2 text-gray-600 leading-loose pr-4">
            <li>أكواد خصم فعالة ومحدثة يومياً لـ ${safeMerchant} وغيره من المتاجر.</li>
            <li>تجربة مستخدم سهلة وسريعة بدون إعلانات مزعجة.</li>
            <li>عروض حصرية لا تجدها في أي مكان آخر.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 mt-8 text-athek-primary">الخلاصة</h2>
        <p class="mb-4 text-gray-600 leading-loose">
            لا تدع الفرصة تفوتك! استخدم كود خصم <strong>${safeCode}</strong> الآن واستمتع بتجربة تسوق فريدة وموفرة من <strong>${safeMerchant}</strong>. 
            حمل تطبيق اثق اليوم وكن أول من يعلم بأحدث العروض والخصومات في المملكة العربية السعودية والخليج.
            وفر مالك، وتسوق بذكاء، وثق دائماً في خياراتنا لك.
        </p>
    </article>
    `;
}
