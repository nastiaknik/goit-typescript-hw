import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, useState, useContext } from "react";
import noop from "lodash/noop";
const MenuSelectedContext = createContext({
    selectedMenu: { id: "first" },
});
const MenuActionContext = createContext({
    onSelectedMenu: noop,
});
function MenuProvider({ children }) {
    // Додати тип для SelectedMenu він повинен містити { id }
    const [selectedMenu, setSelectedMenu] = useState({
        id: "first",
    });
    const menuContextAction = useMemo(() => ({
        onSelectedMenu: setSelectedMenu,
    }), []);
    const menuContextSelected = useMemo(() => ({
        selectedMenu,
    }), [selectedMenu]);
    return (_jsx(MenuActionContext.Provider, { value: menuContextAction, children: _jsx(MenuSelectedContext.Provider, { value: menuContextSelected, children: children }) }));
}
function MenuComponent({ menus }) {
    const { onSelectedMenu } = useContext(MenuActionContext);
    const { selectedMenu } = useContext(MenuSelectedContext);
    return (_jsx("div", { style: {
            marginTop: "50px",
            display: "flex",
            margin: "15px auto 15px",
            padding: "5px",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
        }, children: menus.map((menu) => (_jsx("div", { style: {
                backgroundColor: selectedMenu.id === menu.id ? "#fca311" : "#007bff",
                cursor: "pointer",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                margin: "5px",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                fontSize: "20px",
                transition: "background-color 0.3s ease",
            }, onClick: () => onSelectedMenu({ id: menu.id }), children: menu.title }, menu.id))) }));
}
export function ComponentApp() {
    const menus = [
        {
            id: "first",
            title: "first",
        },
        {
            id: "second",
            title: "second",
        },
        {
            id: "last",
            title: "last",
        },
    ];
    return (_jsx(MenuProvider, { children: _jsx(MenuComponent, { menus: menus }) }));
}
