import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Потолки НТ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                О нас
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Услуги
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Наши работы
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
            <a href="tel:+73435000000" className="hidden sm:inline-flex font-semibold text-blue-600">
              +7 (3435) 00-00-00
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Натяжные потолки в Нижнем Тагиле</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Натяжные потолки <span className="text-blue-600">под ключ</span> за 1 день
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Устанавливаем глянцевые, матовые и многоуровневые потолки в Нижнем Тагиле.
                Бесплатный замер, гарантия 15 лет и чистая работа без пыли и грязи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Вызвать замерщика
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Ruler" className="h-6 w-6" />
                    <span className="font-semibold">Бесплатный замер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" className="h-6 w-6" />
                    <span className="font-semibold">Монтаж за 1 день</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="h-6 w-6" />
                    <span className="font-semibold">Гарантия 15 лет</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О нас</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Устанавливаем натяжные потолки в Нижнем Тагиле и пригороде с заботой о вашем ремонте
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Делаем потолки, которые радуют годами</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Более 8 лет монтируем натяжные потолки в квартирах, домах и коммерческих помещениях.
                Работаем только с сертифицированными полотнами, аккуратно и в срок. После нас остаётся
                идеальный потолок и чистота — мусор увозим с собой.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">8+ лет</p>
                  <p className="text-slate-600">на рынке Тагила</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">2500+</p>
                  <p className="text-slate-600">довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">15 лет</p>
                  <p className="text-slate-600">гарантия на потолок</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">1 день</p>
                  <p className="text-slate-600">средний срок монтажа</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/193eb7c2-2e0b-4f2c-ab2d-e8a0a1f803ce/files/d3d930c1-8060-4e7b-9ec8-3aef0f9b7370.jpg"
                alt="Монтаж натяжного потолка"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Любые натяжные потолки под ваш интерьер и бюджет
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Глянцевые и матовые</CardTitle>
                <CardDescription>
                  Классические одноуровневые потолки в любом цвете. Визуально увеличивают пространство.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Более 150 оттенков на выбор</li>
                  <li>* Глянцевая и матовая фактура</li>
                  <li>* Идеально ровная поверхность</li>
                  <li>* Влагостойкость и долговечность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Многоуровневые потолки</CardTitle>
                <CardDescription>Дизайнерские конструкции с подсветкой для гостиной и спальни.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Сложные формы и фигуры</li>
                  <li>* Скрытая LED-подсветка</li>
                  <li>* Парящие потолки</li>
                  <li>* Индивидуальный дизайн</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Фотопечать и звёздное небо</CardTitle>
                <CardDescription>Эксклюзивные потолки с любым изображением или эффектом звёзд.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Фотопечать высокого качества</li>
                  <li>* Эффект «звёздное небо»</li>
                  <li>* Потолки для детских</li>
                  <li>* Любой рисунок на выбор</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши работы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Потолки, которые мы установили клиентам в Нижнем Тагиле
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-56 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://cdn.poehali.dev/projects/193eb7c2-2e0b-4f2c-ab2d-e8a0a1f803ce/files/4239da5a-cf5a-436b-bd83-c8dd9827cb9b.jpg"
                  alt="Глянцевый потолок в гостиной"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Глянцевый потолок в гостиной</CardTitle>
                <CardDescription>
                  Белое глянцевое полотно со скрытой LED-подсветкой по периметру. Монтаж за один день.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Глянец</Badge>
                  <Badge variant="outline">LED-подсветка</Badge>
                  <Badge variant="outline">22 м²</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="MapPin" className="h-4 w-4 text-blue-600" />
                  <span>ЖК «Гальянка», Нижний Тагил</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-56 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/193eb7c2-2e0b-4f2c-ab2d-e8a0a1f803ce/files/d639e121-0c48-4594-b4cd-bc2929c7ed52.jpg"
                  alt="Многоуровневый потолок в спальне"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Многоуровневый потолок в спальне</CardTitle>
                <CardDescription>
                  Матовое полотно с точечными светильниками и тёплой подсветкой для уютной атмосферы.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Мат</Badge>
                  <Badge variant="outline">2 уровня</Badge>
                  <Badge variant="outline">Споты</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="MapPin" className="h-4 w-4 text-blue-600" />
                  <span>Частный дом, Нижний Тагил</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Закажите бесплатный замер</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Замерщик приедет в удобное время, рассчитает стоимость на месте и без обязательств.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Работаем по всему Нижнему Тагилу и ближайшим посёлкам. Звоните или оставьте заявку —
                перезвоним в течение 15 минут.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (3435) 00-00-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp / Telegram</p>
                    <p className="text-slate-300">+7 (900) 000-00-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-slate-300">г. Нижний Тагил, ул. Ленина, 1</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Заполните форму — рассчитаем стоимость вашего потолка.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Площадь помещения</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Например, 18 м²"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Комментарий</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Какой потолок хотите? Глянец, мат, подсветка..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Получить расчёт
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">Потолки НТ</div>
            <p className="text-center md:text-right">
              © 2026 Потолки НТ. Натяжные потолки под ключ в Нижнем Тагиле.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}