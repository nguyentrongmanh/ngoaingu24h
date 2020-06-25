import React from "react";
import { Select } from "antd";

export const TeacherListSelectView = ({ data, loading, onSelect }) => {
  return (
    <Select
      showArrow
      onChange={(value) => onSelect(value)}
      loading={loading}
      defaultValue={data && data[0] ? data[0].id : undefined}
    >
      {data &&
        data.map((teacher) => {
          return (
            <Select.Option
              value={teacher.id}
              label={teacher.name}
              key={teacher.id}
            >
              {teacher.name}
            </Select.Option>
          );
        })}
    </Select>
  );
};
