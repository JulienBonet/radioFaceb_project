// client/src/components/editor/HtmlEditor.tsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Box, Stack, Button } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import LinkIcon from '@mui/icons-material/Link';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function HtmlEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* TOOLBAR */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          p: 1,
          borderBottom: '1px solid #eee',
          backgroundColor: '#fafafa',
        }}
      >
        <Button
          size="small"
          variant={editor.isActive('bold') ? 'contained' : 'outlined'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FormatBoldIcon fontSize="small" />
        </Button>

        <Button
          size="small"
          variant={editor.isActive('italic') ? 'contained' : 'outlined'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FormatItalicIcon fontSize="small" />
        </Button>

        <Button
          size="small"
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <LinkIcon fontSize="small" />
        </Button>
      </Stack>

      {/* EDITOR */}
      <Box sx={{ p: 2, minHeight: 100}}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
}