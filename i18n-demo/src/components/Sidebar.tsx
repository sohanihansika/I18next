
import { useTranslation } from "react-i18next";

interface SidebarProps {
  currentPage: string;
  onPageChange: (id: string) => void;

}
const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange}) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'essentials',label: t('sidebar.essentials') },
    { id: 'interpolation',label: t('sidebar.interpolation') },
    { id: 'formatting',label: t('sidebar.formatting') },
    { id: 'plurals',label: t('sidebar.plurals') },
    { id: 'nesting',label: t('sidebar.nesting') },
    { id: 'context',label: t('sidebar.context') },
    { id: 'fallback',label: t('sidebar.fallback') }
  ];

  const handleItemClick = (id: string) => {
    onPageChange(id);
    
  };

  return (
    <>
        <nav className="p-4">
          
          <ul className="space-y-2">
            {menuItems.map((item) => {
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={currentPage === item.id ? 'active' : ''}

                  >
                   
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
};

export default Sidebar;