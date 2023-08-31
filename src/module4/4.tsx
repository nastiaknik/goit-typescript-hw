import { createContext, useMemo, useState, useContext, ReactNode } from "react";
import noop from "lodash/noop";

// You're applying context to your menu, and now you need to type it:

// 1. Describe the type SelectedMenu: This should be an object containing an id of type MenuIds.

// 2. Describe the type MenuSelected: This type is an object that contains selectedMenu.

// 3. Describe the type MenuAction: This type represents an object with a method onSelectedMenu that takes
// an object of type SelectedMenu as an argument and returns void.

// 4. Describe the type PropsProvider: Describe the correct type for children.

// 5. Describe the type PropsMenu: Describe the type for menus, it should be of type Menu.

type MenuIds = "first" | "second" | "last";
type Menu = { id: MenuIds; title: string };
type SelectedMenu = { id: MenuIds };
type MenuSelected = { selectedMenu: SelectedMenu };

const MenuSelectedContext = createContext<MenuSelected>({
  selectedMenu: { id: "first" },
});

type MenuAction = { onSelectedMenu: (selectedMenu: SelectedMenu) => void };

const MenuActionContext = createContext<MenuAction>({
  onSelectedMenu: noop,
});

type PropsProvider = {
  children: ReactNode;
};

function MenuProvider({ children }: PropsProvider) {
  // Додати тип для SelectedMenu він повинен містити { id }
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>({
    id: "first",
  });

  const menuContextAction = useMemo(
    () => ({
      onSelectedMenu: setSelectedMenu,
    }),
    []
  );

  const menuContextSelected = useMemo(
    () => ({
      selectedMenu,
    }),
    [selectedMenu]
  );

  return (
    <MenuActionContext.Provider value={menuContextAction}>
      <MenuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </MenuSelectedContext.Provider>
    </MenuActionContext.Provider>
  );
}

type PropsMenu = {
  menus: Menu[];
};

function MenuComponent({ menus }: PropsMenu) {
  const { onSelectedMenu } = useContext(MenuActionContext);
  const { selectedMenu } = useContext(MenuSelectedContext);

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        margin: "15px auto 15px",
        padding: "5px",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      {menus.map((menu) => (
        <div
          key={menu.id}
          style={{
            backgroundColor:
              selectedMenu.id === menu.id ? "#fca311" : "#007bff",
            cursor: "pointer",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            margin: "5px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "20px",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => onSelectedMenu({ id: menu.id })}
        >
          {menu.title}
        </div>
      ))}
    </div>
  );
}

export function ComponentApp() {
  const menus: Menu[] = [
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

  return (
    <MenuProvider>
      <MenuComponent menus={menus} />
    </MenuProvider>
  );
}
