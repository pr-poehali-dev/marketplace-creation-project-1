import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ВенокМаркет</h3>
            <p className="text-gray-300 mb-4">
              Профессиональные погребальные венки с доставкой по городу.
              Работаем 24/7 в любое время.
            </p>
            <div className="flex gap-4">
              <Icon name="Phone" size={20} className="text-gray-400" />
              <Icon name="Mail" size={20} className="text-gray-400" />
              <Icon name="MessageCircle" size={20} className="text-gray-400" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Венки из роз
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Венки из хризантем
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Классические венки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Венки из гвоздик
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Смешанные венки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Срочные заказы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Работа с похоронными домами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Индивидуальный дизайн
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Доставка в регионы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>8 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Круглосуточно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Примерная, 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@venokmarket.ru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ВенокМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
