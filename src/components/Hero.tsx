import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Погребальные венки
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Достойное прощание с близкими людьми
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              <Icon name="Clock" size={20} className="mr-2" />
              Срочный заказ 24/7
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Icon
                name="Clock"
                size={48}
                className="mx-auto mb-4 text-yellow-300"
              />
              <h3 className="text-xl font-semibold mb-2">Доставка за 2 часа</h3>
              <p className="text-purple-100">По всему городу в любое время</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Icon
                name="Building"
                size={48}
                className="mx-auto mb-4 text-blue-300"
              />
              <h3 className="text-xl font-semibold mb-2">
                Работа с похоронными домами
              </h3>
              <p className="text-purple-100">
                Специальные условия для партнёров
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Icon
                name="HeartHandshake"
                size={48}
                className="mx-auto mb-4 text-green-300"
              />
              <h3 className="text-xl font-semibold mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-purple-100">
                Поможем подобрать подходящий венок
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
