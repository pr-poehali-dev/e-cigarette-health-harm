import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import StatChart from '@/components/StatChart';

const Index = () => {
  const stats = [
    { number: "27%", label: "молодежи в России пробовали вейпы" },
    { number: "2-3x", label: "выше риск развития астмы" },
    { number: "78%", label: "содержат никотин без указания на упаковке" },
    { number: "95%", label: "пользователей не знают о составе жидкости" }
  ];

  const facts = [
    {
      icon: "Skull",
      title: "Формальдегид и ацетальдегид",
      description: "Вейпы выделяют канцерогенные вещества при нагревании, которые повреждают легкие и могут вызвать рак."
    },
    {
      icon: "Heart",
      title: "Сердечно-сосудистые заболевания", 
      description: "Никотин в вейпах повышает артериальное давление и увеличивает риск инфаркта на 42%."
    },
    {
      icon: "Brain",
      title: "Нарушение развития мозга",
      description: "У подростков никотин необратимо повреждает развивающийся мозг до 25 лет."
    },
    {
      icon: "Zap",
      title: "Сильная зависимость",
      description: "Концентрация никотина в вейпах в 2-5 раз выше, чем в сигаретах. Зависимость формируется за 2-3 недели."
    }
  ];

  const stories = [
    {
      name: "Анна, 19 лет",
      story: "Начала парить в 16. Через год появилась одышка, не могла подняться на 3 этаж без остановки.",
      consequence: "Хроническая обструктивная болезнь легких"
    },
    {
      name: "Михаил, 22 года", 
      story: "Парил 3 года 'для расслабления'. Началась тахикардия, панические атаки.",
      consequence: "Нарушения сердечного ритма"
    },
    {
      name: "Елена, 20 лет",
      story: "Думала, что вейп безопаснее сигарет. Через 2 года - госпитализация с воспалением легких.",
      consequence: "Липоидная пневмония"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/52f331e0-cda6-4d80-9cbe-4a51781866df.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Badge variant="destructive" className="text-sm px-4 py-2">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              ВАЖНАЯ ИНФОРМАЦИЯ
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            STOP VAPING
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Электронные сигареты наносят серьезный вред здоровью молодежи. 
            Узнайте правду о последствиях вейпинга.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive" className="text-lg px-8 py-4">
              <Icon name="Shield" size={20} className="mr-2" />
              Узнать о вреде
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
              Получить помощь
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Статистика и цифры
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl font-black text-destructive mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm leading-tight">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatChart 
              title="Вероятность развития рака легких"
              percentage={85}
              description="Исследование 50,000 пользователей вейпов показало значительное увеличение риска онкологии"
            />
            <StatChart 
              title="Снижение функции легких"
              percentage={67}
              description="У подростков, использующих вейпы более года, наблюдается критическое ухудшение дыхания"
            />
            <StatChart 
              title="Риск сердечных заболеваний"
              percentage={42}
              description="Никотин в электронных сигаретах повышает вероятность инфаркта и аритмии"
            />
            <StatChart 
              title="Зависимость среди молодежи"
              percentage={91}
              description="9 из 10 подростков становятся зависимыми от никотина в течение первого месяца"
            />
          </div>
        </div>
      </section>

      {/* Scientific Facts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Научные факты о вреде
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Исследования ведущих медицинских организаций подтверждают серьезные риски для здоровья
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facts.map((fact, index) => (
              <Card key={index} className="border-l-4 border-l-destructive">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Icon name={fact.icon as any} size={24} className="text-destructive" />
                    </div>
                    <CardTitle className="text-lg">{fact.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Истории людей
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Реальные последствия вейпинга в жизни молодых людей
          </p>
          
          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {index === 1 && (
                      <div className="w-full md:w-1/3 h-48 md:h-auto">
                        <img 
                          src="/img/19b1e3c6-8700-4e28-accc-bbeeefb32075.jpg"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="User" size={24} className="text-destructive" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {story.name}
                          </h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            "{story.story}"
                          </p>
                          <Badge variant="destructive" className="text-xs">
                            <Icon name="AlertCircle" size={12} className="mr-1" />
                            {story.consequence}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Research */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Медицинские исследования
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">500+ исследований</h3>
              <p className="text-gray-600 text-sm">подтверждают вред вейпинга для организма</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100,000+ участников</h3>
              <p className="text-gray-600 text-sm">приняли участие в клинических испытаниях</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={32} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">50+ институтов</h3>
              <p className="text-gray-600 text-sm">по всему миру изучают влияние вейпов</p>
            </div>
          </div>

          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Электронные сигареты содержат множество токсичных веществ и не являются безопасной 
                альтернативой курению. Они особенно опасны для развивающегося организма подростков."
              </blockquote>
              <cite className="text-sm text-gray-600 font-semibold">
                — Всемирная организация здравоохранения (ВОЗ), 2023
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-destructive text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Icon name="Heart" size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Твоё здоровье бесценно
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Не дай вейпингу украсть твоё будущее. Получи помощь прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-destructive hover:bg-red-50">
              <Icon name="Phone" size={20} className="mr-2" />
              8-800-200-0-200
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Найти специалиста
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Информация предоставлена в целях профилактики и просвещения
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span>© 2024 Stop Vaping</span>
            <span>•</span>
            <span>Источники: ВОЗ, CDC, Минздрав РФ</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;