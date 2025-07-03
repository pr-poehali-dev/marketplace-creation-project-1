import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CatalogSection = () => {
  const wreaths = [
    {
      id: 1,
      name: 'Венок из роз "Вечная память"',
      price: 4500,
      originalPrice: 5200,
      image: "/placeholder.svg",
      category: "Из роз",
      rating: 4.8,
      reviews: 24,
      delivery: "2 часа",
      available: true,
    },
    {
      id: 2,
      name: 'Венок из хризантем "Последний путь"',
      price: 3200,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Из хризантем",
      rating: 4.9,
      reviews: 15,
      delivery: "1 час",
      available: true,
    },
    {
      id: 3,
      name: 'Венок траурный "Классический"',
      price: 2800,
      originalPrice: 3100,
      image: "/placeholder.svg",
      category: "Классические",
      rating: 4.7,
      reviews: 32,
      delivery: "2 часа",
      available: true,
    },
    {
      id: 4,
      name: 'Венок из гвоздик "Скорбь"',
      price: 3800,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Из гвоздик",
      rating: 4.6,
      reviews: 18,
      delivery: "1.5 часа",
      available: false,
    },
    {
      id: 5,
      name: 'Венок смешанный "Прощание"',
      price: 5200,
      originalPrice: 5800,
      image: "/placeholder.svg",
      category: "Смешанные",
      rating: 4.9,
      reviews: 41,
      delivery: "2 часа",
      available: true,
    },
    {
      id: 6,
      name: 'Венок из лилий "Белая память"',
      price: 4100,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Из лилий",
      rating: 4.8,
      reviews: 29,
      delivery: "1 час",
      available: true,
    },
  ];

  const categories = [
    { name: "Все венки", count: 156, active: true },
    { name: "Из роз", count: 24 },
    { name: "Из хризантем", count: 31 },
    { name: "Классические", count: 45 },
    { name: "Из гвоздик", count: 18 },
    { name: "Смешанные", count: 22 },
    { name: "Из лилий", count: 16 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог венков
          </h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий венок для достойного прощания
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={
                category.active ? "bg-purple-700 hover:bg-purple-800" : ""
              }
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-4 mb-8 justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Фильтры
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="ArrowUpDown" size={16} className="mr-2" />
              Сортировка
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Показано {wreaths.length} из 156 венков
          </div>
        </div>

        {/* Каталог */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wreaths.map((wreath) => (
            <Card
              key={wreath.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={wreath.image}
                  alt={wreath.name}
                  className="w-full h-48 object-cover"
                />
                {wreath.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-red-500">
                    Скидка{" "}
                    {Math.round(
                      ((wreath.originalPrice - wreath.price) /
                        wreath.originalPrice) *
                        100,
                    )}
                    %
                  </Badge>
                )}
                <Badge
                  variant={wreath.available ? "default" : "destructive"}
                  className="absolute top-2 right-2"
                >
                  {wreath.available ? "В наличии" : "Под заказ"}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-xs">
                    {wreath.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                    <span className="text-sm font-medium">{wreath.rating}</span>
                    <span className="text-xs text-gray-500">
                      ({wreath.reviews})
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg">{wreath.name}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-700">
                      {wreath.price.toLocaleString()} ₽
                    </span>
                    {wreath.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {wreath.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <Icon name="Truck" size={16} />
                  <span>Доставка: {wreath.delivery}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-purple-700 hover:bg-purple-800"
                    disabled={!wreath.available}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать ещё венки
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
