import React, { useState, useEffect } from "react";
import { Button, Drawer, Form, Input, Radio, notification } from "antd";
import { ReadingListController } from "../../reading/reading-list/ReadingListController";
import { ListeningListController } from "../../listening/listening-list/ListeningListController";

const { useForm } = Form;

export const AddExerciseView = ({ onAddExercise = () => {}, success }) => {
  const [visible, setVisible] = useState(false);
  const [questionListIds, setQuestionListIds] = useState();
  const [questionType, setQuestionType] = useState();
  const [examType, setExamType] = useState();
  const [form] = useForm();
  useEffect(() => {}, [success]);
  const openDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };
  const handleAddExercise = () => {
    form.submit();
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };
  const handleExamTypeChange = (e) => {
    setExamType(e.target.value);
  };

  return (
    <>
      <Button onClick={openDrawer}>Thêm câu hỏi</Button>,
      {visible && (
        <Drawer
          title="Thêm câu hỏi"
          width={720}
          closable={false}
          onClose={closeDrawer}
          visible={true}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
                Hủy
              </Button>
              <Button onClick={handleAddExercise} type="primary">
                Thêm
              </Button>
            </div>
          }
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={(value) => {
              console.log("value", value);
              onAddExercise({
                ...value,
                question_id_list: questionListIds,
              }).then(() => {
                notification.success({
                  message: "Thêm thành công",
                  duration: 1.5,
                });
                closeDrawer();
              });
            }}
          >
            <Form.Item name="name" rules={[{ required: true }]} label="Tên">
              <Input />
            </Form.Item>
            <Form.Item
              label="Loại"
              name="exam_type"
              rules={[{ required: true }]}
              initialValue={2}
            >
              <Radio.Group onChange={handleExamTypeChange}>
                <Radio value={1}>Bài kiểm tra</Radio>
                <Radio value={2}>Bài tập</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Loại câu hỏi"
              name="question_type"
              rules={[{ required: true }]}
            >
              <Radio.Group onChange={handleQuestionTypeChange}>
                <Radio value={1}>Reading</Radio>
                <Radio value={2}>Listening</Radio>
              </Radio.Group>
            </Form.Item>
            {/* <Form.Item
            trigger="onSelect"
            label="Lựa chọn câu hỏi"
          > */}
            {questionType && questionType === 1 ? (
              <ReadingListController
                onChange={(selected) => {
                  setQuestionListIds(selected.toString());
                }}
              />
            ) : null}
            {questionType && questionType === 2 ? (
              <ListeningListController
                onChange={(selected) => {
                  setQuestionListIds(selected.toString());
                }}
              />
            ) : null}
            {/* </Form.Item> */}

            {examType && examType === 1 ? (
              <Form.Item
                label="Thời gian làm bài kiểm tra"
                name="time"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null}
          </Form>
        </Drawer>
      )}
    </>
  );
};
