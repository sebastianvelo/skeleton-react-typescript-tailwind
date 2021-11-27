import Action from "ui/components/action/Action";
import ButtonDropdown from "ui/components/button-dropdown/ButtonDropdown";
import Row from "ui/layout/row/Row";
import Size from "ui/common/types/size/Size";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { actions, dropdownActions } from "./mock";

const actionsSection: ComponentSectionProps = {
  title: "Actions",
  articles: [
    {
      title: { children: "Buttons loud" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <Action {...action} size={size} onClick={() => {}} />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { children: "Buttons quiet" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <Action {...action} size={size} onClick={() => {}} quiet />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { children: "Dropdown loud" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <ButtonDropdown
                  {...action}
                  actions={dropdownActions}
                  size={size}
                />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { children: "Dropdown quiet" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <ButtonDropdown
                  {...action}
                  actions={dropdownActions}
                  size={size}
                  quiet
                />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { children: "Anchors & Links" },
      children: (
        <Row className="md:space-x-2">
          {actions.map((action) => (
            <Action {...action} />
          ))}
        </Row>
      )
    }
  ]
};

export default actionsSection;
