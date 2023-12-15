const data = [
    {
      "Id": 1,
      "FoodA": "ဆူးပုတ်ရွက် ",
      "FoodB": "ဆိတ်သား ",
      "Description": "မူးဝေ "
    },
    {
      "Id": 2,
      "FoodA": "ကိုကိုး(ဖျော်ရည်)",
      "FoodB": "ပဲမြစ် ",
      "Description": "မူးဝေ "
    },
    {
      "Id": 3,
      "FoodA": "ဝက်သား",
      "FoodB": "ဒေါင်းသား ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 4,
      "FoodA": "ဝက်သား ",
      "FoodB": "ပေရည်ပေသီး ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 5,
      "FoodA": "ရှောက်သီး ",
      "FoodB": "စောင်းလျှားသီး ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 6,
      "FoodA": "ခိုသား ",
      "FoodB": "စောင်းလျားသီး ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 7,
      "FoodA": "ဆီးသီး",
      "FoodB": "စားတော်ပဲ ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 8,
      "FoodA": "ဘဲဥ",
      "FoodB": "ဗျိုင်းသား ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 9,
      "FoodA": "ကျွဲသား ",
      "FoodB": "ကြာရိုးကြာစွယ် ",
      "Description": "ဝမ်းလျှော "
    },
    {
      "Id": 10,
      "FoodA": "ကြက်သား ",
      "FoodB": "ကြက်ဟင်းခါးသီး ",
      "Description": "အော့အန် "
    },
    {
      "Id": 11,
      "FoodA": "အာလူး",
      "FoodB": "ကြက်ဟင်းခါးသီး ",
      "Description": "အော့အန် "
    },
    {
      "Id": 12,
      "FoodA": "စိမ်းစားဥ ",
      "FoodB": "ရှောက်သီး ",
      "Description": "အော့အန် "
    },
    {
      "Id": 13,
      "FoodA": "ဘဲဥ ",
      "FoodB": "ဖရဲသီး ",
      "Description": "အော့အန် "
    },
    {
      "Id": 14,
      "FoodA": "သံပုရာသီး",
      "FoodB": "ပဲတကော ",
      "Description": "အော့အန် "
    },
    {
      "Id": 15,
      "FoodA": "ပျားရည် ",
      "FoodB": "ပိန္နဲသီး ",
      "Description": "အော့အန် "
    },
    {
      "Id": 16,
      "FoodA": "စိမ်းစားဥ ",
      "FoodB": "ချိုချဉ် ",
      "Description": "အော့အန် "
    },
    {
      "Id": 17,
      "FoodA": "လက်ဖက်သုပ် ",
      "FoodB": "မယ်ဇလီရွက် ",
      "Description": "အော့အန် "
    },
    {
      "Id": 18,
      "FoodA": "နို့အေးချောင်း ",
      "FoodB": "သခွါးသီး ",
      "Description": "ရင်ကြပ် "
    },
    {
      "Id": 19,
      "FoodA": "နို့အေးချောင်း ",
      "FoodB": "စိမ်းစားဥ ",
      "Description": "ရင်ကြပ် "
    },
    {
      "Id": 20,
      "FoodA": "ကြက်သား ",
      "FoodB": "ကြောင်လျှာသီး ",
      "Description": "အကြောတက်"
    },
    {
      "Id": 21,
      "FoodA": "ကြက်ဟင်းခါးသီး ",
      "FoodB": "မှို ",
      "Description": "အကြောတက် "
    },
    {
      "Id": 22,
      "FoodA": "ကြက်ဥ ",
      "FoodB": "တမာရွက် ",
      "Description": "အကြောတက် "
    },
    {
      "Id": 23,
      "FoodA": "ကင်းပုံရွက် ",
      "FoodB": "နှမ်း ",
      "Description": "အကြောတက် "
    },
    {
      "Id": 24,
      "FoodA": "ရွှေဖရုံသီး",
      "FoodB": "ပုစွန် ",
      "Description": "ဝမ်းကိုက်နာ "
    },
    {
      "Id": 25,
      "FoodA": "ခိုသား ",
      "FoodB": "ငုံးသား ",
      "Description": "ရင်ပူ "
    },
    {
      "Id": 26,
      "FoodA": "ဒူးရင်းသီး ",
      "FoodB": "အရက် ",
      "Description": "ရင်ပူ "
    },
    {
      "Id": 27,
      "FoodA": "ကဏန်း ",
      "FoodB": "ခရမ်းသီး ",
      "Description": "အဆိပ်သင့် "
    },
    {
      "Id": 28,
      "FoodA": "နွားနို့ ",
      "FoodB": "ငါးအစိမ်း ",
      "Description": "အဆိပ်သင့် "
    },
    {
      "Id": 29,
      "FoodA": "အမဲသား",
      "FoodB": "တရုတ်ကြက်သွန်မိတ် ",
      "Description": "အဆိပ်သင့် "
    },
    {
      "Id": 30,
      "FoodA": "မင်းကွတ်သီး ",
      "FoodB": "သကြား ",
      "Description": "သေ "
    },
    {
      "Id": 31,
      "FoodA": "ရေခဲမုန့် ",
      "FoodB": "ဂျင်းသုပ် ",
      "Description": "သေ "
    },
    {
      "Id": 32,
      "FoodA": "လက်ဖက်သုပ် ",
      "FoodB": "ကျွဲခေါင်းသီး ",
      "Description": "သေ "
    },
    {
      "Id": 33,
      "FoodA": "သံပုရာသီး ",
      "FoodB": "ကျွဲခေါင်းသီး ",
      "Description": "သေ "
    },
    {
      "Id": 34,
      "FoodA": "ဖရုံသီး ",
      "FoodB": "ခိုသား ",
      "Description": "သေ "
    },
    {
      "Id": 35,
      "FoodA": "ကြောင်လျှာသီး ",
      "FoodB": "ငါးသေတ္တာ ",
      "Description": "သေ "
    },
    {
      "Id": 36,
      "FoodA": "ကြောင်လျှာသီး",
      "FoodB": "ပဲဒလက် ",
      "Description": "သေ "
    },
    {
      "Id": 37,
      "FoodA": "ကြောင်လျှာသီး ",
      "FoodB": "စပါးကြီးမြွေ ",
      "Description": "သေ "
    },
    {
      "Id": 38,
      "FoodA": "ချင်း(ဂျင်း)",
      "FoodB": "သင်္ဘောသီး",
      "Description": "သေ "
    },
    {
      "Id": 39,
      "FoodA": "ချင်း(ဂျင်း) ",
      "FoodB": "ခိုသား ",
      "Description": "သေ "
    },
    {
      "Id": 40,
      "FoodA": "ထန်းလျက် ",
      "FoodB": "နလင်ကျော် ",
      "Description": "သေ "
    },
    {
      "Id": 41,
      "FoodA": "ထန်းလျက် ",
      "FoodB": "(၂၇)ပါးဆေး ",
      "Description": "သေ "
    },
    {
      "Id": 42,
      "FoodA": "ထန်းလျက် ",
      "FoodB": "သပြေသီး ",
      "Description": "သေ "
    },
    {
      "Id": 43,
      "FoodA": "ဂွေးသီး ",
      "FoodB": "အာတာလွတ်ဥ ",
      "Description": "သေ "
    },
    {
      "Id": 44,
      "FoodA": "ဂွေးသီး ",
      "FoodB": "နို့အေးချောင်း ",
      "Description": "သေ "
    },
    {
      "Id": 45,
      "FoodA": "ပီလောပီနှံ ",
      "FoodB": "မျှစ်ချဉ်",
      "Description": "သေ "
    },
    {
      "Id": 46,
      "FoodA": "ပီလောပီနှံ ",
      "FoodB": "ပဲကြားလှော် ",
      "Description": "သေ "
    },
    {
      "Id": 47,
      "FoodA": "ပီလောပီနှံ ",
      "FoodB": "ဒေါင်းသား ",
      "Description": "သေ "
    },
    {
      "Id": 48,
      "FoodA": "ကြက်ဆူသီး ",
      "FoodB": "ငှက်သား ",
      "Description": "သေ "
    },
    {
      "Id": 49,
      "FoodA": "ကျေးသား ",
      "FoodB": "ဘူးသီး ",
      "Description": "သေ "
    },
    {
      "Id": 50,
      "FoodA": "ဝက်သား ",
      "FoodB": "ဗျိူင်းသား ",
      "Description": "သေ "
    },
    {
      "Id": 51,
      "FoodA": "ဝက်သား ",
      "FoodB": "ထန်းရည်ချို ",
      "Description": "သေ "
    },
    {
      "Id": 52,
      "FoodA": "ဝက်သား ",
      "FoodB": "ကြာရိုးကြာစွယ် ",
      "Description": "သေ "
    },
    {
      "Id": 53,
      "FoodA": "ကျွဲသား ",
      "FoodB": "ဆိတ်သား ",
      "Description": "သေ "
    },
    {
      "Id": 54,
      "FoodA": "နို့ဆီ",
      "FoodB": "ကိုးပါးဆေးလျက်ဆား ",
      "Description": "သေ "
    },
    {
      "Id": 55,
      "FoodA": "မိုင်လို(အမှုန့်)",
      "FoodB": "ပဲမြစ် ",
      "Description": "သေ "
    },
    {
      "Id": 56,
      "FoodA": "ကြံ့သား ",
      "FoodB": "ငါးအမျိုးမျိုး ",
      "Description": "သေ "
    },
    {
      "Id": 57,
      "FoodA": "ချောကလက် ",
      "FoodB": "ပဲမြစ် ",
      "Description": "သေ "
    },
    {
      "Id": 58,
      "FoodA": "ချောကလက် ",
      "FoodB": "စောင်းလျားသီး ",
      "Description": "သေ "
    },
    {
      "Id": 59,
      "FoodA": "သိုးသား ",
      "FoodB": "စောင်းလျားသီး ",
      "Description": "သေ "
    },
    {
      "Id": 60,
      "FoodA": "တညင်းသီး ",
      "FoodB": "ရှိုန်းခို ",
      "Description": "သေ "
    },
    {
      "Id": 61,
      "FoodA": "တညင်းသီး ",
      "FoodB": "ဒူးရင်းသီး ",
      "Description": "သေ "
    },
    {
      "Id": 62,
      "FoodA": "တညင်းသီး ",
      "FoodB": "မှို ",
      "Description": "သေ "
    },
    {
      "Id": 63,
      "FoodA": "နွားနို့ ",
      "FoodB": "မှို ",
      "Description": "သေ "
    },
    {
      "Id": 64,
      "FoodA": "ဖားသား ",
      "FoodB": "မှို ",
      "Description": "သေ "
    },
    {
      "Id": 65,
      "FoodA": "ပျားရည် ",
      "FoodB": "အုန်းသီး ",
      "Description": "သေ "
    },
    {
      "Id": 66,
      "FoodA": "ပျားရည် ",
      "FoodB": "သြဇာသီး ",
      "Description": "သေ "
    },
    {
      "Id": 67,
      "FoodA": "ပျားရည် ",
      "FoodB": "ဥသျှစ်သီး ",
      "Description": "သေ "
    },
    {
      "Id": 68,
      "FoodA": "နွားနို့ ",
      "FoodB": "သံပုရာသီး ",
      "Description": "သေ "
    },
    {
      "Id": 69,
      "FoodA": "လယ်ကဏန်း ",
      "FoodB": "မှို ",
      "Description": "သေ "
    },
    {
      "Id": 70,
      "FoodA": "ကျွဲကောသီး ",
      "FoodB": "သံပုရာသီး ",
      "Description": "သေ "
    },
    {
      "Id": 71,
      "FoodA": "ထန်းသီး/ ရည် ",
      "FoodB": "ငှက်ပျောသီး ",
      "Description": "သေ "
    },
    {
      "Id": 72,
      "FoodA": "ကိုင်းဥ ",
      "FoodB": "ပုစွန်ချဉ် ",
      "Description": "သေ "
    },
    {
      "Id": 73,
      "FoodA": "အမဲသား ",
      "FoodB": "ခရု ",
      "Description": "သေ "
    },
    {
      "Id": 74,
      "FoodA": "ယုန်သား ",
      "FoodB": "မှို ",
      "Description": "သေ "
    },
    {
      "Id": 75,
      "FoodA": "ရေခဲမုန့် ",
      "FoodB": "ချင်းသုပ် ",
      "Description": "သေ "
    },
    {
      "Id": 76,
      "FoodA": "အုန်းနို့ခေါက်ဆွဲ ",
      "FoodB": "ပက်စီ ",
      "Description": "သေ "
    },
    {
      "Id": 77,
      "FoodA": "နွားနို့ ",
      "FoodB": "အချဉ်အမျိုးအမျိုး ",
      "Description": "သေ "
    },
    {
      "Id": 78,
      "FoodA": "ကျွှဲခေါင်းသီး ",
      "FoodB": "သံပုရာသီး ",
      "Description": "သေ "
    },
    {
      "Id": 79,
      "FoodA": "ပီလောပီနံ ",
      "FoodB": "အချဉ်အမျိုးမျိူး ",
      "Description": "သေ "
    },
    {
      "Id": 80,
      "FoodA": "ရှောက်သီး ",
      "FoodB": "နွားနို့၊ နို့ရည်",
      "Description": "သေ "
    },
    {
      "Id": 81,
      "FoodA": "ပျားရည် ",
      "FoodB": "ရှားစောင်း ",
      "Description": "သေ "
    },
    {
      "Id": 82,
      "FoodA": "လက်ဖက်ပုပ် ",
      "FoodB": "မဲဇလီအဖူး/အရွက် ",
      "Description": "သေ "
    },
    {
      "Id": 83,
      "FoodA": "စောင်းလျား ",
      "FoodB": "ရှောက် ",
      "Description": "သေ "
    },
    {
      "Id": 84,
      "FoodA": "မတ်ပဲ",
      "FoodB": "မုန်လာဥ ",
      "Description": "သေ "
    },
    {
      "Id": 85,
      "FoodA": "ခံသီး ",
      "FoodB": "ငရုတ်ကောင်း ",
      "Description": "သေ "
    },
    {
      "Id": 86,
      "FoodA": "သံပရာ ",
      "FoodB": "ပတဲကော ",
      "Description": "သေ "
    },
    {
      "Id": 87,
      "FoodA": "ကင်းပိန့်ရွက် ",
      "FoodB": "နှမ်းပတ်နှင်းမုန့် ",
      "Description": "သေ "
    },
    {
      "Id": 88,
      "FoodA": "အင်ဥ ",
      "FoodB": "ဝါးမျှစ် ",
      "Description": "သေ "
    },
    {
      "Id": 89,
      "FoodA": "ဝါစေ့ဆီ ",
      "FoodB": "ဝက်သား ",
      "Description": "သေ "
    },
    {
      "Id": 90,
      "FoodA": "ပဲဒလက်စေ့ ",
      "FoodB": "ဆိတ်သား ",
      "Description": "သေ "
    },
    {
      "Id": 91,
      "FoodA": "နနွင်း ",
      "FoodB": "မိကျောင်းသား ",
      "Description": "သေ "
    },
    {
      "Id": 92,
      "FoodA": "ကကတစ် ",
      "FoodB": "ကြာဟင်းရွက် ",
      "Description": "သေ "
    },
    {
      "Id": 93,
      "FoodA": "သခွားသီး ",
      "FoodB": "ရေခဲချောင်း ",
      "Description": "ရင်ကြပ် "
    },
    {
      "Id": 94,
      "FoodA": "စိမ်းစာဥ",
      "FoodB": "ရေခဲချောင်း ",
      "Description": "ရင်ကြပ် "
    },
    {
      "Id": 95,
      "FoodA": "ချိုချဉ်",
      "FoodB": "ပဲငါးပိ",
      "Description": "သေ "
    },
    {
      "Id": 96,
      "FoodA": "ခြေလေးချောင်းမျိုး",
      "FoodB": "ခရုသား",
      "Description": "သေ "
    },
    {
      "Id": 97,
      "FoodA": "ခြင်ဆီ",
      "FoodB": "ထောပတ်",
      "Description": "သေ "
    },
    {
      "Id": 98,
      "FoodA": "ကလောဥ",
      "FoodB": "ဒန့်သလွန်",
      "Description": "သေ "
    },
    {
      "Id": 99,
      "FoodA": "ကလောဥ",
      "FoodB": "ဇီးဖြူသီး",
      "Description": "သေ "
    },
    {
      "Id": 100,
      "FoodA": "ကလောဥ",
      "FoodB": "လက်လုပ်ချဉ်များ",
      "Description": "သေ "
    },
    {
      "Id": 101,
      "FoodA": "ကြက်ဆူဆီ ",
      "FoodB": "ခါသား ",
      "Description": "သေ "
    },
    {
      "Id": 102,
      "FoodA": "ကြက်ဆူဆီ ",
      "FoodB": "ငှက်သား ",
      "Description": "သေ "
    },
    {
      "Id": 103,
      "FoodA": "ကြက်ဆူဆီ ",
      "FoodB": "ဖွတ်သား ",
      "Description": "သေ "
    },
    {
      "Id": 104,
      "FoodA": "ကြက်ဆူဆီ ",
      "FoodB": "ဒေါင်းသား ",
      "Description": "သေ "
    },
    {
      "Id": 105,
      "FoodA": "ကြက်ဆူဆီ ",
      "FoodB": "ဥမျိုးစုံ ",
      "Description": "သေ "
    },
    {
      "Id": 106,
      "FoodA": "ကြက်သား ",
      "FoodB": "နို့ချဉ်အမျိုးမျိုး ",
      "Description": "သေ "
    },
    {
      "Id": 107,
      "FoodA": "ကြက်သား ",
      "FoodB": "အင်ဖူး ",
      "Description": "သေ "
    },
    {
      "Id": 108,
      "FoodA": "ကြက်သွန်ဖြူ ",
      "FoodB": "နို့ရည်၊ ",
      "Description": "သေ "
    },
    {
      "Id": 109,
      "FoodA": "ကြက်သွန်ဖြူ ",
      "FoodB": "ပျားရည် ",
      "Description": "သေ "
    },
    {
      "Id": 110,
      "FoodA": "ကြက်ဥ",
      "FoodB": "ပုဇွန်ချဉ်",
      "Description": "သေ "
    },
    {
      "Id": 111,
      "FoodA": "ကြက်ဥ",
      "FoodB": "အမ်ပီဆေးပြား",
      "Description": "သေ "
    },
    {
      "Id": 112,
      "FoodA": "ကြက်ဥ",
      "FoodB": "ခံသီး",
      "Description": "သေ "
    },
    {
      "Id": 113,
      "FoodA": "ကြေးခွက်",
      "FoodB": "အချဉ်သီး",
      "Description": "သေ "
    },
    {
      "Id": 114,
      "FoodA": "ကျွဲနို့",
      "FoodB": "ကြာစွယ်",
      "Description": "သေ "
    },
    {
      "Id": 115,
      "FoodA": "ကျွဲနို့",
      "FoodB": "ဖရုံသီး",
      "Description": "သေ "
    },
    {
      "Id": 116,
      "FoodA": "ကျောက်ဖရုံ",
      "FoodB": "အိုးမဲ",
      "Description": "သေ "
    },
    {
      "Id": 117,
      "FoodA": "ကောက်ညှင်း",
      "FoodB": "ရေငန်းသီး",
      "Description": "သေ "
    },
    {
      "Id": 118,
      "FoodA": "ကိုင်းဥ",
      "FoodB": "ပုဇွန်ချဉ်",
      "Description": "သေ "
    },
    {
      "Id": 119,
      "FoodA": "ကုလားပဲ",
      "FoodB": "နွားနို့",
      "Description": "သေ "
    },
    {
      "Id": 120,
      "FoodA": "ကုလားပဲ",
      "FoodB": "နို့ချဉ်၊ နို့ရည်",
      "Description": "သေ "
    },
    {
      "Id": 121,
      "FoodA": "ကျေးသား",
      "FoodB": "ကြက်ဆူဆီ",
      "Description": "သေ "
    },
    {
      "Id": 122,
      "FoodA": "ကုန်းငှက်သား",
      "FoodB": "ကြက်ဆူဆီ",
      "Description": "သေ "
    },
    {
      "Id": 123,
      "FoodA": "ကန့်ချူပ်နီ",
      "FoodB": "သေရည်",
      "Description": "သေ "
    },
    {
      "Id": 124,
      "FoodA": "ကန်စွန်းဖြစ်",
      "FoodB": "နှမ်းမှုန့်",
      "Description": "သေ "
    },
    {
      "Id": 125,
      "FoodA": "ဂင်ပိတ်ရွက်",
      "FoodB": "ပျားရည်",
      "Description": "သေ "
    },
    {
      "Id": 126,
      "FoodA": "ဂင်ပိတ်ရွက်",
      "FoodB": "ဥသျှစ်သီး",
      "Description": "သေ "
    },
    {
      "Id": 127,
      "FoodA": "ဂင်ပိတ်ရွက်",
      "FoodB": "နှမ်းဆီ ၊ နှမ်းဖတ်ချဉ်",
      "Description": "သေ "
    },
    {
      "Id": 128,
      "FoodA": "ကတိုး",
      "FoodB": "သရက်သီး",
      "Description": "သေ "
    },
    {
      "Id": 129,
      "FoodA": "ချောကလက်",
      "FoodB": "မြေပဲ",
      "Description": "တောက်"
    },
    {
      "Id": 130,
      "FoodA": "ကြောင်လျှာသီး",
      "FoodB": "ထန်းလျက်ချို",
      "Description": "ဝမ်းလျှော"
    },
    {
      "Id": 131,
      "FoodA": "ဝက်သား",
      "FoodB": "နို့ချဉ်",
      "Description": "ဝမ်းလျှော"
    },
    {
      "Id": 132,
      "FoodA": "ဝက်သား",
      "FoodB": "ကျွဲနို့",
      "Description": "ဝမ်းလျှော"
    },
    {
      "Id": 133,
      "FoodA": "သစ်ကြာသီး",
      "FoodB": "မြေဇာဥ",
      "Description": "အော့အန်"
    },
    {
      "Id": 134,
      "FoodA": "စိမ်းစားဥ",
      "FoodB": "ခိုသား",
      "Description": "အော့အန်"
    },
    {
      "Id": 135,
      "FoodA": "အင်သမင်နွယ်",
      "FoodB": "ပျားရည်",
      "Description": "အော့အန်"
    },
    {
      "Id": 136,
      "FoodA": "ပဲငပိ",
      "FoodB": "ချိုချဉ်",
      "Description": "အော့အန်"
    },
    {
      "Id": 137,
      "FoodA": "လက်ဖက်သုတ်",
      "FoodB": "မဲဇလီဖူးရွက်",
      "Description": "အော့အန်"
    },
    {
      "Id": 138,
      "FoodA": "သမင်သား",
      "FoodB": "ဝါဆီ",
      "Description": "ရင်ကြပ်"
    },
    {
      "Id": 139,
      "FoodA": "မျှစ်",
      "FoodB": "အင်ဥ",
      "Description": "သေ"
    },
    {
      "Id": 140,
      "FoodA": "တစောင်းဆူး",
      "FoodB": "မျှစ်",
      "Description": "ရင်ပူ"
    },
    {
      "Id": 141,
      "FoodA": "ပဲမုန့်",
      "FoodB": "မုန်လာမြစ်",
      "Description": "မူးဝေ"
    },
    {
      "Id": 142,
      "FoodA": "ဆူးပုပ်ရွက်",
      "FoodB": "ဆိတ်နို့၊ ဆိတ်သား",
      "Description": "မူးဝေ"
    },
    {
      "Id": 143,
      "FoodA": "ငါးသေတ္တာ",
      "FoodB": "ထိကရုံး",
      "Description": "မူးဝေ"
    },
    {
      "Id": 144,
      "FoodA": "နို့ဆီ",
      "FoodB": "၂၇ ပါးဆေး",
      "Description": "သေ"
    },
    {
      "Id": 145,
      "FoodA": "ထန်းလျက်",
      "FoodB": "ဘာမီတွန်",
      "Description": "သေ"
    },
    {
      "Id": 146,
      "FoodA": "ငါးရံ့သား",
      "FoodB": "ပွေးသား",
      "Description": "သေ"
    },
    {
      "Id": 147,
      "FoodA": "နို့အေးချောင်း",
      "FoodB": "ပွေးသား",
      "Description": "သေ"
    },
    {
      "Id": 148,
      "FoodA": "စိန် ၊ ဘတ်စပရို",
      "FoodB": "သံပရာသီး",
      "Description": "သေ"
    },
    {
      "Id": 149,
      "FoodA": "ခရမ်းပိန်း",
      "FoodB": "နို့ရည်",
      "Description": "သေ"
    },
    {
      "Id": 150,
      "FoodA": "သေရည်အရက်",
      "FoodB": "ဉာဏ်ရွက်",
      "Description": "သေ"
    },
    {
      "Id": 151,
      "FoodA": "သေရည်အရက်",
      "FoodB": "အေပီစီဆေးပြား",
      "Description": "သေ"
    },
    {
      "Id": 152,
      "FoodA": "ဒူးရင်းသီး",
      "FoodB": "ရှိန်းခို",
      "Description": "သေ"
    },
    {
      "Id": 153,
      "FoodA": "ရေငန်သီး",
      "FoodB": "ကောက်ညှင်း",
      "Description": "သေ"
    },
    {
      "Id": 154,
      "FoodA": "ဂျယ်လီ",
      "FoodB": "ကော်ဖီမစ်",
      "Description": "သေ"
    },
    {
      "Id": 155,
      "FoodA": "ပီလောပီနံဥ",
      "FoodB": "ပဲကြားလှော်",
      "Description": "သေ"
    },
    {
      "Id": 156,
      "FoodA": "ပီလောပီနံဥ",
      "FoodB": "မျှစ်ချဉ်",
      "Description": "သေ"
    },
    {
      "Id": 157,
      "FoodA": "ဆိုဒါ",
      "FoodB": "၉ ပါးဆေး",
      "Description": "သေ"
    },
    {
      "Id": 158,
      "FoodA": "ဘာမီတွန်",
      "FoodB": "တစ်ဖီ (အစိမ်းကဒ်)",
      "Description": "သေ"
    }
]
let datalength = data.length;
let container = document.querySelector('.container');
for (var i = 0; i < datalength; i++) {
    container.innerHTML += `<div class='card'>
         <p><span>${data[i].FoodA}</span> + <span>${data[i].FoodB}</span> = <span>${data[i].Description.trim()}</span></p>   
        </div>`;
}

let buttons = document.querySelectorAll('button');
let chosenCategory = "";
buttons.forEach((button) => { 
    
    button.addEventListener('click', () => { 
        
        chosenCategory = button.innerHTML;

        for (let i = 0; i < data.length; i++) { 
            if (data[i].Description.trim() == chosenCategory) {
                document.getElementsByClassName('card')[i].style.display = '';
                console.log(1);
            } else {
                document.getElementsByClassName('card')[i].style.display = 'none';
            }
        }
    })
})


