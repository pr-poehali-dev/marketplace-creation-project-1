import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Профессиональный подход в трудные моменты
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Срочные заказы */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <Icon name="Clock" size={24} className="text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-red-800">
                    Срочные заказы 24/7
                  </CardTitle>
                  <p className="text-red-600">Работаем круглосуточно</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-red-600" />
                  <span>Доставка в течение 1-2 часов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-red-600" />
                  <span>Консультация по телефону</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-red-600" />
                  <span>Оплата при получении</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-red-600" />
                  <span>Индивидуальный подход</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Срочный заказ: 8 (800) 555-35-35
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Работа с похоронными домами */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Icon name="Building" size={24} className="text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-purple-800">
                    Работа с похоронными домами
                  </CardTitle>
                  <p className="text-purple-600">
                    Специальные условия для партнёров
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                  <span>Оптовые цены и скидки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                  <span>Быстрая доставка по городу</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                  <span>Персональный менеджер</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-purple-600"
                  />
                  <span>Отсрочка платежа</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Icon name="Handshake" size={16} className="mr-2" />
                  Стать партнёром
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Icon name="Mail" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Дополнительные услуги */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white rounded-full inline-block mb-4">
                <Icon name="Truck" size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Доставка в регионы</h4>
              <p className="text-gray-600">Отправляем по всей России</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white rounded-full inline-block mb-4">
                <Icon
                  name="HeartHandshake"
                  size={32}
                  className="text-purple-600"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Консультация психолога
              </h4>
              <p className="text-gray-600">Поддержка в трудные моменты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
