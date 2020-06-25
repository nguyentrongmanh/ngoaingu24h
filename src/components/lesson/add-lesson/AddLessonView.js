import { Button, Drawer, Form, Input, Result } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { AddExerciseController } from "../../exercise/add-exercise/AddExerciseController";

const { useForm } = Form;

export const AddLessonView = ({ onAddLesson = () => {}, success }) => {
  const [visible, setVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const [form] = useForm();
  const openDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
    try {
      document.getElementById("video_lesson_prev").load();
    } catch (error) {}
  };
  const handleAddLesson = () => {
    form.submit();
  };

  return (
    <>
      <Button onClick={openDrawer}>Thêm bài học mới</Button>
      <Drawer
        width={600}
        title="Thêm bài học mới"
        visible={visible}
        onClose={closeDrawer}
        footer={
          !success && (
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
                Hủy
              </Button>
              <Button onClick={handleAddLesson} type="primary">
                Thêm
              </Button>
            </div>
          )
        }
      >
        {success && (
          <Result
            status="success"
            title="Thêm bài học thành công!"
            subTitle="Bạn có muốn thêm các câu hỏi/bài kiểm tra cho bài học này không"
            extra={[
              <Button type="primary" key="console" onClick={closeDrawer}>
                Không
              </Button>,
              <AddExerciseController />,
              <Button key="buy">Thêm bài kiểm tra</Button>,
            ]}
          />
        )}
        {!success && (
          <Form
            layout="vertical"
            form={form}
            onFinish={(value) => {
              console.log("value", value);
              onAddLesson({ ...value });
            }}
          >
            <Form.Item
              label="Tên bài học"
              name="name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="URL video bài giảng"
              name="video_url"
              rules={[{ required: true }]}
            >
              <Input onChange={handleVideoUrlChange} />
            </Form.Item>
            {videoUrl && (
              <Form.Item>
                <ReactPlayer className="video_lesson_prev" url={videoUrl} />;
              </Form.Item>
            )}
            <Form.Item
              label="Mô tả"
              name="description"
              rules={[{ required: true }]}
            >
              <TextArea />
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </>
  );
};
