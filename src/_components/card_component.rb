class CardComponent < Bridgetown::Component
  def initialize(title:, footer:)
    @title, @footer = title, footer
  end

  def image(&block)
    if block
      @_image_content = view_context.capture(&block)
      nil
    else
      content # make sure content block is first evaluated
      @_image_content
    end
  end
end
