const traductions = {
    fr: {
        logo: "InfoHub", nav_dash: "Tableau de bord", nav_res: "Ressources", nav_mem: "Membres",
        nav_out: "Déconnexion", btn_theme: "Mode Sombre", title_stats: "Statistiques du Centre",
        title_manage: "Gestion des Ressources", search_placeholder: "Rechercher...",
        add_title: "Nouvel Ajout", btn_save: "Enregistrer", th_title: "Titre",
        th_author: "Auteur", th_cat: "Catégorie", th_actions: "Actions",
        th_name: "Nom", th_role: "Rôle", th_status: "Statut",
        kpi_res: "Ressources", kpi_mem: "Membres", kpi_emp: "Emprunts", kpi_cat: "Catégories"
    },
    en: {
        logo: "InfoHub", nav_dash: "Dashboard", nav_res: "Resources", nav_mem: "Members",
        nav_out: "Logout", btn_theme: "Dark Mode", title_stats: "Center Statistics",
        title_manage: "Resource Management", search_placeholder: "Search...",
        add_title: "Add New", btn_save: "Save", th_title: "Title",
        th_author: "Author", th_cat: "Category", th_actions: "Actions",
        th_name: "Name", th_role: "Role", th_status: "Status",
        kpi_res: "Resources", kpi_mem: "Members", kpi_emp: "Loans", kpi_cat: "Categories"
    },
    ar: {
        logo: "إنفوهب", nav_dash: "لوحة القيادة", nav_res: "الموارد", nav_mem: "الأعضاء",
        nav_out: "تسجيل الخروج", btn_theme: "الوضع الداكن", title_stats: "إحصائيات المركز",
        title_manage: "إدارة الموارد", search_placeholder: "بحث...",
        add_title: "إضافة جديدة", btn_save: "حفظ", th_title: "العنوان",
        th_author: "المؤلف", th_cat: "الفئة", th_actions: "الإجراءات",
        th_name: "الاسم", th_role: "الدور", th_status: "الحالة",
        kpi_res: "الموارد", kpi_mem: "الأعضاء", kpi_emp: "قروض", kpi_cat: "فئات"
    }
};

function changerLangue(lang) {
    console.log("Changement de langue vers : " + lang);
    localStorage.setItem('langueSauvee', lang);

    document.querySelectorAll('.lang-txt').forEach(el => {
        const cle = el.getAttribute('data-key');
        if (traductions[lang] && traductions[lang][cle]) {
            el.textContent = traductions[lang][cle];
        }
    });

    const searchBar = document.getElementById('searchBar');
    if (searchBar && traductions[lang]['search_placeholder']) {
        searchBar.placeholder = traductions[lang]['search_placeholder'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('langueSauvee') || 'fr';
    const select = document.getElementById('selectLangue');
    if (select) select.value = lang;
    changerLangue(lang);
});
   