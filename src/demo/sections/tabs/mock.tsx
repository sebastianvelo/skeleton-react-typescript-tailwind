import Text from "ui/atomic/text/Text";
import Article from "ui/layout/article/Article";
import Color from "ui/common/types/color/Color";

const tabProps = (i: number, color: Color) => ({
  header: `Tab ${i}`,
  children: (
    <Article
      className={`w-full h-96 bg-${color}-light p-6 text-dark`}
      title={{ children: `Tab ${i} content`, size: "xl" }}
    >
      <Text
        children={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }
      />
    </Article>
  )
});

export const tabsProps = {
  tabs: [tabProps(1, "warning"), tabProps(2, "danger"), tabProps(3, "success")]
};
